import React, { useEffect, useState } from 'react';
import { getProducts } from './js/products';
import favorite_adding from '../assets/images/IconButton73.png'

export default function RecipeBox() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getProducts();
            if (res.products) {
                setProducts(res.products);
            }
        };

        fetchAPI();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='recipe-box'>
            <div className="product-container">
                {currentProducts.map((x) => {
                    return (
                        <div className="product-card col-3" key={x.id}>
                            <div className="img-wrapper">
                                <img src={x.thumbnail} alt="" className="image" />
                            </div>
                            <div className="content" style={{ display: "flex", alignItems: "center", justifyContent: "center", height:"90px" }}>
                                <h4 className="product-title col-8">{x.title}</h4>
                                <div className="col-4">
                                    <img src={favorite_adding} alt="" className="favorite-adding" />

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
