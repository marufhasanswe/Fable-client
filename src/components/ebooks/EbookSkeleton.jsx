import { Card } from "@heroui/react";

export default function EbookSkeleton() {
  return (
    <Card className="overflow-hidden  animate-pulse">
      <div className=" aspect-[3/4] rounded-lg bg-gray-200 " />

      <div className="p-4 space-y-3">
        <div className=" h-3 rounded bg-gray-300 " />

        <div className=" h-3 w-1/2 rounded bg-gray-200 " />

        <div className=" h-8 rounded bg-gray-200 mt-5 " />
      </div>
    </Card>
  );
}
