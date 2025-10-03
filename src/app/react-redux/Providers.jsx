"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export function Providers({ children, session }) {
  // Optional: hydrate Redux after client mount (not strictly needed since store.js handles SSR safely)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedCart = localStorage.getItem("cartState");
    if (savedCart) {
      store.dispatch({
        type: "cart/hydrate",
        payload: JSON.parse(savedCart),
      });
    }
  }, []);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
}
