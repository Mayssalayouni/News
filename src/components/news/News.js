import React, { useEffect, useState } from "react";
import "./News.css"

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="titre">
    <h3 className="text">Maladies Animales : Actualités</h3>
    </div>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div class="card" style={{  marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px"}}>
              <div class="card-body">
                <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
                <p class="card-text">
                 {ele.title}
                </p>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default News;
