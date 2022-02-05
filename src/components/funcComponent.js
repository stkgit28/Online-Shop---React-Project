import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';

export default function AddProduct() {
    // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    // addproduct handler method
    const add = (event)=>{
        event.preventDefault();

        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }

        // add a new product inside products array
        setProduct([...products,newProduct]);

    }
    // increment qty value by 1
    const increQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }

    // decrement qty value by 1
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }
    return (
        <div>
            <Table striped bordered hover variant="dark">            
                <tbody>
                    {
                        products.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <Button variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                                        <Button variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}