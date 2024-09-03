import Header from "../UI/Header";
import MobileNav from "../UI/MobileNav";

const Navbar = () => {
  return (
    <div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block">
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
