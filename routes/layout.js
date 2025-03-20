import SearchNav from "@/components/search";
import SideBar from "@/components/sidebar";

export default function ParentRoutes({ children }) {
  <div className="grid grid-cols-12">
    <div className="col-span-3">
      <SideBar />
    </div>

    <div className="col-span-9">
      <div>
        <SearchNav />
      </div>
      </div>
      {children}
  </div>;
}
