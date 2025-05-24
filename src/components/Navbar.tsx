import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-beige/95 backdrop-blur-sm">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a href="#hero" className="text-lg font-bold text-[#391212] tracking-tight">
              AJ's Cakes
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-end gap-6">
              <a href="#menu" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Menu
              </a>
              <a href="#about" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                About
              </a>
              <a href="#gallery" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Gallery
              </a>
              <a href="#footer" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 