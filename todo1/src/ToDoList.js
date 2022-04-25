import { Component } from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    const list = props.list.map((item) => {
        return <ToDo description={item} />
    });

    return (
        <div>
            {list}
        </div>
    );
}

export default ToDoList;