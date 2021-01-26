import React, {Component} from 'react';
import MoveListener from './moveListener';
import css from './style.less';

const div = (mouse) => <div className={css.inner} style={{
        left: mouse.x,
        top: mouse.y
    }}/>;
export function TestMovePanpel(){
    return <MoveListener render={div}/>
}
