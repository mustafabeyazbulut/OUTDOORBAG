import { Container,Row , Col} from "reactstrap";
import Navbar from "./component/Navbar/Navbar";
import Category from "./component/Category/Category";
import Knapsack from "./component/Knapsack/Knapsack";

function App() {
  return (
    <div >

      <Container>
        <Row>
          <Navbar title="Navbar"/>
        </Row>
        <Row>
          <Col xs="3">
            <Category title="Category List"/>
          </Col>
          <Col xs="9">
            <Knapsack title="Knapsack"/>
          </Col>
          
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
