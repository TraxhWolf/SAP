import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChatBotPage from './Pages/ChatBot/ChatBotPage';

function App() {
	return (
		<>
			<Navbar />
			<div className="pages-container">
				<ChatBotPage />
			</div>
		</>
	);
}

export default App;
