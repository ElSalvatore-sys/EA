import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;