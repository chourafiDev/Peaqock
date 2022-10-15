import { BiSearchAlt2 } from "react-icons/bi";

const ButtonSearch = () => {
  return (
    <button className="btn btn-green flex items-center gap-3 px-6">
      <BiSearchAlt2 size={20} className="text-white" />
      <span className="uppercase text-white">Search</span>
    </button>
  );
};

export default ButtonSearch;
