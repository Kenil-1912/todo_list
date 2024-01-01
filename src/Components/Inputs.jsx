import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import styles from './imputes.module.css'

const Inputs = ({ handelAddClick }) => {
    const [date, setDate] = useState();
    const [names, setNames] = useState();
    const handelOnNameChange = (event) => {
        // console.log(event.target.value)
        setNames(event.target.value)
    }

    const handelOnDateChange = (event) => {
        //setDate(event.target.value)
        console.log(event.target.value);
        setDate(event.target.value);
    }

    const handelAddClickInternal = (event) => {
        handelAddClick(event, names, date)
        event.preventDefault();
    }
    return (
        <div>

            <div className="container">
                <form onSubmit={handelAddClickInternal}>
                    <div className="row">
                        <div className="col">
                            <InputText type='text' value={names} onChange={handelOnNameChange} />
                        </div>
                        <div className="col">
                            <input type='date' className='form-control' value={date} onChange={handelOnDateChange} />
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
