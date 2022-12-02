import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Listable</title>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
