import App, { Container } from "next/app";
import LayOut from "../layout/LayOut";
import styled from "styled-components";
import NavBar from "../src/components/NavBar";

class MyApp extends App {
  // Exposes page numbers.
  // Will run before render function and passed to props if you return
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <LayOut>
          <NavBar />
          <Component {...pageProps} />
        </LayOut>
      </Container>
    );
  }
}

export default MyApp;
