import story from "../Images/story.jpeg"
import group from "../Images/Vector.png";

const Testimonial = () => {
  return (
    <div className="relative    border-2 border-[#424242] space-y-20 bg-[#2E2D2E] px-28 py-10   text-white  max-w-[1229px]  mx-auto   rounded-[60px]">
      <div className="flex flex-col gap-4 ">
        <p className="text-4xl leading-7 font-bold">Crypfennec.</p>
        <p className="text-base font-bold leading-5  text-[#7B7B7B]">
          CrypFennecs are an innovative collection of NFTs designed to captivate
          collectors with their unique appearances and attributes. These digital
          creatures are intricately crafted, and their individual qualities are
          brought to life in the imaginative world of Bayra. CrypFennecs serve
          as the heart of the platform, ushering in a new era of NFT utility and
          interaction.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="border relative">
            <div className="absolute top-0 right-0">text</div>
          <img src={group} />
        </div>
        <div>
          <img src={group} />
        </div>
        <div>
          <img src={group} />
        </div>
      </div>
      {/* <div className="relative rounded-[100px]   border-2 border-[#0851DF] z-50 h-[600px] w-[500px] bg-bayra-story bg-center bg-cover ">
        <div className="absolute w-[40px] h-[20px] left-[71%] top-0 inset-0 z-10 bg-[#2E2D2E] "></div>
        <div className="absolute top-0 right-0 z-50 h-32  w-32 bg-[#2E2D2E]  rounded-bl-[100px]    ">
          <img
            src={group}
            alt=""
            className="bg-[#0851DF] rounded-full mt-5 ml-8 p-4  "
          />
          <div className="absolute top-0 right-[8rem] rounded-tr-[100px] w-5 h-7 bg-[#0851DF]"></div>
          <div className="absolute w-[16px] h-[20px] left-[87.6%] top-[8rem] inset-0 z-10 bg-yellow-400 "></div>
          <div className="absolute top-[8rem] right-[0rem] z-50 rounded-tr-[100px] w-5 h-7 bg-red-500"></div>
        </div>
        <div className="absolute top-0 right-0 w-5 h-8 bg-white rounded-tr-[100px]"></div>
      </div> */}
      <div>bottm</div>
    </div>
  );
};
export default Testimonial;
