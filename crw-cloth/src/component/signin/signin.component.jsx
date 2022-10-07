import { 
    signInWithGooglePopup
    ,createUserProfileDocument 
    ,signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase.utls";


import { useState,useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import FormInput from "../forminput/forminput.component";
import Button from "../button/button.component";

import './signin.styles.scss';

const defaultFormFields = {
    email:'',password:'',
};


const SignInForm = () => {
    const [formFields , setFormFields] = useState(defaultFormFields);
    const { email , password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const users = await signInWithGooglePopup();
        await createUserDocumentFromAuth(users);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('user is not existed');
                    break;
                default:
                    console.log(error.message);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value});
    };
    
    return (
        <div className="sign-up-container">
            <h2>Already have an Account?</h2>
            <span>Sign in with your own email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="text" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Email" type="text" required onChange={handleChange} name="email" value={email}/>
                <div className="button-container">
                    <Button type='submit'>Sign IN</Button>
                    <Button type="button" buttonTypes="google" onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;