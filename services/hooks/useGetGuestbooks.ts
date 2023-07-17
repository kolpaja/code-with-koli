import appConfig from 'appConfig';
import { GetGuestBookVariables, useGetGuestBook } from './../../generated/graphql';
import { GraphQLClient } from 'graphql-request';
import { TWO_HOURS_IN_MILLISECONDS } from 'services/utils/constants'

const {graphqlCmsUrl} = appConfig

export function useGetGuestBooks(variables: GetGuestBookVariables, enabled = true) {

  if (!graphqlCmsUrl) {
    throw new Error('No cmsGraphQlUrl provided in config.');
  }
  const graphQLClient = new GraphQLClient(graphqlCmsUrl || '');

  return useGetGuestBook(graphQLClient, variables, {
    cacheTime: TWO_HOURS_IN_MILLISECONDS,
    staleTime: TWO_HOURS_IN_MILLISECONDS,
    keepPreviousData: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    enabled: enabled,
  });
}
