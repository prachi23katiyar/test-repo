import React, {useState, useEffect, createRef} from 'react';
import {UpOutlined, DownOutlined} from '@ant-design/icons';
// import {IconChat, IconAttachment} from '../Common/SVG';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {MessageBoxService} from '../MessageBox/api/services';
import '../MessageBox/messagebox.scss';
// import {LicenseFormServices} from "../LicenseConfiguration/api/services";
// import GlobalConfig from "../../globalConfig/globalConfig";
import MessageChatBox from '../MessageBox/MessageChatBox/index';

const MessageChats = (props) => {
    debugger
    const [messageListVisible, setMessageListVisible] = useState(false);
    const [messageSender, setMessageSender] = useState([]);
    const [ministriesList, setMinistriesList] = useState([]);
    const [departmentList, setDepartmentList] = useState([]);
    const [userChatInfo, setUserChatInfo] = useState({});
    const [chatboxVisible, setChatboxVisible] = useState(false);
    const  userDetails = localStorage.getItem('userDTO');
    const userDTO =  JSON.parse(userDetails);
    const handlechatboxpopup = () => {
        setMessageListVisible(!messageListVisible)
    }

    useEffect(() => {
        getMininstriesListing();
        getDepartmentListing();
    }, []);

    useEffect(() => {
        getAllConversationsByReceiver();
    }, [ministriesList, departmentList]);

    const getMininstriesListing = async() => {
        try {
            const payload = {
            }
            // const response = await LicenseFormServices.ministriesDetails(payload);
            // const responseData = response.data;
            // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
            //     setMinistriesList(responseData.data)
            //
            // } else {
            //     console.log('getRoles no response');
            // }
        } catch {
            console.log('Error occured in getRoles');
        }
    };

    const getDepartmentListing = async () => {
        const payload = {
            ministryIds: []
        }
        try {
            // const response = await LicenseFormServices.departmentDetails(payload);
            // const responseData = response.data;
            // console.log(responseData.data, 'responseData')
            // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
            //     setDepartmentList(response.data.data);
            //
            // } else {
            //     console.log('getRoles no response');
            // }
            
        } catch {
            console.log('Error occured in getRoles');
        }
    };

    const getAllConversationsByReceiver = async() => {
        const  userDetails = localStorage.getItem('userDTO');
        const userDTO =  JSON.parse(userDetails);
        

        if(userDTO.role == "USER"){
            try{
                const response = await MessageBoxService.getAllConversationsByReceiver(userDTO.id);
                const responseData = response.data;
                // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
                //     let messages = [];
                //     console.log( responseData.data, ' responseData.data.conversations')
                //     responseData.data.map((item) => {
                //         item.fullMessage = item.conversations[item.conversations.length - 1].fullMessage
                //         ministriesList && ministriesList.map((ministry) => {
                //             if(ministry.id == item.ministryId){
                //                 item.ministryName = ministry.name;
                //             }
                //         });
                //         departmentList && departmentList.map((department) => {
                //             if(department.id == item.departmentId){
                //                 item.departmentName = department.name;
                //             }
                //         })
                //         messages.push(item);
                //     })
                //
                //     setMessageSender(messages);
                // }
            }
            catch (e) {
                console.log("Error occurred",e)
            }
        } else{
            try{
                const response = await MessageBoxService.getAllConversationsBySender(userDTO.id);
                const responseData = response.data;
                // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
                //     let messages = [];
                //     responseData.data.map((item) => {
                //         item.fullMessage = item.conversations[item.conversations.length - 1].fullMessage;
                //         ministriesList && ministriesList.map((ministry) => {
                //             if(ministry.id == item.ministryId){
                //                 item.ministryName = ministry.name;
                //             }
                //         });
                //         departmentList && departmentList.map((department) => {
                //             if(department.id == item.departmentId){
                //                 item.departmentName = department.name;
                //             }
                //         })
                //         messages.push(item);
                //     })
                //     setMessageSender(messages)
                // }
            }
            catch (e) {
                console.log("Error occurred",e)
            }
        }
    }

    const handleUserChatBox = (item) => {
        setUserChatInfo(item)
        setChatboxVisible(true)

    }
    const handleChatClosed = () => {
        setUserChatInfo({})
        setChatboxVisible(false)
    }
    console.log(messageSender && messageSender, 'messageSender')
    return (
        <>
        <div className="message-chat-box">
        <div className="message-header" onClick={handlechatboxpopup}>
            <h3> Messaging </h3>
            {messageListVisible ?  <UpOutlined /> : <DownOutlined /> }
        </div>
        {messageListVisible ?
        <div className="message-body">
            <div className="chat-section">
                <PerfectScrollbar>
                <ul>
                    {messageSender?.map((item, index) => {
                        return <li key={index} onClick={() => handleUserChatBox(item)}>
                            <h3>{userDTO.role == "USER"? item.ministryName  : item.receiverName }</h3>
                            <p>{item.fullMessage}</p>
                            {/* <div className="count">2</div> */}
                            {/* <div className="attchment"><IconAttachment/></div> */}
                        </li>
                    })}
                </ul>
                </PerfectScrollbar> 
            </div>
            
            
            
        </div>
        : null }
    </div>
    {chatboxVisible && userChatInfo ? <MessageChatBox  userChatInfo={userChatInfo} handleChatClosed={handleChatClosed}/> : null}
    </>
    );
};

export default MessageChats;
