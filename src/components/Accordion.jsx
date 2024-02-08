
// whe he two type 
// single selection 
// multiple selection 

import { useState } from "react";
import data from "./data";
import './style.css';





export default function Accordion(){

const [selected,setSelected] = useState(null);
// const [enableMultiSelection,setEnableMultiSelecton] = useState(false);
// const [multipleSelect, setMultipleSelect] = useState([]);

function handleSingleSelection(getCurrentId){
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);

};

//  

    return (
        <div className="main-wrapper">
            <h1 
            // onClick={ 
            //     enableMultiSelection
            //      ? () => handlMultiSelection(dataItem.id) 
            //      : () => handlMultiSelection(dataItem.id)
            //     }
                 >
                Accordion Component
                </h1>
            
            <div className="accordian">
            {
                data && data.length > 0 ?
                data.map(dataItem=> <div className="item">
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>
                            +
                        </span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className="content">
                            {dataItem.answer}
                            {dataItem.ҡเ૨เɳ૨ყµ}
                        </div>
                        :null
                        
                    }
                </div>):
                <div>
                    <h1>Data not found</h1>
                </div>
            }

            </div>

        </div>
    );
}