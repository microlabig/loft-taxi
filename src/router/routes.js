import ProfilePage from '../containers/profile';
import MapPage from '../containers/map';
import LoginPage from '../containers/login';
import RegisterFormPage from '../containers/register';
import Err404 from '../containers/err404';

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
        private: false,
        component: MapPage
    },
    {
        name: 'profile',
        url: '/profile',
        exact: true,
        private: false,
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
