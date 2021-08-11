import React from 'react';

const AnimeRender = props => {


    
  const da = props.detail.results !== undefined ? props.detail.results.map((url) => {
    // console.log(url.url);
    return (<div className="render">
      <img src={url.image_url} />
    </div>)
  }) : null;
  
 
  return (
    <div>
      {da}
    </div>
  );
}
export default AnimeRender;