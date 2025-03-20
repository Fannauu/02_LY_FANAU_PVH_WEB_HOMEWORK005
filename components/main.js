import WhisperOfTheHeartCard from "./mainCards/bookCard";
import CartoonCard from "./mainCards/cartoonCard";
import SearchNav from "./search";

export default function MainSide() {
  return (
    <>
      <div className="bg-gray-200">
        <div>
          <SearchNav />
        </div>

        {/* <div className="flex gap-20 items-center justify-center">
            <div>
              <WhisperOfTheHeartCard />
            </div>
            <div className="col-span-6">
              <CartoonCard />
            </div>
          </div> */}
      </div>
    </>
  );
}
