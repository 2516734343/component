import React, {Component} from "react";
import Input from "./Input";
import css from './index.less';
import SearchIcon from "../../commonIcon/SearchIcon";

export default class Search extends Component {
    state = {
        value: '',
        // btn:
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value.trim()
        })
    };
    onClick = (e, value) => {
        this.props.onSearch && this.props.onSearch(value)
    };
    handleSearch = (e, value) => {
        e.keyCode === 13 && this.props.onSearch && this.props.onSearch(value)
    };
    mouseEnter = () => {
        const btn = document.getElementById('searchBtn');
        btn.style.outline = '1px solid #1890ff';
        btn.style.border = 'none';
        btn.style.height = '30px';
    };
    mouseLeave = () => {
        const btn = document.getElementById('searchBtn');
        btn.style.outline = 'none';
        btn.style.border = '1px solid #d9d9d9';
        btn.style.borderLeft = 'none';
        btn.style.height = '32px';
    };

    render() {
        return <span>
            <Input onChange={e =>this.onChange(e)}
                   style={{borderRadius: '2px 0px 0px 2px'}}
                   onPressEnter={e => this.handleSearch(e, this.state.value)}
            />
            <button id='searchBtn'
                    className={css.searchBtn}
                    onMouseEnter={e => this.mouseEnter()}
                    onMouseLeave={e => this.mouseLeave()}
                    onClick={e => this.onClick(e, this.state.value)}><SearchIcon/></button>
        </span>
    }
}

Search.defaultProps = {
    name: 'search'
};
