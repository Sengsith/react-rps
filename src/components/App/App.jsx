import styles from "./app.module.scss";

import Header from "../Header/Header.jsx";
import Game from "../Game/Game.jsx";
import Rules from "../Rules/Rules.jsx";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Game />
      <Rules />
    </div>
  );
};

export default App;
