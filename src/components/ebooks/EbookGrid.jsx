import EbookCard from "./EbookCard";

export default function EbookGrid({ ebooks = [] }) {
  if (!ebooks.length) {
    return (
      <div
        className="
      py-20
      text-center
      text-default-500
      "
      >
        No ebooks available
      </div>
    );
  }

  return (
    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-5
      "
    >
      {ebooks.map((ebook) => (
        <EbookCard key={ebook._id} ebook={ebook} />
      ))}
    </div>
  );
}
