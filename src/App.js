import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header'
import HomePage from './pages/HomePage'
import Login from './components/Layout/Login';
import SignUp from './components/Layout/SignUp';
import { useState } from 'react';

function App() {

  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  //To hide log in modal
  const hideLogInModalHandler=()=>{
    setShowLogInModal(false)
  }
  //To show log in modal
  const showLogInModalHandler=()=>{
    setShowLogInModal(true)
  }
  
  //To hide sign up modal
  const hideSignUpModalHandler=()=>{
    setShowSignUpModal(false)
  }
  //To show sign up modal
  const showSignUpModalHandler=()=>{
    setShowSignUpModal(true)
  }


  return (
    <div className="App">
      <Header onShowLogInModal={showLogInModalHandler} onShowSignUpModal={showSignUpModalHandler} />

      <HomePage />
      {showLogInModal && <Login onClose={hideLogInModalHandler}/>}

      {showSignUpModal && <SignUp onClose={hideSignUpModalHandler} />}
    </div>
  );
}

export default App;
