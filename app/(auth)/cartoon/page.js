import CartToonData from "@/components/cards/cartoon";
import SelectCartoon from "@/components/select/selectCartoon";
import {
  cartoonByCategory,
  GetAllCartoon,
  getAllCartoonByGenre,
} from "@/services/fectData";
import React from "react";

const CartoonPage = async ({ searchParams }) => {
  const { search, genre } = searchParams;

  const cartData = await GetAllCartoon(search);
  const genreOfCart = await getAllCartoonByGenre();
  const cartoonsByGenre = genre ? await cartoonByCategory(genre) : null;

  const renderCartoonGrid = (cartoons) => (
    <div className="grid grid-cols-3 gap-20 mt-10 py-10">
      {cartoons.map((cart, index) => (
        <CartToonData key={cart?.id || index} cart={cart} />
      ))}
    </div>
  );

  return (
    <div className="bg-white w-full h-auto p-5 px-10 rounded-3xl">
      <div className="flex items-center justify-between">
        <button className="border rounded-2xl bg-gray-100 p-2 px-5 text-blue-300">
          {genre ? cartoonsByGenre?.cartoon_genre : "old-school-cartoon"}
        </button>
        <div className="w-64">
          <SelectCartoon genreOfCart={genreOfCart} />
        </div>
      </div>

      <hr className="mt-4 text-black" />

      {!genre || genre === undefined ? (
        renderCartoonGrid(cartData.payload)
      ) : (
        <div className="grid grid-cols-2 gap-10 mt-10 py-10">
          {cartoonsByGenre?.payload.map((cart) => (
            <CartToonData key={cart?.id} cart={cart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartoonPage;

// console.log(searchParams.search);

// console.log("data of cartoon : ", cartData);

// const AllCartoonName = cartData.payload.map((item) => item.ct_title);
// console.log("all category name", cartData);

// console.log("searchParams", await searchParams);

// const title = searchParams.search;

// return (
//   <>
//     <div className="bg-white w-full h-auto p-5 px-10 rounded-3xl">
//       <div className="flex items-center justify-between  ">
//         <button className="border rounded-2xl bg-gray-100 p-2 px-5 text-blue-300">

//         </button>
//         <div className="w-64 items-center text-center ">
//           {/* <SelectCartoon {...AllCartoonName} /> */}
//           <SelectCartoon cartoon = {cartData}/>
//         </div>
//       </div>
//       <hr className=" mt-2 text-black" />
//       <div className="items-center justify-start gap-20 mt-10 grid grid-cols-3 h-auto">
//         {cartData.payload.map((cart, index) => (
//           <CartToonData key={index} cart={cart} />
//         ))}
//       </div>
//     </div>
//   </>
// );
// };

// export default CartoonPage;
