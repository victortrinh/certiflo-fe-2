import { Route } from './route';

import home from './pages/home';
import notFound from './pages/notFound';
import { assemblyMount, gallery, manufacturers, ourAchievements, personnel } from './pages/public/about-us';
import { careers } from './pages/public/careers';
import { joinUs } from './pages/public/join-us';
import { parts, tankers } from './pages/public/products';
import { certification, serviceRepairs, usefulDocuments } from './pages/public/services';

const routes: Route[] = [
  home,
  assemblyMount,
  gallery,
  manufacturers,
  ourAchievements,
  personnel,
  careers,
  joinUs,
  parts,
  tankers,
  certification,
  serviceRepairs,
  usefulDocuments,
  notFound,
];

export default routes;
