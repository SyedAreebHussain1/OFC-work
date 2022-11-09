import { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["Areeb", "Hussain"])
  const [val, setVal] = useState('');

  //   console.log("todo=>", todo.todos);
  const addTodo = () => {
    setVal()
    //   console.log("todos=>", todos.todosList);
    //   console.log("value=>", val);
    // setVal();
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={val}
          //  value={todo}
          onChange={(text) => setVal(text.target.value)}
        />
        <button onClick={addTodo}>add value</button>
      </div>
      <div>
            <ul>
                {/* {
                    todos.map((v,i)=>{
                        // console.log('v',v)
                      return  <li>{}</li>
                    })
                } */}
            </ul>
      </div>
    </div>
  );
};

export default Todo;
