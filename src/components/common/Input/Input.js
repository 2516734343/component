import React, {Component} from "react";
import css from './index.less';
import ChaoHaoIcon from '../../commonIcon/ChaoHaoIcon';
import Search from "./Search";

export default class Input extends Component {
    static Search: typeof Search;

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    state = {
        value: ''
    };

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.onChange && this.props.onChange(e);
    }

    blur(e) {
        this.setState({
            value: e.target.value
        });
        this.props.onBlur && this.props.onBlur(e);
    }

    keyPress(e) {
        if (e.keyCode === 13) {
            this.setState({
                value: e.target.value
            });
            this.props.onPressEnter && this.props.onPressEnter(e);
        }
    }

    clear = () => {
        this.setState({
            value: ''
        });
    };

    render() {
        return <>
            <input value={this.state.value}
                   style={this.props.style}
                   className={css.input}
                   disabled={this.props.disabled}
                   placeholder={this.props.placeholder ? this.props.placeholder : '请输入'}
                   onChange={(e) => this.handleChange(e)}
                   onBlur={(e) => this.blur(e)}
                   onKeyDown={(e) => this.keyPress(e)}/>
            {this.props.allowClear &&
            <ChaoHaoIcon style={{
                position: 'absolute', right: '5px',
                top: '2px', cursor: 'pointer'
            }} onClick={this.clear}/>}
        </>
    }

}
