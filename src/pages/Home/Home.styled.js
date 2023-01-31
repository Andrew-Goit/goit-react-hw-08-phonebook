import styled from 'styled-components';
import img from '../../img/purple-dots.png';

export const HomeBox = styled.div`
    height: 80vh;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px 4px rgba(0,0,0,0.12);
    background-image: url(${img});
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
` 
export const HomeTitle = styled.h1`
    // text-align: center;
    color: #222;
    font-size: 30px;
`