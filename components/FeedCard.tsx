import { useState } from "react";

const FeedCard = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className="shadow-lg rounded-2xl p-4 bg-white relative overflow-hidden my-6"
      onClick={() => setShowDescription(!showDescription)}
    >
      <div className="flex justify-between">
        <p className="text-gray-800 text-lg font-medium mb-2">
          {item.id} {item.name}
        </p>
        <p className="text-indigo-500 text-xl font-medium">{item.type}</p>
      </div>
      {showDescription && (
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
      )}
    </div>
  );
};

export default FeedCard;
