const ContactPage = () => {
  return (
    <div className="py-20 px-6 bg-[#EFECE3] min-h-screen flex flex-col items-center justify-center">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] text-center mb-6">Get In Touch</h1>
      <p className="text-center text-lg text-[#000000]/80 max-w-2xl mb-10">
        I’m always open to discussing collaborations, AI/ML research, or creative project ideas.
      </p>

      {/* Direct Email Contact */}
      <div className="text-center bg-white shadow-lg rounded-2xl p-8 border border-[#8FABD4]/50">
        <p className="text-md text-[#000000]/80 mb-3">You can reach me directly at:</p>
        <a
          href="mailto:thayanikabir.official@gmail.com"
          className="text-2xl font-semibold text-[#4A70A9] hover:text-[#8FABD4] hover:underline transition-all duration-300"
        >
          thayanikabir.official@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
