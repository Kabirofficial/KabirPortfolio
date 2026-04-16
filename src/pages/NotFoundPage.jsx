
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
        <div className="min-h-screen flex flex-col bg-white text-black font-black uppercase overflow-hidden relative">
            <SEO title="404 Not Found" />
            
            <div className="flex-1 flex flex-col justify-center items-center relative p-6 md:p-12 z-10 w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center flex flex-col items-center relative z-20"
                >
                    <div className="text-[#891A20] text-xl md:text-3xl mb-4 tracking-widest">
                        FATAL EXCEPTION
                    </div>
                    <h1 className="text-8xl md:text-[15vw] leading-none tracking-tighter mb-8 xl:mb-12">
                        NULL.
                    </h1>
                    
                    <div className="border border-black p-6 md:p-8 w-full max-w-2xl bg-white relative z-20 mb-12">
                        <span className="opacity-60 text-xs md:text-sm tracking-[0.3em] mb-4 block">Diagnostic Log</span>
                        <p className="text-lg md:text-2xl text-[#891A20] normal-case lowercase leading-tight">
                            &gt; route_does_not_exist
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="group relative border border-black px-12 py-6 overflow-hidden bg-white text-xl md:text-3xl tracking-tighter hover:text-white transition-colors duration-500"
                    >
                        <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">REBOOT SYSTEM →</span>
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                    </Link>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] opacity-5 pointer-events-none select-none tracking-tighter whitespace-nowrap z-0">
                    404
                </div>
            </div>
        </div>
  );
};

export default NotFoundPage;
