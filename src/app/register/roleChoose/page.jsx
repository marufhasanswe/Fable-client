"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { BookOpen, PencilToLine } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const RoleSelectByGoogleSignup = () => {
  const [role, setRole] = useState("user");
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleContinue = () => {
    console.log("Selected role:", role);

    // TODO:
    // call your API to update google user's role

    router.push("/");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-tight text-[#0f111a]">
            Choose your path
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Tell us how you want to use Fable
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Reader */}
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`
              group rounded-2xl border p-5 text-left transition-all duration-200
              ${
                role === "user"
                  ? "border-[#1e1b9b] bg-[#1e1b9b]/5 ring-2 ring-[#1e1b9b]/20"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            <div
              className={`
                mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                ${
                  role === "user"
                    ? "bg-[#1e1b9b]/10 text-[#1e1b9b]"
                    : "bg-gray-100 text-gray-500"
                }
              `}
            >
              <BookOpen className="h-6 w-6" />
            </div>

            <h3 className="font-bold text-gray-900">Reader</h3>

            <p className="mt-1 text-sm text-gray-500">
              Explore books and enjoy amazing stories.
            </p>
          </button>

          {/* Writer */}
          <button
            type="button"
            onClick={() => setRole("writer")}
            className={`
              group rounded-2xl border p-5 text-left transition-all duration-200
              ${
                role === "writer"
                  ? "border-[#1e1b9b] bg-[#1e1b9b]/5 ring-2 ring-[#1e1b9b]/20"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            <div
              className={`
                mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                ${
                  role === "writer"
                    ? "bg-[#1e1b9b]/10 text-[#1e1b9b]"
                    : "bg-gray-100 text-gray-500"
                }
              `}
            >
              <PencilToLine className="h-6 w-6" />
            </div>

            <h3 className="font-bold text-gray-900">Writer</h3>

            <p className="mt-1 text-sm text-gray-500">
              Publish your books and build your audience.
            </p>
          </button>
        </div>

        {/* Selected Role */}
        <div className="mt-6 rounded-xl bg-gray-50 px-4 py-3 text-center text-sm text-gray-600">
          Selected role:
          <span className="ml-2 font-bold capitalize text-[#1e1b9b]">
            {role}
          </span>
        </div>

        {/* Continue */}
        <Button
          onClick={handleContinue}
          className="
            mt-6 w-full rounded-xl bg-[#1e1b9b]
            py-6 font-semibold text-white
            transition-all hover:bg-[#161373]
          "
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default RoleSelectByGoogleSignup;
