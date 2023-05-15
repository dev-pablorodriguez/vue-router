import { createRouter, createWebHashHistory } from 'vue-router'
import authGuard from './authGuard'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout component" */'@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                //this webpack comment allows us to show a custom name when component is lazy loaded (network tab)
                component: () => import(/* webpackChunkName: "ListPage component" */'@/modules/pokemon/pages/ListPage')
            },
            {
                path: '',
                name: 'pokemon-empty',
                redirect: { name: 'pokemon-home'}
            },
            {
                path: ':id',
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage component" */'@/modules/pokemon/pages/PokemonPage'),
                props: route => {
                    const id = Number(route.params.id);
                    return {
                        id: isNaN(id) ? 1 : id
                    }
                }
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage component" */'@/modules/pokemon/pages/AboutPage')
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ authGuard ],
        component: () =>import(/* webpackChunkName: "DbzLayout component" */'@/modules/dbz/layouts/DbzLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "Characters component" */'@/modules/dbz/pages/CharactersPage')
            },
            {
                path: '',
                name: 'dbz-empty',
                redirect: { name: 'dbz-characters'}
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "About component" */'@/modules/dbz/pages/AboutPage'),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NotFoundPage component" */'@/modules/shared/pages/NotFoundPage')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// Guard Global - Síncrono
// router.beforeEach((to, from, next) => {
//     const random = Math.random() * 100;

//     if(random > 50){
//         console.log('Autenticado');
//         next();
//     }else{
//         console.log(random, '¡Bloqueado por el beforeEach Guard!');
//     }
// })

// Guard Global - Asíncrono
// const canAccess = () => {
//     return new Promise( resolve => {
//         const random = Math.random() * 100;

//         if(random > 50){
//             console.log('Autenticado - canAccess');
//             resolve(true)
//         }else{
//             console.log(random, '¡Bloqueado por el beforeEach Guard - canAccess!');
//             resolve(false)
//         }
//     })
// }

// router.beforeEach(async (to, from ,next) => {
//     const isAuthorized = await canAccess();

//     if(isAuthorized){
//         next();
//     }else{
//         next({ name: 'pokemon-home' })
//     }
// })

export default router;