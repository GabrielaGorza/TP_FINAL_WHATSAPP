import React from 'react'
import { Route, Routes } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import './App.css'
import './Components/ContactItem/ContactItem.css'
import './Components/ContactList/ContactList.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="left-panel">
        <ContactScreen />
      </div>
      <div className="right-panel">
        <Routes>
          <Route path="/" element={<ChatScreen />} />
          <Route path="/contact/:contact_id/messages" element={<ChatScreen />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;