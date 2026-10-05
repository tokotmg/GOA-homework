import React from 'react';

export default function SocialLinksProfile() {
  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'Frontend Mentor', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#141414] font-sans antialiased">
      {/* Profile Card Container */}
      <div className="w-full max-w-800 ounded-xl bg-[#1f1f1f] p-6 text-center shadow-xl sm:p-10">
        
        {/* Profile Image */}
        <img
          className="mx-auto h-88 w-88 rounded-full object-cover"
          src=".\src\assets\image.png"
          alt="Jessica Randall"
        />

        {/* User Info */}
        <h1 className="mt-6 text-2xl font-semibold text-white">
          Jessica Randall
        </h1>
        <p className="mt-1 text-sm font-bold text-[#c5f82a]">
          London, United Kingdom
        </p>
        <p className="mt-6 text-sm text-[#ececec]">
          "Front-end developer and avid reader."
        </p>

        {/* Action Links */}
        <div className="mt-6 flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="w-full rounded-lg bg-[#333333] py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#c5f82a] hover:text-[#333333]"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
