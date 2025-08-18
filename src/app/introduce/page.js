import Navbar from '../components/navbar';
import Biography from './components/about';
import Timeline from './components/timeline';
import Footer from '../components/footer';

export default function About() {
  return (
    <div>
      <Navbar/>
      <Biography/>
      <Timeline/>
      <Footer/>
    </div>
  );
}
