import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

interface Props {
  search: () => void;
}

class Search extends React.Component<Props> {
  public render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <label htmlFor="location">
              Location
              <input
                id="location"
                onChange={context.handleLocationChange}
                value={context.location}
                placeholder="Location"
              />
            </label>
            <label htmlFor="animal">
              Animal
              <select
                id="animal"
                value={context.animal}
                onChange={context.handleAnimalChange}
                onBlur={context.handleAnimalChange}
              >
                <option />
                {ANIMALS.map(animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="breed">
              Breed
              <select
                disabled={!context.breeds.length}
                id="breed"
                value={context.breed}
                onChange={context.handleBreedChange}
                onBlur={context.handleBreedChange}
              >
                <option />
                {context.breeds.map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={this.props.search}>Submit</button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Search;
