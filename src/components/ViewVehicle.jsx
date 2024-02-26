import React, { useState } from 'react'
import VehicleNav from './VehicleNav'

const ViewVehicle = () => {
  const [data,setData] = new useState(
    [
      {"vehicleno":"KL41G2100","name":"Innova","model":"MUV","manufacturer":"Toyota","chasisno":124355},
      {"vehicleno":"KL41G2101","name":"Alto","model":"STD","manufacturer":"Maruthi","chasisno":124353},
      {"vehicleno":"KL41G2103","name":"Sunny","model":"Sedan","manufacturer":"Nissan","chasisno":124355},
      {"vehicleno":"KL41G2104","name":"Swift","model":"MUV","manufacturer":"Maruthi","chasisno":124355},
      {"vehicleno":"KL41G2106","name":"City","model":"Sedan","manufacturer":"Honda","chasisno":124355},
    ]
  )
  return (
    <div>
        <VehicleNav/>

<table className="table table-bordered">
  <thead>
    <tr>
     
      <th scope="col">Vehicle number</th>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">Chaisis number</th>


    </tr>
  </thead>
  <tbody>
    {
      data.map(

        (value,index)=>{
          return <tr>
          
          <td>{value.vehicleno}</td>
          <td>{value.name}</td>
          <td>{value.model}</td>
          <td>{value.manufacturer}</td>
          <td>{value.chasisno}</td>
    
    
        </tr>
        }
      )
    }
    
    
    
    
    
  </tbody>
</table>



    </div>
  )
}

export default ViewVehicle