import React from 'react'
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: #f603b9;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: #fff;
`
const DivCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: solid 1px #26C6DA;
    background-color: #f603b9 ;
    margin-top: 1rem;
    position: relative;
`

const MensajeCotizacion = styled.p`
    color: #fff;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Result = ({cotizacion}) => {
    
    return (
      (cotizacion === 0 ) ? <Mensaje>Elige Marca, Año y tipo de seguro</Mensaje>
       : ( <DivCotizacion>
            <TransitionGroup 
                component='span'
                className='resultado'
            >
                <CSSTransition
                    classNames='resultado'
                    key={cotizacion}
                    timeout={{enter: 500, exit:500}}
                >
                    <MensajeCotizacion>El total a pagar es :<span> $ {cotizacion}   </span> </MensajeCotizacion>
                </CSSTransition>
            </TransitionGroup>
          </DivCotizacion>  )
    )
}

Result.propTypes = {
    cotizacion: PropTypes.number.isRequired,
}
export default Result
