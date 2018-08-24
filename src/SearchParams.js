import React from "preact-compat";
import { route } from "preact-router";
import SearchBox from "./SearchBox";

class Search extends React.Component {
  search() {
    route("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.search} />
      </div>
    );
  }
}

export default Search;
