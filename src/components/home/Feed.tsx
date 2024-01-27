// import { tabFeed } from "../common/interface";
const Feed = () => {
  return (
    <section>
      <div className="grid grid-cols-3 mt-3">
        <div className="flex cursor-pointer hover:border hover:bg-slate-700 hover:border-slate-700 p-1 py-3 justify-center">
          Feed
        </div>
        <div className="flex cursor-pointer hover:border hover:bg-slate-700 hover:border-slate-700 p-1 py-3 justify-center">Project</div>
        <div className="flex cursor-pointer hover:border hover:bg-slate-700 hover:border-slate-700 p-1 py-3 justify-center">About Me</div>
      </div>
    </section>
  );
};

export default Feed;
