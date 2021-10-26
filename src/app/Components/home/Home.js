import React, { useEffect, useState } from 'react'
import './Home.scss'
import { useSelector } from 'react-redux'

const Home = () => {

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const categories = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);

    const cards = useSelector((state) => state.cards);

    useEffect(() => {
        setProducts(categories[activeCategoryIndex].products);
    }, [categories, activeCategoryIndex])

    const onChangeCategory = (index) => () => {
        console.log("index: " + index);
        setActiveCategoryIndex(index)
    }

    return (
        <div id="home">
            <div className="home_left">
                <header>
                    <div className="title">
                        <h1>Jaeger Resto</h1>
                        <p>Tuesday, 2 Feb 2021</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search for food, coffe, etc..." />
                    </div>
                </header>
                <div className="category">
                    <ul>
                        <li className={activeCategoryIndex === 0 ? "active" : null} onClick={onChangeCategory(0)}>
                            <h6>
                                Hot Dishes
                            </h6>
                        </li>
                        <li className={activeCategoryIndex === 1 ? "active" : null} onClick={onChangeCategory(1)}>
                            <h6>
                                Cold Dishes
                            </h6>
                        </li>
                        <li className={activeCategoryIndex === 2 ? "active" : null} onClick={onChangeCategory(2)}>
                            <h6>
                                Soup
                            </h6>
                        </li>
                        <li className={activeCategoryIndex === 3 ? "active" : null} onClick={onChangeCategory(3)}>
                            <h6>
                                Grill
                            </h6>
                        </li>
                        <li className={activeCategoryIndex === 4 ? "active" : null} onClick={onChangeCategory(4)}>
                            <h6>
                                Appetizer
                            </h6>
                        </li>
                        <li className={activeCategoryIndex === 5 ? "active" : null} onClick={onChangeCategory(5)}>
                            <h6>
                                Dessert
                            </h6>
                        </li>
                    </ul>
                </div>
                <div className="home_body">
                    <div className="category_title">
                        <h2>Choose Dishes</h2>
                        <select className="form-control">
                            <option>Dine In</option>
                        </select>
                    </div>
                    <div className="row products m-0">
                        {
                            products.map((p, i) => {
                                return (
                                    <div className="col-4 col-sm-4 mb-2" key={i}>
                                        <div className="card">
                                            <img src={p.img} alt="food" />
                                            <div className="card-body">
                                                <h5>{p.name}</h5>
                                                <h6>${p.price}</h6>
                                                <p>{p.available + " "} Bowls available</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="home_right">
                <div className="orders">
                    <div className="title">
                        <h4>Order #34562</h4>
                    </div>
                    <div className="btn-group">
                        <button className={activeButtonIndex === 0 ? "btn btn_outline_danger active" : "btn btn_outline_danger"} onClick={() => setActiveButtonIndex(0)}>Dine In</button>
                        <button className={activeButtonIndex === 1 ? "btn btn_outline_danger active" : "btn btn_outline_danger"} onClick={() => setActiveButtonIndex(1)}>To go</button>
                        <button className={activeButtonIndex === 2 ? "btn btn_outline_danger active" : "btn btn_outline_danger"} onClick={() => setActiveButtonIndex(2)}>Delivery</button>
                    </div>
                    <div className="items">
                        <div className="item_thead">
                            <div className="item_name">Item</div>
                            <div className="qty">Qty</div>
                            <div className="price">Price</div>
                        </div>
                        <hr />
                        {
                            cards.orders.map((c, i) => {
                                return (
                                    <div className="mb-4" key={i}>
                                        <div className="d-flex">
                                            <div className="item_name">
                                                <div>
                                                    <img src={c.img} alt="food" />
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="w-100">
                                                        <p className="overflow-ellipsis mb-0" style={{ textOverflow: "ellipsis" }}>{c.name}</p>
                                                        <p className="mb-0"><small>${c.price}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qty">
                                                <div>
                                                    {c.quantity}
                                                </div>
                                            </div>
                                            <div className="price">
                                                ${(c.price * c.quantity)}
                                            </div>
                                        </div>
                                        <div className="description_block">
                                            <div className="description">
                                                <input type="text" className="form-control" placeholder="Order Note..." />
                                            </div>
                                            <div className="delete">
                                                <div>
                                                <i className="far fa-trash-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
