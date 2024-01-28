import { profileImage } from "../../helper/feed";
import { MdVerified } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
const post = () => {
  return (
    <section>
      <div className="p-2 pr-4 border-b-[0.1px] border-b-gray-700">
        <div className="flex gap-4 pb-2">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img src={profileImage} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <div className="text-white font-semibold">Soim Alfath</div>
              <MdVerified className="text-[#daa20e] text-base" />
              <div className="text-[#8899A6]">@mbuhsapaaa</div>
              <div className="text-[#8899A6] flex items-center ml-1 md:ml-0">
                <TbPointFilled className="text-xs" />
                28 Jan 2024
              </div>
            </div>
            <div className="text-white">
              <div className="mb-1">Welcome to my Universe</div>
              <div className="">
                <img className="rounded-xl w-full" src="https://veilannastore.com/wp-content/uploads/2024/01/e0335443-5ab5-4b57-b067-7ee03a23a0ef.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default post;
