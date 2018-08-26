import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { Provider } from "./SearchContext";

const petfinder = pf({
  key: "NOT NEEDED ANYMORE",
  secret: "NOT NEEDED ANYMORE"
});

interface State {
  location: string;
  animal: string;
  breed: string;
  breeds: string[];
  handleAnimalChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBreedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getBreeds: () => void;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [] as string[],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }
  public handleLocationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({
        location: event.target.value
      });
    }
  };
  public handleAnimalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState(
        {
          animal: event.target.value
        },
        this.getBreeds
      );
    }
  };
  public handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target instanceof HTMLSelectElement) {
      this.setState({
        breed: event.target.value
      });
    }
  };
  public getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }
  public render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
