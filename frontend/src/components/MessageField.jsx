import { api } from "../api/api"
import Button from './Button'
import TextArea from './TextArea'
import {useState} from 'react'
import {useMessageStore} from '../store/useMessageStore'

const MessageField = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {getMessages} = useMessageStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLoading || e.target.content.value.trim().length <= 3) return
        const data = {
            content: e.target.content.value
        }

        try {
            setIsLoading(true)
            const res = await api.sendMessage(data)
            getMessages()
            e.target.reset()
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="create-message-section">
            <div className="container">
                <div className="create-message-card">
                    <h2 className="create-message-title">Создать сообщение</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="create-message-form">
                        <TextArea
                            name="content"
                            placeholder="Поделитесь мнением..."
                        />
                        <Button>Отправить</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageField
