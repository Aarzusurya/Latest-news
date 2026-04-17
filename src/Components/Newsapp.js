import React, { useState, useEffect } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY; // ⚠️ apni API key yaha daalna

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );

    const jsonData = await response.json();
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
    setTimeout(() => {
      getData();
    }, 500);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Latest News</h1>
        </div>

        // <ul>
        //   {/* ✅ anchor fix */}
        //   <a href="#">All News</a>
        //   <a href="#">Trending</a>
        // </ul>

        <div className='searchBar'>
          <input
            type='text'
            placeholder='Search News'
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className='head'>Stay Updated with Latest News</p>
      </div>

      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {newsData && <Card data={newsData} />}
      </div>
    </div>
  );
};

export default Newsapp;
