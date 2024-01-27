import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified, MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div>
          <img
            src="https://veilannastore.com/wp-content/uploads/2024/01/generate-image-ilustration-about-digital-marketing-finance-programing-1.png"
            alt=""
            className="w-[900px] h-[200px] object-cover"
          />
        </div>
        <div className="flex justify-between">
          <div className="avatar mt-[-15%] md:mt-[-8%] ml-3">
            <div className="w-32 rounded-full border-4 border-base-100">
              <img src="https://veilannastore.com/wp-content/uploads/2024/01/117827510.png" />
            </div>
          </div>
          <div className="flex gap-2 mr-4 mt-3">
            <button className="btn-circle btn btn-sm  btn-outline ">
              <MdOutlineEmail className="text-lg" />
            </button>
            <button className="btn-circle btn-sm btn-outline btn">
              <AiFillLinkedin className="text-2xl" />
            </button>
            <button className="btn btn-sm rounded-badge btn-outline">
              <div className="flex items-center gap-2">
                {" "}
                Follow
                <FaXTwitter className="" />
              </div>
            </button>
          </div>
        </div>
        <div className="ml-3 mt-4">
          <div className="font-semibold text-2xl text-white flex gap-1 items-center">
            Soim Alfath <MdVerified className="text-[#d59406] text-md" />
          </div>
          <div className="flex text-sm items-baseline gap-1 text-[#8899A6] mb-2">
            {" "}
            @mbuhsapaaa
          </div>
          <div className="text-md text-white">
            Digital Marketer | Frontend Developer | Finance Management
            Eanthusiast
          </div>
          <div className="flex gap-4 text-slate-400 mt-2">
            <div className="flex items-baseline text-sm gap-1 text-[#8899A6]">
              <HiOutlineLocationMarker className="text-sm" /> Purbalingga,
              Central Java, Indonesia
            </div>
            <div className="flex items-baseline text-sm gap-1 text-[#8899A6]">
              <SlCalender className="text-sm" /> Since 2018
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
