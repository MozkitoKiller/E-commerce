import React from 'react'
import style from './ProductPage.module.css'

import { useContext } from 'react'
import { ProductContext } from '../../Context/ProductsContext'
import Product from '../Product'
import styleHome from '../../Home/Home.module.css'
import { useParams } from 'react-router-dom'


function ProductPage({ produto }) {

    const { produtos } = useContext(ProductContext)

    let { name } = useParams()

    return (
        <>
            <div>
                {produto.filter(item => item.name === name).map((item, index) => {
                    return (
                        <div key={index} className={style.container}>
                            <div className={style.img}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={style.productInfo}>
                                <h2>{item.name}</h2>
                                <h5>{item.price}</h5>
                                <p>{item.description}</p>
                                <br />
                                <button type='submit'>Adicionar ao carrinho</button>
                            </div>
                            
                        </div>
                    )

                })}

                <div className={styleHome.related}>
                    <div className={styleHome.section}>
                        <div className={styleHome.titulo}>
                            <h3>Star Wars</h3>
                            <a className={styleHome.link}>Ver tudo</a>
                        </div>
                        <div className={styleHome.products} key={produtos.id}>
                            {
                            produtos.map((product) => {
                                if (product.category === "Star-wars") {
                                    return (
                                        <Product key={product.id} product={product} />

                                    )
                                }
                            }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;