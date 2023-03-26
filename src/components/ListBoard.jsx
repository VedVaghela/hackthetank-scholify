// import { Nav } from "./Nav";

// export const ListBoard = () => {
   
//     // let data;
//     // const getdata = async () => {
//     //     try{
//     //     const response = await fetch('https://worrisome-lion-flip-flops.cyclic.app/?quer=viewed');
//     //     const jdata = await response.json();
//     //     data = jdata;
//     //     console.log(data);
//     //     }
//     //     catch(error){
//     //         // hideloader();
//     //         console.log(error);
//     //     }
//     // }
//     // getdata()

//     // function hideloader() {
//     //     document.getElementById('loading').style.display = 'none';
//     // }
//     // // Function to define innerHTML for HTML table
//     // function show(data) {
//     //     let tab = 
//     //         `<tr>
//     //           <th>Name</th>
//     //           <th>Email</th>
//     //           <th>Application Date</th>
//     //           <th>CGPA</th>
//     //           <th>City</th>
//     //          </tr>`;
        
//     //     // Loop to access all rows 
//     //     for (let r of data.list) {
//     //         tab += `<tr> 
//     //     <td>${r.name} </td>
//     //     <td>${r.email}</td>
//     //     <td>${r.application_date}</td> 
//     //     <td>${r.cgpa}</td>   
//     //     <td>${r.city}</td>        
//     // </tr>`;
//     //     }
//     //     // Setting innerHTML as tab variable
//     //     document.getElementById("list").innerHTML = tab;
//     // }


//   const data = [
//     {
//       name: "Ved",
//       email: "ved@gmail.com",
//       appdate: "28th AUG",
//       CGPA: 8.78,
//       gender: "Male",
//       location: "Vadodara",
//     },
//     {
//       name: "Anom",
//       email: "hetp@gmail.com",
//       appdate: "27th AUG",
//       CGPA: 8.98,
//       gender: "Male",
//       location: "Surat",
//     },
//     {
//       name: "Dharmik",
//       email: "hetp@gmail.com",
//       appdate: "27th AUG",
//       CGPA: 8.98,
//       gender: "Male",
//       location: "Surat",
//     },
//   ];

//   return (
//     <>
//       <Nav />
//       <div className="maincontainer">
//         <div className="tablecontainer">
//           <table className="usertable">
//             <thead>
//             <tr className="headings">
//               <th>Name</th>
//               <th>Email</th>
//               <th>Application Date</th>
//               <th>CGPA</th>
//               <th>City</th>
//               <th className="notify">Location</th>
//             </tr>
//             </thead>
//             <tbody>
           
//             {/* {data && Object.values(data.bpi).map((name,email,application_date,cgpa,city) => {
//               return (
//                     <tr key={name}>
//                         <th scope="row">{name}</th>
//                       <td>{email}</td>
//                       <td>{application_date}</td>
//                       <td>{cgpa}</td>
//                       <td>{city}</td>
//                       {/* <td>{val.city}</td> */}
//                     {/* </tr>
//               );
//             })}  */}

//             {data && data.map((val, key) => {
//               return (
//                     <tr key={key}>
//                       <td>{val.name}</td>
//                       <td>{val.email}</td>
//                       <td>{val.appdate}</td>
//                       <td>{val.CGPA}</td>
//                       <td>{val.gender}</td>
//                       <td>{val.location}</td>
//                     </tr>
//               );
//             })}     
            
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };


import React, { Component } from "react";
import { Nav } from "./Nav.jsx";
import {emailimg} from "../assets/email.png";


export default class ListBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataIsLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://worrisome-lion-flip-flops.cyclic.app/?quer=applied")
      .then((data) => data.json())
      .then((json) => {
        this.setState({ items: json, dataIsLoaded: true });
      });
  }
  render() {
    const { dataIsLoaded, items } = this.state;

    if (!dataIsLoaded) {
      <div>
        <h1>Please wait some time.</h1>
      </div>;
    }
    return (

      <div>
        <Nav/>
        <div className="productlist-title">Student List</div>
        <br/>
        <br/>
        <br/>
        <div class="maincontainer">
          <table >
            <thead>
              <tr className="title-row">
                <th className="headings">Name</th>
                <th className="headings">EMail</th>
                <th className="headings">Phone</th>
                <th className="headings">CGPA</th>
                <th className="headings">Appl. Date</th>
                <th className="headings">CITY</th>
                <th className="headings">Notify</th>
              </tr>

            </thead>
              <tbody>
                {items.map((val, index) => (
                  <tr key={index}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}
                    </td>
                    <td>{val.cgpa}</td>
                    <td>{val.application_date}</td>
                    <td>{val.city}</td>
                    <td> 
                    <img src={"emailimg"} className="emailimg"/>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    );
  }
}