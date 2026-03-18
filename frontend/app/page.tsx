<<<<<<< Updated upstream
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F6F4F0' }}>
      <Header />
      
      {/* Empty main content area */}
      <main className="flex-1"></main>
      
      <Footer />
    </div>
=======
import React from 'react';
import { PageWrapper, Navbar, MainLayout, HeroContent, StatsRow, MockupCard } from '../components/HomeUI';

export default function HomePage() {
  
  const navData = {
    brandName: "Kelompok 2",
    links: ["Beranda", "Layanan Medis", "Jadwal Dokter", "Tentang Kami"],
    loginText: "Masuk",
    registerText: "Daftar Pasien"
  };

  const heroData = {
    badge: "Sistem Informasi Kesehatan",
    titleLine1: "Revolusi Layanan",
    titleLine2: "Medis Digital.",
    description: "Platform terintegrasi untuk manajemen rekam medis, penjadwalan dokter, dan pelayanan pasien yang lebih cepat, aman, dan efisien untuk fasilitas kesehatan modern.",
    btnPrimary: "Mulai Konsultasi",
    btnSecondary: "Pelajari Fitur"
  };

  const statsData = [
    { value: "24/7", label: "Akses Layanan" },
    { value: "150+", label: "Dokter Spesialis" },
    { value: "99%", label: "Keamanan Data" }
  ];

  const mockupData = {
    doctorName: "Dr. Sarah Johnson",
    specialty: "Spesialis Jantung • Tersedia",
    queueCount: "14",
    estTime: "45",
    serverStatus: "Online"
  };

  // RENDER TAMPILAN
  return (
    <PageWrapper>
      
      {/* Bagian Navigasi Atas */}
      <Navbar 
        brandName={navData.brandName}
        navLinks={navData.links}
        loginText={navData.loginText}
        registerText={navData.registerText}
      />

      {/* Bagian Konten Utama */}
      <MainLayout>
        
        {/* Kolom Kiri: Teks dan Tombol */}
        <HeroContent 
          badge={heroData.badge}
          titleLine1={heroData.titleLine1}
          titleLine2={heroData.titleLine2}
          description={heroData.description}
          primaryBtn={heroData.btnPrimary}
          secondaryBtn={heroData.btnSecondary}
        >
          {/* Angka Statistik dimasukkan ke dalam HeroContent */}
          <StatsRow stats={statsData} />
        </HeroContent>

        {/* Kolom Kanan: Ilustrasi UI */}
        <MockupCard 
          doctorName={mockupData.doctorName}
          specialty={mockupData.specialty}
          queueCount={mockupData.queueCount}
          estTime={mockupData.estTime}
          serverStatus={mockupData.serverStatus}
        />

      </MainLayout>
    </PageWrapper>
>>>>>>> Stashed changes
  );
}