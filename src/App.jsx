import styles from "./style.module.css";
import { createSignal } from "solid-js";

function App() {
  const [getKeyCode, setKeyCode] = createSignal(Number());
  const [getKey, setKey] = createSignal(String());
  const [getCode, setCode] = createSignal(String());

  window.addEventListener("keydown", (event) => {
    if (event.keyCode == 32) {
      setKey((prev) => prev = String("Space"));
      setCode((prev) => prev = String("Space"));
    }
    else if (event.keyCode == 38) {
      setKey((prev) => prev = String("ArrowUp &uarr;"));
      setCode((prev) => prev = String("ArrowUp &uarr;"));
    }
    else if (event.keyCode == 37) {
      setKey((prev) => prev = String("ArrowLeft &larr;"));
      setCode((prev) => prev = String("ArrowLeft &larr;"));
    }
    else if (event.keyCode == 40) {
      setKey((prev) => prev = String("ArrowDown &darr;"));
      setCode((prev) => prev = String("ArrowDown &darr;"));
    }
    else if (event.keyCode == 39) {
      setKey((prev) => prev = String("ArrowRight &rarr;"));
      setCode((prev) => prev = String("ArrowRight &rarr;"));
    }
    else {
      setKey((prev) => prev = String(event.key));
      setCode((prev) => prev = String(event.code));
    }

    setKeyCode((prev) => prev = Number(event.keyCode));
  });


  return (
    <div class={styles.App}><br /><br />
      <div class={styles.main_block}>
        <div>Press any button</div><br />

        <div class={styles.main_data_block}>
          <div>
            <div>Key Code</div><div>{getKeyCode()}</div>
          </div><br />
          <div>
            <div>Key</div><div>{getKey()}</div>
          </div><br />
          <div>
            <div>Code</div><div>{getCode()}</div>
          </div><br />
        </div>
      </div>
    </div>
  );
}

export default App;
