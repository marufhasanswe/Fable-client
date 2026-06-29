"use client";

import {
  Input,
  Select,
  Label,
  ListBox,
  Button,
  InputGroup,
} from "@heroui/react";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";

const genres = [
  "All",
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

const sorts = [
  {
    key: "select",
    label: "Select",
  },
  {
    key: "latest",
    label: "Latest",
  },
  {
    key: "price_low",
    label: "Price Low → High",
  },
  {
    key: "price_high",
    label: "Price High → Low",
  },
  {
    key: "popular",
    label: "Popular",
  },
];

export default function EbookFilters() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [genre, setGenre] = useState(searchParams.get("genre") || "All");

  const [sort, setSort] = useState(searchParams.get("sort") || "latest");

  const applyFilter = () => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search);
    }

    if (genre !== "All") {
      params.set("genre", genre);
    }

    if (sort && sort !== "select") {
      params.set("sort", sort);
    }

    router.push(`/browse-ebooks?${params.toString()}`);
  };

  return (
    <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      {/* Search */}

      <InputGroup>
        <InputGroup.Prefix>
          <Search size={18} className="text-gray-400" />
        </InputGroup.Prefix>

        <InputGroup.Input
          placeholder="Search ebooks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {/* Genre */}

      <Select
        aria-label="Select genre"
        value={genre}
        onChange={(value) => {
          setGenre(value);
        }}
      >
        <Label>Genre</Label>

        <Select.Trigger>
          <Select.Value />

          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            {genres.map((item) => (
              <ListBox.Item key={item} id={item} textValue={item}>
                {item}
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      {/* Sort */}

      <Select
        aria-label="Select sort"
        value={sort}
        onChange={(value) => {
          setSort(value);
        }}
      >
        <Label>Sort</Label>

        <Select.Trigger>
          <Select.Value />

          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            {sorts.map((item) => (
              <ListBox.Item key={item.key} id={item.key} textValue={item.label}>
                {item.label}
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      {/* Apply */}

      <Button color="primary" onPress={applyFilter} className="h-12">
        Apply Filter
      </Button>
    </div>
  );
}
