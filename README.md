# React概述

> 官网：https://react.docschina.org/

## 什么是React？

React是由**Facebook**研发的、用于**解决UI复杂度**的开源**JavaScript库**，目前由React联合社区维护。

> 它不是框架，只是为了解决UI复杂度而诞生的一个库

## React的特点

- 轻量：React的开发版所有源码（包含注释）仅3000多行
- 原生：所有的React的代码都是用原生JS书写而成的，不依赖其他任何库
- 易扩展：React对代码的封装程度较低，也没有过多的使用魔法，所以React中的很多功能都可以扩展。
- 不依赖宿主环境：React只依赖原生JS语言，不依赖任何其他东西，包括运行环境。因此，它可以被轻松的移植到浏览器、桌面应用、移动端。
- 渐近式：React并非框架，对整个工程没有强制约束力。这对与那些已存在的工程，可以逐步的将其改造为React，而不需要全盘重写。
- 单向数据流：所有的数据自顶而下的流动
- 用JS代码声明界面
- 组件化

## 对比Vue

|   对比项   |  Vue  | React |
| :--------: | :---: | :---: |
| 全球使用量 |       |   ✔   |
| 国内使用量 |   ✔   |       |
|    性能    |   ✔   |   ✔   |
|   易上手   |   ✔   |       |
|   灵活度   |       |   ✔   |
|  大型企业  |       |   ✔   |
| 中小型企业 |   ✔   |       |
|    生态    |       |   ✔   |

## 学习路径

整体原则：熟悉API --> 深入理解原理

1. React
   1. 基础：掌握React的基本使用方法，有能力制作各种组件，并理解其基本运作原理
   2. 进阶：掌握React中的一些黑科技，提高代码质量
2. React-Router：相当于vue-router
3. Redux：相当于Vuex
   1. Redux本身
   2. 各种中间件
4. 第三方脚手架：umi
5. UI库：Ant Design，相当于Vue的Element-UI 或 IView
6. 源码部分
   1. React源码分析
   2. Redux源码分析



直接在页面上使用React，引用下面的JS

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

## React.createElement

创建一个React元素，称作虚拟DOM，本质上是一个对象

1. 参数1：元素类型，如果是字符串，一个普通的HTML元素
2. 参数2：元素的属性，一个对象
3. 后续参数：元素的子节点

## JSX

JS的扩展语法，需要使用babel进行转义。

# 使用脚手架搭建工程

官方：create-react-app
第三方：next.js、umijs

凡是使用JSX的文件，必须导入React

# 开发环境搭建

## VSCode配置

emmet配置：

```json
"javascript": "javascriptreact"
```

## VSCode插件安装

- ESLint：代码风格检查
- ES7 React/Redux/GraphQL/React-Native snippets：快速代码编写

## Chrome插件安装

React Developer Tools

# JSX

## 什么是JSX

- Facebook起草的JS扩展语法
- 本质是一个JS对象，会被babel编译，最终会被转换为React.createElement
- 每个JSX表达式，有且仅有一个根节点
  - React.Fragment
- 每个JSX元素必须结束（XML规范）

## 在JSX中嵌入表达式

- 在JSX中使用注释
- 将表达式作为内容的一部分
  - null、undefined、false不会显示
  - 普通对象，不可以作为子元素
  - 可以放置React元素对象
- 将表达式作为元素属性
- 属性使用小驼峰命名法
- 防止注入攻击
  - 自动编码
  - dangerouslySetInnerHTML

## 元素的不可变性

- 虽然JSX元素是一个对象，但是该对象中的所有属性不可更改
- 如果确实需要更改元素的属性，需要重新创建JSX元素

# 组件和组件属性

组件：包含内容、样式和功能的UI单元

## 创建一个组件

**特别注意：组件的名称首字母必须大写**

1. 函数组件
   
返回一个React元素

```html
 <MyFuncComp num = "2"/>
  <MyFuncComp num = {5}/>
```

```js
export default function MyFuncComp(props){
    return <h1>函数组件内容{props.num}</h1>
}
```

2. 类组件

必须继承React.Component

必须提供render函数，用于渲染组件

