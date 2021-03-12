import React,{Component} from 'react'
import './styles.css'


const Cards = () => {
    return (
        <div className="containerCard">
            <img src={"https://conteudo.imguol.com.br/c/entretenimento/9c/2018/10/04/origins-novo-album-do-imagine-dragons-1538650477413_v2_450x450.png"} id="cardMusic" >

            </img>        
            <a ><img src={"http://cdn.onlinewebfonts.com/svg/img_82197.png" } id="playButton"></img></a>
        </div>       
    );
}

class Card extends Component {
  render() {
    return(
      <Cards/>
    )
  }
}

export default Card;