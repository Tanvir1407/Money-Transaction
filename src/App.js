import Balence from "./components/Balence";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transacitons from "./components/Transactions/Transactions";

function App() {
  return (
      <Layout>
          <Balence />
          <Form />
          <Transacitons/>
      </Layout>
  );
}

export default App;
