const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-[#E2E8F0] dark:border-[#21262D] py-10 bg-white dark:bg-[#0D1117] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="Kabir Logo" className="w-6 h-6 rounded-md object-cover shadow-sm" />
          <div>
            <div className="text-sm font-bold text-[#0F172A] dark:text-[#E2E8F0]">Kabir Thayani</div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-0.5">AI/ML Engineer</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="flex gap-4">
            {[
              { label: "GitHub",   href: "https://github.com/Kabirofficial" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/thayanikabir/" },
              { label: "Email",    href: "mailto:thayanikabir.official@gmail.com" },
            ].map(link => (
              <a key={link.label} href={link.href} target={link.href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">© {year} Kabir Thayani</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
