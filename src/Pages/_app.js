import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
