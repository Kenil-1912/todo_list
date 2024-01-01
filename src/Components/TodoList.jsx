import React, { useState } from 'react'
import styles from './todolist.module.css'
import ListItem from './ListItem'
import Inputs from './Inputs'

const TodoList = () => {
    const item = [];
    const [listItems, setListItems] = useState([]);

    /* const handelAddClick1 = (event, name, date) => {
        const merged = [...listItems, { name: name, dueDate: date }]
        setListItems(merged)
    }
*/

    const handelAddClick = (event, name, date) => {
        const merged = [...listItems, { name: name, dueDate: date }]
        setListItems((current) => [...current, { name: name, dueDate: date }])


    }

    const handelDeleteClick = (event, itemName) => {
        const removed = listItems.filter((obj) => obj.name !== itemName);
        setListItems(removed)
    }

    return (
        <div className={`${styles.Maincontainer} center`}>
            <div className={`${styles.listItem}`}>
                <h1 className='text-center'>TODO LIST</h1><br></br>
                <Inputs handelAddClick={handelAddClick} /><br />
                {listItems.map((item) => <ListItem key={item} items={item} deleteClick={handelDeleteClick} />)}

            </div>
        </div>
    )
}

export default TodoList
