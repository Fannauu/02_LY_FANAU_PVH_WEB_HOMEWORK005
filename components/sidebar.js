import { Button } from "@heroui/react";
import { iconsData } from "./iconsData";
import NavBarLink from "./link-component/side-link";
import Link from "next/link";
export default function SideBar() {



  return (
    <>
      <div className=" flex justify-start items-start w-full fixed">
        <div className="w-72 bg-white p-6  shadow-md">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/d1f4/4ca0/b0a6c2cc4e45d57bbc5a308b42616fa6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bgp-WJMsbfgJB4McdLQ8Zn~qjEPcplm8GHxYMyRZxD42xqpByz551iyM4E8na7baFo1HWI~z2ps5~imTa-fXQg5zSW4ArpP6r8u1qOzAHq9G~xCs55U8IRAbXoCibnESKpvz1z1ZcdquEWqcSA5K~NUTNKxh-mXTIKvfW5Q55kfEw4g716jzPMnI5ofK935Jh6TCP2rINv~U5CAdyQWsYzLkLtd3E~WWjEb74F8ekMyEs6-r5HRYdcE3L~Es9s8YouCcZvYJnBVU2iFrMMe3-BXdpNytVqhyJyn41fJQP-7Ya4CsrXNgIClaln3~eHOZ0qgdAmCEJupIcUM5JH42ng__"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Black Monster</p>
            <h2 className="text-lg font-semibold mt-1">
              blackmonster@gmail.com
            </h2>
          </div>
          {/* Menu Section */}
          <nav className="space-y-1  flex flex-col mt-4 ">
            {iconsData.map((option,index) => (
             <NavBarLink key={index} option={option}/>
            ))}

            {/* <Link href={option.path}>
              <div className="flex gap-5 p-2 hover:bg-gray-100 hover:rounded-md">
                <option.icon className="text-red-500 " />
                <p>{option.label}</p>
              </div>
            </Link> */}
          </nav>

          <div className="py-6">
            <Button className="border rounded-2xl w-full p-3 flex gap-5 justify-start px-8 bg-gray-200">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1604 15.75C10.0904 15.75 8.41043 14.07 8.41043 12C8.41043 9.93 10.0904 8.25 12.1604 8.25C14.2304 8.25 15.9104 9.93 15.9104 12C15.9104 14.07 14.2304 15.75 12.1604 15.75ZM12.1604 9.75C10.9204 9.75 9.91043 10.76 9.91043 12C9.91043 13.24 10.9204 14.25 12.1604 14.25C13.4004 14.25 14.4104 13.24 14.4104 12C14.4104 10.76 13.4004 9.75 12.1604 9.75Z"
                  fill="#0B3954"
                />
                <path
                  d="M15.3704 22.19C15.1604 22.19 14.9504 22.16 14.7404 22.11C14.1204 21.94 13.6004 21.55 13.2704 21L13.1504 20.8C12.5604 19.78 11.7504 19.78 11.1604 20.8L11.0504 20.99C10.7204 21.55 10.2004 21.95 9.58043 22.11C8.95043 22.28 8.30043 22.19 7.75043 21.86L6.03043 20.87C5.42043 20.52 4.98043 19.95 4.79043 19.26C4.61043 18.57 4.70043 17.86 5.05043 17.25C5.34043 16.74 5.42043 16.28 5.25043 15.99C5.08043 15.7 4.65043 15.53 4.06043 15.53C2.60043 15.53 1.41043 14.34 1.41043 12.88V11.12C1.41043 9.66004 2.60043 8.47004 4.06043 8.47004C4.65043 8.47004 5.08043 8.30004 5.25043 8.01004C5.42043 7.72004 5.35043 7.26004 5.05043 6.75004C4.70043 6.14004 4.61043 5.42004 4.79043 4.74004C4.97043 4.05004 5.41043 3.48004 6.03043 3.13004L7.76043 2.14004C8.89043 1.47004 10.3804 1.86004 11.0604 3.01004L11.1804 3.21004C11.7704 4.23004 12.5804 4.23004 13.1704 3.21004L13.2804 3.02004C13.9604 1.86004 15.4504 1.47004 16.5904 2.15004L18.3104 3.14004C18.9204 3.49004 19.3604 4.06004 19.5504 4.75004C19.7304 5.44004 19.6404 6.15004 19.2904 6.76004C19.0004 7.27004 18.9204 7.73004 19.0904 8.02004C19.2604 8.31004 19.6904 8.48004 20.2804 8.48004C21.7404 8.48004 22.9304 9.67004 22.9304 11.13V12.89C22.9304 14.35 21.7404 15.54 20.2804 15.54C19.6904 15.54 19.2604 15.71 19.0904 16C18.9204 16.29 18.9904 16.75 19.2904 17.26C19.6404 17.87 19.7404 18.59 19.5504 19.27C19.3704 19.96 18.9304 20.53 18.3104 20.88L16.5804 21.87C16.2004 22.08 15.7904 22.19 15.3704 22.19ZM12.1604 18.49C13.0504 18.49 13.8804 19.05 14.4504 20.04L14.5604 20.23C14.6804 20.44 14.8804 20.59 15.1204 20.65C15.3604 20.71 15.6004 20.68 15.8004 20.56L17.5304 19.56C17.7904 19.41 17.9904 19.16 18.0704 18.86C18.1504 18.56 18.1104 18.25 17.9604 17.99C17.3904 17.01 17.3204 16 17.7604 15.23C18.2004 14.46 19.1104 14.02 20.2504 14.02C20.8904 14.02 21.4004 13.51 21.4004 12.87V11.11C21.4004 10.48 20.8904 9.96004 20.2504 9.96004C19.1104 9.96004 18.2004 9.52004 17.7604 8.75004C17.3204 7.98004 17.3904 6.97004 17.9604 5.99004C18.1104 5.73004 18.1504 5.42004 18.0704 5.12004C17.9904 4.82004 17.8004 4.58004 17.5404 4.42004L15.8104 3.43004C15.3804 3.17004 14.8104 3.32004 14.5504 3.76004L14.4404 3.95004C13.8704 4.94004 13.0404 5.50004 12.1504 5.50004C11.2604 5.50004 10.4304 4.94004 9.86043 3.95004L9.75043 3.75004C9.50043 3.33004 8.94043 3.18004 8.51043 3.43004L6.78043 4.43004C6.52043 4.58004 6.32043 4.83004 6.24043 5.13004C6.16043 5.43004 6.20043 5.74004 6.35043 6.00004C6.92043 6.98004 6.99043 7.99004 6.55043 8.76004C6.11043 9.53004 5.20043 9.97004 4.06043 9.97004C3.42043 9.97004 2.91043 10.48 2.91043 11.12V12.88C2.91043 13.51 3.42043 14.03 4.06043 14.03C5.20043 14.03 6.11043 14.47 6.55043 15.24C6.99043 16.01 6.92043 17.02 6.35043 18C6.20043 18.26 6.16043 18.57 6.24043 18.87C6.32043 19.17 6.51043 19.41 6.77043 19.57L8.50043 20.56C8.71043 20.69 8.96043 20.72 9.19043 20.66C9.43043 20.6 9.63043 20.44 9.76043 20.23L9.87043 20.04C10.4404 19.06 11.2704 18.49 12.1604 18.49Z"
                  fill="#0B3954"
                />
              </svg>
              Setting
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
