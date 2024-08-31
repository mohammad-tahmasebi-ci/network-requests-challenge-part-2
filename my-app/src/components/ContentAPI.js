import React, { Component } from "react";
import axios from "axios";
import API_KEY from '../secrets'
import PostItemAPI from "./PostItemAPI";

class ContentAPI extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       isLoaded: false,
       filteredPosts: [],
    }
  }

    componentDidMount() {
      this.fetchImages();
    }

   async fetchImages() {
      const response = 
        await axios.get('https://pixabay.com/api/?key=45663614-e00a7fbe886c1af81dbbfb94f&per_page=100'); 
      const fetchedPosts = Array.isArray(response.data.hits) 
          ? response.data.hits 
          : [response.data.hits] 
      this.setState({ posts: fetchedPosts });
      this.setState({ isLoaded: true });  
    }

  handelChange = (event) => {
    const inputText = event.target.value.toLowerCase()
    const filteredPosts = this.state.posts.filter(post => {
        return post.type.toLowerCase().includes(inputText)
    })
    this.setState({
        filteredPosts: filteredPosts
    })

  }

  render() {
  return (
    <div>
        <input type='text' id="search" name='search' placeholder='Artwork type: photo' onChange={this.handelChange} />
        {
        this.state.filteredPosts.map(post => 
        <form key={post.id}>
          <PostItemAPI apost={post} />
          <hr />
        </form>
      )}
    </div>
  )}
}
export default ContentAPI
