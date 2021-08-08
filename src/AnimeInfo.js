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
  
  componentDidMount() {
     
    const data = async() => {
      const apiData = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.state.term}`);
      console.log(apiData.config.url)
      
        
        this.setState({ data: apiData.data }); 
      
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
   
    
     this.setState({ term: e.target.value });
    // const timeStamp = setTimeout((e)=>{
      
    //   this.setState({term:e.target.value})
    // }, 2000)
    // return () => {
    //   clearTimeout(timeStamp);
    // }
    
  }


  render() {
    console.log(this.state.term)
    return (
      <div className="inpu">
          
          <input
            type="text"
            placeholder="search"
            value={this.state.term}
            onChange={this.setTerm}
          />
       

        <AnimeRender detail={this.state} />
        {console.log(this.state)}
      </div>
    );
  }
  
}
export default AnimeInfo;