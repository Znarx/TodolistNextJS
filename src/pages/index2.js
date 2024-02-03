import Counter from "@/components/Counter";
import { useState } from "react";
import Props from "@/components/Props";

export default function Home() {
    const [isShow, setIsShow] = useState(false);

    const [count, setCount] = useState(0);
    
    // const [todos, setTodos] = useState([
    //     { id: 1, title: "Todo 1" },
    //     { id: 2, title: "Todo 2" }
    // ]);

    // function handleOnClick() {
    //     console.log('button Clicked');
    // }

    return (
        <div>
            <button className="default-button" onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
            <h1 className="text-2xl">{count}</h1>
            {isShow && <Counter setCount={setCount} />}

            {/* <Props text="Hello world" /> */}

            {/* {todos.map((todo) => {
                return (
                    <div className="text-red-900" key={todo.id}>
                        <div>{ todo.title }</div>
                    </div>
                );
            })} */}

            {/* <button onClick={handleOnClick}>Click me</button> */}
        </div>
    );
}
