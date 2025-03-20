import AllBookCards from "@/components/cards/card";
import WhisperOfTheHeartCard from "@/components/mainCards/bookCard";
import CartoonCard from "@/components/mainCards/cartoonCard";
import SelectList from "@/components/select/select";
import {
  booksByCategory,
  GetAllBook,
  GetBookByCategory,
} from "@/services/fectData";

const BookPage = async ({ searchParams }) => {

 const search = searchParams.search;
 console.log("search book", search);

  const bookList = await GetAllBook(search);
  const categories = await GetBookByCategory();
  const catId = searchParams.query;


  // search
 

  // console.log("cate id", catId);

  if (catId == undefined || !catId) {
    return (
      <>
        <div className="bg-white w-full h-auto p-5 px-10 rounded-3xl py-10">
          <div className="flex items-center justify-between">
            <button className="border rounded-2xl bg-gray-100 p-2 px-5 text-blue-300">
              Allbooks
            </button>

            <div className="overflow-auto overscroll-none">
              <SelectList {...categories} /> 
            </div>
          </div>
          <hr className=" mt-4 text-black" />
          <div className="grid grid-cols-2 gap-10 py-10">
            {bookList.payload.map((book) => (
              <AllBookCards
                key={book.id} book={book} />
            ))}
            {/* {searchParams.categoryId
            ? bookBycate.payload.map((cate) => (
                <AllBookCards key={cate.id} book={cate} />
              ))
            : bookList.payload.map((book) => (
                <AllBookCards key={book.id} book={book} />
              ))} */}
          </div>
        </div>
      </>
    );
  } else {
    const categoryId = categories.payload.find(
      (category) => category.book_cate_name === catId
    );
    // console.log("category id", categoryId);

    // console.log("Book by cat", bookBycate);
    const bookBycate = await booksByCategory(categoryId?.id);
    console.log("book of cate ", bookBycate);

    // const books = bookBycate.filter((book) => book.categories === catId);

    return (
      <>
        <div className="bg-white w-full h-auto p-5 px-10 rounded-3xl">
          <div className="flex items-center justify-between">
            <button className="border rounded-2xl bg-gray-100 p-2 px-5 text-blue-300">
              {categoryId?.book_cate_name}
            </button>

            <div>
              <SelectList {...categories} />
            </div>
          </div>
          <hr className=" mt-2 text-black" />
          <div className="grid grid-cols-2 gap-10 ">
            {bookBycate?.payload.map((cate) => (
              <AllBookCards key={cate?.id} book={cate} />
            ))}
          </div>
        </div>
      </>
    );
  }

  // const categoryId = categories.payload.find((category) => category.book_cate_name === catId)
  // console.log("category id", categoryId);

  // // console.log("Book by cat", bookBycate);
  // const bookBycate = await booksByCategory(categoryId.id);
  // console.log("book of cate ", bookBycate);

  // const books = bookBycate.filter((book)=> book.categories === catId)
};

export default BookPage;
