import React from 'react'
import { ChatInput } from '../../Components/Inputs/Inputs'
import styles from '../ChatContainer/ChatContainer.module.css'
import { ChatSendButton } from '../../Components/Buttons/Buttons'

function ChatContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.convoContainer}></div>
            <div className={styles.inputContainer}>
                <div className={styles.flexContainer}>
                    <ChatInput
                        placeholder={"Ask any question..."}
                    />
                    <div className={styles.buttonContainer}>
                        <ChatSendButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatContainer
