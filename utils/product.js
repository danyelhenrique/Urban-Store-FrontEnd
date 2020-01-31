import crypto from 'crypto';

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

function mockItemsWithQnt(items) {
  const itemWithMock = items.map(item => {
    item.qnt = Math.floor(Math.random() * 10);
    return item;
  });

  return itemWithMock;
}

function generateKey() {
  const state = {};
  const hash = 'braitsch';

  const key = crypto
    .createHash('md5')
    .update(hash)
    .digest('hex');

  state.key = key;

  return state;
}
export { fetchMoreItems, mockItemsWithQnt, generateKey };
