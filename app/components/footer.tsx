import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/introduce", label: "Introduce" },
  { href: "/canvas", label: "Canvas" },
];

const socialLinks = [
  { href: "https://twitter.com/ferstawn", label: "Twitter" },
  { href: "https://github.com/ferdysetiawan", label: "GitHub" },
  { href: "https://linkedin.com/in/ferdysetiawan", label: "LinkedIn" },
  { href: "https://instagram.com/ferstawn", label: "Instagram" },
  { href: "mailto:mail@ferdystawn.my.id", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-[#2f2f2f]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-extrabold tracking-wide">Ferdy Setiawan</h2>
              <p className="text-sm text-gray-400">Worker of Modern Industries</p>
              <p className="text-sm text-gray-500 italic">a masterpiece is not made overnight.</p>
            </div>
            <div className="flex flex-row gap-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-xs uppercase tracking-widest text-gray-500">Navigation</h3>
                <ul className="flex flex-col gap-1">
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-gray-300 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xs uppercase tracking-widest text-gray-500">Social Media</h3>
                <ul className="flex flex-col gap-1">
                  {socialLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 transition-colors hover:text-white"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-gray-600 lg:text-right">
            &copy; {new Date().getFullYear()} Ferdy Setiawan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}