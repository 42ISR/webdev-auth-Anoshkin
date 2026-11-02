import Feed from "../components/Feed"
import MessageField from "../components/MessageField"
import { useEffect, useState } from "react"
import { api } from "../api/api"

const Board = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const load = async () => {
            const data = await api.getMessages()
            setMessages(data.data)

        }

        load()
    }, [])

    return (
        <>
            <h1>Board</h1>
            <MessageField />
            <Feed messages={messages} title="Последние сообщения" />
        </>
    )
}

export default Board
