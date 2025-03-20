import { GetBookById } from "@/services/fectData";
import Link from "next/link";
import React from "react";
export default async function ViewBookDetails({ params }) {
  const { bookId } = await params;
  const book = await GetBookById(bookId);
  // console.log("Book :", book);
 return (
   <>
     <div className="bg-gray-200 ">
       <div className="relative space-y-4 mx-auto  justify-center gap-10 w-[80%] py-10">
         {/* book title */}

         <nav className="flex items-center py-4 mb-6">
           <Link
             href="/"
             className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
             <span className="font-medium px-4">Home</span>
           </Link>

           <Link
             href="/book"
             className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
             <span className="font-medium px-4">Book Categories</span>
           </Link>

           <Link
             href={`/${book.payload.book_title}`}
             className="flex items-center text-red-500 font-semibold">
             <span className="px-4 font-bold">{book.payload.book_title}</span>
           </Link>
         </nav>

         {/* <div className="flex gap-10 ">
          <Link href={`/`}>Home</Link>
          <Link href={`/book`}>Book</Link>
         <Link href={`/${book.payload.book_title}`}>{book.payload.book_title }</Link>
        </div> */}

         <div className=" mx-auto  rounded-3xl">
           <div className="py-5">
             <div className="bg-white rounded-t-3xl w-full mx-auto flex justify-between px-10 py-5">
               <h2 className="text-2xl font-semibold text-steel-blue mt-72">
                 {book.payload.book_title} <br />
                 <span className="text-indigo-200">
                   {book.payload.book_author}
                 </span>
               </h2>
               <img
                 src={book?.payload?.image}
                 alt="book cover"
                 width={400}
                 height={400}
                 className="rounded-3xl w-56 float-start"
               />
             </div>
             <div className="bg-white px-10 py-5 rounded-b-3xl">
               <p className="text-teal text-lg">{book.payload.description}</p>
             </div>
           </div>

           {/* date */}
         </div>
       </div>
     </div>
   </>
 );
  
}

  //



//     return (
//         <>

//             <div className="w-full h-screen bg-gray-200  overflow-auto ">
//                 <div className="w-[80%] h-screen  mx-auto flex flex-col relative ">

//                     <img src={getBookById.payload.image} className="w-[250px] h-[350px] bg-gray-50 absolute right-[90px]  rounded-3xl top-[8%]" ></img>

//                     <div className="w-full h-[20%] pt-10 flex flex-row gap-5 font-medium self-center text-text-100 ">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z" fill="#0B3954" />
//                             <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#0B3954" />
//                         </svg>
//                         <Link href={'/'} >
//                             <p>Home</p>
//                         </Link>

//                         <svg className="mt-1" width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M0.91 17.67C0.72 17.67 0.53 17.6 0.38 17.45C0.0900004 17.16 0.0900004 16.68 0.38 16.39L6.9 9.87002C7.38 9.39002 7.38 8.61002 6.9 8.13002L0.38 1.61002C0.0900004 1.32002 0.0900004 0.84002 0.38 0.55002C0.67 0.26002 1.15 0.26002 1.44 0.55002L7.96 7.07002C8.47 7.58002 8.76 8.27002 8.76 9.00002C8.76 9.73002 8.48 10.42 7.96 10.93L1.44 17.45C1.29 17.59 1.1 17.67 0.91 17.67Z" fill="#0B3954" />
//                         </svg>




//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#0B3954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#0B3954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M8 7H16" stroke="#0B3954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M8 10.5H13" stroke="#0B3954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>

//                         <Link
//                             href={'/book-categogiries'}
//                         >Book Categories</Link>

//                         <svg className="mt-1" width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M0.910006 17.67C0.720006 17.67 0.530006 17.6 0.380006 17.45C0.0900061 17.16 0.0900061 16.68 0.380006 16.39L6.90001 9.87002C7.38001 9.39002 7.38001 8.61002 6.90001 8.13002L0.380006 1.61002C0.0900061 1.32002 0.0900061 0.84002 0.380006 0.55002C0.670006 0.26002 1.15001 0.26002 1.44001 0.55002L7.96001 7.07002C8.47001 7.58002 8.76001 8.27002 8.76001 9.00002C8.76001 9.73002 8.48001 10.42 7.96001 10.93L1.44001 17.45C1.29001 17.59 1.10001 17.67 0.910006 17.67Z" fill="#0B3954" />
//                         </svg>


//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" stroke="#C81D25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M12 5.48999V20.49" stroke="#C81D25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M7.75 8.48999H5.5" stroke="#C81D25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M8.5 11.49H5.5" stroke="#C81D25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>

//                         <p className=" text-red-700" >{getBookById.payload.book_title}</p>





//                     </div>
//                     <div className="w-full h-[80%] bg-white rounded-3xl pt-[10%] pl-[5%] pr-[5%] overflow-auto ">

//                         <p className="font-medium text-2xl mb-5">{getBookById.payload.book_title}</p>
//                         <p className="font-medium text-2xl mb-3">   by <span className="font-medium text-2xl text-text-100">{getBookById.payload.book_author}</span></p>
//                         <p className="text-gray-500 leading-8">{getBookById.payload.description}</p>
//                     </div>

//                 </div>
//             </div>



//         </>
//     )
// }