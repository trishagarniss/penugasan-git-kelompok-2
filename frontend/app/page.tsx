import React from 'react';

//header footer kesan elias
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

//ui kunto
import { PageWrapper, MainLayout, HeroContent, StatsRow, MockupCard } from '../components/HomeUI';

export default function HomePage() {
  
  // DATA KONTEN UI MU
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

  // RENDER TAMPILAN GABUNGAN
  return (
    <PageWrapper>
      
      {/* HEADER KESAN */}
      <Header />

      {/* HOMEPAGE KUNTO */}
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

      {/* FOOTER ELIAS */}
      <Footer />

    </PageWrapper>
  );
}