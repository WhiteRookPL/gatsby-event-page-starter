import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { styles } from "../components/content";
import { NavigationBar } from "../components/navigation";
import { SummarySection } from "../components/summary";

import theme from "../theme/main";

const Main = styled.main`
  ${styles.content}
`;

export default ({ children, data }) => {
  const { headTitle, title, description, author, tags, contactData, facebookAppId } = data.site.siteMetadata;

  const siteCanonicalLink = data.site.siteMetadata.siteUrl;

  const { twitter, facebook, meetup } = data.site.siteMetadata.socialMedia;

  const socialProfiles = {
    twitterProfile: `https://twitter.com/${twitter}`,
    facebookProfile: `https://facebook.com/${facebook}`,
    meetupProfile: `https://www.meetup.com/${meetup}`,
  };

  return (
    <Main>
      <Helmet>
        <html lang="en" />

        <style type="text/css">{`
          html { overflow: auto; }
          body { background-color: ${theme.colors.background}; }
        `}</style>

        <title>{headTitle}</title>

        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="tags" content={tags} />

        <meta property="twitter:site" content={`@${twitter}`} />

        <meta property="og:url" content={siteCanonicalLink} />
        <meta property="og:title" content={headTitle} />
        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta property="fb:app_id" content={facebookAppId} />

        <link rel="canonical" href={siteCanonicalLink} />
      </Helmet>
      <header>
        <NavigationBar title={title} />
      </header>
      {children()}
      <footer>
        <SummarySection social={socialProfiles} contact={contactData} />
      </footer>
    </Main>
  );
};

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        headTitle
        description
        author
        siteUrl
        tags
        socialMedia {
          facebook
          meetup
          twitter
        }
        contactData {
          email
        }
      }
    }
  }
`;
