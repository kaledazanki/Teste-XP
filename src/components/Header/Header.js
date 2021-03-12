import React,{Component} from 'react'
import './styles.css'

const Headers = () => {
    return (
        <div id="headerContainer">
          <a><img id="imgDimension" src={'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-vector-download-11.png'}  alt="Teste XP"></img></a> 
        </div>       
    );
}

class Header extends Component {
  render() {
    return(
      <Headers/>
    )
  }
}

export default Header;