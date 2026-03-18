import React from 'react';

// 1. Wrapper Utama
export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#F6F4F0] text-slate-900 font-sans flex flex-col overflow-x-hidden">
    {children}
  </div>
);

// 2. Layout Utama
export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="flex-1 relative w-full flex items-center">
    
    {/* Efek Latar Belakang (Dipisahkan agar tidak merusak layout Flexbox) */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-[100px]"></div>
    </div>

    {/* Kontainer Pembungkus Konten Utama */}
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
      {children}
    </div>
    
  </main>
);

// 3. Komponen Teks Hero & Tombol
export const HeroContent = ({ badge, titleLine1, titleLine2, description, primaryBtn, secondaryBtn, children }: any) => (
  <div className="w-full lg:w-1/2 flex flex-col space-y-8">
    <div className="inline-flex items-center self-start gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase">
      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
      {badge}
    </div>
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
      {titleLine1} <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
        {titleLine2}
      </span>
    </h1>
    <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
      {description}
    </p>
    <div className="flex flex-wrap gap-4 pt-2">
      <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1">{primaryBtn}</button>
      <button className="bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-bold shadow-sm transition-all">{secondaryBtn}</button>
    </div>
    {children}
  </div>
);

// 4. Komponen Baris Statistik (Teks Gelap)
export const StatsRow = ({ stats }: { stats: { value: string, label: string }[] }) => (
  <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-slate-200/80 mt-4">
    {stats.map((stat, idx) => (
      <div key={idx}>
        <h3 className="text-3xl font-extrabold text-slate-900">{stat.value}</h3>
        <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
      </div>
    ))}
  </div>
);

// 5. Komponen Kartu Mockup Layar (Kolom Kanan)
export const MockupCard = ({ doctorName, specialty, queueCount, estTime, serverStatus }: any) => (
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
    <div className="relative w-full max-w-md p-6 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl shadow-blue-900/10">
      <div className="absolute -top-4 -right-4 bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-pink-500/30">
        Live Update
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl shadow-inner">🩺</div>
          <div>
            <h4 className="text-slate-900 font-extrabold">{doctorName}</h4>
            <p className="text-xs font-bold text-blue-600">{specialty}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p className="text-xs text-slate-500 mb-1 font-semibold">Antrean Saat Ini</p>
            <p className="text-2xl font-black text-slate-900">{queueCount} <span className="text-xs font-semibold text-slate-400">pasien</span></p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p className="text-xs text-slate-500 mb-1 font-semibold">Estimasi Waktu</p>
            <p className="text-2xl font-black text-slate-900">{estTime} <span className="text-xs font-semibold text-slate-400">menit</span></p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-4 rounded-2xl border border-blue-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-slate-700">Status Server</span>
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> {serverStatus}
            </span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-1.5 mt-2 border border-white">
            <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-1.5 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);