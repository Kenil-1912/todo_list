import React from 'react'
import styles from './listItem.module.css'
import { MdDelete } from "react-icons/md";
import { Button } from 'primereact/button';


const ListItem = ({ items, deleteClick, }) => {
    return (
        <div className={`${styles.item}`}>
            <div className='container'>
                <div className="row mb-1">
                    <div className="col">
                        {items.name}
                    </div>
                    <div className="col">
                        {items.dueDate}
                    </div>
                    <div className="col">
                        <Button className={`${styles.delBtn}`} onClick={(event) => deleteClick(event, items.name)}><MdDelete /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem
