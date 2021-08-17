import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getCartItems, removeCartItem, onSuccessCopy} from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import {Empty, Button, Result, Row, Col} from "antd";
import CopytoClipBoard from "./Sections/CopytoClipBoard";
import {SocialIcon} from "react-social-icons";

function CartPage(props){
    const dispatch = useDispatch()

    const [Total, setTotal]=useState(0)
    const [ShowTotal, setShowTotal]=useState(false)
    const [CopySuccess, setCopySuccess]=useState(false)

    useEffect(()=>{
        let cartItems=[]

        //리덕스 user state 안에 cart안에 상품이 들어잇는지 확인
        if(props.user.userData&&props.user.userData.cart){
            if(props.user.userData.cart.length>0){
                props.user.userData.cart.forEach(item=>{
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then(response => {calculateTotal(response.payload)})
            }
        }

    },[props.user.userData])

    let calculateTotal = (cartDetail)=>{
        let total=0;
        cartDetail.map(item=>{
            total +=parseInt(item.price,10)* item.quantity
        })
        setTotal(total)
        setShowTotal(true)
    }

    let removeFromCart=(productId)=>{
        dispatch(removeCartItem(productId))
            .then(response=>{
                if(response.payload.productInfo.length<=0){
                    setShowTotal(false)
                }
            })
    }
    const copySuccess=()=>{
        dispatch(onSuccessCopy({
            cartDetail:props.user.cartDetail
        }))
            .then(response => {
                if (response.payload.success) {
                    setShowTotal(false)
                    setCopySuccess(true)
                }
            })
    }

    return (
        <div style={{width:'85%', margin: '3rem auto'}}>
            <h1>My Cart</h1>
            <div>
            <UserCardBlock products={props.user.cartDetail } removeItem={removeFromCart}/>
            </div>

            {ShowTotal ?
                <div style={{margin: '3rem', textAlign: 'center'}}>
                    <h2 style={{textAlign: 'center'}}>Total Amount: {Total} ₩</h2>
                    <br/>
                    <br/>
                    <CopytoClipBoard products={props.user.cartDetail }/>
                   <a href="https://www.instagram.com/yeni_cho/"target="_blank" onClick={copySuccess}>
                       <SocialIcon network="instagram" style={{marginLeft:'10px'}}/>
                   </a>

                </div>

                : CopySuccess ?
                <Result
                status="success"
                title="Successfully Purchased Items"
                />
                :
                <>
                <br />
                <Empty description={false} />
                </>
            }
        </div>
    )
}

export default CartPage