import Link from "next/link";

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <>
      <div className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-primary text-5xl font-bold text-gray-950 md:text-6xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="w-full bg-gray-100 py-4">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="transition-colors hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-900">{title}</span>
          </nav>
        </div>
      </div>
    </>
  );
}
