function fetchMoreItems({ fetchQuery, query, page }) {
  fetchQuery({
    query,
    variables: { page },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult.indexProduct.length <= 0) {
        return { ...prev };
      }
      return { ...prev, ...fetchMoreResult };
    }
  });
}

export { fetchMoreItems };
