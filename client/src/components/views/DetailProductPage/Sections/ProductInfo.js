import React from "react";
import {Button, Descriptions} from "antd";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../_actions/user_actions";

function ProductInfo(props){
    const dispatch=useDispatch();

    const clickHandler = () => {
        //필요 정보를 cart 필드에 넣어준다
        dispatch(addToCart(props.detail._id))
    }

    return(
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Popularity">{props.detail.populate}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>
            <br/>
            <br/>
            <br/>
            <dev style={{display: 'flex', justifyContent : 'center'}}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to cart
                </Button>
            </dev>

        </div>
    )
}

export default ProductInfo