import React from 'react'
import styles from '../Inputs/Inputs.module.css'

export function ChatInput({ label, placeholder }) {
	return (
		<div className={styles.inputContainer}>
			<label>{label}</label>
			<input placeholder={placeholder} className={styles.chatInput}></input>
		</div>
	)
}