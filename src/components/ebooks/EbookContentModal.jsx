"use client";

import { Modal, Button } from "@heroui/react";

import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

import { Bookmark } from "@gravity-ui/icons";

export default function EbookdescriptionModal({ ebook }) {
  const { title, description, writerName } = ebook;

  return (
    <Modal>
      <Button
        variant="ghost"
        className=" bg-primary text-blue-500 flex items-center gap-2 "
      >
        <BookOpen size={18} />
        Read Ebook
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog
            className="
max-w-5xl
w-full
"
          >
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon>
                <BookOpen size={20} />
              </Modal.Icon>

              <Modal.Heading>{title}</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <div
                className="
flex
items-center
justify-between
mb-5
"
              >
                <div>
                  <p
                    className="
text-sm
font-medium
"
                  >
                    {writerName}
                  </p>

                  <p
                    className="
text-xs
text-default-500
"
                  >
                    Reading Mode
                  </p>
                </div>

                <Button
                  variant="secondary"
                  className="
flex
items-center
gap-2
"
                >
                  <Bookmark size={17} />
                  Bookmark
                </Button>
              </div>

              <div
                className="
h-[60vh]
overflow-y-auto
rounded-xl
border
p-6
bg-default-50
"
              >
                <article
                  className="
prose
max-w-none
text-default-700
leading-8
"
                >
                  {description ? (
                    description

                      .split("\n")

                      .map((paragraph, index) => <p key={index}>{paragraph}</p>)
                  ) : (
                    <p>No description available</p>
                  )}
                </article>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                className="
flex
items-center
gap-2
"
              >
                <ChevronLeft size={17} />
                Previous
              </Button>

              <Button
                className="
flex
items-center
gap-2
bg-primary
text-white
"
              >
                Next
                <ChevronRight size={17} />
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
