declare module 'next-auth/client';
declare module '@auth/core/types';
declare module '@auth/core/jwt';

export type AppCode = 'cwk' | 'aroma-landing' | 'point-food' | 'endry-2008' | 'natural-stones';

export type AppConfig = {
  appCode: AppCode;
  graphqlCmsUrl: string;
};
