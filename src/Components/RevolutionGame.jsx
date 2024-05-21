import image1 from "../Images/image1.png"
import image2 from "../Images/image2.png";

import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";
import image6 from "../Images/image6.png";



const array = [{}, {}, {},{},{},{}];
const images = [image1, image2, image3, image4, image5, image6];


const RevolutionGame =()=>{
    return (
      <div className="relative    border-2 border-[#424242] space-y-20 bg-[#2E2D2E] px-28 py-10   text-white  max-w-[1229px]  mx-auto   rounded-[60px]">
        <div className="font-bold text-5xl self-center">A WORLDWIDE REVOLUTION IN GAMING</div>
        <div className="flex gap-4 flex-wrap justify-center items-center align-middle">
          {array?.map((item, index) => (
            <div className="  w-72  justify-center items-center">
              <img
                src={images[index]}
                alt={`Image ${index + 1}`}
                className=""
              />
            </div>
          ))}
        
        </div>
      </div>
    );
}

export default RevolutionGame;