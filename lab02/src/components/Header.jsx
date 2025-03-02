import React from 'react'
import logo from '../assets/images/chefify.png'
import check from '../assets/images/check.png'
import user from '../assets/images/avatar.png'

export default function () {
    return (
        <div className="header">
            <div className="col-4 header-left">
                <img src={logo} style={{width: '100px', height: '36px'}} alt="logo" className="logo" />
                <form action="" className="searchInput">
                    <input type="text" name="search" id="search" className="search" placeholder='DuongHoangHuy' />
                </form>
            </div>
            <div className="col-6 header-center">
                <ul className='ul-list'>
                    <li className='item'>What to cook</li>
                    <li className="item">Recipes</li>
                    <li className="item">Ingredients</li>
                    <li className="item">Occasions</li>
                    <li className="item">About Us</li>
                </ul>
            </div>
            <div className="col-2 header-right">
                <div className="wrapper-recipe-box">
                    <img src={check} alt="" className="recipe-box" />
                    Your Recipe Box
                </div>
                <img src={user} alt="" className="user" />
            </div>
        </div>
    )
}
