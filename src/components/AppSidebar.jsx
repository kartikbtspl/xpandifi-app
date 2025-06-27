import React from "react";


const AppSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed md:static top-0 left-0 h-full z-40 bg-[#0F0C2D] text-white w-64 p-5 flex flex-col transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">Xpandifi</div>
        <button className="md:hidden" onClick={toggleSidebar}>
          ❌
        </button>
      </div>

      <nav className="flex flex-col gap-4">
        <SidebarItem  label="Dashboard" />
        <SidebarItem  label="Campaigns" />
        <SidebarItem  label="Reports" />
        <SidebarItem  label="Bid Management" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:bg-[#1D1A3A] p-2 rounded-md transition">
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{label}</span>
  </div>
);

export default AppSidebar;
