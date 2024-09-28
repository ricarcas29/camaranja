import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    
    // if both from and to paths contain /galleries then scroll to top
    if (from.path.includes('/galleries') && to.path.includes('/galleries')) {
      return { top: 0 };
    }
    
    return { top: 0 };
  },
  routes: (_routes) => {
    const baseRoutes = _routes.map(route => {
      return {
        ...route,
        path: `/camaranja${route.path}`
      }
    });
    return [...baseRoutes, ..._routes];
  }
};