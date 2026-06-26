import EbookGrid from "@/components/ebooks/EbookGrid";
import { getBooks } from "@/lib/api/books";

export default async function BrowseEbooksPage() {
  const data = await getBooks();
  console.log(data);
  return (
    <main className="min-h-screen px-6 py-10 bg-gray-50">
      <section className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1
            className="
          text-2xl
          md:text-3xl
          font-bold
          tracking-tight
          "
          >
            Browse All Ebooks
          </h1>

          <p className=" text-sm text-gray-600 mt-2 max-w-xl">
            Step into the Modern Scriptarium. Discover a curated collection of
            literary works crafted by independent writers and visionary
            storytellers.
          </p>
        </div>

        {data.error ? (
          <div
            className="
            py-20
            text-center
            text-danger
            "
          >
            Failed to load ebooks.
          </div>
        ) : (
          <EbookGrid ebooks={data} />
        )}
      </section>
    </main>
  );
}
