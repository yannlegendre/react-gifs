import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'CjmvTCZf2U3p09Cn0h'
    };
  }

  searchFunction = (keyword) => {
    const apiKey = 'qw7rAv09UbVfGNG77D7VMG8StFGV5Txk';
    giphy(apiKey).search({
      q: keyword,
      rating: 'g',
      limit: 20
    }, (_, res) => {
      this.setState({ gifs: res.data });
    });
  }

  updateSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.searchFunction} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} updateSelectedGif={this.updateSelectedGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
