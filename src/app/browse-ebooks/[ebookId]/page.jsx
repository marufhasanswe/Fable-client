import EbookDetails from "@/components/ebooks/EbookDetails";

async function getEbook(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Ebook not found");
    }

    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function EbookDetailsPage({ params }) {
  const { ebookId } = await params;
  console.log(ebookId);
  const ebook = await getEbook(ebookId);
  console.log(ebook);
  if (!ebook) {
    return (
      <div
        className="
min-h-screen
flex
items-center
justify-center
"
      >
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
