import Page     from './page';
import Home     from './home';
import Detail   from './detail';
import Login    from './login';
import Admin    from './admin';
import AdminEdit from './admin/edit';
import AdminAdd from './admin/add';
import Contact  from './contact';
import auth     from './auth';

export default {
    path: '/',
    component: Page,
    indexRoute: {
        component: Home
    },
    childRoutes: [
        {
            path: 'detail/:id',
            component: Detail
        },
        {
            path: 'contact',
            component: Contact
        },
        {
            path: 'login',
            component: Login,
            onEnter: auth.ifLoggedIn
        },
        {
            path: 'logout',
            component: Login,
            onEnter: auth.logout
        },
        {
            path: 'admin',
            onEnter: auth.requireAuth,
            indexRoute: {
                component: Admin
            },
            childRoutes: [
                {
                    path: 'edit/:id',
                    component: AdminEdit
                },
                {
                    path: 'add',
                    component: AdminAdd
                }
            ]
        }
    ]
};