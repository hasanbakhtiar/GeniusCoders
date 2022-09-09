import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { MovieContext } from "../context/MovieContext";
import Movie from "../pages/Movie";

const AddMovie = () => {
  const [moname, setName] = useState("");
  const [moprice, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updatePrice = (event) => {
    let fp = event.target.value;
    fp < 5 ?  setPrice(0) :   setPrice(fp);
  };

  const addMovie = (e) => {
    e.preventDefault();
   
    window.history.pushState(setMovies(prevMovies=>[...prevMovies,{name:moname,price:moprice}]), undefined, "/movies")
  };
  return (
    <div className="mt-5 container">
      <h3>Add Movies</h3>
      <form onSubmit={addMovie}>
        <div>
          <input
            type="text"
            className="mt-3"
            onChange={updateName}
            placeholder="enter name"
          />
        </div>
        <div>
          <input
            type="text"
            className="mt-3"
            onChange={updatePrice}
            placeholder="enter price"
          />
        </div>
        <div>
          <button className="mt-3 btn btn-success">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
