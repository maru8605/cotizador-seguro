import {useState} from 'react'
import styled from '@emotion/styled';
import Header from "./components/Header";
import Form from './components/Form';
import Resumen from './components/Resumen';
import Result from './components/Result';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`
const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    data : {
      marca :'',
      year: '',
      plan: ''

    }

  })
  
  const {cotizacion, data} = resumen;
  return (
    <Container>
      <Header
        titulo='Cotizador de Seguros'
      />

      <FormContainer>
        <Form
        setResumen={setResumen}/>

        <Resumen
          data={data}
        />
        <Result
          cotizacion={cotizacion}
        />
      </FormContainer>
    </Container>
  );
}

export default App;
