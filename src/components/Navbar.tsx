import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full mx-auto px-4 md:px-6 lg:px-8 bg-beige/95 backdrop-blur-sm">
      <div className="w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-lg font-bold text-[#391212] tracking-tight">
              AJ's Cakes
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-end gap-6">
              <Link href="/" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Home
              </Link>
              <Link href="/cakes" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Our Cakes
              </Link>
              <Link href="/about" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                About
              </Link>
              <Link href="/contact" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 