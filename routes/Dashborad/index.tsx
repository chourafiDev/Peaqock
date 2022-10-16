import DashboradLayout from "../../app/core/Layouts/DashLayout";
import { Search, Table, SmallSearch } from "../../app/components/Dashboard";

const index = () => {
  return (
    <DashboradLayout>
      <main className="py-6 bg-forth-gray/5">
        <div className="lg:px-20 px-5 md:block hidden">
          <Search />
        </div>

        <div className="lg:px-20 px-1 md:hidden block ">
          <SmallSearch />
        </div>

        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <Table />
            </div>
          </div>
        </div>
      </main>
    </DashboradLayout>
  );
};

export default index;
