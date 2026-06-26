import { Button, Card } from "@heroui/react";

import { Star, Bookmark, CalendarDays, FileText } from "lucide-react";
import PurchaseButton from "./PurchaseButton";
import Image from "next/image";

export default function EbookDetails({ ebook }) {
  return (
    <div className=" grid lg:grid-cols-2 gap-2 items-star ">
      {/* Cover */}
      <div className=" flex justify-center ">
        <Image
          width={800}
          height={500}
          src={ebook.coverImage}
          alt={ebook.title}
          className=" w-full max-w-md aspect-[3/4] object-cover rounded-xl shadow-xl"
        />
      </div>
      {/* Information */}

      <Card>
        <Card.Header>
          <div className=" flex items-center gap-3 mb-3 ">
            <span className=" bg-yellow-300 text-xs px-3 py-1 rounded-full ">
              BESTSELLER
            </span>

            <div className=" flex items-center gap-1 text-yellow-500 text-sm">
              <Star size={16} fill="currentColor" />

              {ebook.rating || "4.9"}
            </div>
          </div>

          <Card.Title className=" text-3xl font-bold mb-2">
            {ebook.title}
          </Card.Title>

          <Card.Description>
            <a
              href={`/writers/${ebook.writerId}`}
              className=" text-primary hover:underline"
            >
              by {ebook.writerName}
            </a>
          </Card.Description>
        </Card.Header>

        <Card.Content className="flex flex-col justify-between">
          <div>
            <div className=" grid text-gray-600 grid-cols-2 md:grid-cols-4 gap-3 mt-5">
              <InfoBox title="Genre" value={ebook.genre} />

              <InfoBox title="Status" value="Available" />
            </div>

            <div className=" mt-8">
              <h3 className=" text-xs uppercase text-gray-700 mb-3">
                Synopsis
              </h3>

              <p className=" line-clamp-4 text-sm leading-7 text-gray-600">
                {ebook.description}
              </p>
            </div>
          </div>

          <div className=" flex items-center gap-8 mt-8 ">
            <div>
              <p className=" text-xs text-gray-700 ">Purchase Price</p>

              <p className=" text-2xl font-bold text-gray-800">
                ${ebook.price}
              </p>
            </div>

            <div>
              <p className=" text-xs text-gray-700 ">Uploaded</p>

              <p className=" text-sm font-medium text-gray-800 flex items-center gap-1 ">
                <CalendarDays size={15} />
                {new Date(ebook.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card.Content>

        <Card.Footer className=" flex gap-3 ">
          <PurchaseButton ebookId={ebook._id} sold={ebook.status === "Sold"} />

          <Button
            variant="secondary"
            className="rounded-lg border border-blue-500 font-medium bg-white px-6 h-11 flex items-center gap-2 "
          >
            <Bookmark size={17} />
            Bookmark
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

function InfoBox({ title, value }) {
  return (
    <div
      className="
border
rounded-xl
p-3
"
    >
      <p
        className="
text-xs
text-default-500
"
      >
        {title}
      </p>

      <p
        className="
text-sm
font-medium
mt-1
"
      >
        {value}
      </p>
    </div>
  );
}
