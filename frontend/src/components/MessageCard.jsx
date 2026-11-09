import {api } from "../api/api"
import {useMessageStore} from "../store/useMessageStore"

const MessageCard = ({ likes, content, username, createdAt, id }) => {
    const {getMessages} = useMessageStore()

    const handleDelete = async () => {
        await api.deleteMessage(id)
        getMessages()
    }
    const handleLike = async () => {
        await api.likeMessage(id)
        getMessages()
    }

    const handleReport = async () => {
        await api,reportMessage(id)
        getMessages()
    }
    return (
        <div className="message-card">
            <div className="message-content">{content}</div>
            <div className="message-meta">
                <span className="message-author">@{username}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            <div className="message-actions">
                <button onClick={handleLike} className="action-button">
                    <span>{likes} 💗🤍</span>
                    <span>Нравится</span>
                </button>
                <button onClick={handleReport} className="action-button">
                    <span>🚩</span>
                    <span>Пожаловаться</span>
                </button>
                <button onClick={handleDelete} className="action-button delete">
                    <span>❌</span>
                    <span>Удалить</span>
                </button>
            </div>
        </div>
    )
}

export default MessageCard
