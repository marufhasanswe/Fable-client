"use client";

import { Input, Button, Link } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });
    if (data) {
      toast.success("Successfully logged in!");
      if (data.user.role === "writer") {
        router.push("/dashboard/writer");
      } else if (data.user.role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/");
      }
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
      if (data.user.role === "writer") {
        router.push("/dashboard/writer");
      } else if (data.user.role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="flex justify-center min-h-screen w-full bg-white">
      <div className="flex w-full items-center  justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
        <div className="w-full max-w-md border border-border rounded-xl shadow-xl p-4 md:p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#0f111a]">
              Welcome back!
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Login to your account to continue your journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700">
                Password
              </label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                variant="bordered"
                required
                className="w-full"
              />
            </div>

            {/* Core Sign Up Trigger CTA */}
            <Button
              type="submit"
              className="w-full rounded-xl bg-[#1e1b9b] py-6 font-semibold text-white transition-all hover:bg-[#161373]"
            >
              Login
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
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-sm font-semibold text-[#1e1b9b] hover:underline"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
