import DashboradLayout from "../../app/core/Layouts/DashLayout";
import { BsSliders } from "react-icons/bs";
import ButtonSearch from "../../app/components/Utils/ButtonSearch";

const index = () => {
  return (
    <DashboradLayout>
      <main className="py-8">
        <div className="flex items-center gap-4 w-full px-20">
          <div className="bg-primary/5 w-16 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <BsSliders size={16} className="text-primary " />
          </div>
          <input
            type="text"
            placeholder="Search by keyword"
            className="bg-second-gray/10 py-3 px-4 rounded-md outline-none text-second-gray w-full"
          />
          <ButtonSearch />
        </div>
      </main>
    </DashboradLayout>
  );
};

export default index;
