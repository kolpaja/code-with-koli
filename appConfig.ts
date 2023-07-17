import { AppConfig } from 'index';
/**
 * app config to keep all apps codes through all my projects
 */
const appConfig: AppConfig = {
  appCode: 'cwk',
  graphqlCmsUrl: process.env.NEXT_PUBLIC_CMS_URL+'/graphql' || 'https://strapi-ts-blog-production.up.railway.app/graphql'
};

export default appConfig;
