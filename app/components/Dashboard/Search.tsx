import { BsSliders } from "react-icons/bs";
import ButtonSearch from "../../components/Utils/ButtonSearch";

const Search = () => {
  return (
    <div className="flex md:items-center items-start gap-4 w-full">
      <div className="bg-primary/5 p-[17px] rounded-full cursor-pointer">
        <BsSliders className="text-primary " />
      </div>
      <div className="flex md:flex-row flex-col items-center gap-4 w-full">
        <input
          type="text"
          placeholder="Search by keyword"
          className="bg-second-gray/10 py-3 px-4 rounded-md outline-none text-second-gray w-full caret-primary focus:shadow-custom focus:bg-forth-gray/5 focus:border-b-[2px] focus:border-primary"
        />

        <ButtonSearch />
      </div>
    </div>
  );
};

export default Search;
