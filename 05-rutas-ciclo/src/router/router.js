import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  //carga perezosa para cargar solamente los componentes necesarios
  //el webpackChuckName es para darle nombre a los componentes en la carga de los archivos en el network en el navegador
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /*webpackChunkName: "PokemonLayout"*/ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName: "ListPage"*/ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutPage"*/ "../modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:id", //el : es para pasarle el argumento a la ruta de navegación
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          {
            const id = Number(route.params.id);
            return isNaN(id) ? { id: 1 } : { id };
          }
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NoPageFound"*/ "@/modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
