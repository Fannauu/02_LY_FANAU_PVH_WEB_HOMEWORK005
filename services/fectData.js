export const GetAllBook = async (search) => {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book${
      search ? `?search=${encodeURIComponent(search)}` : ""
    }`
  );

  const bookData = await res.json();
  return bookData;
};

export const GetBookById = async (id) => {
  const book = await fetch(
    `https://nextjs-homework005.vercel.app/api/book/${id}`
  );
  const response = await book.json();
  // console.log("book id", response);
  return response;
};

export const GetAllCartoon = async (search) => {
  const toon = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon${
      search ? `?search=${encodeURIComponent(search)}` : ""
    }`
  );

  const cartToon = await toon.json();
  // console.log("cartoon data", cartToon);
  return cartToon;
};

export const GetCartoonById = async (cartId) => {
  const cart = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon/${cartId}`
  );
  const res = await cart.json();
  // console.log("cart by id : ", res);
  return res;
};

export const GetBookByCategory = async () => {
  const cate = await fetch(
    `https://nextjs-homework005.vercel.app/api/book_category`
  );
  const category = await cate.json();
  console.log("category", category);
  return category;
};

export const booksByCategory = async (catid) => {
  const bookByCy = await fetch(
    `https://nextjs-homework005.vercel.app/api/book?query=${catid}`
  );
  const bookByCate = bookByCy.json();

  // console.log("book by category : ", bookByCate);

  return bookByCate;
};

export const getAllCartoonByGenre = async () => {
  const categoryGenre = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon_genre`
  );
  const byGenre = await categoryGenre.json();
  console.log("by genre of category cartoon", byGenre);
  return byGenre;
};

export const cartoonByCategory = async (gereId) => {
  const cate = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?genre=${gereId}`
  );
  const byCate = await cate.json();
  return byCate;
};

export const searchCartoonByTitle = async (search) => {
  const byTitle = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?search=${search}`
  );
  const getTitle = await byTitle.json();
  console.log("get title", getTitle);
  return getTitle;
};
