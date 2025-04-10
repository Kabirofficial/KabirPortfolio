import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-red-500 py-6 text-center border-t border-gray-800">
      <div className="container mx-auto text-sm">
        <p>
          © {currentYear}{' '}
          <span className="text-white font-semibold">Kabir's</span> Portfolio.
           All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}