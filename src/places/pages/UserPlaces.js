import React from 'react';
import { useParams } from 'react-router-dom';


import PlaceList from '../components/PlaceList'
const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl : 'https://lh5.googleusercontent.com/p/AF1QipO1LQRpgc0tNHhxmbcWWUpv88yjuTZvcwh6VjcJ=w408-h272-k-no',
        address: 'New York, NY 10001',
        location: {
            lat: 40.7485452,
            lng: -73.9879522
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl : 'https://lh5.googleusercontent.com/p/AF1QipO1LQRpgc0tNHhxmbcWWUpv88yjuTZvcwh6VjcJ=w408-h272-k-no',
        address: 'New York, NY 10001',
        location: {
            lat: 40.7485452,
            lng: -73.9879522
        },
        creator : 'u2'
    }
]


const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;