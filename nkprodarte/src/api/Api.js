import axios from "axios";

export async function productsData() {

    const products = await axios.get(
        {
            baseURL: "https://fakestoreapi.com/products"
        });

}
