import { Client } from './client';

export const initializeAndGetClient = (): Client => {
  const url = window.location.origin;

  const link = document.createElement('link');
  link.rel = 'shortcut icon';

  if (url.toLowerCase().includes('petro-max')) {
    link.href = '/assets/petro-max-favicon.ico';
    document.head.appendChild(link);
    document.title = 'Petro-max';
    return 'Petro-max';
  }

  if (url.toLowerCase().includes('certipropane')) {
    link.href = '/assets/certipropane-favicon.ico';
    document.head.appendChild(link);
    document.title = 'Certipropane';
    return 'Certipropane';
  }

  link.href = '/assets/certiflo-favicon.ico';
  document.head.appendChild(link);
  document.title = 'Certiflo';
  return 'Certiflo';
};

export const getClient = (): Client => {
  const url = window.location.origin;

  if (url.toLowerCase().includes('petro-max')) {
    return 'Petro-max';
  }

  if (url.toLowerCase().includes('certipropane')) {
    return 'Certipropane';
  }

  return 'Certiflo';
};
