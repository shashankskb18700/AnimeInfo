import React from 'react';
import axios from 'axios';
import AnimeRender from './AnimeRender';
import './AnimeInfo.css';

class AnimeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      term: ""
      
    }
    
  }
  
  async componentDidUpdate() {
   
    const apiData = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.state.term}`);
    console.log(apiData.data.results)
    this.setState({ data: apiData.data });
    
  }
  setTerm = (e) => {
      
    this.setState({term:e.target.value})
    
  }


  render() {
    console.log(this.state.data)
    return (
      <div>
        <form onSubmit={this.setTerm} className='inpu'>
          <input type="text"
            
            placeholder="search"
            value={this.state.term}
            onChange={this.setTerm} 
            
            />
        </form>

        <AnimeRender detail={this.state} />
        {console.log(this.state)}
      </div>
    );
  }
  
}
export default AnimeInfo;