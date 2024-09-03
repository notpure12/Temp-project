import React from "react";
import WordCloud from "react-d3-cloud";
import data from "../assets/data/data.json";
import "../styling/Wordcloud.css";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const Wordcloud = () => {
  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
  return (
    <div className="wordcloud-wrapper">
      <WordCloud
        spiral="rectangular"
        fill={(d: any, i: string) => schemeCategory10ScaleOrdinal(i)}
        data={data}
        width={250}
        height={150}
        rotate={0}
        padding={0}
      />
    </div>
  );
};

export default Wordcloud;
