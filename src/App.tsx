import Form from "./comonents/Form";
import CriteriaProvider from "./comonents/context/CriteriaContext";

const App = () => {
  return (
    <CriteriaProvider>
      <div className="container">
        <Form />
      </div>
    </CriteriaProvider>
  );
}

export default App;
