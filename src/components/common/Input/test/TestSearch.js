import React, {Component} from "react";
// import Input from "../Index";
import Search from "../Search";

// const {Search} = Input;
export default class TestSearch extends Component{
    handleSearch(e) {
        console.log(e);
    }
    render() {
        return <div>
            <Search onSearch={this.handleSearch}/>
        </div>
    }
}
