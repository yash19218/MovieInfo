import React  from "react";
import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount(){
    //make an API call
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("Store",store.getState());
  }
  render(){
    console.log("RENDER");
    const {list} = this.props.store.getState();//[] -> {list:[],fav:[]}
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
        </div> 
        <div className="list">
          {
            list.map((movie,index) => (
              <MovieCard movie={movie} key={`movie-${index}`}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default  App;
