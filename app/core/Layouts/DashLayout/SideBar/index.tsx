import { Menu } from "antd";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import { TbLayoutGrid } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import type { MenuProps } from "antd";
import Logo from "./Logo";

type MenuItem = Required<MenuProps>["items"][number];

interface IProps {
  handleCollapsed: () => void;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <HiHome size={22} />),
  getItem("Products", "2", <TbLayoutGrid size={22} />),
  getItem("User", "3", <FaUserAlt size={22} />),
  getItem("Settings", "4", <AiFillSetting size={22} />),
];

const item: MenuItem[] = [
  getItem("Logout", "5", <HiOutlineLogout size={22} />),
];
const itemToggle: MenuItem[] = [getItem("", "6", <BsChevronRight size={22} />)];

const index = ({ handleCollapsed }: IProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Logo />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
      <div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["2"]}
          mode="inline"
          items={item}
        />
        <div
          onClick={handleCollapsed}
          className="bg-[#06616c] rounded-b-[25px] mx-auto"
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["3"]}
            mode="inline"
            items={itemToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
