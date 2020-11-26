import './App.css';
import ExpenseTracker from './ExpenseTracker';
import {GlobalProvider} from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <ExpenseTracker/>
    </GlobalProvider>
  );
}

export default App;
