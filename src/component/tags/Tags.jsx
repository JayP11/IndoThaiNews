import React, { useState } from "react";
import "./Tags.css";
import axios from "axios";

const Tags = () => {

  const data = [
    {
      tag: "Business",
    },
    {
      tag: "Sports",
    },
    {
      tag: "Lifestyle",
    },
    {
      tag: "Politics",
    },
    {
      tag: "Entertainment",
    },
    {
      tag: "World",
    },
    {
      tag: "Technology",
    },
    {
      tag: "National",
    },

    {
      tag: "Travel",
    },
  ];
  return (
    <div>
      <div>
        <h2>Tags</h2>
      </div>
      <div className="PopularPost_line_main">
        <div className="PopularPost_line_inner1"></div>
        <div className="PopularPost_line_inner2"></div>
      </div>
      <div className="tags_design_outer">
        {data.map((item) => {
          return (
            <>
              <div className="tags_design_main">
                <h4>{item.tag}</h4>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
