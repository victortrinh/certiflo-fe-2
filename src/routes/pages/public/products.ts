import { Parts } from '@/pages/public/products/parts';
import { Route } from '@/routes/route';
import { Tankers } from '@/pages/public/products/tankers';

const parts: Route = {
  key: 'parts',
  component: Parts,
  path: '/parts',
  exact: true,
};

const tankers: Route = {
  key: 'tankers',
  component: Tankers,
  path: '/tankers',
  exact: true,
};

export { parts, tankers };
