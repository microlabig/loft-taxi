import ProfilePage from '../pages/Profile';
import MapPage from '../pages/Map';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Err404 from '../pages/Err404';

export default [
    {
        name: 'login',
        url: '/',
        exact: true,
        private: false,
        component: LoginPage
    },
    {
        name: 'register',
        url: '/register',
        exact: true,
        private: false,
        component: RegisterPage
    },
    {
        name: 'map',
        url: '/map',
        exact: true,
        private: true,
        component: MapPage
    },
    {
        name: 'profile',
        url: '/profile',
        exact: true,
        private: true,
        component: ProfilePage
    },
    {
        name: 'error',
        url: '**',
        exact: false,
        private: false,
        component: Err404
    }
];
