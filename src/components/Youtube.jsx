import React, { Component } from "react";
import searchYouTube from "/Volumes/External Drive/Projects/youtube/node_modules/youtube-search-api-with-axios";
import "./css/Youtube.css";

class Youtube extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      term: "React Js"
    };
  
  }

componentDidMount(){
  this.handleApiCall();
}



 handleApiCall = () => {
    const API_KEY = "AIzaSyCmu4FBeYC4h4qcXekfmba2CMEOM4ziBEw";
    const keyword = `${this.state.term}`;
    console.log('key',keyword);
    searchYouTube(
      {
        key: API_KEY,
        q: keyword,
        maxResults: 15,
        publishedAfter: "2017-08-01T00:00:00Z"
      },
      videos => {
        this.setState({ videos });
      }
    );
  }
  
  render() {
    return (
      <div className="movieBin">
        {this.state.videos.map((videos, i) => (
          <div key={videos.etag} className="movie card shadow">
            <img
              className="card-img-top thumb"
              key={videos.etag}
              src={videos.snippet.thumbnails.high.url}
              alt={videos.snippet.title}
            />
            <div className="card-body">
              <h5 className="card-title">{videos.snippet.title}</h5>
              <p className="card-text">{videos.snippet.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${videos.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="vidbtn btn bg-danger"
              >
                Start Learing...
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Youtube;
