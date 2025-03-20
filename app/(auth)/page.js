import WhisperOfTheHeartCard from "@/components/mainCards/bookCard";
import CartoonCard from "@/components/mainCards/cartoonCard";

export default function Home() {
  return (
    <>
      <div className=" bg-white border rounded-2xl p-8">
        <button className=" text-blue-300 bg-gray-200 p-3 px-5 rounded-lg">
          HomePage
        </button>
        <hr className=" mt-2 text-black" />
        <div className="flex gap-20 justify-center">
          <WhisperOfTheHeartCard />
          <CartoonCard />
        </div>
      </div>
    </>
  );
}
