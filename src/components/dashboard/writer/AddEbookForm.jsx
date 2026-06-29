"use client";

import { useState } from "react";
import {
  Card,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  Button,
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
import { addBook } from "@/lib/actions/books";
import { toast } from "react-toastify";

export default function AddEbookForm() {
  const [genre, setGenre] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const genres = [
    "Fiction",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Fantasy",
    "Self Development",
    "Education",
    "Technology",
    "Horror",
    "Web Development",
    "Programming",
    "Marketing",
  ];

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setCoverImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const imageUrl = await uploadImage(data.coverImage);
    const bookData = {
      title: data.title,
      genre: data.genre,
      price: data.price,
      description: data.description,
      coverImage: imageUrl,
    };
    const result = await addBook(bookData);
    if (result.insertedId) {
      toast.success("Book added successfully!");
      e.target.reset();
      setCoverImage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <Card className="overflow-hidden border border-gray-200 bg-white shadow-lg">
          {/* Header */}
          <Card.Header className="border-b border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <Card.Title className="text-xl font-bold">
                  Add New Ebook
                </Card.Title>

                <Card.Description className="mt-1 text-sm text-gray-500">
                  Publish and manage your ebook collection.
                </Card.Description>
              </div>
            </div>
          </Card.Header>

          <Form onSubmit={handleSubmit}>
            {/* Content */}
            <Card.Content className="space-y-6 p-6">
              {/* Title */}
              <TextField name="title">
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

                <TextField name="price">
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
                />
              </div>
            </Card.Content>

            {/* Footer */}
            <Card.Footer className="border-t border-gray-100 p-5">
              <div className="flex w-full flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button variant="bordered">Cancel</Button>

                <Button type="submit">Publish Ebook</Button>
              </div>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    </div>
  );
}
