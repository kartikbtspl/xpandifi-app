
import SidebarItem from "./SidebarItem";
import { menuItems } from "../util/appsidebar-menu/menuItems";


const AppSidebar = ({ isOpen, toggleSidebar, }) => {
  return (
    <div
      className={`fixed md:static top-0 left-0 h-full z-40 bg-[#0F0C2D] text-white w-64 p-5 flex flex-col transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <img src={'images/Logo.svg'} alt="xpandifi-logo" />
        <button className="md:hidden" onClick={toggleSidebar}>
          ❌
        </button>
      </div>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.path}
            label={item.name}
            icon={item.icon}
            path={item.path}
            toggleSidebar={toggleSidebar}
          />
        ))}
      </nav>
    </div>
  );
};

export default AppSidebar;
