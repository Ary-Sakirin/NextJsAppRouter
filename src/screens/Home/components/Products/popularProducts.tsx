import CardProducts from "@/src/components/CardProducts/cardProducts";
import { QUERY_PRODUCTS } from "../../graphql/query";
import { client } from "@/src/libs";
import 'server-only'
import axios from "axios";

export default async function PopularProducts() {
    const {data: {data: { products }}} = await GetAllProducts();
    return (
        <>

            <h1 className="text-[25px] font-bold px-2 py-2">Popular Right Now</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((item: any, index: number) => {
                    const { product_name, image, description, status } = item;
                    console.log("item", item)
                    return (
                        <CardProducts key={index}
                            title={product_name}
                            status={status}
                            image={image}
                            description={description}
                        />
                    )
                })}
            </div>
        </>
    );
}

export async function GetAllProducts() {
    const data = await axios.post('http://localhost:8080/graph', {
        query: `
            query products {
                products {
                id
                product_name
                image
                description
                summary
                price
                status
                }
            }
      `,
      
    //   cache: "no-store"
    });

    console.log(data)
    // const { data } = await client.query({
    //     query: QUERY_PRODUCTS,
    //     fetchPolicy: "no-cache",
    // })

    return data;
}
