import React from 'react';
import axios from 'axios';
import AnimeRender from './AnimeRender';

class AnimeInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      data: [],
      term:""
      
    }
    
  }
  
  async componentDidMount() {
   
      const apiData = await axios.get(
        "https://api.jikan.moe/v3/search/anime?q=tokyoghoul"
        
      );
    console.log(apiData.data.results)
    this.setState((this.state.data ,apiData.data));
    
  }


  render() {
    
    return (
      <div>
        <form >
          <input type="text"
            value={this.state.term}
            // onChange={e => this.setState((this.state.term, e.target.value))} 
            
            />
        </form>

        <AnimeRender detail={this.state} />
        {console.log(this.state)}
      </div>
    );
  }
  
}
export default AnimeInfo;