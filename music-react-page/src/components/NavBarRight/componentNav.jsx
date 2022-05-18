import styled from "styled-components"
import arrow from '../../assets/arrow.svg'
import estatua from '../../assets/statua.png'

const Content = styled.div`
width: 250px;
height: 100%;
margin-top: 15px;
box-shadow: 3px 5px 10px  rgba(0,0,0,0.2);
border-radius: 20px;
transition: .3s ease-in-out;
&:hover{
    transform: scale(1.3);
}



.menu{
    height: 60px;
    border-radius: 20px;
    align-items: center;
    display: flex;
    background-color: #fafafa;
    display: flex;
    justify-content: space-around;
    

    .imgs{
        img{
            width: 32px;
            height: 32px;
        }
    }

    .titles{
        cursor: pointer;
        h2{
            font-family: var(--font-fira);
            font-size: 16px;
        }
        p{
            font-family: var(--font-fira);
            font-size: 13px;
            font-weight: bold;
            color: #ccc;
        }
    }
    .icon--download{
       
        border: 2px solid #ccc;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        button{
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }
    }

}



`
export default function ComponentBav(){
    return(
        <Content>
         
            <div className="menu">
               <div className="imgs">
                   <img src={estatua}/>
                </div>
                <div className="titles">
                    <h2>Music Articts</h2>
                    <p>Lovely me</p>
                </div>
                <div className="icon--download">
                    <button><img src={arrow} alt="" /></button>
                </div>
               
            </div>

           
        </Content>
    )
}