```html
<MyClassComp num = "2" enable/>
<MyClassComp num = {5} obj={{name:"xlj",age:100}} />
<MyClassComp num = "2" ui={<h2>这是一个h2</h2>}/>
<MyClassComp num = {7}/>
```

```js
export default class MyClassComp extends React.Component{
    constructor(props){
        super(props);
        console.log(props === this.props);
    }
    /**
     * 渲染组件
     */
    render(){
        console.log(this.props);
        if(this.props.obj){
            return(
                <>
                    <p>姓名:{this.props.obj.name}</p>
                    <p>年龄:{this.props.obj.age}</p>
                </>
            )
        }else if(this.props.ui){
            return (
                <div>
                    <h1>下面是ui的内容</h1>
                    {this.props.ui}
                </div>
            )
        }
        return <h1>类组件内容{this.props.num}</h1>
    }
}
```

## 组件的属性

1. 对于函数组件，属性会作为一个对象的属性，传递给函数的参数
2. 对于类组件，属性会作为一个对象的属性，传递给构造函数的参数

注意：组件的属性，应该使用小驼峰命名法

**组件无法改变自身的属性**。

之前学习的React元素，本质上，就是一个组件（内置组件）

React中的哲学：数据属于谁，谁才有权力改动

**React中的数据，自顶而下流动**

# 组件状态

组件状态：组件可以自行维护的数据

组件状态仅在类组件中有效

状态（state），本质上是类组件的一个属性，是一个对象

**状态初始化**

**状态的变化**

不能直接改变状态：因为React无法监控到状态发生了变化

必须使用this.setState({})改变状态

一旦调用了this.setState，会导致当前组件重新渲染

```js
export default class Tick extends Component {
      //初始化状态,JS next语法
      state = {
        left:this.props.num,
        n:123
    };
    constructor(props){
        super(props);
        //初始化状态
        // this.state = {
        //     left:this.props.num
        // };
        this.timer = setInterval(()=>{
            this.setState({//重新设置状态，组件重新渲染,触发自动的重新渲染
                //mixin
                left:this.state.left - 1
            });
            //停止计时器
            if(this.state.left === 0){
                clearInterval(this.timer);
            }
            //重新渲染
        },1000)
    }
    render() {
        return (
            <div>
                倒计时剩余时间：{this.state.left}
                <h1>{this.state.n}</h1>
            </div>
        )
    }
}
```

```js
export default class Test extends Component {
    state = {
        n:120
    };
    constructor(props){
        super(props);
        setInterval(()=>{
            this.setState({
                n:this.state.n - 1
            })
        },1000)
    }
    render() {
        console.log("A组件重新渲染了");
        return (
            <div>
                <B n = {this.state.n}/>
            </div>
        )
    }
}
function B(props){
    return <div>B组件：{props.n}
            <C n = {props.n}/>
        </div>
}
function C(props){
    return <div>C组件：{props.n}</div>
}
```
**组件中的数据**

1. props：该数据是由组件的使用者传递的数据，所有权不属于组件自身，因此组件无法改变该数组
2. state：该数组是由组件自身创建的，所有权属于组件自身，因此组件有权改变该数据

# 事件

在React中，组件的事件，本质上就是一个属性

按照之前React对组件的约定，由于事件本质上是一个属性，因此也需要使用小驼峰命名法

**如果没有特殊处理，在事件处理函数中，this指向undefined**

1. 使用bind函数，绑定this
写法一：对象和原型链上都有这个函数
```js
this.handleClick = this.handleClick.bind(this);
this.over = this.over.bind(this);
```
写法二：每次重新渲染都会产生新的函数
```js
 <Tick onClick = {this.handleClick.bind(this)} onOver={this.over.bind(this)} num={10}/>
 ```

2. 使用箭头函数
函数不在原型上，而在对象上面
```js
  handleClick = ()=>{
        console.log("点击了")
    };
    over = ()=>{
        this.setState({
            isOver:true
        })
    };

    <Tick onClick = {this.handleClick} onOver={this.over} num={10}/>
    
```

