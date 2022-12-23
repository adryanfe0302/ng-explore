export interface Room {
    availableRooms?: number;
    bookedRooms?: number;
    totalRooms?: 25
}

export interface RoomType{
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}
