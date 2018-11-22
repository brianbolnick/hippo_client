import React from "react";
import { phoneMediaQuery } from "../../../styles/css-variables";
import MediaQuery from "../../MediaQuery/MediaQuery";
import {
  Description,
  Actions,
  Hero,
  Curve,
  Footer,
  Content,
  Header,
  Title,
  DemoContainer,
  SubDescriptionContainer,
  DescriptionTitle,
  DescriptionText
} from "./Styles";
import Nav from "../../Nav/Nav";
import MobileNav from "../../Nav/MobileNav";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

class NoAuth extends React.Component {
  state = {
    showMobile: window.matchMedia("(" + phoneMediaQuery + ")").matches
  };

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  render() {
    const { showMobile } = this.state;
    return (
      <div>
        <MediaQuery
          query={phoneMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
        <Content>
          <Hero>
            {showMobile ? <MobileNav /> : <Nav />}
            <Header>
              <Title>The Only App You'll Ever Need, Ever Again</Title>
              <Description>
                With this app, you can do anything and everything. Yup, even
                that too. Get started today.
              </Description>
              <Actions>
                <Button secondary onClick={() => console.log("click")}>
                  Request Demo
                </Button>
                <Link to="/sign_up">
                  <Button onClick={() => console.log("click")}>
                    Sign Up Free
                  </Button>
                </Link>
              </Actions>
            </Header>
          </Hero>
          <section>
            <DemoContainer />
          </section>
          <section style={{ zIndex: "-1" }}>
            <Curve>
              <svg
                viewBox="0 0 1200 53"
                style={{
                  height: "auto",
                  position: "absolute",
                  top: "0",
                  color: "hsl(0,0%,100%)",
                  fill: "hsl(0,0%,100%)"
                }}
              >
                <path
                  fill="currentColor"
                  d="M1196.008 53H1200V0H0v44.816-8.184C159.341 14.63 311.343 2.484 456.007.196 600.122-2.084 846.789 15.518 1196.008 53z"
                />
              </svg>
              <svg
                viewBox="0 0 1200 46"
                style={{
                  height: "auto",
                  bottom: "0",
                  position: "absolute",
                  color: "hsl(0,0%,100%)",
                  fill: "hsl(0,0%,100%)"
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M0-7h1200v53H0V-7zm0 30.113V-7h1200v43.495c-37.762 7.58-155.36 7.58-352.791 0C721.412 31.665 480.68.297 248.535.355 197.087.368 114.242 7.955 0 23.113z"
                />
              </svg>
              <SubDescriptionContainer>
                <DescriptionTitle>THIS IS ANOTHER THING</DescriptionTitle>
                <DescriptionText>
                  Yeah, this app is really freakin' sweet. It will do all the
                  stuff you want it too without even having to say anything.
                  Just think about it, and it shall be done. Pretty sweet right?
                  Yeah we know. It is ballin'.
                </DescriptionText>
              </SubDescriptionContainer>
            </Curve>
          </section>
          {/*          <section style={{ position: "relative", top: "200px" }}>
            <Block left />
          </section>
          <section style={{ position: "relative", top: "1200px" }}>
            <Block />
					</section> */}
          <Footer />
        </Content>
      </div>
    );
  }
}
export default NoAuth;
