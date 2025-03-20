

// "use client"

import Link from "next/link";
export default function NavBarLink({ option }) {


  // console.log("use path name", path);
  return (
    <>
      <Link href={option.path}>
        <div className="flex gap-5 p-2 hover:bg-gray-100 hover:rounded-md">
            <option.icon className="text-red-500 " />
            <p>{option.label}</p>
        </div>
      </Link>
    </>
  );
}