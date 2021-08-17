import React, {useState} from "react";
import {Collapse, Checkbox} from "antd";

const {Panel} =Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) =>{
        //누른 것의 index를 구하고
        const currentIndex=Checked.indexOf(value)//-1이면 state에 없는거
        //전체 check된 state에서 현재 누른 checkbox가 이미있다면
        const newChecked = [...Checked]
        if(currentIndex==-1){
            newChecked.push(value)
        }else{
            newChecked.splice(currentIndex,1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

    const renderCheckboxLists = () =>props.list&&props.list.map((value, index)=>(
        <React.Fragment key={index}>
            <Checkbox onChange={()=>handleToggle(value._id)}
                      checked={Checked.indexOf(value._id) === -1 ? false : true}/>
                <span style={{marginRight :'20px'}}>{value.name}</span>

        </React.Fragment>
    ))

    return(
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Category" key="1">
                    {renderCheckboxLists()}

                </Panel>

            </Collapse>
        </div>
    )
}

export default CheckBox