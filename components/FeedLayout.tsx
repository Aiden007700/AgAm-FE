import { useEffect, useState } from "react";
import { getProjects } from "../utils/api";
import FeedCard from "./FeedCard";

const FeedLayout = ({ type }: IFeedLayout) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProjects(type).then((data) => setData(data));
  }, []);

  return (
    <div className="py-3 px-3">
      {data.map((item, index) => <FeedCard item={item} key={item.id} />)}
    </div>
  );
};

export interface IFeedLayout {
  type: "Complex" | "Simple";
}

export default FeedLayout;
