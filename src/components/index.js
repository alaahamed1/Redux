import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProducts } from "../store/actions/products_action";
import { useEffect } from "react";


function Products(){

    const products = useSelector((state ) => state.products);
    const disppatch = useDispatch()
    console.log(products);

    useEffect(() =>{
        disppatch(fetchProducts())
    },[]);


return(
    <>
    <h1>
    Products
    </h1>
    <button onClick={()=> disppatch(addProduct({id : 2 ,title :"New Product Added"}))}>Add product</button>
    {products.map((pro) => (<h2 key={pro.id}>{pro.title}</h2>))}
    </>
)
};
export default Products;