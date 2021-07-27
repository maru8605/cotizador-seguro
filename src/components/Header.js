import styled from '@emotion/styled';

const HeaderContainer = styled.header`
   background-color: #f603b9;
   padding: 10px;
   font-weight: bold;
   color: ffffff;
`
const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`

export const Header = ({titulo}) => {
    return (
        <HeaderContainer>
            <HeaderText>{titulo}</HeaderText>
        </HeaderContainer>
    )
}
export default Header;