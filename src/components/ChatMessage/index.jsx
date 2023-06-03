import "./index.css";
export const ChatMessage = ({message}) => {
    return <div className="message">
        <div className="avatar">{message.user.substring(0,2).toUpperCase()}</div>
        <div className='chat-message curved-radius white-border'>
            <p>{message.message}</p>
        </div>
    </div>
}