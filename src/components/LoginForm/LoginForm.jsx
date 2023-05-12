import { useDispatch } from "react-redux";
import { Form, Label, Input, Button } from "./LoginForm.styled"
import { logIn } from "redux/auth/operations";

export const LoginForm = () => {
    const dispatch = useDispatch();  

    const handleSubmit = event => {
        event.preventDefault(); 
        const form = event.currentTarget;  
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })); 
        
        form.reset(); 
}

    return (
    <Form onSubmit={handleSubmit}>
                <Label> Email
                    <Input type="email" name="email" required/>
                </Label>
                 <Label> Password
                    <Input type="password" name="password" required/>
                </Label>
                <Button type="submit">Log in</Button>
        </Form>
)
}