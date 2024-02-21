import { useState } from "react";
import { createAuthUserFromEmailAndPassword, 
    createUserDocumentFromAuth } from "../../../../utils/firebase/firebase.utils";
import Button from "../../../button/Button.component";
import { GroupStyled, 
         FormInputStyled,
         FormInputLabelStyled,
        } from "./sign-up-form.styles";

          
const SignUpForm = () => {

    const formFieldsData = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formData, setFormData] = useState(formFieldsData);
    const { displayName, email, password, confirmPassword } = formData;

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        
        // update the state
        const newFormData = {...formData};
        newFormData[name] = value;
        setFormData(newFormData);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            alert('passwords mismatch, please try again');
            return;
        } else {
            try {
                const userFromAuth = await createAuthUserFromEmailAndPassword(formData);
                const userFromAuthWithDisplayName  = {
                    ...userFromAuth, 
                    displayName: formData.displayName
                };
                // store users in our firestore DB
                await createUserDocumentFromAuth(userFromAuthWithDisplayName);
            } catch (error) {
                console.log("error creating user doc", error.message);
            }
        }
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <GroupStyled>
                <FormInputLabelStyled shrink={displayName.length}>Display Name</FormInputLabelStyled>
                <FormInputStyled 
                    name="displayName"
                    type="text"
                    onChange={onChangeHandler}
                    value={displayName}
                />
            </GroupStyled>

            <GroupStyled>
                <FormInputLabelStyled shrink={email.length}>Email</FormInputLabelStyled>
                <FormInputStyled required
                    name="email"      
                    type="email"
                    onChange={onChangeHandler}
                    value={email}
                />
            </GroupStyled> 

            <GroupStyled>
              <FormInputLabelStyled shrink={password.length}>Password</FormInputLabelStyled>
                <FormInputStyled required
                    name="password" 
                    type="password"
                    onChange={onChangeHandler}
                    value={password}
                />
            </GroupStyled>

            <GroupStyled>
                <FormInputLabelStyled shrink={confirmPassword.length}>Confirm Password</FormInputLabelStyled>
                <FormInputStyled required
                    name="confirmPassword"
                    type="password"   
                    onChange={onChangeHandler}
                    value={confirmPassword}
                />
            </GroupStyled>

            <Button type="submit" buttonType='inverted'>Sign up</Button>
    </form>
    );
};

export default SignUpForm;