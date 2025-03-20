import Link from "next/link";

const CartToonData = ({ cart }) => {
  //   console.log("book", carton);
  // console.log("carton", cart);

  return (
    <>
      <Link href={`/cartoon/${cart.id}`}>
        <div className="max-w-xs rounded-3xl  h-auto   ">
          {/* Image Container */}
          <div className="relative flex justify-center items-center ">
            <img
              src={cart.image}
              alt="Anime character with camera"
              className="w-full  object-fill h-72 rounded-3xl shadow-lg"
            />
          </div>

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-md font-bold text-gray-800">
              {cart?.ct_title}
            </h3>
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-teal-500 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{cart.view_count}</span>
              <span className="mx-2">|</span>
              <span>{cart.published_year}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartToonData;
