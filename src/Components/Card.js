import React from 'react';

const Card = ({ data }) => {

  if (!data || data.length === 0) {
    return <h2>Loading...</h2>;
  }

  const readMore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => (
        <div className='card' key={index}>
          <img src={curItem.urlToImage} alt="news" />
          <div className='content'>
           <a
  className='title'
  href={curItem.url}
  target="_blank"
  rel="noreferrer"
>
  {curItem.title}
</a>

            <p>{curItem.description}</p>

            <button onClick={() => readMore(curItem.url)}>
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
