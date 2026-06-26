import EbookSkeleton from "@/components/ebooks/EbookSkeleton";

export default function Loading() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6 ">
      {Array.from({ length: 8 }).map((_, i) => (
        <EbookSkeleton key={i} />
      ))}
    </div>
  );
}
