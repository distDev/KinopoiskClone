import { Bookmarks } from "../pages/Bookmarks";
import { Browse } from "../pages/Browse";
import { Category } from "../pages/Category";
import { FilmSingle } from "../pages/FilmSingle";
import { Main } from "../pages/Main";
import { BOOKMARKS_ROUTE, BROWSE_ROUTE, MAIN_ROUTE, SHOP_ROUTE, SINGLE_CAT_ROUTE, SINGLE_FILM_ROUTE } from "./routesConst";


export const PublicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },

];
export const PrivateRoutes = [
  {
    path: BROWSE_ROUTE,
    Component: Browse,
  },
  {
    path: SINGLE_CAT_ROUTE,
    Component: Category,
  },
  {
    path: SHOP_ROUTE,
    Component: Browse,
  },
  {
    path: SINGLE_FILM_ROUTE,
    Component: FilmSingle,
  },
  {
    path: BOOKMARKS_ROUTE,
    Component: Bookmarks,
  },
];
