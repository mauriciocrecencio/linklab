import { Header } from './components/Header';
import { MainParagraph } from './components/MainParagraph';
import { DotsImage } from './components/DotsImage';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductsSection } from './components/ProductsSection';
import { MadeWithScienceImage } from './components/MadeWithScienceImage';
import { Background } from './components/Background';
import { ReactQueryProvider } from '@/lib/queryClient';

export default function Home() {
  return (
    <main>
      <ReactQueryProvider>
        <Background type="bg-highlight">
          <Header />
          <MainParagraph />
          <DotsImage />
        </Background>
        <Background type="bg-white">
          <CategoriesSection />
          <ProductsSection />
          <MadeWithScienceImage />
        </Background>
      </ReactQueryProvider>
    </main>
  );
}
