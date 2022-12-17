var stompClient = null;

export const connectToChat = async (senderId,recipientId,senderName,recipientName) => {
    const Stomp = require("stompjs");
    var SockJS = require("sockjs-client");
    SockJS = await new SockJS("http://147.182.224.144:8080/ws");
    stompClient = await Stomp.over(SockJS);
    console.log("stomp client connect to Chat",stompClient)
    await  stompClient.connect({}, onConnected, onError);
    // await sendMessage("adilet arybaev",senderId,recipientId,senderName,recipientName)
};
const onConnected = () => {
    console.log("connected");

    stompClient.subscribe(
        "/user/52/queue/messages",
        // onMessageReceived
    );
};

const onError = (err) => {
    console.log(err);
};
const sendMessage =async (msg,senderId,recipientId,senderName,recipientName) => {
    if (msg.trim() !== "") {
        const message = {
            senderId: senderId,
            recipientId: recipientId,
            senderName:senderName,
            recipientName: recipientName,
            content: msg,
            timestamp: new Date(),
        };

       await  stompClient.send("/app/chat", {}, JSON.stringify(message));
    }
};