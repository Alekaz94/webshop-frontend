import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, Label, TextField } from "react-aria-components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../styles/SignUpForm.css"
import { useState } from "react";

const signUpSchema = z.object({
    FirstName: z.string({ required_error: "Firstname is required!" }).min(2, {message: "Firstname must be longer than 2 letters!"}),
    LastName: z.string({ required_error: "Lastname is required!" }).min(2, {message: "Lastname must be longer than 2 letters!"}),
    Email: z.string({ required_error: "Email is required!" }).email({ message: 'Must be a valid email!' }),
    Password: z.string({ required_error: "Password is required!" }).min(6, {message: "Password must be longer than 6 letters!"}),
    ConfirmPassword: z.string({ required_error: "Password is required!" }).min(1, { message: "Password needs to match!" })
}).refine((data) => data.ConfirmPassword === data.Password, {
  path: ["ConfirmPassword"],
  message: "Passwords does not match!"  
});

type TSignUpSchema = z.infer<typeof signUpSchema>

function SignUpForm() {
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema)
    });

    const onClickSubmit = (data: TSignUpSchema) => {
        console.log(data);
        setIsOpen(false);
    }

    const handleOpenSignUp = () => {
        setIsOpen(true);
    }

    const handleCloseSignUp = () => {
        setIsOpen(false);
    }

    const handleOpenLoginForm = () => {
        setIsOpen(false);
    }

    return (
        <>        
            {isOpen ? <Button isDisabled className='signUp-openForm-button' onPress={handleOpenSignUp}>Sign up</Button> 
            : <Button className='signUp-openForm-button' onPress={handleOpenSignUp}>Sign up</Button>}
            {isOpen && <Form onSubmit={handleSubmit(onClickSubmit)} className="signUp-form-container">
                <Button className="signUp-closeForm-button" onPress={handleCloseSignUp}>X</Button>
                <h3 className="signUp-header">Sign up here!</h3>
                <TextField name="FirstName" type="text" className="signUp-textFields">
                    <Label className="signUp-labelFields">Firstname:</Label>
                    <Input className="signUp-inputFields" placeholder="Firstname" {...register("FirstName")} />
                </TextField>
                {errors.FirstName && (
                    <ul className="signUp-error-text">
                        <li>{errors.FirstName.message}</li>
                    </ul>
                )}
                <TextField name="LastName" type="text" className="signUp-textFields">
                    <Label className="signUp-labelFields">Lastname:</Label>
                    <Input className="signUp-inputFields" placeholder="Lastname" {...register("LastName")} />
                </TextField>
                {errors.LastName && (
                    <ul className="signUp-error-text">
                        <li>{errors.LastName.message}</li>
                    </ul>
                )}
                <TextField name="Email" type="email" className="signUp-textFields">
                    <Label className="signUp-labelFields">Email:</Label>
                    <Input className="signUp-inputFields" placeholder="Email" {...register("Email")}  />
                </TextField>
                {errors.Email && (
                    <ul className="signUp-error-text">
                        <li>{errors.Email.message}</li>
                    </ul>
                )}
                <TextField name="Password" type="password" className="signUp-textFields">
                    <Label className="signUp-labelFields">Password:</Label>
                    <Input className="signUp-inputFields" placeholder="Password" {...register("Password")}  />
                </TextField>
                {errors.Password && (
                    <ul className="signUp-error-text">
                        <li>{errors.Password.message}</li>
                    </ul>
                )}
                <TextField name="ConfirmPassword" type="password" className="signUp-textFields">
                    <Label className="signUp-labelFields">Confirm password:</Label>
                    <Input className="signUp-inputFields" placeholder="Retype password" {...register("ConfirmPassword")}  />
                </TextField>
                {errors.ConfirmPassword && (
                    <ul className="signUp-error-text">
                        <li>{errors.ConfirmPassword.message}</li>
                    </ul>
                )}
                <Button type="submit" className="signUp-button">Submit</Button>
                <Button className="signUp-gotAnAccount-button" onPress={handleOpenLoginForm}>Already got an account?</Button>
            </Form> }
             </>
    )
}

export default SignUpForm;