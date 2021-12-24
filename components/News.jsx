export const News = ({ news: { articles } }) => {
  console.log(articles);
  return (
    <div>
      <div className="grid grid-cols-4">
        {articles.map((each, index) => (
          <div key={index} className="flex flex-col max-w-xs mr-3">
            <div className="bg-cover">
              <img
                src={each.urlToImage}
                alt="news photo"
                className="h-48 min-w-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold">{each.title}</h3>
              <small className="text-gray-400">
                {each?.author ? each?.author : each?.source?.name}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
