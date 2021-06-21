import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react'; 
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bookdata:[],
            userEmail: this.props.auth0.user.email,
            showModel:false,
        }
    }
     componentDidMount = async ()=>{
    try{
    const books= await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${this.state.userEmail}`);
    console.log(books.data);
    
    if(books.data.length >0){
   this.setState({
       bookdata:books.data,
       showModel:true,
   })
   }
    }
    catch (error){
    console.log(error);
    }
    }
  

    render(){
        return(
            <>
           {this.state.showModel && <div>
           {this.state.bookdata.map((obj,indx)=>{
               return <Carousel>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                   alt="First slide"
                 />
                 <Carousel.Caption>
                   <h3>{obj.name}</h3>
                   <p>{obj.description}</p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                   alt="Second slide"
                 />
             
                 <Carousel.Caption>
                 <h3>{obj.name}</h3>
                   <p>{obj.description}</p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src="https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                   alt="Third slide"
                 />
             
                 <Carousel.Caption>
                 <h3>{obj.name}</h3>
                   <p>{obj.description}</p>
                 </Carousel.Caption>
               </Carousel.Item>
             </Carousel>
        
           }) 
        }</div>}
            </>
        )
    }
}

export default withAuth0(BestBooks);