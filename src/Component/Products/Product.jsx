import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import style from './Product.module.css'
import { Link } from 'react-router-dom';



function Product({ product }) {

    return (
        <div className={style.card} key={product.id}>
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
                <Link to={`/Produto/${product.name}`}>
                    <span>Ver Produto</span>
                </Link>


            </div>
        </div>
    )
}

export default Product;