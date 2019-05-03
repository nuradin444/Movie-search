import React from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={}
    // console.log("This is my intializer")

  //   const movies = [
  //     {id: 0, poster_src:"https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg", title: "Avengers: infinity war", overview: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos"},
  //     {id: 1, poster_src:"https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",title: "The Avengers", overview: "This is my second overrview"},

  //   ]


  //  var movieRows = []
  // movies.forEach((movie) =>{
  //   console.log(movie.title)
  //   const movieRow = <MovieRow movie={movie} />
  //   movieRows.push(movieRow)
  // })    
  //  this.state ={rows: movieRows}

  this.performSearch("ant man")
  }
 performSearch(searchTerm){
   console.log("Perform search using moviesDB");
  const urlString="https://api.themoviedb.org/3/search/movie?api_key=b13f06a3bfa03497f6b411877de56d9a&query=" + searchTerm
   $.ajax({
  url: urlString,
  success: (searchResults) =>{
    console.log("Fetched data successfully")
   // console.log(searchResults)
    const results = searchResults.results
   // console.log(results[0])

   var movieRows = []
// using the api call to display the movies images along with searched terms
    results.forEach((movie) =>{
      movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
     // console.log(movie.poster_path)
      const movieRow = <MovieRow key={movie.id} movie={movie}/>
      movieRows.push(movieRow)
    })

    this.setState({rows: movieRows})
  },
    error: (xhr, status, err) => {
    console.log("Failed to fetch data")
    }
   })
 }
// get the data to perform the search and check if it displays 
 searchChangeHandler(event){
   console.log(event.target.value)
   const boundobject = this
   const searchTerm = event.target.value
   boundobject.performSearch(searchTerm)
 }

  // Display the banner and logo
  render(){
  return (
    <div>
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt = "This is a banner" height="70" width="90" src="https://image.flaticon.com/icons/svg/1666/1666708.svg"/>
               </td>
                <td width="8"/>
                <td>
              <h1>Movie Search</h1>
              </td>
              </tr>
</tbody>
{/* used to display the search the bar */}
      </table>
     <input style={{
       fontSize: 24,
       display: 'block',
       width: '98%',
       paddingTop: 8,
       paddingBottom: 8,
       paddingLeft: 16
     }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

     {this.state.rows}
     
      
    </div>
  );
}
}
export default App;
