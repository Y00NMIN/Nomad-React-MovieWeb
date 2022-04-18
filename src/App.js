import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react"; /* State 선언 */

/* Use Effect function은 코드가 딱 한번만 실행될 수 있도록 보호해준다.
  2개 component 사용 useEffect( function , [state.data] <-리액트가 지켜봐야할 대상) */
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((before) => before + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all time");
  useEffect(() => {
    console.log("Call the API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("Counter :", counter);
  }, [counter]);

  useEffect(() => {
    console.log("I run keyword & counter change");
  }, [keyword, counter]);
  /* [] <= dependency(리액트가 지켜봐야할 대상
    []만 있을 시 한번만 호출 | []안에 state.data값이 들어있을시 해당 data가 동작하면 출력 */
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={keyword}
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
/* */
export default App;
