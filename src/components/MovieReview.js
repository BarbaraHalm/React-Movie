import React, { Component } from 'react';
import {Col} from "react-bootstrap";

class MovieReview extends Component {

  constructor(props) {
    super();
    this.state = { lifecycle: [] };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&opening-date=1980-01-01:1990-01-01&api-key=aSJrHj6YrcaqGqnQKjz1UkWSpRhVhODT"
    )
      .then((res) => {
        res.json().then((movieinfo) => {
          this.setState({ lifecycle: movieinfo.results });
          console.log(movieinfo);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 style={{color: 'green',textAlign:"Center", fontStyle:"italic",}}>Movie Reviews App</h2>
        {this.state.lifecycle.map((item, index) => {
          return (
            //<Row md="12">
              <Col md="6">
            <div key={index} style={{background:"lightgrey", color: "black" ,outlineStyle:"dashed",borderBottomLeftRadius:"20px", marginLeft: "550px",
            borderTopRightRadius:"20px",height: "170px", width: "300px",fontSize:"15px",padding:"10px 20px", marginBottom: "15px",marginRight:"100px"}}>
              <h4> Byline:  {item.byline} </h4>
              <h4>  Critic Pick:  {item.critics_pick} </h4>
              <h4>  Title :  {item.display_title} </h4>
              <h4>  Headline :  {item.headline} </h4>
            </div>
            </Col>
            //</Row>
          );
        })}
      </div>
    );
  }
}

export default MovieReview;





























//import React, { Component } from 'react';
//import {Row,Col} from "react-bootstrap";

//class MovieReview extends Component {
    //constructor(props){
       // super()
        //this.state={movie:[]}
    //}
     //componentDidMount(){
        //fetch
          //("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&opening-date=1980-01-01:1990-01-01&api-key=aSJrHj6YrcaqGqnQKjz1UkWSpRhVhODT")
          //.then((moviedata) => 
             // {moviedata.json().then(()=>
                //{ this.setState({movie:moviedata.results})
                   // console.log(moviedata)
          //});
      // }).catch((error)=>{console.log(error)
    //});
     //}
   
     //render() {
        //return (
          //<div>
            //<h2>Movie Reviews App</h2>
            //{this.state.movie.map((item, index) => {
              //return (
            
                //<div key={item.id}>
                    //<Col md="6">
                  //<h5><strong> Byline: </strong> {item.byline} </h5>
                  //<h5> <strong> Critic Pick: </strong> {item.critics_pick} </h5>
                  //<h5> <strong> Title : </strong> {item.display_title} </h5>
                  //<h5> <strong> Headline : </strong> {item.headline} </h5>
                  //<hr/>
                  //</Col>
                //</div>
            
              //);
            //})}
          //</div>
        //);
      //}
    //}
 
//export default MovieReview