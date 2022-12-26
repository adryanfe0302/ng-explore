import { Component } from '@angular/core';
import { Room, RoomType, ListMovies } from './rooms';
import axios from 'axios';


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})



export class RoomsComponent {
  hotelName = 'mandarin'
  numberOfRooms = 19
  loading:boolean = false
  ListMoviesData:ListMovies[] = []
  rooms:Room = {
    availableRooms: 4,
    bookedRooms: 21,
    totalRooms: 25
  }

  roomList: RoomType[] = [{
    roomNumber: 1,
    roomType: 'Deluxe',
    amenities: 'Air Conditioner, wifi, TV, kitchen',
    price: 500,
    photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg',
    checkinTime: new Date('11-Nov-2022'),
    checkoutTime: new Date('12-Dec-2022'),
  },
  {
    roomNumber: 2,
    roomType: 'First Class',
    amenities: 'Air Conditioner, wifi, TV, kitchen, spa, car',
    price: 750,
    photos: 'https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000',
    checkinTime: new Date('12-Nov-2022'),
    checkoutTime: new Date('13-Dec-2022'),
  },
  {
    roomNumber: 3,
    roomType: 'Deluxe',
    amenities: ' wifi, TV, kitchen, spa, car',
    price: 730,
    photos: 'https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000',
    checkinTime: new Date('15-Dec-2022'),
    checkoutTime: new Date('17-Dec-2022'),
  }
]


  hideRooms = true
  toogle(){
    this.hideRooms = this.hideRooms ? false : true
  }

  async getDataFromApi(){
    await axios({
      method: 'get',
      url: 'https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies',
      responseType: 'stream'
    }).then(function (response) {
        const data = JSON.parse(response.data)
        console.log('data', data);
        // data.map((list:ListMovies) => {
        //   console.log('data', list.title)
        // })
        return data
    });
  }

  async ngOnInit() {
    console.log('1', this.ListMoviesData);

    // this.getDataFromApi()
    this.loading = true
    const resp = await fetch('https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies');
    const data = await resp.json();
    this.loading = false
    console.log('data1',  this.ListMoviesData );
    this.ListMoviesData = data
    console.log('data2',  this.ListMoviesData );

    // const respUser = await fetch('https://randomuser.me/api/');
    // const dataUser = await respUser.json();
    // const { results: [user] } = dataUser;
    // console.log('dataUser', user);

  }


}
