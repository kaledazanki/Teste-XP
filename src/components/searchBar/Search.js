import React,{Component} from 'react'
import './styles.css'

const SearchBar = (props) => {
    return (
    <div className="container">
        <label>Digite abaixo uma musica, álbum ou artista</label>
        <input
            id="searchBar"
            type="text"
            placeholder="Digite aqui!"
            onChange={(event) => props.onChange(event.target.value)}
        />
    </div>

    );
}

class Search extends Component {
  render() {
    const {onChange} = this.props;
    return(
      <SearchBar onChange={onChange}/>
    )
  }
}

export default Search;