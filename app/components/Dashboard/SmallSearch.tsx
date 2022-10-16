import React from "react";
import ButtonSearch from "../../components/Utils/ButtonSearch";

const SmallSearch = () => {
  return (
    <div className="flex items-center flex-col gap-4 w-full">
      <input
        type="text"
        placeholder="Search by keyword"
        className="bg-second-gray/10 py-3 px-4 rounded-md outline-none text-second-gray w-full caret-primary focus:shadow-custom focus:bg-forth-gray/5 focus:border-b-[2px] focus:border-primary"
      />

      <ButtonSearch />
    </div>
  );
};

export default SmallSearch;
