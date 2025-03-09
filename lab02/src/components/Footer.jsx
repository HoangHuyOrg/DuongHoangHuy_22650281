import React from 'react'
import logo from '../assets/images/chefifywhite.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="col-6 content-left">
                <div className="about-us">
                    <h3>About us</h3>
                    <div className="top">
                        <p>                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis facere excepturi.
                        </p>
                        <form action="" className="form-footer">
                            <input type="email" name="email" id="email" className="email" placeholder='Enter your email' />
                            <button className="btn-send">Send</button>
                        </form>
                    </div>
                    <div className="bottom">
                        <div className="wrapper">
                            <img src={logo} alt="" className="img" />
                        </div>
                        <p>2023 Charify Company</p>
                        <p>Duong Hoang Huy</p>
                    </div>
                </div>
            </div>

            <div className="col-3 center">
                <div className="content-top">
                    <h4>Learn more</h4>
                    <ul>
                        <li>Our Cooks</li>
                        <li>Sea Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="content-bottom">
                    <h4>Shop</h4>
                    <ul>
                        <li>Gift Discription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>
            </div>

            <div className="col-3 right">
                <div className="content-bottom">
                    <h4>Recipe</h4>
                    <ul>
                        <li>What to cook this week</li>
                        <li>Pasta</li>
                        <li>Dinner</li>
                        <li>Healthy</li>
                        <li>Vegetarian</li>
                        <li>Vegan</li>
                        <li>Chrismas</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
