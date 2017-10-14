import Home from "./home";
import News from "./news";
import Page404 from "./static/Page404"

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    component: News
  },
  {
  	component: Page404 // default page when path is not found
  }
];

export default routes;