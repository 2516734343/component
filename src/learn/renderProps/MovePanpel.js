import React, {Component} from 'react';
import css from './style.less';
export default class MovePanpel extends Component {
    state = {
        x: 0,
        y: 0
    }
    divRef = React.createRef();
    handleMove = (e) => {
        const {left, top} = this.divRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        this.setState({
            x,
            y
        })
    }
    render() {
        return <div className={css.box} onMouseMove={this.handleMove} ref={this.divRef}>
            <div className={css.inner}
                 style={{
                left: this.state.x,
                top: this.state.y,
            }}/>
        </div>
    }
}
