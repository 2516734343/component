import React, { Component } from 'react';

export default class ChatRooms extends Component {
    W3CWebSocket = require('websocket').w3cwebsocket;
    state = {
        W3CWebSocket: null,
        client: null,
        chatList: [],
    };
    joinRoom = () => {
        var W3CWebSocket = require('websocket').w3cwebsocket;
        var cli = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');
        console.log(cli);
        this.setState( {
            W3CWebSocket,
            client: cli,
        }, () => {
            console.log(this.state.client);
        })
        const { client } = this.state;


        client.onerror = () => {
            console.log('Connection Error');
        };

        client.onopen = () => {
            console.log('WebSocket Client Connected');
            // this.sendNumber();
        };

    };
    sendNumber = () => {
        const value = document.getElementById('sendMsg').value;
        console.log(value);
        const { client } = this.state;
        if (client.readyState === client.OPEN) {
            // var number = Math.round(Math.random() * 0xFFFFFF);
            value && client.send(value + '小辣椒');
            // setTimeout(sendNumber, 1000);
        }
        this.resave();

    };
    resave = () => {
        const { client, chatList } = this.state;
        console.log(chatList);
        let message = '';
        const content = document.getElementById('content');
        // console.log(content);
        // let pro = new Promise((resolve,reject) => {
            client.onmessage = (e) => {

                if (typeof e.data === 'string') {
                    message = e.data;
                    console.log(chatList);
                    // this.setState({
                    //     chatList: chatList.push(message),
                    //     // chatList: [...this.state.chatList]
                    // });
                    chatList.push(message);
                    this.setState({
                        chatList: chatList
                    });
                    console.log('58', chatList);
                    // content.appendChild(<p>{ message }</p>);
                    // this.resave(e.data);
                    // content.value = e.data;
                    console.log('Received: \'' + e.data + '\'');
                }
            };
        // })
        // pro.then(() => {
        //
        //
        // })

    };
    exitRoom = () => {
        const { client } = this.state;
        client.onclose = function () {
            console.log('echo-protocol Client Closed');
        };
    };
    sendMsg = () => {
        this.sendNumber();
    };
    render() {
        console.log(this.state.chatList);
        return <div>
            {/*<textarea id="content" cols="60" rows="30" readOnly="readonly"></textarea>*/ }
            <div id={ 'content' }>
                {
                    this.state.chatList.map(item => {
                        return <p>{item}</p>
                    })
                }
            </div>
            <input type="text" id="sendMsg" />
            <button type="button" onClick={ this.sendMsg }>发送消息</button>
            <button onClick={ this.joinRoom }>聊天</button>
            <button onClick={ this.exitRoom }>退出</button>
        </div>;
    }
}
