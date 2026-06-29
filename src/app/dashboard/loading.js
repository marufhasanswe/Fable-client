"use client";

import { Card, Skeleton } from "@heroui/react";

export default function DashboardLoading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-52 rounded-lg" />
        <Skeleton className="h-4 w-80 rounded-lg" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="p-5 space-y-4">
            <Skeleton className="h-5 w-28 rounded-lg" />

            <Skeleton className="h-10 w-20 rounded-lg" />

            <Skeleton className="h-3 w-36 rounded-lg" />
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chart Skeleton */}
        <Card className="p-5 lg:col-span-2 space-y-5">
          <Skeleton className="h-6 w-40 rounded-lg" />

          <Skeleton className="h-64 w-full rounded-xl" />
        </Card>

        {/* Recent Activity */}
        <Card className="p-5 space-y-5">
          <Skeleton className="h-6 w-44 rounded-lg" />

          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />

              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-32 rounded-lg" />
                <Skeleton className="h-3 w-20 rounded-lg" />
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Table Skeleton */}
      <Card className="p-5 space-y-5">
        <Skeleton className="h-6 w-48 rounded-lg" />

        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="grid grid-cols-4 gap-4">
            <Skeleton className="h-5 rounded-lg" />
            <Skeleton className="h-5 rounded-lg" />
            <Skeleton className="h-5 rounded-lg" />
            <Skeleton className="h-5 rounded-lg" />
          </div>
        ))}
      </Card>
    </div>
  );
}
