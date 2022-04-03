import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import style from './Product.module.css'
import img1 from '../../assets/produtos/starwars/stormTCaneca.svg'


function Product({product}) {
    return (
        <div  className={style.card} key={product.id}>
            <CardMedia className={style.image} image={product.img} title={product.name} />
            <div>
                <div className={style.info}>
                    <p className={style.nome} variant='p'>
                        {product.name}
                    </p>
                    <p className={style.preco} variant='h5'>
                        {product.price}
                    </p>
                </div>
                <span>Ver Produto</span>
            </div>
        </div>
    )
}

export default Product;