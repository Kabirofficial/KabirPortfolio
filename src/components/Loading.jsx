import { motion as Motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full bg-transparent">
            <div className="relative">
                <Motion.div
                    className="w-12 h-12 rounded-full"
                    style={{
                        border: "3px solid rgba(139, 92, 246, 0.1)",
                        borderTopColor: "#8B5CF6",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 rounded-full blur-lg opacity-30"
                     style={{ background: "linear-gradient(135deg, #F59E0B, #8B5CF6)" }} />
            </div>
        </div>
    );
};

export default Loading;
