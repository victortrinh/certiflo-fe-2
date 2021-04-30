import { JoinUs } from '@/pages/public/join-us/join-us';
import { Route } from '@/routes/route';

export const joinUs: Route = {
  key: 'join-us',
  component: JoinUs,
  path: '/join-us',
  exact: true,
};
