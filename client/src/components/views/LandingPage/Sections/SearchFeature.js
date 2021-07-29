import React, {useState} from "react";
import {Input} from 'antd';
const {Search} =Input;
function SearchFeature(props){
    const [SearchTerm, setSearchTerm]=useState("")
    const searchHandler= (event)=>{
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return(
        <dev>
            <Search placeholder="input search text"
                    onChange={searchHandler}
                    style={{ width: 200 }}
                    value={SearchTerm}
            />
        </dev>
    )
}

export default SearchFeature