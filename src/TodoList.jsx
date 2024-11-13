import * as React from 'react';

const todoList = [
    {
      id: 1,
      title: "Complete assignment"
    },
    {
      id: 2,
      title: "Read next chapter"
    },
    {
      id: 3,
      title: "Attend Session"
    }
  ];
  
  function TodoList() {
    return (
        <ul>
            {
                todoList.map(function (item) {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    );
  }
  
export default TodoList