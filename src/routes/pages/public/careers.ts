import { Careers } from '@/pages/public/careers/careers';
import { Route } from '@/routes/route';

export const careers: Route = {
  key: 'careers',
  component: Careers,
  path: '/careers',
  exact: true,
};
