import { gql } from "@apollo/client";

export const UNIQUE_PAYMENT_CURRENCIES = gql`
  query UNIQUE_PAYMENT_CURRENCIES {
    uniquePaymentCurrencies {
      currency
    }
  }
`;

export const UNIQUE_PAYMENT_STATUSES = gql`
  query UNIQUE_PAYMENT_STATUSES {
    uniquePaymentStatuses {
      status
    }
  }
`;
