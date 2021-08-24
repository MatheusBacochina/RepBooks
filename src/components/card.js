import styled from 'styled-components'

export const Card = styled.div`

width: 400px;
height: 200px;
background: url(${props => props.image});
background-position: center;
background-repeat: no-repeat;
box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
background-size: cover;


`