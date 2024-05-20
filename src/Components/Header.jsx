
import bayra_Logo_B_White from "../Images/bayra_Logo_B_White.png";
const Header=()=>{
     return(
        <div className=" flex gap-2 p-4 ">
        <div className="relative  path bg-cover -z-10 border-2 border-[#424242] bg-center bg-bayra-home px-28 py-10  bg-white   text-white  max-w-[1229px]  mx-auto  h-[584px] rounded-[60px]">
          <div className="relative  ">
            <div className="text-2xl font-semibold absolute right-0 top-28 ">
              <p className="">Unleash The Power Of NFT GameFi</p>
              <p className="float-right"> Trade, Earn and Battle!</p>
            </div>
            <img src={bayra_Logo_B_White} />
          </div>
  
          <div className="w-3/4 flex flex-col gap-4  items-start">
            <p>
              {" "}
              Both approaches effectively center the inner div without relying on
              mx-20, ensuring your layout is responsive and visually appealing.
              Choose the one that best fits your design requirements. Both
              approaches effectively center the inner div without relying on
              mx-20, ensuring your layout is responsive and visually appealing.
              Choose the one that best fits your design requirements. Both
              approaches effectively center the inner div without relying on
              mx-20, ensuring your layout is responsive and visually appealing.
              Choose the one that best fits your design requirements.
            </p>
            <button>lorem ipsom</button>
          </div>
          <div className="absolute z-30 bg-green-600 bottom-0 right-0  w-80 h-24">
            dd
          </div>
        </div>
     
      </div>
     )
}
export default Header