import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react"; /* State 선언 */

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    /*수정하는 함수를 사용할대 2가지 옵션 (하단) 1.저장한 data값을 보낼때 사용 2. 함수를 보내는 방법 */
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    /* array 안에 arrry를 추가했을때 한 array로 동작하기 위해 array앞에 ...을 앞에 붙여야한다. */
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Do List (List up : {toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do...."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    /* map 함수에 item 값에 index를 부여하지 않으면 console에서 오류가 발생하기 때문에 li 안에 key값을 부여해야한다, */
  );
}

export default App;
