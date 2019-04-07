import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 15px;
  width: 80%;
  min-width: 370px;
  background-color: #f5f5f5;
  list-style: none;
  @media(max-width: 400px) {
    padding: 0;
    background-color: white;
  }
`;

export const Image = styled.img`
  flex-shrink: 0;
  
  width: 130px; 
  height: 130px; 
  
  background: url( ${ (props) => props.link  } ) center center;

  border-radius: 50%; 
`;

export const Title = styled.h1`
  display: inline-block;
  
  margin: 0;
  padding: 0;
  margin-left: 20px;
  padding-top: 30px;
  
  font-size: 24px;
  color: black;
  @media(max-width: 650px) {
    font-size: 14px;
  }
`;

export const Elem = styled.li`  
  display: inline-block;
  margin: 15px;
  :hover {
    opacity: 0.6;
  }
  :active {
    opacity: 0.4;
  }
  @media(max-width: 400px) {
    margin: 5px;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
`;
