import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified, MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin, AiOutlineEllipsis } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { TbNotes } from "react-icons/tb";
import { SiMedium } from "react-icons/si";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div>
          <img src="https://veilannastore.com/wp-content/uploads/2024/01/generate-image-ilustration-about-digital-marketing-finance-programing-1.png" alt="" className="w-[900px] h-[200px] object-cover" />
        </div>
        <div className="flex justify-between">
          <div className="avatar mt-[-15%] md:mt-[-8%] ml-3">
            <div className="lg:w-32 w-28 rounded-full border-4 border-base-100">
              <img src="https://veilannastore.com/wp-content/uploads/2024/01/117827510.png" />
            </div>
          </div>
          <div className="flex gap-2 mr-4 mt-3">
            <details className="dropdown dropdown-bottom">
              <summary className="btn flex items-center btn-sm btn-outline btn-circle bg-inherit ">
                <div>
                  <AiOutlineEllipsis className="text-lg" />
                </div>
              </summary>
              <ul className="p-0 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-auto">
                <li>
                  <a id="resume">
                    <TbNotes /> Resume
                  </a>
                </li>
                <li>
                  <a id="medium" onClick={() => window.open("https://medium.com/@soimverse", "_blank")}>
                    <SiMedium /> Medium
                  </a>
                </li>
              </ul>
            </details>
            <button id="email" onClick={() => window.open("mailto:soimkmpbg@gmail.com", "_blank")} className="btn-circle btn btn-sm  btn-outline ">
              <MdOutlineEmail className="text-lg" />
            </button>
            <button id="linkedin" onClick={() => window.open("https://www.linkedin.com/in/soim-alfath/", "_blank")} className="btn-circle btn-sm btn-outline btn">
              <AiFillLinkedin className="text-2xl" />
            </button>
            <button id="twitter" onClick={() => window.open("https://twitter.com/mbuhsapaaaaa", "_blank")} className="btn btn-sm bg-[#daa20e] text-base-100 hover:bg-inherit hover:text-white rounded-badge btn-outline">
              <div className="flex items-center gap-2">
                {" "}
                Follow
                <FaXTwitter className="" />
              </div>
            </button>
          </div>
        </div>
        <div className="ml-3 mt-4">
          <div className="font-semibold text-2xl text-white flex gap-1 items-baseline md:items-center">
            Soim Alfath <MdVerified className="text-[#daa20e] text-base md:text-xl" />
          </div>
          <div className="flex text-sm items-baseline gap-1 text-[#8899A6] mb-2"> @mbuhsapaaa</div>
          <div className="text-md text-white">Digital Marketer | Frontend Developer | Finance Management Eanthusiast</div>
          <div className="flex gap-4 text-slate-400 mt-2">
            <div className="flex items-baseline text-sm gap-1 text-[#8899A6]">
              <HiOutlineLocationMarker className="text-sm" /> Purbalingga, Central Java, Indonesia
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
