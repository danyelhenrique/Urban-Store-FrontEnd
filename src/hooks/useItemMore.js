import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useLazyQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';

export default function ItemMore(queryProduct) {
  const router = useRouter();

  const urlAs = router.query.slug.split('_').join(' ');

  const { cart } = useSelector(state => state.cart);

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const [getData, { error: err }] = useLazyQuery(queryProduct, {
    fetchPolicy: 'network-only',
    onCompleted: item => {
      setProduct(item.showProduct);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    const prod = cart.find(
      produc => produc.data_product_display_name === urlAs
    );
    if (!prod) return getData({ variables: { name: urlAs } });

    setProduct(prod);
    setIsLoading(false);
  }, []);

  return [product, isLoading, err];
}
