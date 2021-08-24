import {useState, useEffect} from 'react'
import {Api} from './api'
import './styles/global.scss'
import {Bar} from './components/Bar'
import home from './images/home.svg'
import livro from './images/Livro.svg'
import profile from './images/profile.svg'
import {Container} from './components/container'
import {CardComp} from './components/CardComp'


function App() {
  const [books, setbooks] = useState([]);
  const [input, setinput] = useState('');
  const [start, setstart] = useState(1)
  const [min, setmin] = useState(9)
  const [fill, setfill] = useState([])



  async function HandleChange (e){
    setinput(e.target.value);
    try{
    if(input){
      const result = await Api.api(input, min, start)
      const res =  result.data.items;
    if(res){
     setbooks(res)
     }
     }
     
    }catch(err){
      console.log(err)
    }
  }




  return (
  <div className="App">
    <div className="Input">
      <button></button>
      <input value={input} onChange={e => HandleChange(e)} placeholder="Search Book" />
    </div>
    {!input && <div className="content-no-search">
      <div className="hi-message-container">
      <h3>Hi,<h3 className="separator">Name</h3><div className="emoji"></div></h3>
    </div>
    <h3>Discover new book</h3>
    <Container></Container>
    <div className="current">
      <div className="title-bnt"><h3>current reading</h3><a>All</a></div>
      <div className="wallpaper">
        <div className="one"></div>
        <div className="two"></div>
      </div>
    </div>
   
    </div> }
    
    {input && <>
      

      <div className="collection">
      {books.map((value)=>(
 
      <>
        <CardComp key={value.volumeInfo.title}
         desc={value.volumeInfo.description === undefined ? 'sem desc paê' : `${value.volumeInfo.description }`} 
         url={value.volumeInfo.imageLinks === undefined ? '' : `${value.volumeInfo.imageLinks.thumbnail}`} 
         back={value.volumeInfo.imageLinks === undefined ? '' : `${value.volumeInfo.imageLinks.thumbnail}`}  
         title={value.volumeInfo.title} autor={value.volumeInfo.authors}>
         
         </CardComp>
        
 </>
    ))}
    
       </div>
  
    </>}
      {!input && <Bar>
      <div className="opt"> <img src={home}/> </div>
      <div className="opt"> <img src={livro}/></div>
      <div className="opt"> <img src={profile}/></div>
    </Bar> }
    

  </div>
  );
}

export default App;
