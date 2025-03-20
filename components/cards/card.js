"use client";

import Link from "next/link";

const AllBookCards = ({ book }) => {
  // console.log("book", book);

  return (
    <>
      <div className="w-[600px] h-[310px] relative mb-8">
        <div className="w-auto h-auto flex flex-col gap-5 absolute bottom-6 z-10 pl-8 ">
          <img
            className="w-[176px] h-[221px] rounded-2xl shadow-lg "
            src={book.image}
            title={book.book_title}></img>
          <div className="w-[176px] h-[44px] bg-[#BFD7EA] rounded-2xl pl-4 pt-3 hover:bg-cyan-600 ">
            <Link href={`/book/${book.id}`}>
              <p className="">READ FULL ARTICLE</p>
            </Link>
          </div>
        </div>
        <div className=" w-[480px] h-[225px] rounded-2xl absolute inset-x-0 bottom-0 bg-gray-100  flex justify-end px-2">
          <div className="w-[55%] h-full rounded-2xl ">
            <p className="font-semibold text-text-80 text-2xl line-clamp-1 pt-3">
              {book.book_title}
            </p>
            <p className="line-clamp-3 mt-4 text-gray-600">
              {book.description.length > 200
                ? `${book.description.substring(0, 200)}...`
                : book.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );


  // return (
  //   <div className="max-w-3xl mx-auto">
  //     <div className=" rounded-lg p-4 flex items-center">
  //       {/* Book Cover Image */}
  //       <div className="flex-shrink-0 w-40">
  //         <img
  //           src={book.image}
  //           // src="https://s3-alpha-sig.figma.com/img/8c2e/0d73/31bc8262eac933a719ec8b34ab17918d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QK7vN6by2yev6DxuUv41RMZAWJUA249t94kOdUy4RTAOzuEHwlXx61x3IOp6WhNgL0r59Vlt4IASiqA5kbJST9N6vQ8ilPruJOjYE0qfliD3cjseaVrT9bzc7UCzm0o0sjl5ixFSJXLUYDMMJmvmv2oLEYeEoMmTROINVLwjELMqaa09tdrOS-0~1k1L5kIRIYC214aHWMVZqAd94lZTcX-yF3SyEw4GGHB7B8nKCeqA86dvhsHT3IQrXtO4cV~NA2r~BJIeWURt1-1xIZUPTUvP-vCbFCWrbE02G~ZRvV0B96L4i3q7cJb3eJDGS4sb1D3zMhEm~JpOo~uYU-VhZA__"
  //           alt="How Do You Live? book cover"
  //           className="rounded-lg shadow-md"
  //         />
  //         {/* Read Full Article Button */}
  //         <div className="mt-3">
  //           <Link
  //             href={`/book/${book.id}`}
  //             className="w-full py-2 px-4 bg-blue-100 text-blue-800 font-medium rounded-full text-sm">
  //             READ FULL ARTICLE
  //           </Link>
  //         </div>
  //       </div>

  //       {/* Book Description */}

  //       <div className="ml-6 flex-grow bg-gray-100">
  //         <h2 className="text-2xl font-semibold text-blue-900 mb-2">
  //           {book.book_title}
  //         </h2>
  //         <p className="text-blue-800 leading-relaxed">
  //           {book.description.length > 100
  //             ? `${book.description.substring(0, 100)}...`
  //             : book.description}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default AllBookCards;
