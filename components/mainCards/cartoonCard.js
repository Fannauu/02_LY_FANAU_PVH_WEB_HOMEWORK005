import Link from "next/link";
import React from "react";

const CartoonCard = () => {
  return (
    <>
      <Link href="/cartoon">
        <div className="w-[20rem] py-10">
          <div className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer h-[400px]">
            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/65a1/7fc0/0c5a744cd7491aa1555996062a2e9f16?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hb9tx4C2PrUqZCAkl-zxHUI5g2SKf7f6EWq-Y3GQnDjH2h2khBxSi00YxHQggSEZUaYL5DnkyZuEVxO4RLtKmTrl9v3tYfrW4r5mUDwt4ymVp0TStjoXCc4i0xkW2YJvimF02GnwCg0PjqV7xpcCk8T0uDFPl4YpPtQndpKxGintdpXnOjp2YIYlQDx7m2HNpHlc4CfGICTlcLS5k5XK0E-RPnHPTjcHl7FpDNGHF8XUdbzph0FR4T6D8LzWiJTK6uTO3Q3nPJqrAH4Noq3c40a~cHpzb40py0-5tODiE0xsLoa9mpnq0uCUJaL~uqh3koddEdUb28abaZuzDq4s2A__"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Studio Ghibli Label */}
            <div className="absolute top-4 left-3 bg-white/80 px-3 py-1 text-xs font-medium text-gray-800 rounded-full">
              <div className="flex items-center">
                <span className="mr-2 text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </span>
                Cartoon
              </div>
            </div>

            {/* Japanese Text */}
            {/* <div className="absolute top-4 right-4 text-xs font-semibold text-white">
          スタジオジブリ
          <br />
          STUDIO GHIBLI
        </div> */}

            {/* Title */}
            {/* <div className="absolute top-1/3 left-4 right-4">
          <h2 className="text-4xl font-bold text-white leading-tight drop-shadow-lg">
            Whisper
            <br />
            <span className="text-xl font-medium">of the</span>
            <br />
            Heart
          </h2>
        </div> */}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <p className="text-white text-center leading-relaxed text-3xl">
                View All <br />
                Availabe <br />
                Cartoons
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartoonCard;
