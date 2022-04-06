import React, { useEffect, useState, useRef } from 'react';
import socketIOClient from 'socket.io-client';

const host = 'http://localhost:5000'
function TestSocker(props) {
    const socketRef = useRef()

    const [chats, setChat] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameTo, setNameTo] = useState('');

    const [messagePublic, setMessagePublic] = useState('');
    const [chatsPublic, setChatsPublic] = useState([]);


    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        //Lấy sự kiến id
        socketRef.current.on('me', id => {
            setId(id)
        })
        //Lấy sự kiện mỗi khi có người truyền tn tới
        socketRef.current.on('user-chat', data => {
            setChatsPublic(oldChat => [...oldChat, data])
        })


        return () => {
            socketRef.current.disconnect()
        }
    }, [])

    useEffect(() => {
        socketRef.current.on(`user-${name}`, data => {
            console.log(data)
            const newData = {
                name: data.name,
                message: data.message
            }
            setChat(oldChats => [...oldChats, newData])
        })



    }, [name])



    const handleChangeUser = (e) => {
        setName(e.target.value)
    }

    const handleChangeText = (e) => {
        setMessage(e.target.value)
    }

    const handleChangeToUser = (e) => {
        setNameTo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        socketRef.current.emit('send-to-user', { message, name, nameTo })
        setChat(oldChat => [...oldChat, { name, message }])
        setMessage('');
    }

    const handleChangeTextPublic = (e) => {
        setMessagePublic(e.target.value)
    }

    const handleSubmitPublic = (e) => {
        e.preventDefault();
        socketRef.current.emit('on-chat', { name, messagePublic })
        setMessagePublic('')
    }




    return (
        <div style={{ margin: '20px', fontSize: '20px' }}>

            <h1>Test socket</h1>
            <div style={{ marginTop: '20px' }}>ID: {id}</div>
            <div style={{ marginTop: '20px' }}>Nhập Tên: <input type='text' onChange={handleChangeUser}></input></div>
            <div style={{ marginTop: '20px' }}>Chat: <input type='text' value={message} onChange={handleChangeText}></input> </div>
            <div style={{ marginTop: '20px' }}>Đến: <input type='text' onChange={handleChangeToUser}></input> </div>
            <button onClick={handleSubmit}>Gửi</button>
            <ul>
                {chats.map((chat, index) => (
                    <li chat={chat} key={index}>{chat.name}: {chat.message}</li>)
                )}
            </ul>

            <h1 style={{ marginTop: '50px' }}>Phòng chat chung</h1>
            <div style={{ marginTop: '20px' }}>Chat: <input type='text' value={messagePublic} onChange={handleChangeTextPublic}></input> </div>
            <button onClick={handleSubmitPublic}>Gửi</button>
            <ul>
                {chatsPublic.map((chatPublic, index) => (
                    <li chat={chatPublic} key={index}>{chatPublic.name}: {chatPublic.messagePublic}</li>)
                )}
            </ul>
        </div>
    );
}

export default TestSocker;