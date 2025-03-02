"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import { Toaster } from "../ui/toaster";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <Toaster />
      </PersistGate>
    </Provider>
  );
}

export default LayoutWrapper;
