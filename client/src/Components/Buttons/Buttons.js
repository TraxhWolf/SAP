import React from 'react'
import styles from '../Buttons/Buttons.module.css'
import sendIcon from '../../assets/Icons/sendButton.png'

export function AppButton({ btnText }) {
	return (
		<div className={styles.appButtonContainer}>
			<button className={styles.appButton}>{btnText}</button>
		</div>
	)
}

export function ChatSendButton() {
	return (
		<div className={styles.chatSendButtonContainer}>
			<button className={styles.chatSendButton}>
				<img src={sendIcon} alt='Send Icon' height={18} width={19} />
			</button>
		</div>
	)
}
