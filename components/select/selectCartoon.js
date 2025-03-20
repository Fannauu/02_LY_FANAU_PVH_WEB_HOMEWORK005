"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SelectCartoon({ genreOfCart }) {
  const router = useRouter();

  // console.log("cartoon", cartoon);
  // console.log("select cartoon by name", AllCartoonName);

  //  const AllnameOfcate = AllCartoonName.payload.map((item) => ({
  //    label: item.ct_title,
  //    key: item.id,
  //    description: item.ct_title,
  //  }));

  // const categoryName =

  // <div className="w-64 items-center text-center ">
  //   <Autocomplete
  //     className="w-full text-center justify-between rounded-md overflow-auto"
  //     defaultItems={AllnameOfcate}
  //     placeholder="Filter By Category"
  //     onInputChange={(value) =>
  //       router.replace(`/cartoon?search=${encodeURIComponent(value)}`)
  //     }>
  //     {(category) => (
  //       <AutocompleteItem
  //         value={category.key}
  //         key={category.key}
  //         className="bg-gray-100 px-3 text-black">
  //         {category.label}
  //       </AutocompleteItem>
  //     )}
  //   </Autocomplete>
  // </div>;

  // const categoryData = cartoon.payload.map((item) => ({
  //   label: item.
  // }))

  return (
    <>
      <div className="w-64 items-center text-center ">
        <Autocomplete
          className="max-w-xs"
          onSelectionChange={(value) => {
            router.replace(`/cartoon?genre=${value}`);
          }}>
          {genreOfCart.payload.map((car) => (
            <AutocompleteItem key={car.id} value={car.id}>
              {car.cartoon_genre}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
    </>
  );
}
