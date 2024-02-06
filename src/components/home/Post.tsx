import { profileImage } from "../../helper/feed";
import { MdVerified } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { post } from "../../common/interface";
import ProgressiveImage from "../progresiveImage";
const post = ({ post, image, date }: post) => {
  return (
    <section className="max-w-[900px]">
      <div className="p-2 pr-4 border-b-[0.1px] border-b-gray-700 mb-1">
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
            <div className="text-white">
              <div className="mb-2">{post}</div>
              <div className="max-w-[800px]">
                <ProgressiveImage lowResSrc={image} highResSrc={image} alt="" className="rounded-xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default post;
