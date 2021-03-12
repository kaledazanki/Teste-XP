import { useState, useEffect } from 'react'
import { Credentials } from './Credentials'
import axios from 'axios'

export const Token = () => {

    const spotify = Credentials();

    return axios('https://accounts.spotify.com/api/token', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    });

}