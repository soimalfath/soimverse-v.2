// import { tabFeed } from "../common/interface";
import { tabFeed } from "../../helper/feed";
import { useState } from "react";
const Feed = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <section>
      <div className={`grid grid-cols-${tabFeed.length} mt-3 border-b border-b-secondary`}>
        {tabFeed.map((tab, index) => (
          <div onClick={() => handleTabClick(tab.value)} className={`flex px-2 cursor-pointer md:hover:border md:hover:bg-slate-700 md:hover:border-slate-700 !pb-0 p-1 md:py-3 justify-center items-center`} key={index}>
            <div className={`${activeTab === tab.value ? "border-b-[#d59406] border-b-4 font-semibold text-white" : ""} pb-3 `}>{tab.tabName}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
