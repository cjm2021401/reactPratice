import React, {useState} from "react";
import Dropzone from 'react-dropzone'
import {Icon} from 'antd';   //아이콘 가져옴
import axios from 'axios';  //파일 넘겨주기위함
function FileUpload(){

    const [Images, setImages] = useState([])//[]한이유는 여러개 올ㄹ릴수있

    const dropHandler = (files)=>{
        let formData =new FormData();

        const config={
            header:{'content-type': 'multipart/form-data'}  //헤더에 어떠한 파일인지 즉 리퀘스트 에서 에러방지
        }
        formData.append("file", files[0])//더해서 들어감
        axios.post('/api/product/image', formData, config) //<-end포인트, formData에 파일 정
            .then(response => {
                if(response.data.success){  //성공했을때
                    setImages([...Images, response.data.filePath])     //...Images는 기존 이미지 가져오기
                }else{
                    alert('fail to save file')  //실패했을떄
                }
            })
    }

    return(
        <div style={{display:'flex', justifyContent: 'space-between'}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                        <div style={{width:300, height:240, border:'1px solid lightgray',
                        display:'flex', alignItems:"center", justifyContent:'center'}}
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{fontSize: '3rem'}}/>
                        </div>
                )}
            </Dropzone>

            <div style={{display:'flex', width:'350px', height : '240px', overflow : 'scroll'}}>
                {Images.map((image, index) =>(
                    <div key={index}>
                        <img style={{minWidth:'300px', width:'300px', height: '240px'}}
                             src={`http://localhost:5000/${image}`}
                             />
                    </div>
                ))}
            </div>

        </div>
        )
}

export default FileUpload