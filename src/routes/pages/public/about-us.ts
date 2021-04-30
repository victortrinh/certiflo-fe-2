import { AssemblyMount } from '@/pages/public/about-us/assembly-mount';
import { Gallery } from '@/pages/public/about-us/gallery';
import { Manufacturers } from '@/pages/public/about-us/manufacturers';
import { OurAchievements } from '@/pages/public/about-us/our-achievements';
import { Personnel } from '@/pages/public/about-us/personnel';
import { Route } from '@/routes/route';

const assemblyMount: Route = {
  key: 'assembly-mount',
  component: AssemblyMount,
  path: '/assembly-mount',
  exact: true,
};

const gallery: Route = {
  key: 'gallery',
  component: Gallery,
  path: '/gallery',
  exact: true,
};

const manufacturers: Route = {
  key: 'manufacturers',
  component: Manufacturers,
  path: '/manufacturers',
  exact: true,
};

const ourAchievements: Route = {
  key: 'our-achievements',
  component: OurAchievements,
  path: '/our-achievements',
  exact: true,
};

const personnel: Route = {
  key: 'personnel',
  component: Personnel,
  path: '/personnel',
  exact: true,
};

export { assemblyMount, gallery, manufacturers, ourAchievements, personnel };
