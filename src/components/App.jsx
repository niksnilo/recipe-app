import React, { useEffect, useState } from "react";
import Card from "./Card";
import Nav from "./Nav";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  const { REACT_APP_ID, REACT_APP_KEY } = process.env;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);
  async function getRecipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  function updateSearch(event) {
    setSearch(event.target.value);
  }

  function getSearch(event) {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={getSearch} className="search-form mb-5">
              <input
                type="text"
                className="search-bar"
                value={search}
                onChange={updateSearch}
              />
              <button type="submit" className="btn btn-search">
                Search
              </button>
            </form>
          </div>
          {/* {recipes.map((recipe, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <Recipe
                    id={index}
                    key={index}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.url}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                  />
                </div>
              </div>
            </div>
          ))} */}
        </div>
        <Card recipes={recipes} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
