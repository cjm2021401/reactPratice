import React, {useState} from "react";
import {Typography, Button, Form, Input} from "antd";
import FileUpload from "../../utils/FileUpload";
//const {Title}=Typography;
const {TextArea} =Input;
const  Continents=[
    {key:1, value:"Africa"},
    {key:2, value:"Europe"},
    {key:3, value:"Asia"},
    {key:4, value:"North America"},
    {key:5, value:"South America"},
    {key:6, value:"Australia"},
    {key:7, value:"Antarctica"}

]
function UploadProductPage() {
    const [Title, setTitle] =useState("") //input의 value를 다이나믹하게하기위해
    const [Description, setDescription] =useState("")
    const [Price, setPrice] =useState(0)
    const [Continent, setContinent] =useState(1)

    const [Images, setImages] =useState([])//이미지위

    const titleChangeHandler=(event) =>{    //input에서 타이핑이 가능하게
        setTitle(event.currentTarget.value)
    }
    const descriptionChangeHandler=(event) =>{    //input에서 타이핑이 가능하게
        setDescription(event.currentTarget.value)
    }
    const priceChangeHandler=(event) =>{    //input에서 타이핑이 가능하게
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler =(event) =>{
        setContinent(event.currentTarget.value)
    }

    return (
        <div>
            <div style={{maxWidth:'700px', margin:"2rem auto"}}>
                <div style={{textAlign:"center", marginBottom:'2rem'}}>
                        <h2>굿즈 상품 업로드</h2>
                </div>
                    <Form>
                        <FileUpload/>

                        <br/>
                        <br/>
                        <label>이름</label>
                        <Input onChange={titleChangeHandler} value={Title}/>
                        <br />
                        <br/>
                        <label>설명</label>
                        <TextArea onChange={descriptionChangeHandler} value={Description}/>
                        <br/>
                        <br/>
                        <label>가격($)</label>
                        <Input onChange={priceChangeHandler} value={Price}/>
                        <br />
                        <br />
                        <select onChange={continentChangeHandler} value={Continent}>
                            {Continents.map(item=>(
                                <option key={item.key} value={item.key}>{item.value}</option>
                            ))}

                        </select>
                        <br/>
                        <br/>
                        <Button>
                            확인
                        </Button>
                    </Form>
                </div>
        </div>
    )

}
export default UploadProductPage