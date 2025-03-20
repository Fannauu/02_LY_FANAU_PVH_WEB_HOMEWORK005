"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SelectList(categories) {
  console.log("Categoryies",categories);

  const router = useRouter();
  // console.log("categories", categories.payload);

  const categoryData = categories.payload.map((item) => ({
    label: item.book_cate_name,
    key: item.id,
    description: item.book_cate_name,
  }));

  // console.log("categoryData ", categoryData);

  return (
    <>
      <div className="w-72 items-center text-center overflow-y-auto overflow-scroll-hidden">
        <Autocomplete
          className="w-64 text-center  border rounded-lg"
          defaultItems={categoryData}
          placeholder="Filter By Category"
          onInputChange={(value) =>
            router.replace(`/book?query=${encodeURIComponent(value)}`)
          }>
          {(category) => (
            <AutocompleteItem
              value={category.key}
              key={category.key}
              className="bg-gray-100 px-3 text-black">
              {category.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
    </>
  );
}
