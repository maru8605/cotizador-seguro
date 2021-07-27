import styled from '@emotion/styled';
import Header from "./components/Header";
import Form from './components/Form';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`
const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  return (
    <Container>
      <Header
        titulo='Cotizador de Seguros'
      />

      <FormContainer>
        <Form/>
      </FormContainer>
    </Container>
  );
}

export default App;
