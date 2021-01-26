import React, {Component} from "react";

export default class ChatRoom extends Component {
    state = {
        ws: new WebSocket("wss://echo.websocket.org")
    }
    joinRoom = () => {
        const {ws} = this.state;
        // this.setState({
        //     ws: new WebSocket("wss://echo.websocket.org")
        // })
        console.log(this.state.ws);
        // var ws = new WebSocket("wss://echo.websocket.org");
        ws.onopen = function () {
            console.log('建立连接');
        }
        ws.onmessage = function (msg) {
            console.log(msg);
        }
        ws.onerror = function () {
            console.log('连接错误');
        }
        ws.onclose = function () {
            console.log('连接关闭');
        }
    }
    exitRoom = () => {
        this.closeWebSocket();
    }

    sendMsg() {
        const {ws} = this.state;
        if (!ws) {
            alert("你已掉线，请重新加入");
            return;
        }
        //消息发送
        ws.send(document.getElementById("sendMsg").value);
        document.getElementById("sendMsg").value = "";


    }

    closeWebSocket = () => {
        const {ws} = this.state;
        if (ws) {
            ws.close();
            this.setState({
                ws: null
            })
        }
    }

    talking() {

    }

    render() {
        return <div>
            <textarea id="content" cols="60" rows="30" readOnly="readonly"></textarea>
            <input type="text" id="sendMsg"/>
            <button type="button" onClick={this.sendMsg}>发送消息</button>
            <button onClick={this.joinRoom()}>聊天</button>
            <button onClick={this.exitRoom()}>退出</button>
        </div>
    }
}
