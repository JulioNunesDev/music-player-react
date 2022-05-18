import styled from "styled-components"
import ex from '../../assets/ex.svg'
import music from '../../assets/music.svg'
import user from '../../assets/user.svg'
import alb from '../../assets/alb.svg'

const Content = styled.div`
width: auto;

height: auto;
flex-direction: column;
display: flex;
justify-content: space-around;
align-items: center;
.menu{
    display: flex;
    flex-direction: column;
    gap: 20px;
    a{
     
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        font-family: var(--font-fira);
        font-weight: bold;
        color: black;
        padding-left: 25px;
        position: relative;
    }
    .text::before{
        content: '';
        background-color: #C7C9E2;
        width: 20px;
        position: absolute;
        left: 0;
        height: 40px;
        clip-path: polygon(100% 49%, 0 0, 0 100%);
      
        

    }
}

.cors{
    display: flex;
    flex-direction: column;
    gap: 25px;
    span{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
    span:nth-child(1){
        background-color: #C4487A;
    }
    span:nth-child(2){
        background-color: #57B9C6;
    }
    span:nth-child(3){
        background-color: #EC4743;
    }
}


`
export default function NavBarLeft(){
    return(
        <Content>
            
            <div className="menu">
                <a href=""><img src={ex}/> Explore</a>
                <a className="text" href=""><img src={music}/> Songs</a>
                <a href=""><img src={user}/> Artists</a>
                <a href=""><img src={alb}/> Albums</a>
            </div>

            <div className="cors">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Content>
    )
}