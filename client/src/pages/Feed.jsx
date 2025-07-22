import arr from "../../mockData.js";

const Feed = () => {
  const moments = arr;

  return (
    <div className="w-full min-h-screen bg-black">
        <div className="max-w-[300px] w-full mx-auto pt-10 text-center border-b border-green-600 pb-1">
            <h1 className="text-white md:text-4xl text-2xl font-extralight">
                Today's Feed!
            </h1>
        </div>
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto p-4">
        {moments.map((moment) => (
          <div key={moment.id} className="rounded overflow-hidden shadow-lg">
            <img
              src={moment.download_url}
              alt={`By ${moment.author}`}
              className="h-60 w-80 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
