"use client";

import { useState } from "react";
import { Input, Button, Link, Checkbox } from "@heroui/react";
import { BookOpen, PencilToLine } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
export default function Register() {
  // State to handle the interactive role selection cards
  const [role, setRole] = useState("user"); // 'reader' or 'creator'

  // States for form inputs and validation
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match validation check
    if (password !== confirmPassword) {
      setPasswordError("Must both password are same.");
      return;
    }
    // Clear error if validation passes
    setPasswordError("");

    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.fullName,
      role: role,
    });
    if (data) {
      toast.success("Registration successful!");
      redirect("/");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (data) {
      toast.success("Successfully logged in!");
      redirect("/");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center min-h-screen w-full bg-white">
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
        <div className="w-full max-w-xl border border-border rounded-xl shadow-xl p-4 md:p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#0f111a]">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Choose your path and start your literary journey today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Interactive Selector: Role Cards */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                I want to...
              </label>
              <div className="grid grid-cols-2 gap-4">
                {/* user Option */}
                <div
                  onClick={() => setRole("user")}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                    role === "user"
                      ? "border-[#1e1b9b] bg-[#1e1b9b]/5 ring-1 ring-[#1e1b9b]"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${role === "user" ? "bg-[#1e1b9b]/10 text-[#1e1b9b]" : "bg-gray-100 text-gray-500"}`}
                  >
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0f111a]">
                    Discover & Read
                  </h4>
                  <p className="mt-1 text-xs text-gray-400 leading-normal">
                    Find your next favorite story.
                  </p>
                </div>

                {/* Creator Option */}
                <div
                  onClick={() => setRole("writer")}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                    role === "writer"
                      ? "border-[#1e1b9b] bg-[#1e1b9b]/5 ring-1 ring-[#1e1b9b]"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${role === "writer" ? "bg-[#1e1b9b]/10 text-[#1e1b9b]" : "bg-gray-100 text-gray-500"}`}
                  >
                    <PencilToLine className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0f111a]">
                    Publish & Earn
                  </h4>
                  <p className="mt-1 text-xs text-gray-400 leading-normal">
                    Build your legacy as a creator.
                  </p>
                </div>
              </div>
            </div>

            {/* Full Name Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">
                Full Name
              </label>
              <Input
                type="text"
                name="fullName"
                placeholder="John Doe"
                variant="bordered"
                required
                className="w-full"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="name@example.com"
                variant="bordered"
                required
                className="w-full"
              />
            </div>

            {/* Password Row Container */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  variant="bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  variant="bordered"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full"
                />
                <p className="text-xs text-red-500 mt-1">{passwordError}</p>
              </div>
            </div>

            {/* Core Sign Up Trigger CTA */}
            <Button
              type="submit"
              className="w-full rounded-xl bg-[#1e1b9b] py-6 font-semibold text-white transition-all hover:bg-[#161373]"
            >
              Create Account
            </Button>

            {/* Separator Section Rule */}
            <div className="relative py-2 flex items-center justify-center">
              <div className="absolute inset-x-0 h-px bg-gray-200" />
              <span className="relative bg-white px-3 text-2xl font-bold tracking-wider text-gray-400 scale-75 uppercase">
                Or Continue With
              </span>
            </div>

            {/* Google OAuth Provider Button */}
            <Button
              variant="bordered"
              className="w-full rounded-xl border-gray-200 bg-white py-6 font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => handleGoogleLogin()}
            >
              <FcGoogle className="mr-1 h-4 w-4" />
              Sign in with Google
            </Button>

            {/* Account Redirection Footnote Footer Link */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-sm font-semibold text-[#1e1b9b] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
