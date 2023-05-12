import { useDispatch } from "react-redux";
import { Form, Label, Input, Button } from "./RegisterForm.styled"
import { register } from "redux/auth/operations";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterForm = () => {
    const dispatch = useDispatch(); 
    
    const handleSubmit = event => {
        event.preventDefault(); 
        const form = event.currentTarget;  
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        })); 
        toast.success('Registration was successful');
        form.reset(); 
    }

    return (
         <Form onSubmit={handleSubmit}>
            <Label> Username
                <Input type="text" name="name" required/>
            </Label>
              <Label> Email
                <Input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
            </Label>
             <Label> Password
                <Input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
            </Label>
            <Button type="submit">Register</Button>
    </Form>
    )
}