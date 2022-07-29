import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotel/countByCity?cities=rajkot,mumbai,morbi"
  );

  return (
    <div className="featured">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.wendywutours.com.au/resource/upload/1283/banner-shimla.jpg.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Shimla</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/00/156900-050-0F6F1707/building-Bengaluru-India-Karnataka.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangaluru</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://assets-news.housing.com/news/wp-content/uploads/2020/03/04121106/Hinjewadi-Pune-IT-hubs-drive-demand-for-residential-properties-FB-1200x700-compressed.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Pune</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
