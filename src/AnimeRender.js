import React from 'react';

const AnimeRender = props => {
  console.log(props.detail.results);

  // the problem is props.detials.results is render before the a request compelted by api  calls 
  

    
  const da = props.detail.results != undefined ? props.detail.results.map((url) => {
    console.log(url.url);
    return (<div>
      <img src={url.url} />
    </div>)
  }) : null;
  
 
  return (
    <div>
      {" "}
      
      <img
        src={
          "https://myanimelist.net/anime/10739/Panty___Stocking_in_Sanitarybox"
        }
      />
    </div>
  );
}
export default AnimeRender;