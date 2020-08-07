import PageMain from "../view/pages/PageMain.vue";
import PageAuthorization from "../view/pages/PageAuthorization.vue";
import PageRegistration from "../view/pages/PageRegistration.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: PageAuthorization
    },
    {
        path: '/signup',
        name: 'signup',
        component: PageRegistration
    }
];

export default {
    routes
};