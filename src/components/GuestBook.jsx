import {useState, useEffect, useRef} from 'react'
import db from '../config.js'
import { ref, set, onValue, push } from "firebase/database"

const GuestBook = () => {
    
    const [messages, setMessages] = useState()
    const [name, setName] = useState()
    const [message, setMessage] = useState()
    const endRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    useEffect(() => {
        const messagesRef = ref(db, 'messages/');
        onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        setMessages(data);
        // updateMessages(data)
        // console.log(data)
        });
    }, [db])

    const sendSomething = () => {
       // let id = Math.round(Math.random()*100)
       if(message == null || message == ''|| message == undefined){
        return;
       } else if(name == null || name == '' || name == undefined){
        return;
       } else{
        const messageListRef = ref(db, '/messages')
        const newMessageRef = push(messageListRef)
        set(newMessageRef, {
            // id: id,
            name: name == null || name == "" || name == " " ? "anonymous" : name,
            message: message,
        })
        // console.log("set")
        }
        endRef.current.scrollIntoView({scrollBehavior: "smooth"})
        nameRef.current.value = ""
        setName('')
        messageRef.current.value = ""
        setMessage('')
    }


    

   

  return (
    <>
        <div style={{gridArea: "chat"}} id="exit-chatcontainer">
            {messages != null && Object.keys(messages).map((m, i) => {
                return <div><span style={{fontFamily: "webbold"}}>{messages[m].name}:</span> {messages[m].message}</div>
            })}
            <div ref={endRef}></div>
                </div>
        <div style={{gridArea: "type"}} id="exit-typecontainer">
            <input type="text"
                ref={nameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"/><br/>
            <input type="text"
                ref={messageRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
                style={{width: "100%"}}/>
            <div className="exit-btn" onClick={() => sendSomething()}>send</div>
        </div>
    </>
  )
}

export default GuestBook