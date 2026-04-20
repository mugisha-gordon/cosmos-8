import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VortexBackground from "@/components/VortexBackground";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <VortexBackground />
      <Header />
      <main className="pt-16 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
