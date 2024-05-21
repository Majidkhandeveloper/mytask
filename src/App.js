import "./App.css";
import Header from "./Components/Header";
import RecentlyAdd from "./Components/RecentlyAdd";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
 <div className="space-y-4">
    <Header/>
   <Testimonial/>
   <RecentlyAdd/>
   </div>
  );
}

export default App;
