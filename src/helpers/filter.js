export function filterBySearchValue(searchValue, productList) {
  let productsFiltered = [];
  if (!searchValue.length) {
    return null;
  }
  productsFiltered = productList.filter(
    (product) =>
      isBrandIncludesValue(product, searchValue) ||
      isModelIncludesValue(product, searchValue)
  );

  return productsFiltered;
}

function isBrandIncludesValue(product, searchValue) {
  return (
    product.brand &&
    product.brand.toLowerCase().includes(searchValue.toLowerCase())
  );
}
function isModelIncludesValue(product, searchValue) {
  return (
    product.model &&
    product.model.toLowerCase().includes(searchValue.toLowerCase())
  );
}
