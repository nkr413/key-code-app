import styles from "./style.module.css";

function App() {
  window.addEventListener("keydown", (event) => {
    console.log(event);
  });


  return (
    <div class={styles.App}><br /><br />
      <div class={styles.main_block}>
        <div>Press any button</div><br />

        <div class={styles.main_data_block}>
          <div>
            <div>Key Code</div><div></div>
          </div>
          <div>
            <div>Key</div><div></div>
          </div>
          <div>
            <div>Code</div><div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
