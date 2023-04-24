import menuHamburguesa from "../assets/images/menu-hamburguesa.png";
import logoMinga from "../assets/images/logo-minga.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-6 px-8">
      <img
        src={menuHamburguesa}
        className="object-cover  h-10"
        alt="hamburguesa"
      />
      <img src={logoMinga} className="object-cover  h-8" />
    </nav>
  );
}
