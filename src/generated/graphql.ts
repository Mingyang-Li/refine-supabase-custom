/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<Scalars['Boolean']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPayment: Payment;
  updatePayment: Payment;
};


export type MutationCreatePaymentArgs = {
  data: PaymentCreateInput;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']>;
  archived?: Maybe<Scalars['Boolean']>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  dateOfPayment?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<Scalars['String']>;
  dateOfPayment?: InputMaybe<Scalars['DateTime']>;
  from?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type PaymentOrderByInput = {
  amount?: InputMaybe<SortOrder>;
  archivedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  currency?: InputMaybe<SortOrder>;
  dateOfPayment?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PaymentUniqueCurrency = {
  __typename?: 'PaymentUniqueCurrency';
  currency: Scalars['String'];
};

export type PaymentUniqueStatus = {
  __typename?: 'PaymentUniqueStatus';
  status: Scalars['String'];
};

export type PaymentUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<Scalars['String']>;
  dateOfPayment?: InputMaybe<Scalars['DateTime']>;
  from?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type PaymentWhereInput = {
  amount?: InputMaybe<FloatNullableFilter>;
  archived?: InputMaybe<BooleanFilter>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currency?: InputMaybe<StringNullableFilter>;
  dateOfPayment?: InputMaybe<DateTimeNullableFilter>;
  from?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  to?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PaymentWhereUniqueInput = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  payment: Payment;
  payments: Array<Payment>;
  uniquePaymentCurrencies: Array<PaymentUniqueCurrency>;
  uniquePaymentStatuses: Array<PaymentUniqueStatus>;
};


export type QueryPaymentArgs = {
  where?: InputMaybe<PaymentWhereUniqueInput>;
};


export type QueryPaymentsArgs = {
  orderBy?: InputMaybe<Array<PaymentOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<PaymentWhereInput>;
};

export enum QueryMode {
  Default = 'Default',
  Insensitive = 'Insensitive'
}

export enum SortOrder {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  paymentLatestUpdated: Payment;
};

export type Unique_Payment_CurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type Unique_Payment_CurrenciesQuery = { __typename?: 'Query', uniquePaymentCurrencies: Array<{ __typename?: 'PaymentUniqueCurrency', currency: string }> };

export type Unique_Payment_StatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type Unique_Payment_StatusesQuery = { __typename?: 'Query', uniquePaymentStatuses: Array<{ __typename?: 'PaymentUniqueStatus', status: string }> };


export const Unique_Payment_CurrenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UNIQUE_PAYMENT_CURRENCIES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniquePaymentCurrencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]} as unknown as DocumentNode<Unique_Payment_CurrenciesQuery, Unique_Payment_CurrenciesQueryVariables>;
export const Unique_Payment_StatusesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UNIQUE_PAYMENT_STATUSES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniquePaymentStatuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Unique_Payment_StatusesQuery, Unique_Payment_StatusesQueryVariables>;