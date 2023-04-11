import './App.css';
import Heading from './components/Heading';
import List from './components/List';

function App() {

  return (
    <div className="App flex flex-col justify-center text-center min-h-[100vh] dark:bg-slate-950">
      <Heading />
      <List />
    </div>
  );
}

export default App;
