import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import { MovieProvider } from "../context/MovieContext";
import AddMovie from "../form/AddMovie";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<MovieList />}></Route>
          <Route path="/add" element={<AddMovie />}></Route>
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
