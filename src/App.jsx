import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Operations from "./components/Operations";
import SignUp from "./components/SignUp";
import Testimonial from "./components/Testimonial";

function App() {

  return (
    <div className=" font-poppins bg-[#f3f3f3] text-[#222]">
      <Header />
      <Features />
      <Operations />
      <Testimonial />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App
