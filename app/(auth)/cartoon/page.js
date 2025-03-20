import CartToonData from "@/components/cards/cartoon";
import SelectCartoon from "@/components/select/selectCartoon";
import {
  cartoonByCategory,
  GetAllCartoon,
  getAllCartoonByGenre,
} from "@/services/fectData";
import React from "react";

const CartoonPage = async ({ searchParams }) => {
  const search = searchParams.search;
  const cartData = await GetAllCartoon(search);
  const genreOfCart = await getAllCartoonByGenre();




  // const gereId = searchParams.genre;

  // console.log("genre of cart ", genreOfCart);

  const { genre } = await searchParams;
  console.log("genre: ", genre);

  const moive = await cartoonByCategory(genre);

  // console.log("cartoon", moive);
  if (genre == undefined || !genre) {
    return (
      <>
        <div className="bg-white w-full h-auto p-5 px-10 rounded-3xl">
          <div className="flex items-center justify-between  ">
            <button className="border rounded-2xl bg-gray-100 p-2 px-5 text-blue-300">
              old-school-cartoon
            </button>
            <div className="w-64 items-center text-center">
              {/* <SelectCartoon {...AllCartoonName} /> */}
              <SelectCartoon genreOfCart={genreOfCart} />
            </div>
          </div>
          <hr className=" mt-4 text-black" />
          <div className="items-center justify-start gap-20 mt-10 grid grid-cols-3 h-auto py-10">
            {cartData.payload.map((cart, index) => (
              <CartToonData key={index} cart={cart} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    // const cartoonCategory = cartData.payload.find((cate) => (
    //   cate.ct_title === title
    // ))
    return (
      <>
        <div className="bg-white w-full h-auto p-5 px-10 rounded-3xl">
          <div className="flex items-center justify-between">
            <button className="border rounded-2xl bg-gray-100 p-2 px-5 text-blue-300">
              {moive?.cartoon_genre || "Select a Category"}
            </button>
            <div>
              <SelectCartoon genreOfCart={genreOfCart} />
            </div>
          </div>
          <hr className=" mt-2 text-black" />
          <div className="grid grid-cols-2 gap-10 ">
            {moive?.payload.map((cart) => (
              <CartToonData key={cart?.id} cart={cart} />
            ))}
          </div>
        </div>
      </>
    );
  }

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
};

export default CartoonPage;
