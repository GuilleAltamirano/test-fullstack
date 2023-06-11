const getProducts = async () => {
    return await fetch('http://localhost:8080/api/products')
        .then(res => JSON.stringify(res))
}

export default async function Products() {
    const products = await getProducts()
    console.log(products);
    

    return 'Hello'
}