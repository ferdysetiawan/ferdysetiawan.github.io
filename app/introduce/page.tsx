import Header from '@/app/components/header';
import About from '@/app/introduce/components/about';
import Timeline from '@/app/introduce/components/timeline';
import Footer from '@/app/components/footer';
import Aurora from '@/app/components/aurora';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora />
      </div>
      <Header/>
      <div className="relative z-10">
        <About/>
        <Timeline/>
      </div>
      <Footer/>
    </main>
  );
}