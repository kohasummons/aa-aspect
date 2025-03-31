import { gql } from '@apollo/client';
import { POST_FIELDS } from '../fragments/postFields';

export const GET_POSTS = gql`
  query GetPosts($first: Int) {
    posts(first: $first) {
      nodes {
        ...PostFields
      }
    }
  }
  ${POST_FIELDS}
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ...PostFields
      content
      author {
        node {
          name
        }
      }
      date
    }
  }
  ${POST_FIELDS}
`;