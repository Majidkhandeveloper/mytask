import "./App.css";
import ContactUs from "./Components/ConatactUs";
import Header from "./Components/Header";
import RevolutionGame from "./Components/RevolutionGame";
import RecentlyAdd from "./Components/RecentlyAdd";
import Testimonial from "./Components/Testimonial";
import ShapWrapper from "./Components/ShapWrapper";

function App() {
  return (
 <div className="space-y-4">
    <Header/>
   <Testimonial/>
   <ContactUs/>
   <RevolutionGame/>
   </div>
  );
}

export default App;
