import styled from '@emotion/styled';
import {primerMayuscula} from '../helper'
import PropTypes from 'prop-types';

const ResumenContainer = styled.div`
    background-color: #ac1987;
    padding: 1rem;
    color: #fff;
    text-align: center;
    margin-top: 1rem;
`
    

const Resumen = ( {data} ) => {
    const {marca, year, plan} = data;

    if( marca === '' || year === '' || plan === '') return null;

    return (
        <ResumenContainer>
           <h2>Resumen de cotizacion</h2> 
           <ul>
               <li>Marca: {primerMayuscula(marca)}</li>
               <li>Año del auto: {primerMayuscula(year)}</li>
               <li>Plan: {primerMayuscula(plan)}</li>
           </ul>
        </ResumenContainer>
    )
}

Resumen.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Resumen
