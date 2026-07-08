import Header from '@/app/components/header';
import Landing from '@/app/components/landing';
import Canvas from '@/app/components/canvas';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <>
      <audio src="/media/music.wav" autoPlay loop playsInline style={{ display: "none" }} />
      <Header/>
      <Landing/>
      <Canvas/>
      <Footer/>
    </>
  );
}