import { Certification } from '@/pages/public/services/certification';
import { Route } from '@/routes/route';
import { ServiceRepairs } from '@/pages/public/services/service-repairs';
import { UsefulDocuments } from '@/pages/public/services/useful-documents';

const certification: Route = {
  key: 'certification',
  component: Certification,
  path: '/certification',
  exact: true,
};

const serviceRepairs: Route = {
  key: 'service-repairs',
  component: ServiceRepairs,
  path: '/service-repairs',
  exact: true,
};

const usefulDocuments: Route = {
  key: 'useful-documents',
  component: UsefulDocuments,
  path: '/useful-documents',
  exact: true,
};

export { certification, serviceRepairs, usefulDocuments };
