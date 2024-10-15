import React from 'react'
import styles from '../ChatBot/ChatBotPage.module.css'
import ChatContainer from '../../Containers/ChatContainer/ChatContainer'

function ChatBotPage() {
  return (
    <div className={styles.container}>
      <h2>SAPBOT</h2>
      <ChatContainer />
    </div>
  )
}

export default ChatBotPage