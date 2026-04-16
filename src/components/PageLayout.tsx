import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VortexBackground from "@/components/VortexBackground";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <VortexBackground />
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
