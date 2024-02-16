import "./sign-up-form.styles.scss";
import { useState } from "react";
import { createAuthUserFromEmailAndPassword, 
    createUserDocumentFromAuth } from "../../../../utils/firebase/firebase.utils";
import Button from "../../../button/Button.component";


const SignUpForm = () => {

    const formFieldsData = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formData, setFormData] = useState(formFieldsData);
    console.log(formData);

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

    const shrinkLabelClass = (field) => {
        return field.length > 0 ? 'shrink': '';
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="group">
                <label className={`form-input-label ${shrinkLabelClass(formData.displayName)}`}>Display Name</label>
                <input 
                className="form-input"
                    name="displayName"
                    type="text"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="group">
                <label className={`form-input-label ${shrinkLabelClass(formData.email)}`}>Email</label>
                <input required
                className="form-input"
                    name="email"      
                    type="email"
                    onChange={onChangeHandler}
                />
            </div> 

            <div className="group">
              <label className={`form-input-label ${shrinkLabelClass(formData.password)}`}>Password</label>
                <input required
                className="form-input"
                    name="password" 
                    type="password"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="group">
                <label className={`form-input-label ${shrinkLabelClass(formData.confirmPassword)}`}>Confirm Password</label>
                <input required
                className="form-input"
                    name="confirmPassword"
                    type="password"   
                    onChange={onChangeHandler}
                />
            </div>

            <Button type="submit" buttonType='inverted'>Sign up</Button>
    </form>
    );
};

export default SignUpForm;