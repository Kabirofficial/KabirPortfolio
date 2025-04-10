/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-black text-red-500">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to <span className="text-white">Kabir's</span> Portfolio
        </motion.h1>

        <motion.button
          onClick={() => navigate("/home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
        >
          Enter Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
