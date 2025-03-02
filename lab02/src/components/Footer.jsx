import React from 'react'
import logo from '../assets/images/checkboxpink.png'

export default function Footer() {
  return (
    <div className="footer">
        <div className="col-6 content-left">
            <div className="about-us">
                <h3>About us</h3>
                <div className="content-top">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis facere nesciunt ipsam laboriosam quas. Eius, minus culpa provident consequatur maiores saepe natus corporis, accusantium quod rem adipisci officia voluptates excepturi.
                    <form action="" className="form-footer">
                        <input type="email" name="email" id="email" className="email" placeholder='Enter your email'/>
                        <button className="btn-send">Send</button>
                    </form>
                </div>
                <div className="content-bottom">
                    <div className="wrapper">
                        <img src={logo} alt="" className="img" />
                    </div>
                    <p>2023 Charify Company</p>
                    <p>Duong Hoang Huy</p>
                </div>
            </div>
        </div>

        <div className="col-3 content-center">
            
        </div>

        <div className="col-3 content-center">
            
        </div>
    </div>
  )
}
