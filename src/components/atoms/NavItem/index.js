const NavItem = ({ href, children, hasDropdown, dropdownItems }) => {
  return (
    <li className="relative">
      {/* Link utama */}
      <a href={href} className="text-white hover:text-blue-500 py-2 px-4 block">
        {children}
      </a>

      {/* Dropdown menu yang muncul saat di-hover */}
      {hasDropdown && (
        <ul className="absolute left-0 hidden bg-white text-gray-800 shadow-md mt-2 space-y-2 rounded-md w-40 group-hover:block group-hover:visible">
          {/* Item-item dalam dropdown */}
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="block py-2 px-4 text-sm hover:bg-gray-100">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
