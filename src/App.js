import './App.css';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <Form initialValues={{ firstName: "Vipul" }} />
    </div>
  );
}

export default App;