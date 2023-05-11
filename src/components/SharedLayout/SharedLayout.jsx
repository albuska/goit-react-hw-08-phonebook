import { Outlet } from "react-router-dom";
import { Navigation, StyledLink } from "./SharedLayout.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";


const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
<div>
            <header>
                <Navigation>
                    <StyledLink to="/">Home</StyledLink>
                    {isLoggedIn && (
                        <StyledLink to="/contacts">Contacts</StyledLink>
                    )}
                        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
                </Navigation> 
            </header> 
            <hr />
            <Outlet/>
</div>    
    )
}

export default SharedLayout; 