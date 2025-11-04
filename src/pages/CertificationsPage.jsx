import { certifications } from '../data/certifications.js';

const CertificationsPage = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] text-center mb-12">
          Licenses & Certifications
        </h1>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#EFECE3] border-2 border-[#8FABD4] rounded-lg p-6 hover:border-[#4A70A9] transition-colors"
            >
              <p className="text-sm font-semibold text-[#4A70A9] mb-1">{cert.issuer}</p>
              <h3 className="text-2xl font-bold text-[#000000]">{cert.title}</h3>
              <p className="text-md text-[#000000]/70 mt-1 mb-4">Issued {cert.date}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4A70A9] text-[#EFECE3] font-bold py-2 px-5 rounded-lg text-base hover:bg-[#8FABD4] hover:text-[#000000] transition-all"
              >
                Show Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
