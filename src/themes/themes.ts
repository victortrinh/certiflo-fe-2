import { Colors } from '@/common/colors';
import { DefaultTheme } from 'styled-components';

export const certifloTheme: DefaultTheme = {
  logo: `${process.env.PUBLIC_URL}/assets/logos/certiflo.png`,
  primaryColor: Colors.blue,
  secondaryColor: Colors.yellow,
};

export const petromaxTheme: DefaultTheme = {
  logo: `${process.env.PUBLIC_URL}/assets/logos/petro-max.png`,
  primaryColor: Colors.red,
  secondaryColor: Colors.lightGray,
};

export const certipropaneTheme: DefaultTheme = {
  logo: `${process.env.PUBLIC_URL}/assets/logos/certipropane.png`,
  primaryColor: Colors.blue,
  secondaryColor: Colors.yellow,
};
