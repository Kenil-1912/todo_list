import React, { useState, useRef } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import styles from './imputes.module.css'

const Inputs = ({ handelAddClick }) => {
    // const [date, setDate] = useState();
    //  const [names, setNames] = useState();
    const nameRef = useRef();
    const dateRef = useRef();

    /* 
   const handelOnNameChange = (event) => {
       setNames(event.target.value)
   }

  const handelOnDateChange = (event) => {
        //setDate(event.target.value)
        console.log(event.target.value);
        setDate(event.target.value);
    }*/

    const handelAddClickInternal = (event) => {
        const refname = nameRef.current.value;
        const refdate = dateRef.current.value;
        handelAddClick(event, refname, refdate);
        event.preventDefault();
        nameRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <div>

            <div className="container">
                <form onSubmit={handelAddClickInternal}>
                    <div className="row">
                        <div className="col">
                            <InputText type='text' ref={nameRef} />
                        </div>
                        <div className="col">
                            <input type='date' className='form-control' ref={dateRef} />
                        </div>
                        <div className="col">
                            <Button className={`${styles.Addbutton}`}><AiOutlinePlusCircle /></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Inputs
