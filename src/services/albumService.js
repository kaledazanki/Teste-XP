import axios from 'axios'
import { Token } from './token'

export const getAlbuns = (albumName) => {

    let token = ""

    Token()
        .then(tokenResponse => {
            token = tokenResponse.data.access_token;
        })
        .then(() => {
            return axios.get(`https://api.spotify.com/v1/search?q=album:"'${albumName}'"&type=track`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + token
                }
            }).then(res =>{
                console.log(res)
            })
        })



}

