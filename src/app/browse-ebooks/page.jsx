import EbookGrid from "@/components/ebooks/EbookGrid";
import EbookFilters from "@/components/ebooks/EbookFilters";
import { getBooks } from "@/lib/api/books";

export default async function BrowseEbooksPage({ searchParams }) {
  const params = await searchParams;

  const data = await getBooks({
    search: params.search,
    genre: params.genre,
    sort: params.sort,
  });

  return (
    <main
      className="
min-h-screen
px-6
py-10
bg-gray-50
"
    >
      <section
        className="
max-w-7xl
mx-auto
"
      >
        <div className="mb-10">
          <h1
            className="
text-3xl
font-bold
"
          >
            Browse All Ebooks
          </h1>

          <p
            className="
text-sm
text-gray-600
mt-2
"
          >
            Discover stories from independent writers.
          </p>
        </div>

        <EbookFilters />

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
