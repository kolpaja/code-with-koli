import { GraphQLClient } from 'graphql-request';
import { QueryClient, QueryCache } from '@tanstack/react-query';

const defaultQueryClientConfig = {
  defaultOptions: {
    queries: {
      suspense: false,
      retry: 3,
      useErrorBoundary: false,
    },
  },
};

export const queryClient = new QueryClient({
  ...defaultQueryClientConfig,
  queryCache: new QueryCache({
    onError: (error) => {
      console.log('QueryClient  error:',error);
    },
  }),
});

export const getGraphQLClient = (url: string):GraphQLClient => {
  if (!url) {
    throw new Error(`Hey ⚠️ No graphql api URL was given`);
  }

  return new GraphQLClient(url);
};

export const graphQLClient = getGraphQLClient('https://strapi-ts-blog-production.up.railway.app/graphql');