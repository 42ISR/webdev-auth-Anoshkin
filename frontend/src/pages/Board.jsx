import Feed from "../components/Feed"
import MessageField from "../components/MessageField"
import { useEffect, useState } from "react"
import { api } from "../api/api"
import { useUserStore } from "../store/useUserStore"
import { useMessageStore } from "../store/useMessageStore"

const Board = () => {
    const { user } = useUserStore()
    const {messages, getMessages} = useMessageStore()
    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <h1>Board</h1>
            {user && <MessageField />}
            <Feed messages={messages} title="Последние сообщения" />
        </>
    )
}

export default Board
