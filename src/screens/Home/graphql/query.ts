import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
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
`;