import ProfilePage from '../containers/profile';
import MapPage from '../containers/map';
import LoginPage from '../containers/login';
import RegisterPage from '../containers/register';
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
