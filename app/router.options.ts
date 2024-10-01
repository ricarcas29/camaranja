import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    
    if (from.path.includes('/galleries') && to.path.includes('/galleries')) {
      return { top: 0 };
    }
    
    return { top: 0 };
  },
  // routes: (_routes) => {
  //   if (process.env.NUXT_APP_BASE_URL && process.env.NUXT_APP_BASE_URL !== '/') {
  //     const baseRoutes = _routes.map(route => ({
  //       ...route,
  //       path: `${process.env.NUXT_APP_BASE_URL}${route.path}`
  //     }));
  //     return baseRoutes;
  //   }
  //   return _routes;
  // }
};