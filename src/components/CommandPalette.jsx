import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Icons } from "./ui/Icons";
import { useTheme } from "../context/ThemeContext";

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onKeydown = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        const onOpenEvent = () => setIsOpen(true);

        window.addEventListener("keydown", onKeydown);
        window.addEventListener("open-command-palette", onOpenEvent);

        return () => {
            window.removeEventListener("keydown", onKeydown);
            window.removeEventListener("open-command-palette", onOpenEvent);
        };
    }, []);

    const actions = useMemo(() => [
        {
            id: "home",
            label: "Home",
            icon: <Icons.Home className="w-4 h-4" />,
            shortcut: "H",
            perform: () => navigate("/")
        },
        {
            id: "projects",
            label: "Projects",
            icon: <Icons.Code className="w-4 h-4" />,
            shortcut: "P",
            perform: () => navigate("/projects")
        },
        {
            id: "about",
            label: "About Me",
            icon: <Icons.User className="w-4 h-4" />,
            shortcut: "A",
            perform: () => navigate("/about")
        },
        {
            id: "experience",
            label: "Experience",
            icon: <Icons.Briefcase className="w-4 h-4" />,
            shortcut: "E",
            perform: () => navigate("/experience")
        },
        {
            id: "contact",
            label: "Contact",
            icon: <Icons.Mail className="w-4 h-4" />,
            shortcut: "C",
            perform: () => navigate("/contact")
        },
        {
            id: "resume",
            label: "View Resume",
            icon: <Icons.FileText className="w-4 h-4" />,
            perform: () => window.open("/KabirThayani.pdf", "_blank")
        },
        {
            id: "theme",
            label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
            icon: theme === 'dark' ? <Icons.Sun className="w-4 h-4" /> : <Icons.Moon className="w-4 h-4" />,
            shortcut: "T",
            perform: () => toggleTheme()
        },
        {
            id: "github",
            label: "GitHub",
            icon: <Icons.Github className="w-4 h-4" />,
            perform: () => window.open("https://github.com/Kabirofficial", "_blank")
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            icon: <Icons.Linkedin className="w-4 h-4" />,
            perform: () => window.open("https://linkedin.com/in/kabir-thayani", "_blank")
        },
    ], [navigate, theme, toggleTheme]);

    const filteredActions = useMemo(() => actions.filter((action) =>
        action.label.toLowerCase().includes(query.toLowerCase())
    ), [actions, query]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((i) => (i + 1) % filteredActions.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((i) => (i - 1 + filteredActions.length) % filteredActions.length);
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (filteredActions[selectedIndex]) {
                    filteredActions[selectedIndex].perform();
                    setIsOpen(false);
                }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, filteredActions, selectedIndex]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden"
                    >
                        
                        <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
                            <Icons.Search className="w-5 h-5 text-slate-400" />
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Type a command or search..."
                                aria-label="Search commands"
                                className="w-full h-14 px-4 bg-transparent text-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                            />
                            <div className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">ESC</div>
                        </div>

                        
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredActions.length === 0 ? (
                                <div className="px-4 py-8 text-center text-slate-500 text-sm">No results found.</div>
                            ) : (
                                filteredActions.map((action, index) => (
                                    <button
                                        key={action.id}
                                        onClick={() => {
                                            action.perform();
                                            setIsOpen(false);
                                        }}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`nav-item w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${index === selectedIndex
                                            ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                                            : "text-slate-600 dark:text-slate-400"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {action.icon}
                                            <span className="font-medium text-sm">{action.label}</span>
                                        </div>
                                        {action.shortcut && (
                                            <span className="text-xs text-slate-400 font-mono border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5">
                                                {action.shortcut}
                                            </span>
                                        )}
                                    </button>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
