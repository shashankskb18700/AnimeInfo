import React from 'react';

const AnimeRender = props => {
  console.log(props);

  // the problem is props.detials.results is render before the a request compelted by api  calls 
   

    
  const da = props.detail.results !== undefined ? props.detail.results.map((url) => {
    console.log(url.url);
    return (<div>
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