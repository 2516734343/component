import React, {Component} from 'react';

export default class SearchIcon extends Component {
    render() {
        return <span style={this.props.style} onClick={this.props.onClick}>
            <svg t="1611129082858" className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="4500" width="1em" height="1em">
        <path
            d="M906.666667 846.506667L768 709.12A384 384 0 1 0 709.12 768l137.386667 137.386667a42.666667 42.666667 0 0 0 60.16 0 42.666667 42.666667 0 0 0 0-58.88zM258.133333 682.666667A298.666667 298.666667 0 1 1 682.666667 682.666667a298.666667 298.666667 0 0 1-424.533334 0z"
            fill="#707070" p-id="4501">
        </path>
        </svg>
        </span>
    }
}
