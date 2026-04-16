import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    className = "",
    icon,
    ...props
}) => {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        glass: "bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-800 shadow-sm",
        ghost: "bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800",
        outline: "bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    const content = (
        <>
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </>
    );

    const motionProps = useMemo(() => ({
        whileHover: { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } },
        whileTap: { scale: 0.98 }
    }), []);

    if (to) {
        return (
            <motion.div {...motionProps} className="inline-block">
                <Link to={to} className={combinedClassName} {...props}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    if (href) {
        return (
            <motion.div {...motionProps} className="inline-block">
                <a href={href} className={combinedClassName} {...props}>
                    {content}
                </a>
            </motion.div>
        );
    }

    return (
        <motion.button className={combinedClassName} {...motionProps} {...props}>
            {content}
        </motion.button>
    );
};

export default Button;
