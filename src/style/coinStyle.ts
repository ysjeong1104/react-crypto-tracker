import styled from "styled-components";

export const Container= styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;    
`;

export const Header = styled.header`
    height:10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GridHeader = styled(Header)`//style 상속    
    display: grid;    
    grid-template-columns: 1fr 2fr 1fr;    
    justify-items: center;
`;

export const CoinsList = styled.ul`
    
`;

export const Coin = styled.li`
    background-color: white;
    color: ${(props)=>props.theme.bgColor};    
    margin-bottom: 10px;
    border-radius: 15px;
    a{        
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;        
    }
    &:hover{
        a{
            color:${props=>props.theme.accentColor};
        }
    }
`;

export const Title = styled.h1`
    font-size: 48px;    
    color : ${props=>props.theme.accentColor};
`;

export const Loader = styled.span`
    text-align: center;
    display: block;

`;

export const Img = styled.img`
    width : 35px;
    height: 35px;
    margin-right: 10px;
`
export const CoinWrapper =styled.div`
    
`
export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
export const Description = styled.p`
  margin: 20px 0px;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

export const LinkStyleBtn = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;  
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 10px;
  width: 100px;
  a {
    display: block;
  }
`