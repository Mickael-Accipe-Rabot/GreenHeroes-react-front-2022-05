import React from 'react';
import "./agir.css";
import SearchResult from "./SearchResult";
import "../../assets/pictures/test-picture2.png";


function DesktopCard() {

  const testPicture="../../assets/pictures/test-picture2.png";

  return (
    <div className='desktopCard'>
        <div className='desktopCard_info'>
       
        </div>
        <div className='searchResult'>
      <img src={testPicture} alt="" />
<button>button</button>
<div className='searchResult_info'>
      <div className='searchResult_infoTop'>
          <p>location</p>
          <h3>title</h3>
          <p>___</p>
          <p>description</p>
      </div>
      <div className='searchResult_infoBottom'>
            <div className='searchResult_stars'>
                <button>button</button>
            </div>
            <div className='searchResult_price'>
              <h2>price</h2>
              <p>total</p>
            </div>

      </div>
</div>
    </div>   
    </div>
  )
}

export default DesktopCard;