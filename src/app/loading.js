"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm dark:bg-black/50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#6366f1]" />
    </div>
  );
}
