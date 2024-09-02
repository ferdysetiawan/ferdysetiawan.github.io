import Image from "next/image";
import Navbar from './components/navbar';
import Landing from './components/home';
import Project from './components/project';
import Footer from './components/footer';

export default function Home() {
  return (
    <div class="content">
      <Navbar></Navbar>
      <Landing></Landing>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}
