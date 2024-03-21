import { profileImage } from "../../helper/feed";
import { MdVerified } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { PiShareNetwork } from "react-icons/pi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

import { post } from "../../common/interface";
import ProgressiveImage from "../progresiveImage";
const post = ({ post, date, cover, link }: post) => {
  const handleClick = (link: string) => {
    window.open(link);
  };
  return (
    <section className="max-w-[900px]">
      <div onClick={() => handleClick(link)} className="p-2 pr-4 border-b-[0.1px] border-b-gray-700 mb-1">
        <div className="flex gap-4 pb-2">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <ProgressiveImage lowResSrc={profileImage} highResSrc={profileImage} alt="" className="" />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1">
              <div className="text-white font-semibold">Soim Alfath</div>
              <MdVerified className="text-[#daa20e] text-base" />
              <div className="text-[#8899A6]">@mbuhsapaaa</div>
              <div className="text-[#8899A6] flex items-center ml-1 md:ml-0">
                <TbPointFilled className="text-xs" />
                {date}
              </div>
            </div>
            <div className="text-white !max-w-full">
              <div className="flex flex-wrap ">
                <div className="mb-2 !max-w-full flex flex-wrap" dangerouslySetInnerHTML={{ __html: post }} />
                <p className="relative text-blue-500">Show More</p>
              </div>
              <div className="max-w-[800px] mt-1">
                <ProgressiveImage lowResSrc={cover} highResSrc={cover} alt="" className="rounded-xl w-full" />
              </div>
            </div>
            <div className="flex justify-between px-2 gap-1 mt-3">
              <FaRegComment /> <FaRegHeart /> <VscGraph /> <PiShareNetwork />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default post;
