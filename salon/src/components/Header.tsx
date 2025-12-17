import Link from "next/link";

export function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Coupons", href: "/coupons" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100/50 bg-white py-2">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:gap-0 md:px-8">
        <Link
          href="/"
          className="font-primary text-2xl font-bold tracking-tight text-black md:text-3xl"
        >
          Top Salon
        </Link>
        <nav className="contents">
          <ul className="font-secondary contents text-sm font-medium text-black/80 md:text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
