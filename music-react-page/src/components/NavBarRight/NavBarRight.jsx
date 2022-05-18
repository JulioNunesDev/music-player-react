import styled from "styled-components"
import arrow from '../../assets/arrow.svg'
import estatua from '../../assets/statua.png'
import ComponentBav from "./componentNav"

const Content = styled.div`
width: 250px;
height: 100%;
margin-right: 25px;




h1{
    color: black;
    font-family: var(--font-popis);
    font-size: 27px;
    font-weight: 400;

}





`
export default function NavBarRight(){
    return(
        <Content>
            <h1>Download</h1>
           <ComponentBav />
           <ComponentBav />
           <ComponentBav />
           <ComponentBav />
        </Content>
    )
}