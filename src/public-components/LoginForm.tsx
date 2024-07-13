import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, Label, TextField } from "react-aria-components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../styles/SignUpForm.css"

const loginSchema = z.object({
    Email: z.string({ required_error: "Email is required!" }).email({ message: 'Must be a valid email!' }).toLowerCase(),
    Password: z.string({ required_error: "Password is required!" }).min(6, {message: "Password must be longer than 6 letters!"}),
})

type TLoginSchema = z.infer<typeof loginSchema>;

function LoginForm(isOpen: boolean) {

    const {
        register,
        handleSubmit,
        formState: {errors} 
    } = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema)
    })
    

    const handleLogin = (data: TLoginSchema) => {
        console.log(data)
    }

    return (
        <>
            {isOpen && <Form onSubmit={handleSubmit(handleLogin)}>
                <TextField name="Email" type="email" className="signUp-textFields">
                    <Label className="signUp-labelFields">Email:</Label>
                    <Input placeholder="Email" {...register("Email")}  />
                </TextField>
                {errors.Email && (
                    <ul className="signUp-error-text">
                        <li>{errors.Email.message}</li>
                    </ul>
                )}
                <TextField name="Password" type="password" className="signUp-textFields">
                    <Label className="signUp-labelFields">Password:</Label>
                    <Input placeholder="Password" {...register("Password")}  />
                </TextField>
                {errors.Password && (
                    <ul className="signUp-error-text">
                        <li>{errors.Password.message}</li>
                    </ul>
                )}
                <Button type="submit">Login</Button>
            </Form>}
        </>
    )
}

export default LoginForm;