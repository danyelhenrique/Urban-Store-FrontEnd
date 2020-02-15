const purchase = `
  mutation storePurchase ($userId: ID!, $productIds: [ProductIdsIntpu!]! ){
    storePurchase( userId: $userId, productIds: $productIds )
  }

 
`;

export { purchase };
