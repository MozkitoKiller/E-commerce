import React, { useState, useEffect } from 'react'
import Product from '../Products/Product'
import style from './Home.module.css'
import product from '../../Product.API'
import axios from 'axios'

function Home() {

    const [produtos, setprodutos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const API = await axios.get('http://localhost:3000/produtos').then(res => {
                setprodutos(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <div className={style.section}>
                <div className={style.titulo}>
                    <h3>Star Wars</h3>
                    <a className={style.link}>Ver tudo</a>
                </div>
                <div className={style.products} key={product.id}>
                    {produtos.map((product) => {
                        if (product.category === "Star-wars") {
                            return (
                                <Product product={product} />
                    
                            )
                        }
                    }
                    )}

                </div>
            </div>
            <div className={style.section}>
                <div className={style.titulo}>
                    <h3>Consoles</h3>
                    <a className={style.link}>Ver tudo</a>
                </div>
                <div className={style.products} key={product.id}>
                    {produtos.map((product) => {
                        if (product.category === 'Consoles') {
                            return (
                                <Product product={product} />
                            )
                        }
                    }
                    )}

                </div>
            </div>
            <div className={style.section}>
                <div className={style.titulo}>
                    <h3>Diversos</h3>
                    <a className={style.link}>Ver tudo</a>
                </div>
                <div className={style.products} key={product.id}>
                    {produtos.map((product) => {
                        if (product.category === 'Diversos') {
                            return (
                                <Product product={product} />
                            )
                        }
                    }
                    )}

                </div>
            </div>


        </>

    )
}

export default Home