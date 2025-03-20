import Link from "next/link";
import React from "react";

const WhisperOfTheHeartCard = () => {

  return (
    <>
      <Link href="/book">
        <div className="w-[20rem] py-10">
          <div className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer h-[400px]">
            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/c73c/a81c/dd317b2dcd79328efc4e3095489f2244?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sop1LVQptT1zML-GVA9Q0ZDt5qkU4Apx6H9tTIZMvD9WfErQZZlubZI2SZBsPUiV-QgL5JR9VsAS6JgrjHBXt1SESaIVXrBFmThQkQwLVyxHmduniVAefQv6SVsNWMGnc-B7H6NYa0Xfe2UXRKPtt4YiDOZ1A~yE0TJUU9eOH2LUI9Sv0eygEjNy5BMuztUfPGXrGILhJOvh0fDcCI9Dlal0Bu8f7qWrZEA3WZ2~w2-Z3ben~QQRt-vz9gYO0ZsA8F4rJGDlBlDY8M2oUopxsCUND9VVyVF8VNeMcgViCSP94gidrM8hqGX60XmHafNwPvrogafTyPhZGmRI24LxZg__"
              alt="Whisper of the Heart Movie Poster"
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
                Book
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <p className="text-white text-center leading-relaxed text-3xl">
                View All <br />
                Availabe <br />
                Books
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WhisperOfTheHeartCard;
