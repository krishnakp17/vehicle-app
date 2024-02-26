import React, { useState } from 'react'
import VehicleNav from './VehicleNav'

const AddVehicle = () => {
    const [input,setInput]=new useState({"vno":"","name":"","model":"","cmpny":"","man_year":"","num":""})
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        if (!input.vno ||!input.name||!input.model||!input.cmpny||!input.man_year||!input.num) {
            alert("Fill all the fields")
            
        } else {
            alert("Success")
        }
        setInput(
            {"vno":"","name":"","model":"","cmpny":"","man_year":"","num":""}
        )
    }
  return (
    <div>
        <VehicleNav/>

<        div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">


                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Vehicle Number</label>
                    <input type="text" className="form-control" name='vno' value={input.vno} onChange={inputHandler} />
                    </div>


                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Vehicle Name</label>
                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Model</label>
                        <input type="text" className="form-control" name='model' value={input.model} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Company</label>
                        <input type="text" className="form-control" name='cmpny' value={input.cmpny} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Manufacture year</label>
                        <input type="text" className="form-control" name='man_year' value={input.man_year} onChange={inputHandler}/>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Chaisis number</label>
                        <input type="text" className="form-control" name='num' value={input.num} onChange={inputHandler}/>
                    </div>


                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-success" onClick={readValues}>Submit</button>
                    </div>
                </div>


                </div>
            </div>
        </div>




    </div>
  )
}

export default AddVehicle