import { Colors } from '@/common/colors';
import { DefaultTheme } from 'styled-components';

export const certifloTheme: DefaultTheme = {
  logo: `${process.env.PUBLIC_URL}/assets/logos/certiflo.png`,
  primaryColor: Colors.blue,
  secondaryColor: Colors.yellow,
  homeBackground: `radial-gradient(50% 50% at 50% 50%, #FEE192 0%, ${Colors.yellow} 100%);`,
  homeColor: Colors.softBlack,
  sisterCompanyLogo1: {
    logo: `${process.env.PUBLIC_URL}/assets/logos/petro-max.png`,
    url: 'https://www.petro-max.ca/',
  },
  sisterCompanyLogo2: {
    logo: `${process.env.PUBLIC_URL}/assets/logos/certipropane.png`,
    url: 'https://www.certipropane.ca/',
  },
  missionData: `${process.env.PUBLIC_URL}/images/missionBlue.png`,
  commitmentData: `${process.env.PUBLIC_URL}/images/commitmentBlue.png`,
  valuesData: `${process.env.PUBLIC_URL}/images/valuesBlue.png`,
  backgroundColor: Colors.lightBlue,
};

export const petromaxTheme: DefaultTheme = {
  logo: `${process.env.PUBLIC_URL}/assets/logos/petro-max.png`,
  primaryColor: Colors.red,
  secondaryColor: Colors.lightGray,
  homeBackground: `radial-gradient(50% 50% at 50% 50%, #FF5555 0%, ${Colors.red} 100%)`,
  homeColor: Colors.white,
  sisterCompanyLogo1: {
    logo: `${process.env.PUBLIC_URL}/assets/logos/certiflo.png`,
    url: 'https://www.certiflo.ca/',
  },
  sisterCompanyLogo2: {
    logo: `${process.env.PUBLIC_URL}/assets/logos/certipropane.png`,
    url: 'https://www.certipropane.ca/',
  },
  missionData: `${process.env.PUBLIC_URL}/images/missionRed.png`,
  commitmentData: `${process.env.PUBLIC_URL}/images/commitmentRed.png`,
  valuesData: `${process.env.PUBLIC_URL}/images/valuesRed.png`,
  backgroundColor: Colors.lightRed,
};

export const certipropaneTheme: DefaultTheme = {
  logo: `${process.env.PUBLIC_URL}/assets/logos/certipropane.png`,
  primaryColor: Colors.blue,
  secondaryColor: Colors.yellow,
  homeBackground: `radial-gradient(50% 50% at 50% 50%, #FEE192 0%, ${Colors.yellow} 100%);`,
  homeColor: Colors.softBlack,
  sisterCompanyLogo1: {
    logo: `${process.env.PUBLIC_URL}/assets/logos/certiflo.png`,
    url: 'https://www.certiflo.ca/',
  },
  sisterCompanyLogo2: {
    logo: `${process.env.PUBLIC_URL}/assets/logos/petro-max.png`,
    url: 'https://www.petro-max.ca/',
  },
  missionData: `${process.env.PUBLIC_URL}/images/missionBlue.png`,
  commitmentData: `${process.env.PUBLIC_URL}/images/commitmentBlue.png`,
  valuesData: `${process.env.PUBLIC_URL}/images/valuesBlue.png`,
  backgroundColor: Colors.lightBlue,
};
