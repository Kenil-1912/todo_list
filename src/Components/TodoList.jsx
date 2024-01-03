import React, { useReducer, useState } from 'react'
import styles from './todolist.module.css'
import ListItem from './ListItem'
import Inputs from './Inputs'
import { todoItemsReducer } from '../store/Todo.reducer'

const TodoList = () => {
    //  const [listItems, setListItems] = useState([]);
    const [listItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    /* const handelAddClick1 = (event, name, date) => {
        const merged = [...listItems, { name: name, dueDate: date }]
        setListItems(merged)
    }


   const handelDeleteClick = (event, itemName) => {
        const removed = listItems.filter((obj) => obj.name !== itemName);
        //setListItems(removed)
    }

    //functional Update 
    const handelAddClick = (event, name, date) => {
        //const merged = [...listItems, { name: name, dueDate: date }]
        setListItems((current) => [...current, { name: name, dueDate: date }])
    }*/

    const handelAddClick = (event, itemname, duedate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                itemname,
                duedate
            },
        };
        dispatchTodoItems(newItemAction);
    };

    const handelDeleteClick = (event, itemname) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                itemname,
            },
        };
        dispatchTodoItems(deleteItemAction);
    }





    return (
        <div className={`${styles.Maincontainer} center`}>
            <div className={`${styles.listItem}`}>
                <h1 className='text-center'>TODO LIST</h1><br></br>
                <Inputs handelAddClick={handelAddClick} /><br />
                {listItems.map((item) => <ListItem key={item.name} items={item} deleteClick={handelDeleteClick} />)}

            </div>
        </div>
    )
}

export default TodoList
