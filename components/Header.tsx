import Link from "next/link";

// Component Imports
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Personal Branding Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Shreyas<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation Bar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button variant="default" className="transition-all duration-300">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
