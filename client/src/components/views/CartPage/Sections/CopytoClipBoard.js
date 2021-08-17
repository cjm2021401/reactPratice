import React from "react";
import { Button} from "antd"
function CopytoClipBoard(props){
    const copy = ()=>{
        let str="";
        props.products.map(item=>(
            str+="상품이름 : "+item.title+ ", 개수 : "+item.quantity+", 가격 : "+item.price+'\n'
        ))
        let total=0;
        props.products.map(item=>(
            total +=parseInt(item.price,10)* item.quantity
        ))
        str+="총 금액 : "+total
        if (!document.queryCommandSupported("copy")) {
            alert("복사하기가 지원되지 않는 브라우저입니다.");
        }
        const textarea = document.createElement("textarea");
        textarea.value = str;
        textarea.style.top = 0;
        textarea.style.left = 0;
        textarea.style.display = "fixed";
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        return alert("주문내역이 클립보드에 복사되었습니다.\n옆에 아이콘을 눌러 DM을 보내세요.");
    }
    return(

            <Button onClick={copy}>주문내역복사</Button>

    )
}
export default CopytoClipBoard