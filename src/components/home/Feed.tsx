// import { tabFeed } from "../common/interface";
import { tabFeed } from "@/helper/feed";
import { useState} from "react";
import {  tabType, selectedType } from "@/../common/interface";
import Post from "./Post";
import { post, about, project } from "@/helper/post";

const Feed = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const selectedData = activeTab === "feed" ? post : activeTab === "about" ? about : project;
  return (
    <section>
      <div className={`grid grid-cols-3 mt-3 border-b-[0.1px] border-b-gray-700`}>
        {tabFeed.map((tab: tabType, index: number) => (
          <div onClick={() => handleTabClick(tab.value)} className={`flex px-2 cursor-pointer md:hover:border md:hover:bg-slate-700 md:hover:border-slate-700 !pb-0 p-1 md:py-3 justify-center items-center`} key={index}>
            <div className={`${activeTab === tab.value ? "border-b-[#d59406] rounded-sm border-b-4 font-semibold text-white" : ""} pb-2 `}>{tab.tabName}</div>
          </div>
        ))}
      </div>
      {selectedData.map((item: selectedType, index: number) => (
        <Post post={item.post} image={item.image} date={item.date} key={index} />
      ))}
    </section>
  );
};

export default Feed;
