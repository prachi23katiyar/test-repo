import React, {useState, useEffect, createRef} from 'react';
// import {CloseOutlined, DownOutlined} from '@ant-design/icons';
// import {Input, Button, notification} from 'antd';
// import {IconChat, IconAttachment} from '../../Common/SVG';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {MessageBoxService} from '../api/services';
// import { QueryRaisedService } from "../../QueryRaised/api/services";
// import GlobalConfig from "../../../globalConfig/globalConfig";

// const { TextArea } = Input;

const MessageChatBox = (props) => {
    const [messageReader, setMessageReader] = useState([]);
    const [message, setMessage] = useState('');
    //const [intervalID, setIntervalID] = useState('');
    const userChatInfo =  props.userChatInfo;
    const  userDetails = localStorage.getItem('userDTO');
    const userDTO =  JSON.parse(userDetails);
    let intervalID =  null;
    useEffect(() => {
        getByQueryId();
    }, []);

    const getByQueryId = async() => {
        

        try {
            const data = userChatInfo;
            data.readMsg = 1;
            const response = await MessageBoxService.markMessageRead(data);
            const responseData = response.data;
            // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
            //     setMessageReader(responseData.data)
            //
            // } else {
            //     console.log('getRoles no response');
            // }
        } catch {
            console.log('Error occured in getRoles');
        }
        intervalID =  setInterval(async() => {
            try {
            
                const response = await MessageBoxService.getByQueryId(userChatInfo.queryId);
                const responseData = response.data;
                // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
                //     setMessageReader(responseData.data)
                //
                // } else {
                //     console.log('getRoles no response');
                // }
            } catch {
                console.log('Error occured in getRoles');
            }
    
        }, 1000)
    };

    useEffect(() => {
        clearInterval(intervalID)
    }, [userChatInfo]);

    const handleQueryRaised = async() => {
        console.log(userChatInfo, 'userChatInfo')
        const data =  userChatInfo;
        data.fullMessage = message;
        data.senderId = userDTO.id;
        data.senderName = userDTO.name;
        data.id = null;
        data.receiverId = 3;
        data.receiverName = "Ayush Agrawal";
        try{
            // const response = await QueryRaisedService.conversationRaised(data);
            // const responseData = response.data;
            // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
            //     const message = messageReader;
            //     message.push(responseData.data);
            //     setMessageReader(message);
            //     setMessage('')
            //
            // }
        }
        catch (e) {
            console.log("Error occurred",e)
        }
    }
    
    const handleMessage = (e) => {
        console.log(e)
        setMessage(e.target.value)
    }

    const handleChatClosed = () => {
        props.handleChatClosed()
    }
    return (
        <div className="message-chat-box user-box">
        <div className="message-header" >
            <h3>{userDTO.role == "USER"? userChatInfo.ministryName  : userChatInfo.receiverName } <span className="close-icon" onClick={handleChatClosed}></span></h3>
        </div>
        <div className="message-body">
            <div className="chat-section">
            <PerfectScrollbar>
                <ul>
                    {messageReader?.map((item, index) => {
                        return <li key={index}>
                            <h3>{userDTO.role == "USER"? <span>{userDTO.id === item.senderId ? 'You' :  userChatInfo.ministryName}</span> : <span>{userDTO.id === item.senderId ? 'You' :  item.receiverName}</span>}</h3>
                            <p>{item.fullMessage}</p>
                        </li>
                    })}
                
                    
                </ul>
            </PerfectScrollbar>
            </div>
            
            <div className="chatmessage">
                
                {/*<TextArea showCount maxLength={100} onChange ={handleMessage} value={message}/>*/}
                {/*<div className="button-group">*/}
                {/*    <Button type="text"className="button fill" onClick={handleQueryRaised}>Send</Button>*/}
                {/*</div>*/}
            </div>
           
            
        </div>
    </div>
    );
};

export default MessageChatBox;
