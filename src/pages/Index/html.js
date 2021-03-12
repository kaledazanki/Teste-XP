import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/searchBar/Search'
import CardMusic from '../../components/Card/Card'
import { getAlbuns } from '../../services/albumService'
import { Credentials } from '../../services/Credentials'
import './styles.css'

const App = () => {

  const [album, setAlbum] = useState({})


  useEffect(() => {
  }, [album])

  const updateAlbum = (albumName) => {

    const album = getAlbuns(albumName)

    setAlbum(album)
  }


  return (
    <div id="container">
      <div className="headerFlexbox">
        <Header></Header>
        <SearchBar onChange={updateAlbum}></SearchBar>
      </div>
      <div>
        <label>
          Álbuns buscados recentemente
        </label>
        <div className="cards">
          <CardMusic></CardMusic>
          <CardMusic></CardMusic>
          <CardMusic></CardMusic>
          <CardMusic></CardMusic>
        </div>

      </div>
    </div>

  )

}

reactDOM.render(<App />, document.getElementById('root'))