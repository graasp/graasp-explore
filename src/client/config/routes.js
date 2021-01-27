export const COLLECTIONS_ROUTE = '/collections';
export const buildCollectionRoute = (id = ':id') => `/collections/${id}`;
export const buildSpaceViewerRoute = (id = ':id') => `/view/spaces/${id}`;
export const buildSpaceRoute = (id = ':id') => `/spaces/${id}`;
export const HOME_ROUTE = '/';
export const SIGN_IN_ROUTE = `/signIn`;
export const IS_AUTHENTICATED_ROUTE = '/users/me';
export const buildResourceRoute = (id = ':id') => `/resources/${id}`;
export const SIGN_UP_ROUTE = '/signUp';
export const GET_NAV_TREE_ROUTE = '/navtree';
export const COPY_ROUTE = '/copy';
