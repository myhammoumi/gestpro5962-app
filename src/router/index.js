
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

import { useAuth } from 'src/composables/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


function passRouteToProps(route){
	return {
		queryParams: route.query,
		fieldName: route.params.fieldName, 
		fieldValue: route.params.fieldValue
	}
}


let routes = [{
	name: 'main',
	path: '/',
	component: () => import('layouts/MainLayout.vue'),
	children: [
		//Dashboard routes


//agenda routes
		{
			path: '/agenda/:fieldName?/:fieldValue?',
			name: 'agendalist',
			component: () => import('pages/agenda/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/agenda/view/:id', 
			name: 'agendaview', 
			component: () => import('pages/agenda/view.vue'), 
			props: true 
		},
		{ 
			path: '/agenda/add', 
			name: 'agendaadd', 
			component: () => import('pages/agenda/add.vue'), 
			props: true 
		},
		{ 
			path: '/agenda/edit/:id', 
			name: 'agendaedit', 
			component: () => import('pages/agenda/edit.vue'), 
			props: true 
		},
		{
			path: '/agenda/agenda/:fieldName?/:fieldValue?',
			name: 'agendaagenda',
			component: () => import('pages/agenda/agenda.vue'),
			props: route => passRouteToProps(route)
		},

//assure routes
		{
			path: '/assure/:fieldName?/:fieldValue?',
			name: 'assurelist',
			component: () => import('pages/assure/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/assure/view/:id', 
			name: 'assureview', 
			component: () => import('pages/assure/view.vue'), 
			props: true 
		},
		{ 
			path: '/assure/add', 
			name: 'assureadd', 
			component: () => import('pages/assure/add.vue'), 
			props: true 
		},
		{ 
			path: '/assure/edit/:id', 
			name: 'assureedit', 
			component: () => import('pages/assure/edit.vue'), 
			props: true 
		},

//client routes

//courses routes
		{
			path: '/courses/:fieldName?/:fieldValue?',
			name: 'courseslist',
			component: () => import('pages/courses/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/courses/view/:id', 
			name: 'coursesview', 
			component: () => import('pages/courses/view.vue'), 
			props: true 
		},
		{ 
			path: '/courses/add', 
			name: 'coursesadd', 
			component: () => import('pages/courses/add.vue'), 
			props: true 
		},
		{ 
			path: '/courses/edit/:id', 
			name: 'coursesedit', 
			component: () => import('pages/courses/edit.vue'), 
			props: true 
		},
		{ 
			path: '/courses/annexe4/:id', 
			name: 'coursesannexe4', 
			component: () => import('pages/courses/annexe4.vue'), 
			props: true 
		},
		{
			path: '/courses/annexes4_valides/:fieldName?/:fieldValue?',
			name: 'coursesannexes4_valides',
			component: () => import('pages/courses/annexes4_valides.vue'),
			props: route => passRouteToProps(route)
		},
		{
			path: '/courses/annexes4_admin/:fieldName?/:fieldValue?',
			name: 'coursesannexes4_admin',
			component: () => import('pages/courses/annexes4_admin.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/courses/edit_admin/:id', 
			name: 'coursesedit_admin', 
			component: () => import('pages/courses/edit_admin.vue'), 
			props: true 
		},

//cpsvillesfr routes
		{
			path: '/cpsvillesfr/:fieldName?/:fieldValue?',
			name: 'cpsvillesfrlist',
			component: () => import('pages/cpsvillesfr/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/cpsvillesfr/add', 
			name: 'cpsvillesfradd', 
			component: () => import('pages/cpsvillesfr/add.vue'), 
			props: true 
		},

//forfaittarif routes
		{
			path: '/forfaittarif/:fieldName?/:fieldValue?',
			name: 'forfaittariflist',
			component: () => import('pages/forfaittarif/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/forfaittarif/view/:id', 
			name: 'forfaittarifview', 
			component: () => import('pages/forfaittarif/view.vue'), 
			props: true 
		},
		{ 
			path: '/forfaittarif/add', 
			name: 'forfaittarifadd', 
			component: () => import('pages/forfaittarif/add.vue'), 
			props: true 
		},
		{ 
			path: '/forfaittarif/edit/:id', 
			name: 'forfaittarifedit', 
			component: () => import('pages/forfaittarif/edit.vue'), 
			props: true 
		},

//minperc routes
		{
			path: '/minperc/:fieldName?/:fieldValue?',
			name: 'minperclist',
			component: () => import('pages/minperc/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/minperc/add', 
			name: 'minpercadd', 
			component: () => import('pages/minperc/add.vue'), 
			props: true 
		},

//notes routes
		{
			path: '/notes/:fieldName?/:fieldValue?',
			name: 'noteslist',
			component: () => import('pages/notes/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/notes/view/:id', 
			name: 'notesview', 
			component: () => import('pages/notes/view.vue'), 
			props: true 
		},
		{ 
			path: '/notes/add', 
			name: 'notesadd', 
			component: () => import('pages/notes/add.vue'), 
			props: true 
		},

//pec routes
		{
			path: '/pec/:fieldName?/:fieldValue?',
			name: 'peclist',
			component: () => import('pages/pec/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/pec/view/:id', 
			name: 'pecview', 
			component: () => import('pages/pec/view.vue'), 
			props: true 
		},
		{ 
			path: '/pec/add', 
			name: 'pecadd', 
			component: () => import('pages/pec/add.vue'), 
			props: true 
		},

//permissions routes
		{
			path: '/permissions/:fieldName?/:fieldValue?',
			name: 'permissionslist',
			component: () => import('pages/permissions/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/permissions/view/:id', 
			name: 'permissionsview', 
			component: () => import('pages/permissions/view.vue'), 
			props: true 
		},
		{ 
			path: '/permissions/add', 
			name: 'permissionsadd', 
			component: () => import('pages/permissions/add.vue'), 
			props: true 
		},
		{ 
			path: '/permissions/edit/:id', 
			name: 'permissionsedit', 
			component: () => import('pages/permissions/edit.vue'), 
			props: true 
		},

//piecesjointes routes

//remises routes
		{
			path: '/remises/:fieldName?/:fieldValue?',
			name: 'remiseslist',
			component: () => import('pages/remises/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/remises/view/:id', 
			name: 'remisesview', 
			component: () => import('pages/remises/view.vue'), 
			props: true 
		},
		{ 
			path: '/remises/add', 
			name: 'remisesadd', 
			component: () => import('pages/remises/add.vue'), 
			props: true 
		},

//roles routes
		{
			path: '/roles/:fieldName?/:fieldValue?',
			name: 'roleslist',
			component: () => import('pages/roles/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/roles/view/:id', 
			name: 'rolesview', 
			component: () => import('pages/roles/view.vue'), 
			props: true 
		},
		{ 
			path: '/roles/add', 
			name: 'rolesadd', 
			component: () => import('pages/roles/add.vue'), 
			props: true 
		},
		{ 
			path: '/roles/edit/:id', 
			name: 'rolesedit', 
			component: () => import('pages/roles/edit.vue'), 
			props: true 
		},

//utilisateurs routes
		{
			path: '/utilisateurs/:fieldName?/:fieldValue?',
			name: 'utilisateurslist',
			component: () => import('pages/utilisateurs/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/utilisateurs/view/:id', 
			name: 'utilisateursview', 
			component: () => import('pages/utilisateurs/view.vue'), 
			props: true 
		},
		{ 
			path: '/index/register', 
			name: 'utilisateursuserregister', 
			component: () => import('pages/index/userregister.vue'), 
			props: true 
		},
		{ 
			path: '/account/edit', 
			name: 'utilisateursaccountedit', 
			component: () => import('pages/account/accountedit.vue'), 
			props: true 
		},
		{ 
			path: '/account', 
			name: 'utilisateursaccountview', 
			component: () => import('pages/account/accountview.vue'), 
			props: true 
		},
		{ 
			path: '/utilisateurs/add', 
			name: 'utilisateursadd', 
			component: () => import('pages/utilisateurs/add.vue'), 
			props: true 
		},
		{ 
			path: '/utilisateurs/edit/:id', 
			name: 'utilisateursedit', 
			component: () => import('pages/utilisateurs/edit.vue'), 
			props: true 
		},

		{ 
			path: '/calculatrice', 
			name: 'calculatrice', 
			component: () => import('pages/custom/calculatrice.vue'), 
			props: true 
		},
		{ 
			path: '/tarification', 
			name: 'tarification', 
			component: () => import('pages/custom/tarification.vue'), 
			props: true 
		},
		{ 
			path: '/administration', 
			name: 'administration', 
			component: () => import('pages/custom/administration.vue'), 
			props: true 
		},
		{ 
			path: '/simulation', 
			name: 'simulation', 
			component: () => import('pages/custom/simulation.vue'), 
			props: true 
		},
		
		
//Password reset routes
		{ 
			path: '/index/forgotpassword', 
			name: 'forgotpassword', 
			component: () => import('pages/index/forgotpassword.vue') 
		},
		{ 
			path: '/index/resetpassword', 
			name: 'resetpassword', 
			component: () => import('pages/index/resetpassword.vue') 
		},
		{ 
			path: '/index/resetpassword_completed', 
			name: 'resetpassword_completed', 
			component: () => import('pages/index/resetpassword_completed.vue') 
		},
		
		

		//Error pages
		{ path:  '/error/forbidden', name: 'forbidden',  component: () => import('pages/errors/forbidden.vue') },
		{ path: '/error/notfound',  name: 'notfound', component: () => import('pages/errors/pagenotfound.vue') }
	],
	
	},
	{ path: '/:catchAll(.*)*', component: () => import('pages/errors/pagenotfound.vue') }
];

export default route(async function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE == 'history' ? createWebHistory : createWebHashHistory)
	
	const mainRoute = routes.find(x => x.name = "main");
	
	const auth = useAuth();

	
	//get current user data from api on first load
	const { user } = await auth.getUserData();
	if(user){
		const homeRoute = {
			path: '/', 
			alias: '/home', 
			name: 'home', 
			component: () => import('pages/home/home.vue') 
		}
		mainRoute.children.push(homeRoute);
	}
	else{
		const indexRoute = { 
			path: '/',  
			alias: '/home', 
			name: 'index', 
			component: () => import('pages/index/index.vue') 
		}
		mainRoute.children.push(indexRoute);
	}

	const Router = createRouter({
	scrollBehavior(to, from, savedPostion){
		if(savedPostion) return savedPostion;
		return { top:0 }
	},
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  return Router
})

