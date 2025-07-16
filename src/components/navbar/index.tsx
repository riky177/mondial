import DesktopNavbar from './desktop-navbar';
import MobileNavbar from './mobile-navbar';

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>

      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
