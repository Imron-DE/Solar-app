import NavItem from "@/components/atoms/NavItem";

const NavMenu = () => (
  <ul className="hidden md:flex space-x-6 text-lg">
    {/* Item menu tanpa dropdown */}
    <NavItem href="/" hasDropdown={false}>
      Home
    </NavItem>
    <NavItem href="/about" hasDropdown={false}>
      Tentang Kami
    </NavItem>
    <NavItem href="/project" hasDropdown={false}>
      Project
    </NavItem>

    {/* Item menu dengan dropdown */}
    <NavItem
      href="/product"
      hasDropdown={true}
      dropdownItems={[
        { href: "/product/featured", label: "Featured" },
        { href: "/product/new", label: "New Products" },
        { href: "/product/best-sellers", label: "Best Sellers" },
      ]}
    >
      Product
    </NavItem>

    <NavItem href="/system" hasDropdown={false}>
      Sistem PLTS
    </NavItem>
    <NavItem href="/contact" hasDropdown={false}>
      Contacts
    </NavItem>
  </ul>
);

export default NavMenu;
