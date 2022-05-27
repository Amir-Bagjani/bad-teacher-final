import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

//new type for pages which includes a getLayout function.
export type NextPageWithLayout = NextPage & {
  getLayout?: (p: ReactElement) => ReactNode;
};

//new type for AppProps which overrides the Component property to use the previously created type.
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
