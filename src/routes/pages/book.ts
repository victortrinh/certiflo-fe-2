import { Books } from '../../pages/books';
import { Route } from '../route';

const books: Route = {
  key: 'books',
  component: Books,
  path: '/books',
  exact: true,
};

export default books;
