import React, {Component} from "react";
import Input from "../Input";

export default class TestInput extends Component {
    state = {
        value: '111',
        disabled: false,
    };
    onChange = (e) => {
        this.setState({
            value: e.target.value.trim()
        })
    };
    onSearch = (value) => {
        console.log(value);
    }

    onPressEnter(e) {
        this.setState({
            value: e.target.value.trim()
        })
    };
    blur(e) {
        this.setState({
            value: e.target.value.trim()
        })
    };

    render() {
        return (
            <div>
                <Input value={this.state.value}
                       placeholder={'请输入'}
                       disabled={this.state.disabled}
                       onChange={e =>this.onChange(e)}
                       // onSearch={(e) =>this.onSearch(e.target.value)}
                       onBlur={e =>this.blur(e)}
                       allowClear={true}
                       onPressEnter={e =>this.onPressEnter(e)}/>
            </div>
        );
    }
}
