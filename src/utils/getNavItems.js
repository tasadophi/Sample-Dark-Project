import { FaGoogleDrive } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa";
import { TbLetterP } from "react-icons/tb";

const navItems = [
  {
    id: 1,
    name: "Google Drive",
    icon: <FaGoogleDrive />,
  },
  {
    id: 2,
    name: "Hubspot",
    icon: <FaHubspot />,
  },
  {
    id: 3,
    name: "Pipedrive",
    icon: (
      <span className="bg-gray-300 p-1 rounded w-full h-full block dark:text-black">
        <TbLetterP />
      </span>
    ),
  },
];

export default navItems;
