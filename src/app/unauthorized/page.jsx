"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, Button } from "@heroui/react";

// Icons
import { ShieldExclamation } from "@gravity-ui/icons";
import { ArrowLeft, Home, Lock } from "lucide-react";

const UnauthorizedPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-radial from-slate-50 to-slate-200 dark:from-zinc-900 dark:to-black p-4">
      {/* Background abstract decoration blobs for depth */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-danger-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-warning-500/10 rounded-full blur-3xl pointer-events-none" />

      <Card
        variant="default"
        className="max-w-md w-full p-8 border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
      >
        <Card.Header className="flex flex-col items-center gap-4 text-center pb-2">
          {/* Main Visual: Interactive Animated Badge Shield */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-danger-50 text-danger-500 dark:bg-danger-500/10 dark:text-danger-400 animate-pulse">
            <ShieldExclamation width="42" height="42" />
            <div className="absolute -bottom-1 -right-1 bg-warning text-warning-foreground rounded-md p-1 shadow-sm">
              <Lock size={14} strokeWidth={2.5} />
            </div>
          </div>

          <div className="space-y-1.5 mt-2">
            <Card.Title className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Access Denied
            </Card.Title>
            <Card.Description className="text-neutral-500 dark:text-neutral-400 text-sm max-w-xs mx-auto">
              You do not have the required permissions or authentication
              clearance to view this resource.
            </Card.Description>
          </div>
        </Card.Header>

        <Card.Content className="py-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-danger animate-ping" />
            ERROR_CODE: 403_UNAUTHORIZED
          </div>
        </Card.Content>

        <Card.Footer className="flex flex-col sm:flex-row gap-3 pt-4 w-full">
          <Button
            variant="outline"
            fullWidth
            onPress={() => router.back()}
            className="gap-2 font-medium"
          >
            <ArrowLeft size={16} />
            Go Back
          </Button>

          <Button
            variant="primary"
            fullWidth
            onPress={() => router.push("/")}
            className="gap-2 font-medium bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-black"
          >
            <Home size={16} />
            Return Home
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UnauthorizedPage;
