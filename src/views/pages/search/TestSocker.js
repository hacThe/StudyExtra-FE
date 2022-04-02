import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const host = 'http://localhost:5000'
const socket = io.connect(host);
function TestSocker(props) {
    const [chats, setChat] = useState([])
    const [id,setId] = useState('')
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameTo, setNameTo] = useState('');
    useEffect(() => {
        socket.on('user-chat', data => {
            setChat([...chats, data])
        })

        socket.on('me', id => {
            setId(id)
        })

        socket.on(`user-${name}`, data => {
            setChat([...chats, { name: data.name, message: data.message }])
        })
        
    },[])

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
        // socket.emit('on-chat', { message, name })
        socket.emit('send-to-user', { message, name, nameTo })
        setChat([...chats, { name, message }])
    }

    return (
        <div style={{ margin: '20px', fontSize: '20px' }}>

            <h1>Test socket</h1>
            <div style={{ marginTop: '20px' }}>ID: {id}</div>
            <div style={{ marginTop: '20px' }}>Nhập Tên: <input type='text' onChange={handleChangeUser}></input></div>
            <div style={{ marginTop: '20px' }}>Chat: <input type='text' onChange={handleChangeText}></input> </div>
            <div style={{ marginTop: '20px' }}>Đến: <input type='text' onChange={handleChangeToUser}></input> </div>
            <button onClick={handleSubmit}>Gửi</button>
            <ul>
                {chats.map((chat) => (<li>{chat.name}: {chat.message}</li>))}
            </ul>
        </div>
    );
}

export default TestSocker; <h1>Test socket</h1>