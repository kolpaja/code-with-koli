import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Endry2008SectionDynamicZoneInput: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PostContentDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type About = {
  __typename?: 'About';
  AuthorName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  img?: Maybe<UploadFileEntityResponse>;
  logo?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  repo_url?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['Date']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  website_url?: Maybe<Scalars['String']['output']>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutEntityResponseCollection = {
  __typename?: 'AboutEntityResponseCollection';
  data: Array<AboutEntity>;
  meta: ResponseCollectionMeta;
};

export type AboutFiltersInput = {
  AuthorName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AboutFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AboutFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AboutFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  repo_url?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  startedAt?: InputMaybe<DateFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  website_url?: InputMaybe<StringFilterInput>;
};

export type AboutInput = {
  AuthorName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  repo_url?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['Date']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  website_url?: InputMaybe<Scalars['String']['input']>;
};

export type App = {
  __typename?: 'App';
  CTA?: Maybe<Array<Maybe<ComponentBlocksCta>>>;
  code?: Maybe<Scalars['String']['output']>;
  coding_techs?: Maybe<CodingTechRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  img?: Maybe<UploadFileEntityResponse>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_App_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AppCtaArgs = {
  filters?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AppCoding_TechsArgs = {
  filters?: InputMaybe<CodingTechFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  attributes?: Maybe<App>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AppEntityResponse = {
  __typename?: 'AppEntityResponse';
  data?: Maybe<AppEntity>;
};

export type AppEntityResponseCollection = {
  __typename?: 'AppEntityResponseCollection';
  data: Array<AppEntity>;
  meta: ResponseCollectionMeta;
};

export type AppFiltersInput = {
  CTA?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<AppFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  coding_techs?: InputMaybe<CodingTechFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isLive?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AppFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AppFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AppInput = {
  CTA?: InputMaybe<Array<InputMaybe<ComponentBlocksCtaInput>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  coding_techs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_App_Type>;
};

export type AppRelationResponseCollection = {
  __typename?: 'AppRelationResponseCollection';
  data: Array<AppEntity>;
};

export type AromaRestaurant = {
  __typename?: 'AromaRestaurant';
  contacts?: Maybe<Array<Maybe<ComponentBusinessContact>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  google_map_location?: Maybe<ComponentBusinessGoogleMapLocation>;
  heros?: Maybe<Array<Maybe<ComponentBusinessHero>>>;
  menu_items?: Maybe<Array<Maybe<ComponentBusinessMenuItem>>>;
  menu_title?: Maybe<ComponentBlocksSectionTitle>;
  name?: Maybe<Scalars['String']['output']>;
  open_hours?: Maybe<ComponentBusinessOpenHours>;
  our_story_title?: Maybe<ComponentBlocksSectionTitle>;
  our_strength?: Maybe<ComponentBlocksSectionTitle>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  services_items?: Maybe<Array<Maybe<ComponentBusinessServiceItem>>>;
  services_title?: Maybe<ComponentBlocksSectionTitle>;
  social_networks?: Maybe<Array<Maybe<ComponentSharedSocialNetworks>>>;
  special_section?: Maybe<ComponentBlocksSectionTitle>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  we_offer_items?: Maybe<Array<Maybe<ComponentBusinessServiceItem>>>;
  we_offer_title?: Maybe<ComponentBlocksSectionTitle>;
};


export type AromaRestaurantContactsArgs = {
  filters?: InputMaybe<ComponentBusinessContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AromaRestaurantHerosArgs = {
  filters?: InputMaybe<ComponentBusinessHeroFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AromaRestaurantMenu_ItemsArgs = {
  filters?: InputMaybe<ComponentBusinessMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AromaRestaurantServices_ItemsArgs = {
  filters?: InputMaybe<ComponentBusinessServiceItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AromaRestaurantSocial_NetworksArgs = {
  filters?: InputMaybe<ComponentSharedSocialNetworksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AromaRestaurantWe_Offer_ItemsArgs = {
  filters?: InputMaybe<ComponentBusinessServiceItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AromaRestaurantEntity = {
  __typename?: 'AromaRestaurantEntity';
  attributes?: Maybe<AromaRestaurant>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AromaRestaurantEntityResponse = {
  __typename?: 'AromaRestaurantEntityResponse';
  data?: Maybe<AromaRestaurantEntity>;
};

export type AromaRestaurantInput = {
  contacts?: InputMaybe<Array<InputMaybe<ComponentBusinessContactInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  google_map_location?: InputMaybe<ComponentBusinessGoogleMapLocationInput>;
  heros?: InputMaybe<Array<InputMaybe<ComponentBusinessHeroInput>>>;
  menu_items?: InputMaybe<Array<InputMaybe<ComponentBusinessMenuItemInput>>>;
  menu_title?: InputMaybe<ComponentBlocksSectionTitleInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  open_hours?: InputMaybe<ComponentBusinessOpenHoursInput>;
  our_story_title?: InputMaybe<ComponentBlocksSectionTitleInput>;
  our_strength?: InputMaybe<ComponentBlocksSectionTitleInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  services_items?: InputMaybe<Array<InputMaybe<ComponentBusinessServiceItemInput>>>;
  services_title?: InputMaybe<ComponentBlocksSectionTitleInput>;
  social_networks?: InputMaybe<Array<InputMaybe<ComponentSharedSocialNetworksInput>>>;
  special_section?: InputMaybe<ComponentBlocksSectionTitleInput>;
  we_offer_items?: InputMaybe<Array<InputMaybe<ComponentBusinessServiceItemInput>>>;
  we_offer_title?: InputMaybe<ComponentBlocksSectionTitleInput>;
};

export type Ayah = {
  __typename?: 'Ayah';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  juz_number?: Maybe<Scalars['Int']['output']>;
  page_number?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sajdah_number?: Maybe<Scalars['Int']['output']>;
  surahs_verse_order?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verse_key?: Maybe<Scalars['String']['output']>;
};

export type AyahEntity = {
  __typename?: 'AyahEntity';
  attributes?: Maybe<Ayah>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AyahEntityResponse = {
  __typename?: 'AyahEntityResponse';
  data?: Maybe<AyahEntity>;
};

export type AyahEntityResponseCollection = {
  __typename?: 'AyahEntityResponseCollection';
  data: Array<AyahEntity>;
  meta: ResponseCollectionMeta;
};

export type AyahFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AyahFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  juz_number?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<AyahFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AyahFiltersInput>>>;
  page_number?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sajdah_number?: InputMaybe<IntFilterInput>;
  surahs_verse_order?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  verse_key?: InputMaybe<StringFilterInput>;
};

export type AyahInput = {
  juz_number?: InputMaybe<Scalars['Int']['input']>;
  page_number?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sajdah_number?: InputMaybe<Scalars['Int']['input']>;
  surahs_verse_order?: InputMaybe<Scalars['Int']['input']>;
  verse_key?: InputMaybe<Scalars['String']['input']>;
};

export type BlogAuthor = {
  __typename?: 'BlogAuthor';
  FullName?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<UploadFileEntityResponse>;
  contact?: Maybe<Array<Maybe<ComponentBusinessContact>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isAvailable: Scalars['Boolean']['output'];
  job?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  social?: Maybe<Array<Maybe<ComponentSharedSocialNetworks>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogAuthorContactArgs = {
  filters?: InputMaybe<ComponentBusinessContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogAuthorSocialArgs = {
  filters?: InputMaybe<ComponentSharedSocialNetworksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogAuthorEntity = {
  __typename?: 'BlogAuthorEntity';
  attributes?: Maybe<BlogAuthor>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogAuthorEntityResponse = {
  __typename?: 'BlogAuthorEntityResponse';
  data?: Maybe<BlogAuthorEntity>;
};

export type BlogAuthorEntityResponseCollection = {
  __typename?: 'BlogAuthorEntityResponseCollection';
  data: Array<BlogAuthorEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogAuthorFiltersInput = {
  FullName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BlogAuthorFiltersInput>>>;
  contact?: InputMaybe<ComponentBusinessContactFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isAvailable?: InputMaybe<BooleanFilterInput>;
  job?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BlogAuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogAuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  social?: InputMaybe<ComponentSharedSocialNetworksFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogAuthorInput = {
  FullName?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['ID']['input']>;
  contact?: InputMaybe<Array<InputMaybe<ComponentBusinessContactInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  social?: InputMaybe<Array<InputMaybe<ComponentSharedSocialNetworksInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type CodingTech = {
  __typename?: 'CodingTech';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  react_icons_string: Scalars['String']['output'];
  short_desc?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CodingTechEntity = {
  __typename?: 'CodingTechEntity';
  attributes?: Maybe<CodingTech>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CodingTechEntityResponse = {
  __typename?: 'CodingTechEntityResponse';
  data?: Maybe<CodingTechEntity>;
};

export type CodingTechEntityResponseCollection = {
  __typename?: 'CodingTechEntityResponseCollection';
  data: Array<CodingTechEntity>;
  meta: ResponseCollectionMeta;
};

export type CodingTechFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CodingTechFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CodingTechFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CodingTechFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  react_icons_string?: InputMaybe<StringFilterInput>;
  short_desc?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CodingTechInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  react_icons_string?: InputMaybe<Scalars['String']['input']>;
  short_desc?: InputMaybe<Scalars['String']['input']>;
};

export type CodingTechRelationResponseCollection = {
  __typename?: 'CodingTechRelationResponseCollection';
  data: Array<CodingTechEntity>;
};

export type ComponentBlocksBlock = {
  __typename?: 'ComponentBlocksBlock';
  date?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isTrue?: Maybe<Scalars['Boolean']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
  long_text?: Maybe<Scalars['String']['output']>;
  media?: Maybe<UploadFileRelationResponseCollection>;
  number?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


export type ComponentBlocksBlockMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksCta = {
  __typename?: 'ComponentBlocksCta';
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Enum_Componentblockscta_Target>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksCtaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksCtaFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksCtaFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksCtaInput = {
  href?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Enum_Componentblockscta_Target>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksItem = {
  __typename?: 'ComponentBlocksItem';
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  img?: Maybe<UploadFileEntityResponse>;
  showOnPage: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksItemFiltersInput>>>;
  cta_label?: InputMaybe<StringFilterInput>;
  cta_link?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksItemFiltersInput>>>;
  showOnPage?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksItemInput = {
  cta_label?: InputMaybe<Scalars['String']['input']>;
  cta_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  showOnPage?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksPrice = {
  __typename?: 'ComponentBlocksPrice';
  amount?: Maybe<Scalars['Float']['output']>;
  discounted_amount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isDiscounted: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksPriceFiltersInput = {
  amount?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPriceFiltersInput>>>;
  discounted_amount?: InputMaybe<FloatFilterInput>;
  isDiscounted?: InputMaybe<BooleanFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksPriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPriceFiltersInput>>>;
  symbol?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPriceInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  discounted_amount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksProjectItem = {
  __typename?: 'ComponentBlocksProjectItem';
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  img?: Maybe<UploadFileEntityResponse>;
  links?: Maybe<Array<Maybe<ComponentBusinessContact>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<Enum_Componentblocksprojectitem_Progress>;
  showOnPage: Scalars['Boolean']['output'];
};


export type ComponentBlocksProjectItemLinksArgs = {
  filters?: InputMaybe<ComponentBusinessContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksRichSectionTitle = {
  __typename?: 'ComponentBlocksRichSectionTitle';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentBlocksRichText = {
  __typename?: 'ComponentBlocksRichText';
  id: Scalars['ID']['output'];
  light?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksRichText2 = {
  __typename?: 'ComponentBlocksRichText2';
  Standart?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlocksRichTextFull = {
  __typename?: 'ComponentBlocksRichTextFull';
  id: Scalars['ID']['output'];
  rich?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksSectionTitle = {
  __typename?: 'ComponentBlocksSectionTitle';
  bg?: Maybe<Enum_Componentblockssectiontitle_Bg>;
  cta_link?: Maybe<Scalars['String']['output']>;
  cta_slogan?: Maybe<Scalars['String']['output']>;
  cta_title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hasDivider: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  section_img?: Maybe<UploadFileEntityResponse>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksSectionTitleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSectionTitleFiltersInput>>>;
  bg?: InputMaybe<StringFilterInput>;
  cta_link?: InputMaybe<StringFilterInput>;
  cta_slogan?: InputMaybe<StringFilterInput>;
  cta_title?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  hasDivider?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentBlocksSectionTitleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSectionTitleFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksSectionTitleInput = {
  bg?: InputMaybe<Enum_Componentblockssectiontitle_Bg>;
  cta_link?: InputMaybe<Scalars['String']['input']>;
  cta_slogan?: InputMaybe<Scalars['String']['input']>;
  cta_title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hasDivider?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  section_img?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBusinessContact = {
  __typename?: 'ComponentBusinessContact';
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Enum_Componentbusinesscontact_Target>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBusinessContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBusinessContactFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBusinessContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBusinessContactFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBusinessContactInput = {
  href?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Enum_Componentbusinesscontact_Target>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBusinessGoogleMapLocation = {
  __typename?: 'ComponentBusinessGoogleMapLocation';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  iframe_string?: Maybe<Scalars['String']['output']>;
  isAvailable: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type ComponentBusinessGoogleMapLocationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  iframe_string?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBusinessHero = {
  __typename?: 'ComponentBusinessHero';
  id: Scalars['ID']['output'];
  img?: Maybe<UploadFileEntityResponse>;
  section?: Maybe<ComponentBlocksSectionTitle>;
  showOnPage?: Maybe<Scalars['Boolean']['output']>;
};

export type ComponentBusinessHeroFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBusinessHeroFiltersInput>>>;
  not?: InputMaybe<ComponentBusinessHeroFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBusinessHeroFiltersInput>>>;
  section?: InputMaybe<ComponentBlocksSectionTitleFiltersInput>;
  showOnPage?: InputMaybe<BooleanFilterInput>;
};

export type ComponentBusinessHeroInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  section?: InputMaybe<ComponentBlocksSectionTitleInput>;
  showOnPage?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentBusinessMenuItem = {
  __typename?: 'ComponentBusinessMenuItem';
  category?: Maybe<Enum_Componentbusinessmenuitem_Category>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  img?: Maybe<UploadFileEntityResponse>;
  ingredients?: Maybe<Scalars['String']['output']>;
  isAvailable: Scalars['Boolean']['output'];
  isFeatured: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<ComponentBlocksPrice>;
  recipe?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  showOnCard?: Maybe<Scalars['Boolean']['output']>;
  showOnLinkTree: Scalars['Boolean']['output'];
};

export type ComponentBusinessMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBusinessMenuItemFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  ingredients?: InputMaybe<StringFilterInput>;
  isAvailable?: InputMaybe<BooleanFilterInput>;
  isFeatured?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBusinessMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBusinessMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<ComponentBlocksPriceFiltersInput>;
  recipe?: InputMaybe<StringFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  showOnCard?: InputMaybe<BooleanFilterInput>;
  showOnLinkTree?: InputMaybe<BooleanFilterInput>;
};

export type ComponentBusinessMenuItemInput = {
  category?: InputMaybe<Enum_Componentbusinessmenuitem_Category>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<ComponentBlocksPriceInput>;
  recipe?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  showOnCard?: InputMaybe<Scalars['Boolean']['input']>;
  showOnLinkTree?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentBusinessOpenHours = {
  __typename?: 'ComponentBusinessOpenHours';
  autumn?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  spring?: Maybe<Scalars['String']['output']>;
  summer?: Maybe<Scalars['String']['output']>;
  winter?: Maybe<Scalars['String']['output']>;
};

export type ComponentBusinessOpenHoursInput = {
  autumn?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  spring?: InputMaybe<Scalars['String']['input']>;
  summer?: InputMaybe<Scalars['String']['input']>;
  winter?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBusinessServiceItem = {
  __typename?: 'ComponentBusinessServiceItem';
  action_link?: Maybe<Scalars['String']['output']>;
  badge?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  img?: Maybe<UploadFileEntityResponse>;
  order?: Maybe<Scalars['Int']['output']>;
  showOnCard: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBusinessServiceItemFiltersInput = {
  action_link?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentBusinessServiceItemFiltersInput>>>;
  badge?: InputMaybe<StringFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBusinessServiceItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBusinessServiceItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  showOnCard?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBusinessServiceItemInput = {
  action_link?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  showOnCard?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBusinessStatistics = {
  __typename?: 'ComponentBusinessStatistics';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  numeric_value?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ComponentBusinessStatisticsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBusinessStatisticsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBusinessStatisticsFiltersInput>;
  numeric_value?: InputMaybe<FloatFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBusinessStatisticsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentBusinessStatisticsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  numeric_value?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBusinessTestimonialItem = {
  __typename?: 'ComponentBusinessTestimonialItem';
  author?: Maybe<Scalars['String']['output']>;
  author_avatar?: Maybe<UploadFileEntityResponse>;
  author_link?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  comment_link?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  rating: Scalars['Int']['output'];
  showOnPage: Scalars['Boolean']['output'];
};

export type ComponentBusinessTestimonialItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBusinessTestimonialItemFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  author_link?: InputMaybe<StringFilterInput>;
  comment?: InputMaybe<StringFilterInput>;
  comment_link?: InputMaybe<StringFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBusinessTestimonialItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBusinessTestimonialItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  rating?: InputMaybe<IntFilterInput>;
  showOnPage?: InputMaybe<BooleanFilterInput>;
};

export type ComponentBusinessTestimonialItemInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  author_avatar?: InputMaybe<Scalars['ID']['input']>;
  author_link?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  comment_link?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  showOnPage?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentCwkJobExperience = {
  __typename?: 'ComponentCwkJobExperience';
  color_hashtag?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  company_link?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Date']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCurrent: Scalars['Boolean']['output'];
  position?: Maybe<Scalars['String']['output']>;
  started_date?: Maybe<Scalars['Date']['output']>;
  techs_used?: Maybe<Scalars['String']['output']>;
};

export type ComponentCwkJobExperienceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCwkJobExperienceFiltersInput>>>;
  color_hashtag?: InputMaybe<StringFilterInput>;
  company?: InputMaybe<StringFilterInput>;
  company_link?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  end_date?: InputMaybe<DateFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  isCurrent?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentCwkJobExperienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCwkJobExperienceFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  started_date?: InputMaybe<DateFilterInput>;
  techs_used?: InputMaybe<StringFilterInput>;
};

export type ComponentCwkJobExperienceInput = {
  color_hashtag?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_link?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['Date']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  started_date?: InputMaybe<Scalars['Date']['input']>;
  techs_used?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentEcommerceCustomer = {
  __typename?: 'ComponentEcommerceCustomer';
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  order_date?: Maybe<Scalars['DateTime']['output']>;
  payment_method?: Maybe<Enum_Componentecommercecustomer_Payment_Method>;
  shipping_cost?: Maybe<Scalars['Float']['output']>;
  tel?: Maybe<Scalars['String']['output']>;
};

export type ComponentEcommerceCustomerFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentEcommerceCustomerFiltersInput>>>;
  email?: InputMaybe<StringFilterInput>;
  full_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEcommerceCustomerFiltersInput>;
  notes?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEcommerceCustomerFiltersInput>>>;
  order_date?: InputMaybe<DateTimeFilterInput>;
  payment_method?: InputMaybe<StringFilterInput>;
  shipping_cost?: InputMaybe<FloatFilterInput>;
  tel?: InputMaybe<StringFilterInput>;
};

export type ComponentEcommerceCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['DateTime']['input']>;
  payment_method?: InputMaybe<Enum_Componentecommercecustomer_Payment_Method>;
  shipping_cost?: InputMaybe<Scalars['Float']['input']>;
  tel?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentEcommercePrices = {
  __typename?: 'ComponentEcommercePrices';
  amount?: Maybe<Scalars['Float']['output']>;
  badge?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<CurrencyEntityResponse>;
  discount_percentage?: Maybe<Scalars['Float']['output']>;
  discounted_amount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isDiscounted: Scalars['Boolean']['output'];
  note?: Maybe<Scalars['String']['output']>;
};

export type ComponentEcommercePricesFiltersInput = {
  amount?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentEcommercePricesFiltersInput>>>;
  badge?: InputMaybe<StringFilterInput>;
  currency?: InputMaybe<CurrencyFiltersInput>;
  discount_percentage?: InputMaybe<FloatFilterInput>;
  discounted_amount?: InputMaybe<FloatFilterInput>;
  isDiscounted?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentEcommercePricesFiltersInput>;
  note?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEcommercePricesFiltersInput>>>;
};

export type ComponentEcommercePricesInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['ID']['input']>;
  discount_percentage?: InputMaybe<Scalars['Float']['input']>;
  discounted_amount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentEcommerceStock = {
  __typename?: 'ComponentEcommerceStock';
  available?: Maybe<Scalars['Int']['output']>;
  delivering?: Maybe<Scalars['Int']['output']>;
  gifted?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  sold?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ComponentEcommerceStockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEcommerceStockFiltersInput>>>;
  available?: InputMaybe<IntFilterInput>;
  delivering?: InputMaybe<IntFilterInput>;
  gifted?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ComponentEcommerceStockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEcommerceStockFiltersInput>>>;
  sold?: InputMaybe<IntFilterInput>;
  total?: InputMaybe<IntFilterInput>;
};

export type ComponentEcommerceStockInput = {
  available?: InputMaybe<Scalars['Int']['input']>;
  delivering?: InputMaybe<Scalars['Int']['input']>;
  gifted?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sold?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentSharedFaq = {
  __typename?: 'ComponentSharedFaq';
  answer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  showOnPage: Scalars['Boolean']['output'];
};

export type ComponentSharedFaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedFaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedFaqFiltersInput>;
  notes?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedFaqFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  showOnPage?: InputMaybe<BooleanFilterInput>;
};

export type ComponentSharedFaqInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  showOnPage?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentSharedMedia = {
  __typename?: 'ComponentSharedMedia';
  file?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedQuote = {
  __typename?: 'ComponentSharedQuote';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedRichText = {
  __typename?: 'ComponentSharedRichText';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonical_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  meta_img?: Maybe<UploadFileEntityResponse>;
  meta_robots?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonical_url?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  meta_robots?: InputMaybe<StringFilterInput>;
  meta_title?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
};

export type ComponentSharedSeoInput = {
  canonical_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  meta_img?: InputMaybe<Scalars['ID']['input']>;
  meta_robots?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSocialNetworks = {
  __typename?: 'ComponentSharedSocialNetworks';
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  showOnPage: Scalars['Boolean']['output'];
};

export type ComponentSharedSocialNetworksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSocialNetworksFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  display_name?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSocialNetworksFiltersInput>;
  note?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSocialNetworksFiltersInput>>>;
  showOnPage?: InputMaybe<BooleanFilterInput>;
};

export type ComponentSharedSocialNetworksInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  showOnPage?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Currency = {
  __typename?: 'Currency';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CurrencyEntity = {
  __typename?: 'CurrencyEntity';
  attributes?: Maybe<Currency>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CurrencyEntityResponse = {
  __typename?: 'CurrencyEntityResponse';
  data?: Maybe<CurrencyEntity>;
};

export type CurrencyEntityResponseCollection = {
  __typename?: 'CurrencyEntityResponseCollection';
  data: Array<CurrencyEntity>;
  meta: ResponseCollectionMeta;
};

export type CurrencyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CurrencyFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CurrencyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CurrencyFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  symbol?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CurrencyInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
};

export type Cwk = {
  __typename?: 'Cwk';
  about_me?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Array<Maybe<ComponentBusinessContact>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  my_developed_apps?: Maybe<AppRelationResponseCollection>;
  my_experience?: Maybe<Array<Maybe<ComponentCwkJobExperience>>>;
  my_spoken_languages?: Maybe<MySpokenLanguageRelationResponseCollection>;
  personal_touch?: Maybe<ComponentBlocksSectionTitle>;
  personal_touch_item?: Maybe<Array<Maybe<ComponentBlocksItem>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  social_networks?: Maybe<Array<Maybe<ComponentSharedSocialNetworks>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CwkContactArgs = {
  filters?: InputMaybe<ComponentBusinessContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CwkMy_Developed_AppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CwkMy_ExperienceArgs = {
  filters?: InputMaybe<ComponentCwkJobExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CwkMy_Spoken_LanguagesArgs = {
  filters?: InputMaybe<MySpokenLanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CwkPersonal_Touch_ItemArgs = {
  filters?: InputMaybe<ComponentBlocksItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CwkSocial_NetworksArgs = {
  filters?: InputMaybe<ComponentSharedSocialNetworksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CwkEntity = {
  __typename?: 'CwkEntity';
  attributes?: Maybe<Cwk>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CwkEntityResponse = {
  __typename?: 'CwkEntityResponse';
  data?: Maybe<CwkEntity>;
};

export type CwkInput = {
  about_me?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Array<InputMaybe<ComponentBusinessContactInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  my_developed_apps?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  my_experience?: InputMaybe<Array<InputMaybe<ComponentCwkJobExperienceInput>>>;
  my_spoken_languages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  personal_touch?: InputMaybe<ComponentBlocksSectionTitleInput>;
  personal_touch_item?: InputMaybe<Array<InputMaybe<ComponentBlocksItemInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  social_networks?: InputMaybe<Array<InputMaybe<ComponentSharedSocialNetworksInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_App_Type {
  Application = 'application',
  Ecommerce = 'ecommerce',
  Landing = 'landing',
  Native = 'native',
  Portfolio = 'portfolio'
}

export enum Enum_Componentblockscta_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Componentblocksprojectitem_Progress {
  Almost = 'almost',
  Done = 'done',
  Halfway = 'halfway',
  Inprogress = 'inprogress',
  Todo = 'todo'
}

export enum Enum_Componentblockssectiontitle_Bg {
  Dark = 'dark',
  Light = 'light',
  Other = 'other'
}

export enum Enum_Componentbusinesscontact_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Componentbusinessmenuitem_Category {
  AlForne = 'al_forne',
  Bread = 'bread',
  ChickenDishes = 'chicken_dishes',
  Drinks = 'drinks',
  Other = 'other',
  Pasta = 'pasta',
  Pesce = 'pesce',
  Pizza = 'pizza',
  Rissotto = 'rissotto',
  Sauces = 'sauces',
  SideOrders = 'side_orders',
  Starters = 'starters',
  Steaks = 'steaks',
  Sweets = 'sweets'
}

export enum Enum_Componentecommercecustomer_Payment_Method {
  Bank = 'bank',
  Card = 'card',
  Cash = 'cash',
  Gift = 'gift'
}

export enum Enum_Myspokenlanguage_Level {
  ElementaryProfiencesy = 'Elementary_Profiencesy',
  FullProfessionalProfiencesy = 'Full_Professional_Profiencesy',
  LimitedWorkingProfiencesy = 'Limited_Working_Profiencesy',
  NativeBilingualProfiencesy = 'Native_Bilingual_Profiencesy',
  ProfessionalWorkingProfiencesy = 'Professional_Working_Profiencesy'
}

export enum Enum_Order_Status {
  Confirmed = 'confirmed',
  Created = 'created',
  Delivered = 'delivered',
  Processing = 'processing',
  Rejected = 'rejected',
  Shipped = 'shipped'
}

export enum Enum_Surah_Revelation_Place {
  Madinah = 'madinah',
  Makkah = 'makkah'
}

export type Endry2008 = {
  __typename?: 'Endry2008';
  Hero?: Maybe<Array<Maybe<ComponentBusinessHero>>>;
  Open_Hours?: Maybe<ComponentBusinessOpenHours>;
  Section?: Maybe<Array<Maybe<Endry2008SectionDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expert_flooring_installer?: Maybe<ComponentBlocksSectionTitle>;
  faq?: Maybe<Array<Maybe<ComponentSharedFaq>>>;
  featuredImg?: Maybe<UploadFileEntityResponse>;
  google_map_location?: Maybe<ComponentBusinessGoogleMapLocation>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<Endry2008RelationResponseCollection>;
  our_business_statistics?: Maybe<Array<Maybe<ComponentBusinessStatistics>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  services?: Maybe<Array<Maybe<ComponentBusinessServiceItem>>>;
  social?: Maybe<Array<Maybe<ComponentSharedSocialNetworks>>>;
  testimonials?: Maybe<Array<Maybe<ComponentBusinessTestimonialItem>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type Endry2008HeroArgs = {
  filters?: InputMaybe<ComponentBusinessHeroFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Endry2008FaqArgs = {
  filters?: InputMaybe<ComponentSharedFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Endry2008LocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type Endry2008Our_Business_StatisticsArgs = {
  filters?: InputMaybe<ComponentBusinessStatisticsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Endry2008ServicesArgs = {
  filters?: InputMaybe<ComponentBusinessServiceItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Endry2008SocialArgs = {
  filters?: InputMaybe<ComponentSharedSocialNetworksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Endry2008TestimonialsArgs = {
  filters?: InputMaybe<ComponentBusinessTestimonialItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Endry2008Entity = {
  __typename?: 'Endry2008Entity';
  attributes?: Maybe<Endry2008>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Endry2008EntityResponse = {
  __typename?: 'Endry2008EntityResponse';
  data?: Maybe<Endry2008Entity>;
};

export type Endry2008Input = {
  Hero?: InputMaybe<Array<InputMaybe<ComponentBusinessHeroInput>>>;
  Open_Hours?: InputMaybe<ComponentBusinessOpenHoursInput>;
  Section?: InputMaybe<Array<Scalars['Endry2008SectionDynamicZoneInput']['input']>>;
  expert_flooring_installer?: InputMaybe<ComponentBlocksSectionTitleInput>;
  faq?: InputMaybe<Array<InputMaybe<ComponentSharedFaqInput>>>;
  featuredImg?: InputMaybe<Scalars['ID']['input']>;
  google_map_location?: InputMaybe<ComponentBusinessGoogleMapLocationInput>;
  our_business_statistics?: InputMaybe<Array<InputMaybe<ComponentBusinessStatisticsInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  services?: InputMaybe<Array<InputMaybe<ComponentBusinessServiceItemInput>>>;
  social?: InputMaybe<Array<InputMaybe<ComponentSharedSocialNetworksInput>>>;
  testimonials?: InputMaybe<Array<InputMaybe<ComponentBusinessTestimonialItemInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Endry2008RelationResponseCollection = {
  __typename?: 'Endry2008RelationResponseCollection';
  data: Array<Endry2008Entity>;
};

export type Endry2008SectionDynamicZone = ComponentBlocksSectionTitle | Error;

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = About | App | AromaRestaurant | Ayah | BlogAuthor | Category | CodingTech | ComponentBlocksBlock | ComponentBlocksCta | ComponentBlocksItem | ComponentBlocksPrice | ComponentBlocksProjectItem | ComponentBlocksRichSectionTitle | ComponentBlocksRichText | ComponentBlocksRichText2 | ComponentBlocksRichTextFull | ComponentBlocksSectionTitle | ComponentBusinessContact | ComponentBusinessGoogleMapLocation | ComponentBusinessHero | ComponentBusinessMenuItem | ComponentBusinessOpenHours | ComponentBusinessServiceItem | ComponentBusinessStatistics | ComponentBusinessTestimonialItem | ComponentCwkJobExperience | ComponentEcommerceCustomer | ComponentEcommercePrices | ComponentEcommerceStock | ComponentSharedFaq | ComponentSharedMedia | ComponentSharedQuote | ComponentSharedRichText | ComponentSharedSeo | ComponentSharedSocialNetworks | Currency | Cwk | Endry2008 | I18NLocale | IqraKitap | IqraQuran | MySpokenLanguage | Order | PointFood | Post | Product | Store | Surah | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type IqraKitap = {
  __typename?: 'IqraKitap';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IqraKitapEntity = {
  __typename?: 'IqraKitapEntity';
  attributes?: Maybe<IqraKitap>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IqraKitapEntityResponse = {
  __typename?: 'IqraKitapEntityResponse';
  data?: Maybe<IqraKitapEntity>;
};

export type IqraKitapInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IqraQuran = {
  __typename?: 'IqraQuran';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IqraQuranEntity = {
  __typename?: 'IqraQuranEntity';
  attributes?: Maybe<IqraQuran>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IqraQuranEntityResponse = {
  __typename?: 'IqraQuranEntityResponse';
  data?: Maybe<IqraQuranEntity>;
};

export type IqraQuranInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAbout?: Maybe<AboutEntityResponse>;
  createApp?: Maybe<AppEntityResponse>;
  createAyah?: Maybe<AyahEntityResponse>;
  createBlogAuthor?: Maybe<BlogAuthorEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCodingTech?: Maybe<CodingTechEntityResponse>;
  createCurrency?: Maybe<CurrencyEntityResponse>;
  createEndry2008Localization?: Maybe<Endry2008EntityResponse>;
  createMySpokenLanguage?: Maybe<MySpokenLanguageEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createPointFoodLocalization?: Maybe<PointFoodEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createSurah?: Maybe<SurahEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteApp?: Maybe<AppEntityResponse>;
  deleteAromaRestaurant?: Maybe<AromaRestaurantEntityResponse>;
  deleteAyah?: Maybe<AyahEntityResponse>;
  deleteBlogAuthor?: Maybe<BlogAuthorEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCodingTech?: Maybe<CodingTechEntityResponse>;
  deleteCurrency?: Maybe<CurrencyEntityResponse>;
  deleteCwk?: Maybe<CwkEntityResponse>;
  deleteEndry2008?: Maybe<Endry2008EntityResponse>;
  deleteIqraKitap?: Maybe<IqraKitapEntityResponse>;
  deleteIqraQuran?: Maybe<IqraQuranEntityResponse>;
  deleteMySpokenLanguage?: Maybe<MySpokenLanguageEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deletePointFood?: Maybe<PointFoodEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteStore?: Maybe<StoreEntityResponse>;
  deleteSurah?: Maybe<SurahEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateApp?: Maybe<AppEntityResponse>;
  updateAromaRestaurant?: Maybe<AromaRestaurantEntityResponse>;
  updateAyah?: Maybe<AyahEntityResponse>;
  updateBlogAuthor?: Maybe<BlogAuthorEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCodingTech?: Maybe<CodingTechEntityResponse>;
  updateCurrency?: Maybe<CurrencyEntityResponse>;
  updateCwk?: Maybe<CwkEntityResponse>;
  updateEndry2008?: Maybe<Endry2008EntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateIqraKitap?: Maybe<IqraKitapEntityResponse>;
  updateIqraQuran?: Maybe<IqraQuranEntityResponse>;
  updateMySpokenLanguage?: Maybe<MySpokenLanguageEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updatePointFood?: Maybe<PointFoodEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateStore?: Maybe<StoreEntityResponse>;
  updateSurah?: Maybe<SurahEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAboutArgs = {
  data: AboutInput;
};


export type MutationCreateAppArgs = {
  data: AppInput;
};


export type MutationCreateAyahArgs = {
  data: AyahInput;
};


export type MutationCreateBlogAuthorArgs = {
  data: BlogAuthorInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCodingTechArgs = {
  data: CodingTechInput;
};


export type MutationCreateCurrencyArgs = {
  data: CurrencyInput;
};


export type MutationCreateEndry2008LocalizationArgs = {
  data?: InputMaybe<Endry2008Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMySpokenLanguageArgs = {
  data: MySpokenLanguageInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreatePointFoodLocalizationArgs = {
  data?: InputMaybe<PointFoodInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateSurahArgs = {
  data: SurahInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAboutArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAppArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAyahArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBlogAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCodingTechArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCurrencyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEndry2008Args = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMySpokenLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePointFoodArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSurahArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAppArgs = {
  data: AppInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAromaRestaurantArgs = {
  data: AromaRestaurantInput;
};


export type MutationUpdateAyahArgs = {
  data: AyahInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBlogAuthorArgs = {
  data: BlogAuthorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCodingTechArgs = {
  data: CodingTechInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCurrencyArgs = {
  data: CurrencyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCwkArgs = {
  data: CwkInput;
};


export type MutationUpdateEndry2008Args = {
  data: Endry2008Input;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateIqraKitapArgs = {
  data: IqraKitapInput;
};


export type MutationUpdateIqraQuranArgs = {
  data: IqraQuranInput;
};


export type MutationUpdateMySpokenLanguageArgs = {
  data: MySpokenLanguageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePointFoodArgs = {
  data: PointFoodInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStoreArgs = {
  data: StoreInput;
};


export type MutationUpdateSurahArgs = {
  data: SurahInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type MySpokenLanguage = {
  __typename?: 'MySpokenLanguage';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Enum_Myspokenlanguage_Level>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MySpokenLanguageEntity = {
  __typename?: 'MySpokenLanguageEntity';
  attributes?: Maybe<MySpokenLanguage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MySpokenLanguageEntityResponse = {
  __typename?: 'MySpokenLanguageEntityResponse';
  data?: Maybe<MySpokenLanguageEntity>;
};

export type MySpokenLanguageEntityResponseCollection = {
  __typename?: 'MySpokenLanguageEntityResponseCollection';
  data: Array<MySpokenLanguageEntity>;
  meta: ResponseCollectionMeta;
};

export type MySpokenLanguageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MySpokenLanguageFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MySpokenLanguageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MySpokenLanguageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MySpokenLanguageInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Enum_Myspokenlanguage_Level>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MySpokenLanguageRelationResponseCollection = {
  __typename?: 'MySpokenLanguageRelationResponseCollection';
  data: Array<MySpokenLanguageEntity>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<ComponentEcommerceCustomer>;
  delivery_ref?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Enum_Order_Status>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customer?: InputMaybe<ComponentEcommerceCustomerFiltersInput>;
  delivery_ref?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  total_amount?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OrderInput = {
  customer?: InputMaybe<ComponentEcommerceCustomerInput>;
  delivery_ref?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Enum_Order_Status>;
  total_amount?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  data: Array<OrderEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PointFood = {
  __typename?: 'PointFood';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PointFoodRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PointFoodLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PointFoodEntity = {
  __typename?: 'PointFoodEntity';
  attributes?: Maybe<PointFood>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PointFoodEntityResponse = {
  __typename?: 'PointFoodEntityResponse';
  data?: Maybe<PointFoodEntity>;
};

export type PointFoodInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PointFoodRelationResponseCollection = {
  __typename?: 'PointFoodRelationResponseCollection';
  data: Array<PointFoodEntity>;
};

export type Post = {
  __typename?: 'Post';
  categories?: Maybe<CategoryRelationResponseCollection>;
  content?: Maybe<Array<Maybe<PostContentDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  img?: Maybe<UploadFileEntityResponse>;
  my_developed_apps?: Maybe<AppRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostMy_Developed_AppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostContentDynamicZone = ComponentBlocksRichTextFull | Error;

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  desc?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  my_developed_apps?: InputMaybe<AppFiltersInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  content?: InputMaybe<Array<Scalars['PostContentDynamicZoneInput']['input']>>;
  date?: InputMaybe<Scalars['Date']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  my_developed_apps?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  badge?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  img?: Maybe<UploadFileEntityResponse>;
  in_stock?: Maybe<ComponentEcommerceStock>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  my_developed_app?: Maybe<AppEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<OrderRelationResponseCollection>;
  price?: Maybe<Array<Maybe<ComponentEcommercePrices>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPriceArgs = {
  filters?: InputMaybe<ComponentEcommercePricesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  badge?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  in_stock?: InputMaybe<ComponentEcommerceStockFiltersInput>;
  isAvailable?: InputMaybe<BooleanFilterInput>;
  my_developed_app?: InputMaybe<AppFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  price?: InputMaybe<ComponentEcommercePricesFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  badge?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['ID']['input']>;
  in_stock?: InputMaybe<ComponentEcommerceStockInput>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  my_developed_app?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  price?: InputMaybe<Array<InputMaybe<ComponentEcommercePricesInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  abouts?: Maybe<AboutEntityResponseCollection>;
  app?: Maybe<AppEntityResponse>;
  apps?: Maybe<AppEntityResponseCollection>;
  aromaRestaurant?: Maybe<AromaRestaurantEntityResponse>;
  ayah?: Maybe<AyahEntityResponse>;
  ayahs?: Maybe<AyahEntityResponseCollection>;
  blogAuthor?: Maybe<BlogAuthorEntityResponse>;
  blogAuthors?: Maybe<BlogAuthorEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  codingTech?: Maybe<CodingTechEntityResponse>;
  codingTechs?: Maybe<CodingTechEntityResponseCollection>;
  currencies?: Maybe<CurrencyEntityResponseCollection>;
  currency?: Maybe<CurrencyEntityResponse>;
  cwk?: Maybe<CwkEntityResponse>;
  endry2008?: Maybe<Endry2008EntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  iqraKitap?: Maybe<IqraKitapEntityResponse>;
  iqraQuran?: Maybe<IqraQuranEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  mySpokenLanguage?: Maybe<MySpokenLanguageEntityResponse>;
  mySpokenLanguages?: Maybe<MySpokenLanguageEntityResponseCollection>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  pointFood?: Maybe<PointFoodEntityResponse>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  store?: Maybe<StoreEntityResponse>;
  surah?: Maybe<SurahEntityResponse>;
  surahs?: Maybe<SurahEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAboutsArgs = {
  filters?: InputMaybe<AboutFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAppsArgs = {
  filters?: InputMaybe<AppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAromaRestaurantArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAyahArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAyahsArgs = {
  filters?: InputMaybe<AyahFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlogAuthorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBlogAuthorsArgs = {
  filters?: InputMaybe<BlogAuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCodingTechArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCodingTechsArgs = {
  filters?: InputMaybe<CodingTechFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCurrenciesArgs = {
  filters?: InputMaybe<CurrencyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCwkArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEndry2008Args = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryIqraKitapArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryIqraQuranArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMySpokenLanguageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMySpokenLanguagesArgs = {
  filters?: InputMaybe<MySpokenLanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPointFoodArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStoreArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySurahArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySurahsArgs = {
  filters?: InputMaybe<SurahFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Store = {
  __typename?: 'Store';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StoreEntity = {
  __typename?: 'StoreEntity';
  attributes?: Maybe<Store>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StoreEntityResponse = {
  __typename?: 'StoreEntityResponse';
  data?: Maybe<StoreEntity>;
};

export type StoreInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Surah = {
  __typename?: 'Surah';
  audio_mp3?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  embed_youtube?: Maybe<Scalars['String']['output']>;
  name_arabic?: Maybe<Scalars['String']['output']>;
  name_complex?: Maybe<Scalars['String']['output']>;
  name_translated?: Maybe<Scalars['String']['output']>;
  name_translitered?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  revelation_order: Scalars['Int']['output'];
  revelation_place?: Maybe<Enum_Surah_Revelation_Place>;
  slug?: Maybe<Scalars['String']['output']>;
  surah_order?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verses_count?: Maybe<Scalars['Int']['output']>;
};

export type SurahEntity = {
  __typename?: 'SurahEntity';
  attributes?: Maybe<Surah>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SurahEntityResponse = {
  __typename?: 'SurahEntityResponse';
  data?: Maybe<SurahEntity>;
};

export type SurahEntityResponseCollection = {
  __typename?: 'SurahEntityResponseCollection';
  data: Array<SurahEntity>;
  meta: ResponseCollectionMeta;
};

export type SurahFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SurahFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  embed_youtube?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name_arabic?: InputMaybe<StringFilterInput>;
  name_complex?: InputMaybe<StringFilterInput>;
  name_translated?: InputMaybe<StringFilterInput>;
  name_translitered?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SurahFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SurahFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  revelation_order?: InputMaybe<IntFilterInput>;
  revelation_place?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  surah_order?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  verses_count?: InputMaybe<IntFilterInput>;
};

export type SurahInput = {
  audio_mp3?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  embed_youtube?: InputMaybe<Scalars['String']['input']>;
  name_arabic?: InputMaybe<Scalars['String']['input']>;
  name_complex?: InputMaybe<Scalars['String']['input']>;
  name_translated?: InputMaybe<Scalars['String']['input']>;
  name_translitered?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  revelation_order?: InputMaybe<Scalars['Int']['input']>;
  revelation_place?: InputMaybe<Enum_Surah_Revelation_Place>;
  slug?: InputMaybe<Scalars['String']['input']>;
  surah_order?: InputMaybe<Scalars['Int']['input']>;
  verses_count?: InputMaybe<Scalars['Int']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetPageDataVariables = Exact<{
  publicationState?: InputMaybe<PublicationState>;
}>;


export type GetPageData = { __typename?: 'Query', cwk?: { __typename?: 'CwkEntityResponse', data?: { __typename?: 'CwkEntity', id?: string | null, attributes?: { __typename?: 'Cwk', title?: string | null, description?: string | null, about_me?: string | null, social_networks?: Array<{ __typename?: 'ComponentSharedSocialNetworks', id: string, name?: string | null, showOnPage: boolean, href?: string | null, display_name?: string | null, icon: string } | null> | null, my_experience?: Array<{ __typename?: 'ComponentCwkJobExperience', id: string, company?: string | null, position?: string | null, isCurrent: boolean, description?: string | null, techs_used?: string | null, color_hashtag?: string | null, icon?: string | null } | null> | null } | null } | null } | null };


export const GetPageDataDocument = `
    query getPageData($publicationState: PublicationState = LIVE) {
  cwk(publicationState: $publicationState) {
    data {
      id
      attributes {
        title
        description
        social_networks {
          id
          name
          showOnPage
          href
          display_name
          icon
        }
        about_me
        my_experience {
          id
          company
          position
          isCurrent
          description
          techs_used
          color_hashtag
          icon
        }
      }
    }
  }
}
    `;
export const useGetPageData = <
      TData = GetPageData,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetPageDataVariables,
      options?: UseQueryOptions<GetPageData, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPageData, TError, TData>(
      variables === undefined ? ['getPageData'] : ['getPageData', variables],
      fetcher<GetPageData, GetPageDataVariables>(client, GetPageDataDocument, variables, headers),
      options
    );

useGetPageData.getKey = (variables?: GetPageDataVariables) => variables === undefined ? ['getPageData'] : ['getPageData', variables];
;

export const useInfiniteGetPageData = <
      TData = GetPageData,
      TError = unknown
    >(
      pageParamKey: keyof GetPageDataVariables,
      client: GraphQLClient,
      variables?: GetPageDataVariables,
      options?: UseInfiniteQueryOptions<GetPageData, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetPageData, TError, TData>(
      variables === undefined ? ['getPageData.infinite'] : ['getPageData.infinite', variables],
      (metaData) => fetcher<GetPageData, GetPageDataVariables>(client, GetPageDataDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );


useInfiniteGetPageData.getKey = (variables?: GetPageDataVariables) => variables === undefined ? ['getPageData.infinite'] : ['getPageData.infinite', variables];
;

useGetPageData.fetcher = (client: GraphQLClient, variables?: GetPageDataVariables, headers?: RequestInit['headers']) => fetcher<GetPageData, GetPageDataVariables>(client, GetPageDataDocument, variables, headers);