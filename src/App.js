import './style.css'
import TestContext from './TestContext';
import ClickContext from './context/ClickContext';

function App() {
  return (
    <>
    <ClickContext>
       <TestContext/>
    </ClickContext>
    </>
  );
}

export default App;
