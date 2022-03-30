import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <h3>***Header****</h3>
      <div>
        <Component {...pageProps} />
      </div>
      <h3>***Footer***</h3>
    </>
  );
};
export default App;
