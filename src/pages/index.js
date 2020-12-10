import React from "react";
import { graphql } from 'gatsby';

import PrimaryLayout from '../layout/PrimaryLayout';
import Post from '../components/Post';

export default function Home({data}) {

  const responseArray = data.allMarkdownRemark.nodes;

  return (
    <PrimaryLayout column="col-xs-6">
      <>
        {
          responseArray.map((node, index) => (
            <>
              <Post
                key={index}
                title={node.frontmatter.title}
                excerpts={node.excerpt}
                imagePath={node.frontmatter.image} 
                readMore={node.fields.slug} />
            </>
          ))
        }
      </>
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`