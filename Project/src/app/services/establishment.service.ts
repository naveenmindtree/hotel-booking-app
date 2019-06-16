import { Injectable } from '@angular/core';
import { Establishment } from '../shades/establishment.model';
import{User} from '../shades/user.model';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class EstablishmentService {
  

  establishments : Establishment[]= [
    { id: 1, name: "Hotel Grand", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 5000, isBlock: false, averageRating: 4.2, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 2, name: "Hotel Taj", type: "hotel", location: "Guindy", city: "Chennai", capacity: 1 , price: 6000, isBlock: false, averageRating: 4.4, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Air-conditioned"], owner: new User() },
    { id: 3, name: "Hotel Trident", type: "hotel", location: "Adayar", city: "Chennai", capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 4, name: "Park Plaza", type: "hotel", location: "Adayar", city: "Chennai", capacity: 2 , price: 4000, isBlock: false, averageRating: 2.5, reviews: [],bookingList: [],amenities: [ "Air-conditioned", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 5, name: "Le Meridien", type: "hotel", location: "Mylapore", city: "Chennai", capacity: 1 , price: 7500, isBlock: false, averageRating: 4.7, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned"], owner: new User() },
    { id: 6, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "Air-conditioned" , "Wi-fi"], owner: new User() },
    { id: 7, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Chennai", capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews: [],bookingList: [],amenities: [ "Car parking", "Wi-fi"], owner: new User() },
    { id: 8, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Chennai", capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews: [],bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User() },
    { id: 9, name: "Green city", type: "homestay", location: "Adayar", city: "Chennai", capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews: [],bookingList: [],amenities: [ "Car parking"], owner: new User() }
    ]
// EstablishmentService=new Subject <Establishment[]>(
  

// )
establishmentsubject=new Subject <Establishment[]>();
    getEstablishment()
    {
      // return this.establishments;
      this.establishmentsubject.next(this.establishments);  
    }
    

  getFilter(sdata)
     {
          console.log(sdata)
let filterData=[];
filterData = this.establishments.filter(word =>word.price >=sdata.Price);
console.log(filterData)
  
if(sdata.Search)
filterData = filterData.filter(word =>word.name === sdata.Search);
console.log(filterData);
//if(!fromData.averageRating)
filterData = filterData.filter(word =>word.averageRating >=sdata.Rating);
console.log(filterData);
if(!sdata.Hotel)
filterData = filterData.filter(word =>word.type!=="hotel");
if(!sdata.RoomStay)                                              
filterData = filterData.filter(word =>word.type!=="homestay");
console.log(filterData)
this.establishmentsubject.next(filterData);
  }

  
    }