const ContactPage = () => {
  return (
    <div className="py-16 px-4 bg-[#EFECE3] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] text-center mb-4 sm:mb-6">
        Get In Touch
      </h1>

      <p className="text-center text-base sm:text-lg text-[#000000]/80 max-w-xl sm:max-w-2xl mb-8 sm:mb-10 px-2">
        I’m always open to discussing collaborations, AI/ML research, or creative project ideas.
      </p>

      <div className="text-center bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-[#8FABD4]/50 w-full max-w-md">
        <p className="text-sm sm:text-md text-[#000000]/80 mb-3">You can reach me directly at:</p>
        <a
          href="mailto:thayanikabir.official@gmail.com"
          className="text-xl sm:text-2xl font-semibold text-[#4A70A9] hover:text-[#8FABD4] hover:underline transition-all duration-300 break-all"
        >
          thayanikabir.official@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
