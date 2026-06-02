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
        { id: "home", label: "Home", icon: <Icons.Home className="w-4 h-4" />, shortcut: "H", perform: () => navigate("/") },
        { id: "projects", label: "Projects", icon: <Icons.Code className="w-4 h-4" />, shortcut: "P", perform: () => navigate("/projects") },
        { id: "about", label: "About Me", icon: <Icons.User className="w-4 h-4" />, shortcut: "A", perform: () => navigate("/about") },
        { id: "experience", label: "Experience", icon: <Icons.Briefcase className="w-4 h-4" />, shortcut: "E", perform: () => navigate("/experience") },
        { id: "contact", label: "Contact", icon: <Icons.Mail className="w-4 h-4" />, shortcut: "C", perform: () => navigate("/contact") },
        { id: "resume", label: "View Resume", icon: <Icons.FileText className="w-4 h-4" />, perform: () => window.open("/KabirThayani.pdf", "_blank") },
        { id: "theme", label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, icon: theme === 'dark' ? <Icons.Sun className="w-4 h-4" /> : <Icons.Moon className="w-4 h-4" />, shortcut: "T", perform: () => toggleTheme() },
        { id: "github", label: "GitHub", icon: <Icons.Github className="w-4 h-4" />, perform: () => window.open("https://github.com/Kabirofficial", "_blank") },
        { id: "linkedin", label: "LinkedIn", icon: <Icons.Linkedin className="w-4 h-4" />, perform: () => window.open("https://linkedin.com/in/thayanikabir", "_blank") },
    ], [navigate, theme, toggleTheme]);

    const filteredActions = useMemo(() => actions.filter((action) =>
        action.label.toLowerCase().includes(query.toLowerCase())
    ), [actions, query]);

    useEffect(() => { setSelectedIndex(0); }, [query]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => (i + 1) % filteredActions.length); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => (i - 1 + filteredActions.length) % filteredActions.length); }
            else if (e.key === "Enter") { e.preventDefault(); if (filteredActions[selectedIndex]) { filteredActions[selectedIndex].perform(); setIsOpen(false); } }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, filteredActions, selectedIndex]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-1000 flex items-start justify-center pt-[20vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-[2px]"
                    />

                    {/* Palette Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="relative w-full max-w-lg rounded-lg border border-zinc-200 dark:border-zinc-800 bg-[#fafaf9] dark:bg-[#0e0e11] shadow-xl overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
                            <Icons.Search className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0" />
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search commands..."
                                aria-label="Search commands"
                                className="w-full h-12 px-3 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none"
                            />
                            <div className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-900/50 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800/80 shrink-0">ESC</div>
                        </div>

                        {/* List */}
                        <div className="max-h-[300px] overflow-y-auto p-1.5">
                            {filteredActions.length === 0 ? (
                                <div className="px-4 py-8 text-center text-zinc-400 dark:text-zinc-600 text-xs font-medium">No results found.</div>
                            ) : (
                                filteredActions.map((action, index) => (
                                    <button
                                        key={action.id}
                                        onClick={() => { action.perform(); setIsOpen(false); }}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-left transition-colors ${
                                            index === selectedIndex
                                                ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
                                                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={index === selectedIndex ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-500"}>
                                                {action.icon}
                                            </span>
                                            <span className="font-semibold text-xs tracking-wide">{action.label}</span>
                                        </div>
                                        {action.shortcut && (
                                            <span className="text-[10px] font-mono font-semibold text-zinc-400 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800/80 rounded px-1 py-0.5">
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
