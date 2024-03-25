// import { tabFeed } from "../common/interface";

import { useState, useEffect } from "react";
import dayjs from "dayjs";

import { tabFeed } from "../../helper/feed";
import { tabType, dataType } from "../../common/interface";
import { apiGetPost } from "../../service/api.post.service";

import Post from "./Post";
import Skelepost from "../skeleton/Post";

// import { post, about, project } from "../../helper/post";

const Feed = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [dataPost, setDataPost] = useState<dataType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<dataType[]>([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await apiGetPost();
        console.log(response.data);
        setDataPost(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  useEffect(() => {
    const dataSelect = dataPost.filter((item) => {
      const categories = item.categories.map((category) => category.toLowerCase());
      return categories.includes(activeTab.toLowerCase());
    });

    console.log(dataSelect);
    setSelectedCategories(dataSelect);
  }, [activeTab, dataPost]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className={`grid  grid-cols-3 mt-3 border-b-[0.1px] border-b-gray-700`}>
        {tabFeed.map((tab: tabType, index: number) => (
          <div onClick={() => handleTabClick(tab.value)} className={`flex px-2 cursor-pointer md:hover:border md:hover:bg-slate-700 md:hover:border-slate-700 !pb-0 p-1 md:py-3 justify-center items-center`} key={index}>
            <div className={`${activeTab === tab.value ? "border-b-[#d59406] rounded-sm border-b-4 font-semibold text-white" : ""} pb-2 `}>{tab.tabName}</div>
          </div>
        ))}
      </div>
      {selectedCategories.length ? (
        selectedCategories.map((item: dataType, index: number) => <Post link={item.link} cover={item.featured_media} post={item.content} title={item.title} tags={item.tags} date={dayjs(item.date).format("DD MMM YYYY")} key={index} />)
      ) : (
        <Skelepost />
      )}
    </section>
  );
};

export default Feed;
