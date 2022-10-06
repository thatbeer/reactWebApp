import { useState } from "react";

import { Button } from "react-bootstrap";



const defaultFormFields = {
    email: "",
    password: "",
};

const adminFormFields = {
    email: "admin@admin.co.th",
    password: "1234",
}

const SigninForm = () => {
    const [formFields , setFormFields] = useState(defaultFormFields);
    const {email , password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if ( adminFormFields.email == email && adminFormFields.password == password) {
            console.log("logged in");
            setFormFields({
                
            })
        }
    };

    const onChangehandler = (event) => {
        const {name , value} = event.target;

        setFormFields({
            ...formFields , [name]:value
        });
    };

    return (
        <div>
            <h2>Log in with your Account</h2>
            <span>sign in with your email's and password's Account </span>
            <form >
                <span>email</span>
                <input type='email' required name="email" value={email} onChange={onChangehandler} />

                <span>password</span>
                <input type='password' required name="password" value={password} onChange={onChangehandler} />

                <Button type='submit'> SignIn</Button>
            </form>
        </div>
    )

};

export default SigninForm;

