import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.componente";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";
import { useState } from "react";

const SignIn = () => {
 
  const [userCredential, setuserCredential] = useState({email: '', password: ''})
  const {email,password} = userCredential;

 const handleSubmit = async event => {
      event.preventDefault();


      try {
        await auth.signInWithEmailAndPassword(email,password);

        setuserCredential({ email: "", password: "" });
      } catch (error) {
        console.error(error);
      }
    }

   const handleChange = event => {
        const{value ,name} = event.target;

        setuserCredential({...userCredential , [name]: value })
    }
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={handleSubmit}>
          <FormInput type="email" name="email" value={email} 
            handleChange={handleChange}
            label='Email'
            required />
          
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label='Password'
            required
          />

       <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>Sign with Google</CustomButton>
          </div>
        </form>
      </div>  
    );
  }

export default SignIn;
