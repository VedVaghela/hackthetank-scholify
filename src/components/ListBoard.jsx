import { Nav } from "./Nav";

export const ListBoard = () => {

// const response = fetch('https://worrisome-lion-flip-flops.cyclic.app/?quer=viewed');

// const data1 =  response.json();

  const data = [
    {
      name: "Ved",
      email: "ved@gmail.com",
      appdate: "28th AUG",
      CGPA: 8.78,
      gender: "Male",
      location: "Vadodara",
    },
    {
      name: "Anom",
      email: "hetp@gmail.com",
      appdate: "27th AUG",
      CGPA: 8.98,
      gender: "Male",
      location: "Surat",
    },
    {
      name: "Dharmik",
      email: "hetp@gmail.com",
      appdate: "27th AUG",
      CGPA: 8.98,
      gender: "Male",
      location: "Surat",
    },
  ];

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
              <th>App. Date.</th>
              <th>CGPA</th>
              <th>Gender</th>
              <th>Location</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.appdate}</td>
                      <td>{val.CGPA}</td>
                      <td>{val.gender}</td>
                      <td>{val.location}</td>
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
