import '../styles/container.scss'
import {Card} from './card'
import imge from '../images/Banner.svg'
export function Container(){
    return(
        <div className="content-container">
            <Card image={imge}></Card>
        </div>
    );
}