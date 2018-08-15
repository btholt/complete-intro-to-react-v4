import React from "react";
import { ANIMALS } from "petfinder-client";

class Search extends React.Component {
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={this.props.handleCityStateChange}
            value={this.props.cityState}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={this.props.animal}
            onChange={this.props.handleAnimalChange}
            onBlur={this.props.handleAnimalChange}
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
            disabled={!this.props.breeds.length}
            id="breed"
            value={this.props.breed}
            onChange={this.props.handleBreedChange}
            onBlur={this.props.handleBreedChange}
          >
            <option />
            {this.props.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default Search;
