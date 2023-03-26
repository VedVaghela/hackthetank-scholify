import { Nav } from "./Nav";

export const ListBoard = () => {
   
    let data;
    const getdata = async () => {
        try{
        const response = await fetch('https://worrisome-lion-flip-flops.cyclic.app/?quer=viewed');
        const jdata = await response.json();
        data = jdata;
        console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }
    getdata()



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

  return (
    <>
      <Nav />
      <div className="maincontainer">
        <div className="tablecontainer">
          <table className="usertable">
            <thead>
            <tr className="headings">
              <th>Name</th>
              <th>Email</th>
              <th>Application Date</th>
              <th>CGPA</th>
              <th>City</th>
              <th className="notify"></th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((val, key) => {
              return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.application_date}</td>
                      <td>{val.cgpa}</td>
                      <td>{val.city}</td>
                    </tr>
              );
            })}
            
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
