import React from 'react'
import Product from '../Products/Product';
import style from './AllProducts.module.css'
import { useContext } from 'react'
import { ProductContext } from '../Context/ProductsContext'

function AllProducts() {

    const {produtos} = useContext(ProductContext)
    
    return (
        <div className={style.AllProducts}>
            {produtos.map((product) => {

                return (
                    <Product key={product.id} product={product} />
                )

            }
            )}
        </div>
    )
}

export default AllProducts;