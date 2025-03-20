import { GetCartoonById } from "@/services/fectData";
import Link from "next/link";
export default async function ViewCartoonDetails({ params }) {
  const { cartoonId } = await params;
  const cart = await GetCartoonById(cartoonId);

  // const cart = await GetCartoonById(idCart);
  // console.log("param cart toon", cart);
  return (
    <>
      <div className="bg-gray-200">
        <div className="relative space-y-4 mx-auto justify-center gap-10 w-[80%] py-10">
          {/* cartoon title */}
          <nav className="flex items-center py-4 mb-6">
            <Link
              href="/"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <span className="font-medium px-4">Home</span>
            </Link>

            <Link
              href="/cartoon"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <span className="font-medium px-4">Cartoon Categories</span>
            </Link>

            <Link
              href={`/${cart.payload.ct_title}`}
              className="flex items-center text-red-500 font-semibold">
              <span className="px-4 font-bold">{cart.payload.ct_title}</span>
            </Link>
          </nav>

          <div className=" mx-auto  rounded-3xl">
            <div className="py-5">
              <div className="bg-white rounded-t-3xl w-full mx-auto flex justify-between px-10 py-5">
                <h2 className="text-2xl font-semibold text-steel-blue mt-72">
                  {cart.payload.ct_title}
                  <br />
                  <span className="text-indigo-200">
                    {cart.payload.ct_creator}
                  </span>
                </h2>
                <img
                  src={cart?.payload?.image}
                  alt="book cover"
                  width={400}
                  height={400}
                  className="rounded-3xl w-56 float-start"
                />
              </div>
              <div className="bg-white px-10 py-5 rounded-b-3xl">
                <p className="text-teal text-lg">
                  {cart.payload.ct_description}
                </p>
              </div>
            </div>

            {/* date */}
          </div>

          {/* <div className="bg-gray-100  mx-auto py-20 rounder-3xl p-10">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-steel-blue">
              {cart.payload.ct_title}
            </h2>
            <img
              src={cart?.payload?.image}
              alt="book cover"
              width={400}
              height={400}
              className="rounded-3xl w-48 float-start"
            />
          </div>
          <p className="text-teal text-lg">{cart.payload.ct_description}</p>
          date
          <div className=" font-medium text-teal">
            <p>Date : {cart.payload.created_at}</p>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
