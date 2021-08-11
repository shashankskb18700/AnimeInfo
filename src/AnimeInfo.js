import React from 'react';
import axios from 'axios';
import AnimeRender from './AnimeRender';
import './AnimeInfo.css';

class AnimeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      term: "",
      url: ""
      
    }
    
  }
  
  componentDidUpdate() {
     
    const data = async() => {
      const apiData = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.state.term}`);
      
      if (this.state.url !== apiData.config.url) {
        
        this.setState({ data: apiData.data }); 
      }
     
      
      
    }
    
    
    if (this.state.term === 0) {
      data();
    } else {
      const timeoutId = setTimeout(() => {
        if (this.state) {
          data();
        }
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    } 
  }

  setTerm = (e) => {
   
    let ur= `https://api.jikan.moe/v3/search/anime?q=${e.target.value}`
    this.setState({ term: e.target.value });
    this.setState({ url: ur });
   
    
  }


  render() {
    
    return (
      <div className="inpu">
          
          <input
            type="text"
            placeholder="search"
            value={this.state.term}
            onChange={this.setTerm}
          />
       

        <AnimeRender detail={this.state.data} />
      
      </div>
    );
  }
  
}
export default AnimeInfo;