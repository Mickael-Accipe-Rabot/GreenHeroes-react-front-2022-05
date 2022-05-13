import React from 'react'
import './agir.css'
// import "../../trash-assets/pictures/test-picture.jpg";

const SearchResult = ({img,location,
  title,
  description,
  star,
  price,
  total}) => {

    // const testPicture="../../trash-assets/pictures/test-picture.jpg";


  return (
    <div className='searchResult'>
      <img src={img} alt="" />
<button>button</button>
<div className='searchResult_info'>
      <div className='searchResult_infoTop'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
      </div>
      <div className='searchResult_infoBottom'>
            <div className='searchResult_stars'>
                <button>button</button>
            </div>
            <div className='searchResult_price'>
              <h2>{price}</h2>
              <p>{total}</p>
            </div>

      </div>
</div>
    </div>
  ) 
}

export default SearchResult;