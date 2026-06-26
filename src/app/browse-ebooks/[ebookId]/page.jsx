import EbookDetails from "@/components/ebooks/EbookDetails";
import { getSingleBook } from "@/lib/api/books";

export default async function EbookDetailsPage({ params }) {
  const { ebookId } = await params;
  const ebook = await getSingleBook(ebookId);
  if (!ebook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Ebook not found</p>
      </div>
    );
  }

  return (
    <main className=" bg-gray-50 min-h-screen px-6 py-10 ">
      <section className=" max-w-6xl mx-auto ">
        <EbookDetails ebook={ebook} />
      </section>
    </main>
  );
}
