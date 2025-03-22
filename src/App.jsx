import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";

function App() {
  return (
    <div className="overflow-hidden xl:max-w-[1440px] xl:mx-auto ">
      <Navbar />
      <Main>
        <Hero />
        <Features />
        <Services />
      </Main>
    </div>
  );
}

export default App;
