import { useRouteError, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-6 transition-colors duration-300">
            <div className="text-center max-w-md">
                <Motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold text-slate-900 dark:text-white mb-4"
                >
                    Oops!
                </Motion.h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-slate-500 dark:text-slate-500 mb-8 italic">
                    {error.statusText || error.message}
                </p>
                <Link
                    to="/"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100 px-8 text-base font-bold text-white dark:text-slate-900 shadow-xl transition-all hover:bg-black dark:hover:bg-white hover:scale-105"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
