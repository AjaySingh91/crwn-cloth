import Homepage from "./pages/homepage/Homepage.component.jsx";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./Components/header/header.component.jsx";
import SignInSignUpPage from "./pages/sign-in-&-sign-up-pages/sign-in-&-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import React from "react";
import { connect } from "react-redux";
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((Snapshot) => {
        setCurrentUser(
            {
                id: Snapshot.id,
                ...Snapshot.data(),
            });
        });
      }
    setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/signIn" element={this.props.currentUser ? (<Navigate to={'/'} />) : (<SignInSignUpPage />) } />
          </Routes>
        </BrowserRouter> 
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps )(App);
