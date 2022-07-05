import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header'
import Login from './components/Layout/Login';
import SignUp from './components/Layout/SignUp';
import { useContext, useState } from 'react';
import AuthContext from './store/auth-context';

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

  //login state
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header onShowLogInModal={showLogInModalHandler} onShowSignUpModal={showSignUpModalHandler} />

      {/* <HomePage /> */}
      {showLogInModal && !authCtx.isLoggedIn && <Login onClose={hideLogInModalHandler}/>}

      {showSignUpModal && !authCtx.isLoggedIn && <SignUp onClose={hideSignUpModalHandler} />}
    </div>
  );
}

export default App;
