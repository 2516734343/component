import React from 'react';
import logo from './logo.svg';
import css from './App.less';
import Test from './components/common/CheckBoxGroup/test';
import TestRadio from './components/common/RadioBoxGroup/testRadio';
import TestSelect from './components/common/Select/testSelect';
import ThreeLayOut from "./components/common/ThreeLayout";
// import TestModal from './components/common/Modal/TestModal';
import PaginationTest from './components/common/Pagination/Test';
import TestInput from './components/common/Input/test/TestInput';
import TestSearch from "./components/common/Input/test/TestSearch";

function App() {
  return (
      <div className={css.App}>
        {/*<Ref/>*/}
        {/*<AutoFocusTextInput/>*/}
        {/*<OldContext/>*/}
        {/*<Example/>*/}
        {/*<ReduceDemo/>*/}
        {/*<Example2/>*/}
        {/*<UseMemo/>*/}
        {/*<UseRef/>*/}
        {/*<Example9/>*/}
        {/*<Test/>*/}
        {/*<TestRadio/>*/}
        {/*<TestSelect/>*/}
        {/*<ThreeLayOut leftWidth={300}*/}
        {/*             left={<div style={{height: '100%', backgroundColor: '#ddd'}}>left</div>}*/}
        {/*             right={<div style={{height: '100%', backgroundColor: '#ccc'}}>right</div>}*/}
        {/*             rightWidth={400}*/}
        {/*             gap={20}>*/}
        {/*    <div style={{backgroundColor: 'green'}}>*/}
        {/*        main*/}
        {/*        <p>111</p>*/}
        {/*    </div>*/}
        {/*</ThreeLayOut>*/}
        {/*<TestModal/>*/}
        {/*<PaginationTest/>*/}
        <TestInput/>
        <TestSearch/>
      </div>
  );
}

export default App;
