import "#styles/index.scss";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "../store/overmind";

const overmind = createOvermind(config);

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={overmind}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
