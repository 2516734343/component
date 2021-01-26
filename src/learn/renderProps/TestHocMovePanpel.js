import css from './style.less';
import React, { Component } from 'react';
import WithMoveListener from './WithMoveListener';
import TestPanpel from './TestPanpel';

// const div = (props) => <div className={css.inner} style={{
//     left: props.x,
//     top: props.y
// }}/>;
function div(props) {
   return <div className={css.inner} style={{
      left: props.x,
      top: props.y
   }}/>;
}

// 传入一个组件
// const MovePanpel = WithMoveListener(TestPanpel);
const MovePanpel = WithMoveListener(div);

export default function TestHocMovePanpel(){
   return <MovePanpel/>
}
