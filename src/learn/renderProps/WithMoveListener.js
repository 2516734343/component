import React, {Component} from 'react';
import css from './style.less';

// 第一个参数是一个组件
// 返回一个组件 纯函数
export default function WithMoveListener(Comp) {
    return class MoveListener extends Component {
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
                <Comp {...this.props} x={this.state.x} y={this.state.y}/>
            </div>
        }
    }
}
