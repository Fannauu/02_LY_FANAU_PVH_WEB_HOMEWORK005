import { GetCartoonById } from "@/services/fectData";
import Link from "next/link";
export default async function ViewCartoonDetails({ params }) {
  const { cartoonId } = await params;
  const cart = await GetCartoonById(cartoonId);

  // const cart = await GetCartoonById(idCart);
  // console.log("param cart toon", cart);
  return (
    <>
      <div className="relative space-y-4 mx-auto mt-20 justify-center gap-10 w-[80%]">
        {/* book title */}
        <div className="flex gap-10 ">
          <Link href={`/`}>Home</Link>
          <Link href={`/book`}>Book</Link>
          <Link href={`/cartoon`}>Cartoon</Link>
        </div>

        <div className="bg-gray-100  mx-auto py-20 rounder-3xl p-10">
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
        </div>
      </div>
    </>
  );
}
