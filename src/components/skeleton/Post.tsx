const skelepost = () => {
  return (
    <div>
      <div className="p-4 pt-4">
        <div className="flex gap-4">
          <div className="skeleton w-14 h-14 rounded-full shrink-0"></div>
          <div className="w-full">
            <div className="skeleton h-4 mb-2 w-auto"></div>
            <div className="skeleton h-44 pl-8 w-full"></div>
          </div>
        </div>
      </div>
      <div className="p-4 pt-4">
        <div className="flex gap-4">
          <div className="skeleton w-14 h-14 rounded-full shrink-0"></div>
          <div className="w-full">
            <div className="skeleton h-4 mb-2 w-auto"></div>
            <div className="skeleton h-44 pl-8 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skelepost;
