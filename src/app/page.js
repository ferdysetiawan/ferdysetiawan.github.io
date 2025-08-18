import Navbar from '@/app/components/navbar';
import Landing from '@/app/components/home';
import Project from '@/app/components/project';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Project/>
      <Footer/>
    </div>
  );
}
