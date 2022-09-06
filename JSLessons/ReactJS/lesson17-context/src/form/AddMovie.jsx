import React from "react";

const AddMovie = () => {
  return (
    <div className="mt-5 container">
        <h3 >Add Movies</h3>
      <form >
        <div>
          <input type="text" className="mt-3" placeholder="enter name"/>
        </div>
        <div>
          <input type="text" className="mt-3" placeholder="enter price"/>
        </div>
        <div>
          <button className="mt-3 btn btn-success">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
