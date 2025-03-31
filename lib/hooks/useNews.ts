import { useQuery } from '@apollo/client';
import { GET_POSTS, GET_POST_BY_SLUG } from '@/lib/graphql/queries/posts';

export const useNews = () => {
  const {
    data: postsData,
    loading: postsLoading,
    error: postsError
  } = useQuery(GET_POSTS, {
    variables: { first: 100 }
  });

  const usePost = (slug: string) => {
    const { data, loading, error } = useQuery(GET_POST_BY_SLUG, {
      variables: { slug },
      skip: !slug
    });

    return {
      post: data?.post || null,
      loading,
      error
    };
  };

  return {
    posts: postsData?.posts?.nodes || [],
    postsLoading,
    postsError,
    usePost
  };
}; 