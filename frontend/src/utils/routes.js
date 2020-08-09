import PageMain from "../view/pages/PageMain.vue";
import PageAuthorization from "../view/pages/PageAuthorization.vue";
import PageRegistration from "../view/pages/PageRegistration.vue";
import PageUpdate from "../view/pages/PageUpdate.vue";

const routes = [
    {
        path: '/',
        name: 'account',
        component: PageMain
    },
    {
        path: '/login',
        name: 'login',
        component: PageAuthorization
    },
    {
        path: '/signup',
        name: 'signup',
        component: PageRegistration
    },
    {
        path: '/update',
        name: 'update',
        component: PageUpdate
    },
];

export default {
    routes
};