import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import { ApolloProvider } from "@apollo/client";
import { supabaseClient, apolloClient } from "utility";
import authProvider from "./authProvider";
import { PaymentCreate, PaymentEdit, PaymentList } from "pages/payment";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Refine
        notificationProvider={notificationProvider}
        Layout={Layout}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        dataProvider={dataProvider(supabaseClient)}
        liveProvider={liveProvider(supabaseClient)}
        authProvider={authProvider}
        resources={[
          {
            name: "Payment",
            list: PaymentList,
            edit: PaymentEdit,
            create: PaymentCreate,
          },
        ]}
        routerProvider={{
          ...routerProvider,
          routes: [
            {
              path: "/register",
              element: <AuthPage type="register" />,
            },
            {
              path: "/forgot-password",
              element: <AuthPage type="forgotPassword" />,
            },
            {
              path: "/update-password",
              element: <AuthPage type="updatePassword" />,
            },
          ],
        }}
        LoginPage={() => <AuthPage type="login" />}
      />
    </ApolloProvider>
  );
}

export default App;
