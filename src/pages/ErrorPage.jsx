import { useRouteError, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col bg-transparent overflow-hidden relative">
            <SEO title="Error" />
            
            <div className="flex-1 flex flex-col justify-center items-center relative p-6 md:p-12 z-10 w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center flex flex-col items-center max-w-2xl w-full"
                >
                    <div className="text-zinc-400 dark:text-zinc-500 text-xs font-mono font-bold mb-4 tracking-[0.2em] uppercase">
                        System Failure
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
                        Error.
                    </h1>
                    
                    <div className="border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 w-full rounded-lg relative z-20 mb-12 text-left bg-zinc-50/50 dark:bg-zinc-950/20">
                        <span className="opacity-50 text-[10px] font-mono font-bold tracking-wider mb-4 block uppercase text-zinc-400 dark:text-zinc-600">Diagnostic Log</span>
                        <p className="text-sm md:text-base font-mono font-semibold text-zinc-900 dark:text-zinc-100 break-all leading-relaxed">
                            &gt; {error?.statusText || error?.message || "critical_malfunction_detected"}
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors rounded inline-block font-mono"
                    >
                        Reboot System
                    </Link>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-bold tracking-tighter leading-none opacity-[0.01] dark:opacity-[0.015] pointer-events-none select-none z-0 uppercase font-mono">
                    Fail
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
