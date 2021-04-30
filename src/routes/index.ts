import { Route } from './route';
import books from './pages/book';
import home from './pages/home';
import notFound from './pages/notFound';

const routes: Route[] = [home, books, notFound];

export default routes;
