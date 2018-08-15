import React from "react";
import SearchBox from "./SearchBox";

class Search extends React.Component {
  render() {
    return (
      <div className="search-route">
        <SearchBox {...this.props} />
      </div>
    );
  }
}

export default Search;
