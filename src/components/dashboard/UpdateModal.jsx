"use client";

import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
  Form,
} from "@heroui/react";
import {
  BookOpen,
  Image as ImageIcon,
  DollarSign,
  FileText,
  Sparkles,
  Upload,
} from "lucide-react";
import { uploadImage } from "@/utils/uploadImage";
import { updateBook } from "@/lib/actions/books";
import { toast } from "react-toastify";
import { Pencil } from "@gravity-ui/icons";

export default function UpdateModal({ book }) {
  // Controlled visibility state for HeroUI Modal stability
  const [isOpen, setIsOpen] = useState(false);
  const [genre, setGenre] = useState(book?.genre || "");
  const [coverImage, setCoverImage] = useState(book?.coverImage || null);

  const genres = [
    "Programming",
    "Web Development",
    "Business",
    "Marketing",
    "Design",
    "Self Development",
    "Education",
    "Technology",
    "Finance",
  ];

  useEffect(() => {
    if (book) {
      setGenre(book.genre || "");
      setCoverImage(book.coverImage || null);
    }
  }, [book]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    let imageUrl = book?.coverImage;

    if (data.coverImage && data.coverImage.size > 0) {
      imageUrl = await uploadImage(data.coverImage);
    }

    const updatedBookData = {
      title: data.title,
      genre: data.genre,
      price: data.price,
      description: data.description,
      coverImage: imageUrl,
    };

    const result = await updateBook(book._id, updatedBookData);

    if (result) {
      toast.success("Book updated successfully!");
      setIsOpen(false); // Close modal on successful update
    }
  };

  return (
    <>
      {/* Trigger Button moved outside the <Modal> wrapper for native state tracking */}
      <Button
        isIconOnly
        variant="light"
        onClick={() => setIsOpen(true)}
        className="text-brand-primary hover:text-gray-800 h-8 w-8 min-w-8 rounded-lg"
      >
        <Pencil size={14} />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            {/* Added max-h & flex-col properties to prevent the dialog from overflowing screen bounds */}
            <Modal.Dialog className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Modal.CloseTrigger onClick={() => setIsOpen(false)} />

              <Form
                onSubmit={handleSubmit}
                className="flex flex-col h-full overflow-hidden"
              >
                {/* Header */}
                <Modal.Header className="border-b border-gray-100 p-6 flex gap-3 shrink-0">
                  <div>
                    <Modal.Heading className="text-xl font-bold text-gray-900">
                      Update Ebook
                    </Modal.Heading>
                    <p className="mt-1 text-sm text-gray-500">
                      Modify your ebook details and save your changes.
                    </p>
                  </div>
                </Modal.Header>

                {/* Body Content */}
                <Modal.Body className="space-y-6 p-6 overflow-y-auto flex-1">
                  {/* Title */}
                  <TextField name="title" defaultValue={book?.title}>
                    <Label className="mb-2 flex items-center gap-2 font-medium">
                      <BookOpen className="h-4 w-4" />
                      Ebook Title
                    </Label>
                    <Input placeholder="Enter ebook title" className="w-full" />
                  </TextField>

                  {/* Genre + Price */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Select
                      name="genre"
                      selectedKey={genre}
                      onSelectionChange={setGenre}
                    >
                      <Label className="mb-2 flex items-center gap-2 font-medium">
                        <Sparkles className="h-4 w-4" />
                        Genre
                      </Label>
                      <Select.Trigger className="w-full">
                        <Select.Value placeholder="Select genre" />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {genres.map((item) => (
                            <ListBox.Item key={item} id={item}>
                              <Label>{item}</Label>
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <TextField name="price" defaultValue={book?.price}>
                      <Label className="mb-2 flex items-center gap-2 font-medium">
                        <DollarSign className="h-4 w-4" />
                        Price
                      </Label>
                      <Input type="number" min="0" placeholder="9.99" />
                    </TextField>
                  </div>

                  {/* Cover Upload */}
                  <div>
                    <Label className="mb-2 flex items-center gap-2 font-medium">
                      <ImageIcon className="h-4 w-4" />
                      Cover Image
                    </Label>
                    <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">
                      {coverImage ? (
                        <img
                          src={coverImage}
                          alt="Cover Preview"
                          className="h-52 w-auto overflow-hidden rounded-xl object-cover shadow-md"
                        />
                      ) : (
                        <>
                          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                            <Upload className="h-5 w-5 text-gray-500" />
                          </div>
                          <p className="font-medium text-gray-700">
                            Upload Cover Image
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            PNG, JPG, JPEG or WEBP
                          </p>
                        </>
                      )}
                      <input
                        name="coverImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Description */}
                  <div>
                    <Label className="mb-2 flex items-center gap-2 font-medium">
                      <FileText className="h-4 w-4" />
                      Description
                    </Label>
                    <TextArea
                      name="description"
                      aria-label="ebook-description"
                      placeholder="Write full ebook description..."
                      className="min-h-[140px] w-full"
                      defaultValue={book?.description}
                    />
                  </div>
                </Modal.Body>

                {/* Footer */}
                <Modal.Footer className="border-t border-gray-100 p-5 flex w-full flex-col-reverse gap-3 sm:flex-row sm:justify-end shrink-0 bg-white">
                  <Button
                    type="button"
                    variant="bordered"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </Modal.Footer>
              </Form>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}
