import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <ContentAPI />
    </div>
  );
}

export default App;
