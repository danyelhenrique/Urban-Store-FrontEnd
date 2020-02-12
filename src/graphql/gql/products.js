const products = `
  query getProducts($page: Int) {
    indexProduct(page: $page, limit: 10) {
      id
      qnt
      total
      data_price
      data_product_display_name
      data_brand_name
      data_base_colour
      data_colour1
      data_colour2
      data_colour3
      data_colour4
      data_front_imageURL
      data_back_image_url
    }
  }
`;

const productByName = `
  query getData($name: String!) {
    showProduct(where: { data_product_display_name: $name }) {
      id
      qnt
      total
      data_price
      data_product_display_name
      data_brand_name
      data_base_colour
      data_colour1
      data_colour2
      data_colour3
      data_colour4
      data_front_imageURL
      data_back_image_url
    }
  }
`;

export { products, productByName };
