import React from 'react';

class MovieRow extends React.Component{
  viewMovie(){
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    //this calls the api and displays the movie the user searched for
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }
// creating the tables to hold the data coming from the api
    render(){
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
           <img alt="poster"src={this.props.movie.poster_src}/>
            </td>
            <td>  
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <input class= "myButton"type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
        
            </table>
    }

}

export default MovieRow