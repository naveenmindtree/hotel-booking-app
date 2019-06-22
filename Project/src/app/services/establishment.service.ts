import { Injectable } from '@angular/core';
import { Establishment } from '../shades/establishment.model';
import{User} from '../shades/user.model';
import { of, Observable, Subject, GroupedObservable } from 'rxjs';
import { Review } from '../shades/review.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root' 
})
export class EstablishmentService {
formdata={};
singleItem: any;
  temp: Establishment[] = [];
  establishURL="https://api.myjson.com/bins/vm401";
   reviews: Review[]=[ ];
   //{id: 1,rating:5,reviewedBy: new User("sasi"),establishment:new Establishment(''+),reviewcontent:"Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks we were in Europe "},
//   {id: 2,rating: 3,reviewedBy: new User("Reddy"),establishment:new Establishment(),reviewcontent:"Located just near the fort in city(perfect location),the hotel is clean and provides u great hospitality.The hotel owner Mr.Mukesh is very helpful and will guide u throughout your stay.The staffs were very helpful.The hotel provides u almost every facilities from good rooms to desert safari,jeep safari,camel safari and tent stay. "},
// ];
  locationData: Establishment[]=[];
  establishments : Establishment[]=[];//= [
  //   { id: 1, name: "Hotel Grand", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 5000, isBlock: false, averageRating: 4.2, reviews: this.reviews,bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User('sasi') },
  //   { id: 2, name: "Hotel Taj", type: "hotel", location: "Guindy", city: "Chennai", capacity: 1 , price: 6000, isBlock: false, averageRating: 4.4, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "First Aid" , "Air-conditioned"], owner: new User('naveen') },
  //   { id: 3, name: "Hotel Trident", type: "hotel", location: "Adayar", city: "Chennai", capacity: 3 , price: 5500, isBlock: false, averageRating: 3.0, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User('morsh') },
  //   { id: 4, name:"Park Plaza", type: "hotel", location: "Adayar", city: "Chennai", capacity: 2 , price: 4000, isBlock: false, averageRating: 2.5, reviews:  this.reviews,bookingList: [],amenities: [ "Air-conditioned", "First Aid" , "Wi-fi"], owner: new User('david') },
  //   { id: 5, name: "Le Meridien", type: "hotel", location: "Mylapore", city: "Chennai", capacity: 1 , price: 7500, isBlock: false, averageRating: 4.7, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "Air-conditioned"], owner: new User('subbu') },
  //   { id: 6, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Chennai", capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "Air-conditioned" , "Wi-fi"], owner: new User('sunnel') },
  //   { id: 7, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Chennai", capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "Wi-fi"], owner: new User('apson') },
  //   { id: 8, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Chennai", capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User('Reddy') },
  //   { id: 9, name: "Green city", type: "homestay", location: "Adayar", city: "Chennai", capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking"], owner: new User('kk') },
  //   { id: 10, name: "Oberois Hotels", type: "hotel", location: "Egmore", city: "Bangalore", capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: this.reviews,bookingList: [],amenities: [ "Car parking", "Air-conditioned" , "Wi-fi"], owner: new User('somu') },
  //   { id: 11, name: "Lovely Homes", type: "homestay", location: "Mylapore", city: "Bangalore", capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "Wi-fi"], owner: new User('venky') },
  //   { id: 12, name: "Paradise Inn", type: "homestay", location: "Egmore", city: "Bangalore", capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews:  this.reviews,bookingList: [],amenities: [ "Car parking", "First Aid" , "Wi-fi"], owner: new User('muni') },
  //   ]
// EstablishmentService=new Subject <Establishment[]>(
  

// )
constructor(private http:HttpClient){}
establishmentsubject=new Subject <Establishment[]>();
    getEstablishment()
    {
      // return this.establishments;
      this.establishmentsubject.next(this.locationData);  
    }
    

  getFilter(sdata)
     {  
       console.log(this.locationData);
let filterData=[];

filterData = this.locationData.filter(word =>word.price >=sdata.Price);
// console.log(filterData)
  
if(sdata.Search)
filterData = filterData.filter(word =>word.name === sdata.Search);
// console.log(filterData);
//if(!fromData.averageRating)
filterData = filterData.filter(word =>word.averagerating >=sdata.Rating);
// console.log(filterData);
if(!sdata.Hotel)
filterData = filterData.filter(word =>word.type!=="hotel");
if(!sdata.RoomStay)                                              
filterData = filterData.filter(word =>word.type!=="homestay");
// console.log(filterData)
console.log(filterData);
this.establishmentsubject.next(filterData);
  }

  searchHotels(data)
  {
    this. formdata=data;
    this.http.get(this.establishURL).subscribe((x:Establishment[])=>{
      this.establishments=x;
      
      console.log(this.formdata);
       this.locationData=this.establishments.filter(loc => loc.city === data.location);
       this.locationData=this.locationData.filter(cap  =>cap.capacity >= data.guest);
       console.log(this.locationData)
       this.establishmentsubject.next(this.locationData);
    }
      );
  }

  selectLocation()
  {
    console.log(this.formdata);
   return  this.formdata;
  }
  obj={};
getEstablishmentById(id){
let viewData = this.establishments.find(word =>word.id ===id);
console.log(viewData)
return viewData
}
getViewData(){
return this.obj
}
getReviews()
{
      return this.reviews;
    }
  
    }
