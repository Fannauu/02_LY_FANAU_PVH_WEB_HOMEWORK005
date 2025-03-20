import SearchNav from "@/components/search";
import SideBar from "@/components/sidebar";

export default function Dashboard({ children }) {
  return (
    <>
      <div className="grid grid-cols-12 bg-gray-100 min-h-screen overflow-hidden overscroll-none">
        <div className="col-span-3">
          <SideBar />
        </div>
        <div className="col-span-9 w-[95%] ">
          <div className="py-10">
            {/* <MainSide/> */}
            <SearchNav />
          </div>
          <div className="  rounded-3xl">{children}</div>
        </div>
      </div>
    </>
  );
}
