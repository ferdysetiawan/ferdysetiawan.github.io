import Header from '@/app/components/header';
import Landing from '@/app/components/landing';
import Canvas from '@/app/components/canvas';
import Footer from '@/app/components/footer';
import BackgroundAudio from '@/app/components/background-audio';

export default function Home() {
  return (
    <>
      <BackgroundAudio />
      <Header/>
      <Landing/>
      <Canvas/>
      <Footer/>
    </>
  );
}