写法二：不建议这样书写，函数太过庞大就乱
```js
 <Tick onClick = {()=>{
     console.log("点击了")
 }} onOver={()=>{
      this.setState({
            isOver:true
        })
 }} num={10}/>

# 深入认识setState

setState，它对状态的改变，**可能**是异步的

> 如果改变状态的代码处于某个HTML元素的事件中，则其是异步的，否则是同步

如果遇到某个事件中，需要同步调用多次，需要使用函数的方式得到最新状态


最佳实践：

1. 把所有的setState当作是异步的
2. 永远不要信任setState调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（setState的第二个参数）
```js
this.setState({
    n:this.state.n + 1
},()=>{
    console.log("更改之后的值");
})
```
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState的第一个函数）
```js
 this.setState(prev=>{
            //参数表示当前的状态
            //该函数的返回结果，会混合(覆盖)掉之前的状态
            //该函数是异步执行
            return{
                n:prev.n + 1
            }
        },()=>{
            console.log("state更新完成之后运行",this.state.n)
        })
        console.log(this.state.n)

        this.setState(prev=>({n:prev.n + 1}) )
        this.setState(prev=>({n:prev.n + 1}) )
```


React会对异步的setState进行优化，将多次setState进行合并（将多次状态改变完成后，再统一对state进行改变，然后触发render）

# 生命周期

生命周期：组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。React在组件的生命周期中提供了一系列的钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时候运行。

**生命周期仅存在于类组件中，函数组件每次调用都是重新运行函数，旧的组件即刻被销毁**

## 旧版生命周期

React < 16.0.0

1. constructor
   1. 同一个组件对象只会创建一次
   2. 不能在第一次挂载到页面之前，调用setState，为了避免问题，**构造函数中严禁使用setState**
2. componentWillMount
   1. 正常情况下，和构造函数一样，它只会运行一次
   2. 可以使用setState，但是为了避免bug，不允许使用，因为在某些特殊情况下，该函数可能被调用多次
3. **render**
   1. 返回一个虚拟DOM，会被挂载到虚拟DOM树中，最终渲染到页面的真实DOM中
   2. render可能不只运行一次，只要需要重新渲染，就会重新运行
   3. 严禁使用setState，因为可能会导致无限递归渲染
4. **componentDidMount**
   1. 只会执行一次
   2. 可以使用setState
   3. 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中
5. 组件进入活跃状态
6. componentWillReceiveProps
   1. 即将接收新的属性值
   2. 参数为新的属性对象
   3. 该函数可能会导致一些bug，所以不推荐使用
7. **shouldComponentUpdate**
   1. 指示React是否要重新渲染该组件，通过返回true和false来指定
   2. 默认情况下，会直接返回true
8. componentWillUpdate
   1. 组件即将被重新渲染
9. componentDidUpdate
   1.  组件已完成重新渲染，往往在该函数中使用dom操作，改变元素
10. **componentWillUnmount**
    1.  通常在该函数中销毁一些组件依赖的资源，比如计时器

## 新版生命周期

React >= 16.0.0

React官方认为，某个数据的来源必须是单一的

1. getDerivedStateFromProps
   1. 通过参数可以获取新的属性和状态
   2. 该函数是静态的
   3. 该函数的返回值会覆盖掉组件状态
   4. 该函数几乎是没有什么用
2. getSnapshotBeforeUpdate
   1. 真实的DOM构建完成，但还未实际渲染到页面中。
   2. 在该函数中，通常用于实现一些附加的dom操作
   3. 该函数的返回值，会作为componentDidUpdate的第三个参数

# 传递元素内容

内置组件：div、h1、p

```html
<div>
asdfafasfafasdfasdf
</div>
```

如果给自定义组件传递元素内容，则React会将元素内容作为children属性传递过去，会忽略空白字符。

```js
ReactDOM.render((
    <Comp>
        <h1><span>我是小仙女</span></h1>
    </Comp>
),document.getElementById("root"))
```
```js
export default function Comp(props) {
    return (
        <div>
            {props.children || "默认值"}
        </div>
    )
}
```

# render props

有时候，某些组件的各种功能及其处理逻辑几乎完全相同，只是显示的界面不一样，建议下面的方式认选其一来解决重复代码的问题（横切关注点）

1. render props
   1. 某个组件，需要某个属性
   2. 该属性是一个函数，函数的返回值用于渲染
   3. 函数的参数会传递为需要的数据
   4. 注意纯组件的属性（尽量避免每次传递的render props的地址不一致）
   5. 通常该属性的名字叫做render
2. HOC



