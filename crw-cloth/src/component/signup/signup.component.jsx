import { 
    signInWithGooglePopup
    ,createUserProfileDocument 
    ,createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase.utls";

import FormInput from "../forminput/forminput.component";
import Button from "../button/button.component";
import { useState } from "react";
import './signup.styles.scss';

const defaultFormFields = {
    userName:'',email:'',password:'',confirmpassword:'',
};


const SignUpForm = () => {
    const [formFields , setFormFields] = useState(defaultFormFields);
    const { userName,email , password,confirmpassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmpassword) {
            alert('password do not match')
            return;
        }

        try {
            const {user } = await createAuthUserWithEmailAndPassword(email,password);

            await createUserDocumentFromAuth(user , {userName});
            resetFormFields();
        } catch(error) {
            if (error.code === 'auth/email-already-in-used') {
                alert('Cannot create user, email already exist');
            } else {
                console.log('user creation enountered an error',error);
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
                <FormInput label="userName" type="text" required onChange={handleChange} name="userName" value={userName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="confirmpassword" type="password" required onChange={handleChange} name="confirmpassword" value={confirmpassword}/>
                <Button type='submit' >Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;