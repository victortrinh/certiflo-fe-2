import 'styled-components';

type SisterCompany = {
  logo: string;
  url: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    logo: string;
    primaryColor: string;
    secondaryColor: string;
    homeBackground: string;
    homeColor: string;
    sisterCompanyLogo1: SisterCompany;
    sisterCompanyLogo2: SisterCompany;
    missionData: string;
    commitmentData: string;
    valuesData: string;
    backgroundColor: string;
  }
}

declare module '*.svg' {
  const content: any;
  export default content;
}
