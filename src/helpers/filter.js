export function filterBySearchValue(searchValue, productList) {
  let productsFiltered = [];

  if (searchValue.length > 0) {
    productsFiltered = productList.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.model.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return productsFiltered;
}
