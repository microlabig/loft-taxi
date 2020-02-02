import ProfilePage from '../pages/profile';
import MapPage from '../pages/map';
import LoginPage from '../pages/login';
import RegisterFormPage from '../pages/register';
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
        component: RegisterFormPage
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
