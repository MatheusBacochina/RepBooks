import {useState} from 'react'
import '../styles/card.scss'
export function CardComp(props){
    const [show, setshow] = useState(false)

    return(
        <>

            <div className="cardMini" onClick={() => setshow(true)}>
                <img src={`${props.url ? props.url : ''}`} />
                <h5>{props.title}</h5>

            </div>
            {show && <div className="bg">
                <main>
                <header>
                    <div className="oval"></div>
                    <div className="bg-img">
                    </div>
                    <div className="seta">
                    <button onClick={() => setshow(false)}></button>
                    </div>
                    <img src={`${props.back ? props.back : ''}`}/>
                </header>

                <div className="desc">
                <h2>{props.title}</h2>
                <h2 className="color">{props.autor}</h2>
                <p>{props.desc}</p>
                </div>
                </main>
            </div>
            }

</>
    );
}