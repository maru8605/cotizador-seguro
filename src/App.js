import {useState} from 'react'
import styled from '@emotion/styled';
import Header from "./components/Header";
import Form from './components/Form';
import Resumen from './components/Resumen';
import Result from './components/Result';
import Spinner from './components/Spinner';

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
  const [cargando, setCargando] = useState(false)

  const {cotizacion, data} = resumen;
  return (
    <Container>
      <Header
        titulo='Cotizador de Seguros'
      />

      <FormContainer>
        <Form
        setResumen={setResumen}
        setCargando={setCargando}/>
        
        { cargando ?   <Spinner/> : null}

        <Resumen
          data={data}
        />

        {!cargando ?
        <Result
        cotizacion={cotizacion}/> 
       : null }
        
      </FormContainer>
    </Container>
  );
}

export default App;
