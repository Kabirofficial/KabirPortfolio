const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Kabirofficial" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thayanikabir/" }
  ];

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Brand & Detail */}
        <div>
          <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Kabir Thayani
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 font-medium">
            AI/ML Engineer & Systems Developer
          </p>
        </div>

        {/* Links & Metadata */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 pb-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            © {currentYear}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
