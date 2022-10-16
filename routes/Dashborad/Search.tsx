import { Search as SearchComponent } from "../../app/components/Dashboard";
import ButtonSearch from "../../app/components/Utils/ButtonSearch";
import { BiSearchAlt2 } from "react-icons/bi";
import { Select } from "antd";
import { DatePicker } from "antd";

const { Option } = Select;

const Search = () => {
  return (
    <main className="md:px-8 px-2 md:pt-24 pt-10 pb-10 bg-forth-gray/50 min-h-screen w-full flex justfy-center">
      <div className="w-full flex flex-col gap-8 lg:px-20 md:px-6">
        <SearchComponent />
        <SearchComponent />

        <div className="flex items-center gap-4 w-full">
          <div className="bg-primary/5 w-16 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <BiSearchAlt2 size={20} className="text-primary " />
          </div>
          <div className="flex md:flex-row flex-col items-center w-full gap-4">
            <div className="flex md:flex-row flex-col lg:gap-8 gap-2 w-full">
              <DatePicker className="w-full" />
              <Select defaultValue="List 1" className="w-full">
                <Option value="List1">List 1</Option>
                <Option value="List2">List 2</Option>
                <Option value="List3">List 3</Option>
                <Option value="List4">List 4</Option>
                <Option value="List5">List 5</Option>
              </Select>
              <Select defaultValue="List 1" className="w-full">
                <Option value="List1">List 1</Option>
                <Option value="List2">List 2</Option>
                <Option value="List3">List 3</Option>
                <Option value="List4">List 4</Option>
                <Option value="List5">List 5</Option>
              </Select>
            </div>
            <ButtonSearch />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full">
          <div className="bg-primary/5 w-16 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <BiSearchAlt2 size={20} className="text-primary " />
          </div>
          <div className="flex md:flex-row flex-col items-center w-full gap-4">
            <div className="flex md:flex-row flex-col lg:gap-8 gap-2 w-full">
              <DatePicker className="w-full" />
              <Select defaultValue="List 1" className="w-full">
                <Option value="List1">List 1</Option>
                <Option value="List2">List 2</Option>
                <Option value="List3">List 3</Option>
                <Option value="List4">List 4</Option>
                <Option value="List5">List 5</Option>
              </Select>
              <Select defaultValue="List 1" className="w-full">
                <Option value="List1">List 1</Option>
                <Option value="List2">List 2</Option>
                <Option value="List3">List 3</Option>
                <Option value="List4">List 4</Option>
                <Option value="List5">List 5</Option>
              </Select>
            </div>
            <ButtonSearch />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;
