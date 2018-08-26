import React from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import SearchBox from "./SearchBox";

class Search extends React.Component<RouteComponentProps> {
  public search() {
    navigate("/");
  }
  public render() {
    return (
      <div className="search-route">
        <SearchBox search={this.search} />
      </div>
    );
  }
}

export default Search;
