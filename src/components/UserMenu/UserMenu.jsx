import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { Container, NameUser, Button } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <Container>
            <NameUser> Welcome, <b>{user.name}</b></NameUser>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </Container>
    )
}