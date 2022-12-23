import { Component } from '@angular/core';
import { Room, RoomType } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent {
  hotelName = 'mandarin'
  numberOfRooms = 19

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

}
