import styled from 'styled-components'
import manpequeno from '../../assets/man-p.svg'
import man from '../../assets/man.svg'
import girl from '../../assets/girl.svg'
import play from '../../assets/play.svg'
import prev from '../../assets/prev.svg'
import prox from '../../assets/prox.svg'
import frequecy from '../../assets/frequency.svg'

const Content = styled.div`
width: 100%;
height: 100%;



.box{
    display: flex;
    width: 100%;
    height: auto;

    .title{
        flex: 1;
        width: 100%;   
        display: flex;
        flex-direction: column;
        font-family: var(--font-fira);
      
        padding: 25px 0 0 80px ;
        
        h1{
            font-family: var(--font-secular);
            font-weight: bolder;
            line-height: 45px;
            width: 10%;
            font-size: 40px;
         
        }

        h2{
         
            font-size: 18px;
            margin: 10px 0 10px 0;
          
        }

        p{
            width: 50%;
            font-family: var(--font-fira);
            font-weight: bold;
            color: #ccc;
        }
    }

    .imgs{
        flex: 1;
        display: flex;
        width: auto;
        height: auto;
        justify-content: center;

        .player--img{
            position: relative;
            border-radius: 50%;
           
            width: 350px;
            height: 350px;
            border-top: 8px solid #9C9BBB;
            border-right: 10px solid #E85353;
            border-left: 10px solid #dedede4a ;
            display: flex;
            justify-content: center;
            
       

            .main{
                width: auto;
                height: auto;
                object-fit: contain;
            }

            .manpequeno{
                position: absolute;
                left: -15px;
                top: 35px;
                transition: .3s ease-in-out;
                cursor: grab;
            }
            .manpequeno:hover{
                transform: scale(1.3);
            }
            .girl{
                position: absolute;
                left: 0px;
                bottom: 25px;
                transition: .3s ease-in-out;
                cursor: grab;
            }
            .girl:hover{
                transform: scale(1.3);
            }
            .play{
                position: absolute;
                bottom: 0px;
                width: 75px;
                height: auto;
                transition: .3s ease-in-out;
                cursor: pointer;
            }
            .play:hover{
                transform: scale(1.3);
            }
            

        }
    }


    
}

.box-music{
    display: flex;
    gap: 50px;
    margin-top: 50px;
}
.card--music{
    box-shadow: 2px 5px 15px rgba(0,0,0,0.5);
    margin-left: 25px;
    display: flex;
    width: 250px;
    height: 300px;
    border-radius: 27px;
    background-image: linear-gradient(to bottom,#CD3C61,#334AC5 );

    .infos{
        width: 100%;
        height: 100%;
        
        justify-content: center;
        text-align: center;
        
        .informusic{
            width: 100%;
            height: auto;
            line-height: 25px;
            padding-top: 10px;
            img{
                width: 50px;
                height: auto;
            }
            h1{
                color: #fff;
                font-family: var(--font-fira);
                font-size: 25px;
            }
            p{
                font-family: var(--font-fira);
                font-size: 10px;
                color: #ccc;
            }
        }
        .frequecy{
            width: 100%;
            height: auto;
            img{
                width: 200px;
                height: 100px;
            }
        }
        .player{
            img{
                cursor: pointer;
            }
        }
    }
}

.musics{
    height: 250px;
    width: 200px;
    border-radius: 27px;
    background-color: #fafafa;
    box-shadow: 2px 5px 15px rgba(0,0,0,0.5);
    padding: 25px;
  
        

    h1{
        font-family: var(--font-fira);
        font-size: 80px;
        font-weight: bold;
        
    }
    h2{
        font-family: var(--font-fira);
        font-size: 25px;
        font-weight: bold;
    }
}
`

export default function Home(){
    return(
        <Content>
            <div className="box">
            <div className="title">
                <h1>
                Blinding
                Lights
                </h1>
                <h2>The Weekend</h2>
                <p>
                After sence,that which
                comti nerest to cxpretrg
                he ineptessble a比
                </p>
            </div>
            <div className="imgs">
                <div className='player--img'>
                <img className='man' src={man}/>
                <img className='manpequeno' src={manpequeno}/>
                <img className='girl' src={girl}/>
                <img className='play' src={play}/>
                
                </div>
            </div>
            </div>
            <div className="box-music">

            <div className="card--music">
                <div className="infos">
                    <div className="informusic">
                        <img src={manpequeno}/>
                        <h1>Robert Fox</h1>
                        <p>Ronald Richards</p>
                    </div>
                    <div className="frequecy">
                        <img src={frequecy} />
                    </div>
                    <div className="player">
                        <img src={prev} />
                        <img src={play} />
                        <img src={prox} />
                    </div>
                </div>
            </div>
            <div className="musics">
                <h1>01</h1>
                <h2>classical
                    music
                    collections
                </h2>
            </div>
            <div className="musics">
                <h1>02</h1>
                <h2>pop
                    music
                    collections
                </h2>
            </div>
            </div>
        </Content>
    )
}