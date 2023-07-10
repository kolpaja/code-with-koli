import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://strapi-ts-blog-production.up.railway.app/graphql',
  documents: ['services/graphql/**/*.graphql'],
  generates: {
    'generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        fetcher: "graphql-request",
        omitOperationSuffix: true,
        addInfiniteQuery: true,
        exposeFetcher: true,
        exposeQueryKeys: true
      },
    }
  }
};

export default config;
