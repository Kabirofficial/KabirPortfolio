import { motion as Motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full bg-transparent">
            <Motion.div
                className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default Loading;
