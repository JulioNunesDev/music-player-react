import styled from "styled-components"
import bell from '../../assets/bell.svg'
import set from '../../assets/settings.svg'
import julio from '../../assets/ju.jpg'

const Content = styled.header`
display: flex;
justify-content: space-between;
height: 75px;
align-items: center;
padding: 0 25px;


h1{
    color: black;
    font-family: var(--font-fira);
}
.conf{
    
    display: flex;
    align-items: center;
    gap: 25px;
    img{
        width: 30px;
        text-decoration: none;
        font-family: var(--font-secular);
        cursor: pointer;
    }
    span{
        width: 35px;
        height: 35px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50px;

        }
    }
}



`
export default function Header(){
    return(
        <Content>
            <h1>Music</h1>
            
            <div className="conf">
                <img src={set} alt="" />
                <img src={bell} alt="" />
                
                <span><img src={julio} alt="" /></span>
            </div>
        </Content>
    )
}