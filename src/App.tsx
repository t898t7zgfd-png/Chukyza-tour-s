import React, { useState } from 'react';
import { Language, Tour } from './types';
import { TOURS_DATA } from './data/toursData';
import { Header } from './components/Header';
import { SidebarNav } from './components/SidebarNav';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ToursSection } from './components/ToursSection';
import { TourDetailModal } from './components/TourDetailModal';
import { GallerySection } from './components/GallerySection';
import { ExclusivitySection } from './components/ExclusivitySection';
import { PackagesSection } from './components/PackagesSection';
import { BookingModal } from './components/BookingModal';
import { AiRouteAssistant } from './components/AiRouteAssistant';
import { DestinationsSection } from './components/DestinationsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState<Language>('es');
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [selectedTourForDetail, setSelectedTourForDetail] = useState<Tour | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTourId, setBookingTourId] = useState<string | undefined>(undefined);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (tourId?: string, packageId?: string) => {
    setBookingTourId(tourId);
    setBookingPackageId(packageId);
    setIsBookingOpen(true);
  };

  const handleSelectRecommendedTour = (tourId: string) => {
    const found = TOURS_DATA.find((t) => t.id === tourId);
    if (found) {
      setSelectedTourForDetail(found);
    } else {
      handleOpenBooking(tourId);
    }
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#131313] text-[#e4e2e1] font-sans antialiased overflow-x-hidden selection:bg-[#ff7a00] selection:text-[#2b1700] ${isHighContrast ? 'high-contrast' : ''}`}>
      {/* Editorial Vertical Sidebar Navigation */}
      <SidebarNav isHighContrast={isHighContrast} setIsHighContrast={setIsHighContrast} />

      {/* Main Content Area Offset for Sidebar */}
      <div className="md:ml-[80px]">
        {/* Header Navigation */}
        <Header
          lang={lang}
          setLang={setLang}
          onOpenBooking={() => handleOpenBooking()}
          isHighContrast={isHighContrast}
          setIsHighContrast={setIsHighContrast}
        />

        {/* Hero Banner */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          onExploreRoutes={() => scrollToElement('tours')}
        />

        {/* Stats Counter Bar */}
        <StatsBar lang={lang} />

        {/* Top Tier Tours Grid */}
        <ToursSection
          lang={lang}
          onSelectTour={(tour) => setSelectedTourForDetail(tour)}
          onBookTour={(tourId) => handleOpenBooking(tourId)}
        />

        {/* Interactive AI Route Matcher */}
        <AiRouteAssistant
          lang={lang}
          onSelectRecommendedTour={handleSelectRecommendedTour}
        />

        {/* Bento Grid Gallery */}
        <GallerySection lang={lang} />

        {/* Engineered for Exclusivity */}
        <ExclusivitySection lang={lang} />

        {/* Select Your Package */}
        <PackagesSection
          lang={lang}
          onSelectPackage={(pkgId) => handleOpenBooking(undefined, pkgId)}
        />

        {/* Destinations & Trail Map */}
        <DestinationsSection lang={lang} />

        {/* FAQ Accordion */}
        <FaqSection lang={lang} />

        {/* Basecamp Contact Section */}
        <ContactSection lang={lang} />

        {/* Footer */}
        <Footer lang={lang} onOpenBooking={() => handleOpenBooking()} />
      </div>

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={selectedTourForDetail}
        lang={lang}
        onClose={() => setSelectedTourForDetail(null)}
        onBookTour={(tourId) => handleOpenBooking(tourId)}
      />

      {/* Interactive Reservation Flow Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialTourId={bookingTourId}
        initialPackageId={bookingPackageId}
        lang={lang}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
