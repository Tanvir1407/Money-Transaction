import Balence from "./components/Balence";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
      <Layout>
          <Balence />
          <Form />
          <Transactions></Transactions>
    </Layout>
  );
}

export default App;
