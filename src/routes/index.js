import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../screens/Home";
import Login from "../screens/Login";
import PageNotFound from "../screens/PageNotFound";
import Signup from "../screens/Signup";


export const routes = [
    {
        'path': '/',
        'name': 'Home',
        'isPublic': false,
        'component': Home,
        'layout': PrivateLayout,
    },
    {
        'path': '/login',
        'name': 'Login',
        'isPublic': true,
        'component': Login,
        'layout': PublicLayout,
    },
    {
        'path': '/signup',
        'name': 'Signup',
        'isPublic': true,
        'component': Signup,
        'layout': PublicLayout,
    },
    {
        'path': '*',
        'name': '',
        'isPublic': true,
        'component': PageNotFound,
        'layout': PublicLayout,
    },
]