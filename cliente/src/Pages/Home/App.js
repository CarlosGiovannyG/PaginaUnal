import styles from './app.module.css';
import Centro from "../../Components/Centro/Centro";


function App() {
  return (
    <div className={styles.App}>
      <Centro
        titulo="Delicias Colombianas"
        parrafo="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
    </div>
  );
}

export default App;
