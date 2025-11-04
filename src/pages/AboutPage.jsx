import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  };

  return (
    <section className="py-16 px-6 bg-[#F6F4EE] min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={reduce ? false : 'hidden'}
          animate={reduce ? false : 'show'}
          variants={fadeUp}
          className="text-5xl md:text-6xl font-extrabold text-[#133B63] mb-8"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={reduce ? false : 'hidden'}
          animate={reduce ? false : 'show'}
          variants={fadeUp}
          className="text-lg text-[#0b1220]/90 space-y-6 leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Hello! I'm <span className="font-semibold text-[#133B63]">Kabir</span>, a passionate AI/ML Engineer and
            Python Developer who loves crafting intelligent, scalable, and user-focused solutions. My fascination began
            with understanding how data tells stories—turning raw numbers into insight and automation.
          </p>
          <p>
            My expertise spans the end-to-end ML lifecycle—data preprocessing, model development, optimization,
            deployment, and continuous monitoring. I work with deep learning frameworks like
            <span className="font-medium"> PyTorch</span> and <span className="font-medium">TensorFlow</span>, as well
            as classical methods using
            <span className="font-medium"> Scikit-learn</span>. My passion lies in transforming theory into
            production-grade systems.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : 'hidden'}
          animate={reduce ? false : 'show'}
          variants={fadeUp}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { to: '/experience', label: 'Experience' },
            { to: '/education', label: 'Education' },
            { to: '/skills', label: 'Skills' },
            { to: '/certifications', label: 'Certifications' },
          ].map((link, i) => (
            <motion.div
              key={link.to}
              initial={reduce ? false : 'hidden'}
              whileInView={reduce ? {} : 'show'}
              viewport={{ once: true, amount: 0.3 }}
              variants={card}
            >
              <Link
                to={link.to}
                className="block bg-[#EFECE3] border-2 border-[#8FABD4] rounded-xl py-5 font-semibold text-[#133B63] text-lg hover:-translate-y-1 hover:bg-[#8FABD4]/20 hover:shadow-md transition-all duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
