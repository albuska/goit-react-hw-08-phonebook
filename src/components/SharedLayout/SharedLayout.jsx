import { Outlet } from "react-router-dom";
import { Navigation, StyledLink } from "./SharedLayout.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Suspense } from 'react';
import { Loader } from '../Loader';

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
            <Suspense fallback={<Loader />}>
                <Outlet />
                </Suspense>
</div>    
    )
}

export default SharedLayout; 