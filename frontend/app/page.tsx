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
  );
}
