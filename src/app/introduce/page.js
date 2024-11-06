import Image from 'next/image';
import Navbar from '../components/navbar';
import Biography from './components/about';
import Timeline from './components/timeline';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <Navbar></Navbar>
      <Biography></Biography>
      <Timeline></Timeline>
    </section>
  );
}
