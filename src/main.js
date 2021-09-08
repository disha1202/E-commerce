import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import MenSection from './components/MenSection.vue';
import WomenSection from './components/WomenSection.vue';
import ElectronicsSection from './components/ElectronicsSection.vue';
import JewelerySection from './components/JewelerySection.vue';
import HomePage from './components/HomePage.vue'
 const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:HomePage
        },
        {
            path:'/men',
            component: MenSection
        },
        {
            path:'/women',
            component: WomenSection
        },
        {
            path:'/electronics',
            component:ElectronicsSection
        },
        {
            path:'/jewelery',
            component: JewelerySection
        },
        
    ],
});

app.use(router);
app.mount('#app');