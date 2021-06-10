export function filterBySearchValue(searchValue, productList) {
    let productsFiltered = [];
    if (searchValue.length > 0) {
        productsFiltered = productList.filter(product =>product.brand === searchValue || product.model === searchValue )
    }

    return productsFiltered;
}