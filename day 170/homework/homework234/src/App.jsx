import React from 'react';

export default function QrCodeCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#d5e1ef] p-4 font-sans">
      <main className="w-full max-w-[320px] rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/5">
      <img src="src\assets\image-qr-code.png"></img>

        {/* Card Typography Content */}
        <div className="px-2 py-6 text-center">
          <h1 className="text-[22px] font-bold leading-tight text-[#1f3251]">
            Improve your front-end skills by building projects
          </h1>
          <p className="mt-4 text-[15px] font-normal leading-normal text-[#7b879d]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </main>
    </div>
  );
}
