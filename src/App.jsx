import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import TaskBoard from "./components/task/TaskBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>

      <Footer />
    </>
  );
}
