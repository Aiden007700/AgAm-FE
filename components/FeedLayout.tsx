import complexData from "../data/complex";
import simpleData from "../data/simple";

const FeedLayout = ({ type }: IFeedLayout) => {
  const data = type === "Complex" ? complexData : simpleData;

  return (
    <div className="py-3 px-3">
      {data.map((item, index) => (
        <div className="shadow-lg rounded-2xl p-4 bg-white relative overflow-hidden my-6">
          <div className="flex justify-between">
            <p className="text-gray-800 text-lg font-medium mb-2">
              {item.id} {item.name}
            </p>
            <p className="text-indigo-500 text-xl font-medium">{item.type}</p>
          </div>
          {item.data.map((el, index) => (
            <p className="text-gray-400 text-xs">
              {el}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export interface IFeedLayout {
  type: string;
}

export default FeedLayout;
