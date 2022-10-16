import { IoMdEye } from "react-icons/io";
import Image from "next/image";

const Table = () => {
  const user = {
    fullName: "First Last Name",
    email: "Lorem@ipsum.com",
    country: "Morocco",
    company: "Company Name",
    data: "December 21, 2021",
  };

  let data = [];

  for (let i = 0; i < 8; i++) {
    data.push(user);
  }

  return (
    <table className="min-w-full">
      <thead>
        <tr className="text-third-gray text-sm leading-normal">
          <th className="py-3 px-6 text-left font-normal">User</th>
          <th className="py-3 px-6 text-left font-normal">Email</th>
          <th className="py-3 px-6 text-left font-normal">
            Country of Residency
          </th>
          <th className="py-3 px-6 text-left font-normal">Company</th>
          <th className="py-3 px-6 text-left font-normal">Registration Date</th>
          <th className="py-3 px-6 text-left font-normal">Actions</th>
        </tr>
      </thead>
      <tbody className="text-base-gray text-sm">
        {data.map((user, i) => (
          <tr
            key={i}
            className={` ${
              i % 2 === 0 ? "bg-forth-gray/50" : "bg-third-gray/20"
            } border-b border-gray-200 hover:bg-third-gray/20`}
          >
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {user.fullName}
            </td>
            <td className="py-3 px-6 text-left">{user.email}</td>
            <td className="py-3 px-6 text-left">{user.country}</td>
            <td className="py-3 px-6 text-left">{user.company}</td>
            <td className="py-3 px-6 text-left">{user.data}</td>
            <td className="py-3 px-6 text-left">
              <IoMdEye
                size={22}
                className="text-primary cursor-pointer transform hover:scale-125 duration-300 ease"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
