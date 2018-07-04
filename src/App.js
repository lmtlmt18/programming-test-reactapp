import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import axios from 'axios';

//const URL = "http://192.168.0.8:8080/programmingtest/post";
const URL = "https://hn.algolia.com/api/v1/search?query=redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPostList: [],
	  hits: [],
    };
	this.handleClick = this.handleClick.bind(this);
  }


/*
  componentDidMount() {
	var th = this;
//	this.serverRequest = 
//      axios.get(URL)
//        .then(function(result) {    
//          th.setState({
//            blogPostList: result.data.blogPostList
//          });
//        })
		
//	axios.get(URL)
//      .then(res => {
//        const persons = res.data;
//        this.setState({ persons });
//      })
  }
*/
  
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  

  componentDidMount() {
	fetch(URL, {
//	//  mode: 'no-cors',
	  method: 'GET',
	  headers: {
//		'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//		'Accept-Encoding': 'gzip, deflate',
//		'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
//		'Cache-Control': 'max-age=0',
//		'Connection': 'keep-alive',
//		'Content-Type': 'application/json',
//		'Upgrade-Insecure-Requests': '1',
	  }
	}
	)
//	.then(response => response.json())
//	.then(data => {
//console.log("data");
//console.log(data);
//	this.setState({hits : data.hits })}
//	);
	
	.then(response => {
		if (response.ok) {
			response.json().then(data => {
				this.setState({hits : data.hits })
			});
		}
	});
/*
		let blogPostList = data.results.map((post) => {
			return (
				<li>{post.blogPostList.title}</li>
			)
		})
		this.setState({
			blogPostList: blogPostList
		});
		console.log("state", this.state.blogPostList);
*/
//	})

	  
//    var _this = this;
//    axios.get(URL)
//    .then(function(res){
//      _this.setState({
//        blogPostList: res.data.blogPostList
//     });
//    })
//    .catch(function(e) {
//      console.log("ERROR ", e);
//    })
  }

  handleClick = (postID) =>
  {
	console.log(this);
	console.log(postID);
 
	var contentContainer = document.getElementById("blogPostContent"+postID);
	var contentContainer_displayFlag = contentContainer.getAttribute("displayflag");
	if (contentContainer_displayFlag == "0")	// hide before click
	{
		contentContainer.setAttribute("displayflag", "1");
		contentContainer.style.display = "inline";
	}
	else
	{
		contentContainer.setAttribute("displayflag", "0");
		contentContainer.style.display = "none";
	}

  }

  render() {
//	const renderItems = this.state.blogPostList.map(function(item, i) {
//      return <li key={i}>{item.title}</li>
//    });

//<!--		    {this.state.blogPostList}	-->

/*
			{blogPostList.map(blogPost =>
			  <li>{blogPost.title}</li>
			)}
*/

	//const { blogPostList } = this.state;
	
	// {() => this.handleClick(blogPost.objectID)}
	  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blog for AP Test</h1>
        </header>
        <p className="App-intro">
          Blog Posts (Source code: <code>src/App.js</code>)
		</p>
		  <table className="blogPostTable">
			<tbody>
			<tr>
			  <th className="headerDate">Date</th>
			  <th className="headerTitle">Title</th>
			</tr>
			{this.state.hits.map(function(blogPost) {
			  return (
			    <tr key={blogPost.objectID} id={"blogPost"+blogPost.objectID}>
				  <td className="headerDate">{blogPost.created_at}</td>
				  <td className="headerTitle" onClick={() => this.handleClick(blogPost.objectID)} >{blogPost.title}<br />
				  <span id={"blogPostContent" + blogPost.objectID} style={{display: 'none'}} displayflag="0">
					{blogPost.title}
				  </span>
				  </td>
				</tr>
				
			  );
			}, this)}
			</tbody>
          </table>

      </div>
    );
  }
}

export default App;



//<tr id="blogPostContent{blogPost.objectID}" style="display:none;" onclick="showHidePost();" displayflag="0">
//				  <td colspan="2">{blogPost.title}</td>
//				</tr>

//<span id="blogPostContent{blogPost.objectID}" style="display:none;" onclick="showHidePost();" displayflag="0">
//					{blogPost.title}
//				  </span>

// onclick=showHidePost({blogPost.objectID});