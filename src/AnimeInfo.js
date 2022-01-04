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
      val:"",
      url: ""
      
    }
    
  }
  
  componentDidUpdate() {
  
     
    const data = async () => {
      
      const apiData = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.state.term}`); 
      // console.log(apiData)
      if (this.state.url !== apiData.config.url) { 
        this.setState({ data: apiData.data });
        this.setState({term:''})
      }  
    }
    
    
    if (this.state.term.length === 0) {
        console.log(' ')
    } else {
      console.log('ye else hai ')
      const timeoutId = setTimeout(() => {
        if (this.state.term) {
          data();
        }
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    } 
  }

  setTerm = (e) => {
    const searchTerm = e.target.value
   
    let ur= `https://api.jikan.moe/v3/search/anime?q=${searchTerm.replace(" ",'%20')}&limit=4`
    this.setState({ term: e.target.value });
    this.setState({ val: e.target.value });
    this.setState({ url: ur });
   
    
  }


  render() {
    
    
    return (
      <div className="inpu">
          
          <input
            type="text"
            placeholder="search"
            value={this.state.val}
            onChange={e=>this.setTerm(e)}
          />
          <button onClick={()=> console.log(this.event.target)}>button</button>
        
        <AnimeRender detail={this.state.data} />
      
      </div>
    );
  }
  
}
export default AnimeInfo;