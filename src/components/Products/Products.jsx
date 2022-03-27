import React from "react";
import {Grid} from '@material-ui/core'
import Product from "./Product/Product";
import useStyle from './style'


const products =[
    {id: 1, name: 'Shoes', description: 'Running shoes', price:'$5', image: 'https://a-static.mlcdn.com.br/618x463/tenis-asics-gel-impression-10-masculino/netshoes/d18-5796-026-42/2ddb269aa18ad3e6e45c0ceba0b5b031.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook', price:'$10', image: 'https://a-static.mlcdn.com.br/618x463/macbook-pro-133-apple-m1-8gb-256gb-ssd-cinza-espacial/magazineluiza/227626300/5965eed7d9519466b603a251455683df.jpg'},
];

const Products = () => {

    const classes = useStyle();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4} >
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product  product={product}/>
                </Grid>

            ))}
        </Grid>
    </main>
    )
    


}

export default Products;