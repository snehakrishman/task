// import axios from 'axios';
import {Link } from 'react-router-dom';
// import React, { useState } from 'react';

export default function Add(){

    // const [StudentName ,setStudentName] = useState('');
    // const [Studentpassword, setStudentpassword] = useState('');
    // const [StudentEmailId, setStudentEmailId] = useState('');
    
    

    const adddata = ()=>{
        
    //     let datastring = {studentname:Studentpassword,studentemail_id};
    //     axios.post("http://localhost:3004/add",datastring)
    //     .then(function(response){
    //         if(response.data.status === 'inserted'){
    //             alert('inserted');
    //             window.location.reload();
    //         }
    //     });
    // };
    
return(
    <>
    {/* <div className="container mt-3">
    <div className="row">
        <p className="p_style">application</p>
    </div>
    </div>

    <div className="container mt-5">
        <div className="data_center_0">
        <div className="form-group">
        <label>StudentName</label>
        <input type="text" className="form-control"  />
        </div>
        <div className="form-group">
        <label>Studentpassword</label>
         <input type="text"className="form-control" />
        </div>
        <div className="form-group">
        <label> StudentEmailId</label>
        <input type="email"className="form-control" />
        </div>
        <div className="form-group">
        <button className="btn btn-primary mt-4" onClick={adddata}>Save</button>&nbsp;
        <Link to={"/"}><button className="btn btn-danger mt-4">Go Back</button></Link>
        </div>
        </div>
    </div>
    </> */}


<div className="container">
            <div className="row">
             <div className="col-lg-3">&nbsp;</div> 
             <div className="col-lg-6">

                <div className="table-responsive">
                  <table className="table table-bordered">
                      <thead>
                       <tr>
                        <th colSpan={2}>application</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>STUDENT username</td>
                            <td><input typ="text" name=" username"id="username"className="form-control"/></td></tr>
                            <tr>
                            <td>StudentEmail Id</td>
                            <td><input typ="text" name="email"id="email"className="form-control"/></td></tr>
                            <tr>
                            <td>StudentPhone</td>
                            <td> <input typ="number" name="phone"id="phone"className="form-control"/></td>
                            </tr>
                            <tr>
                              <td>Studentpassword</td>
                                <td><input type="passowrd" name="password" id="password" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/">
                                        <button type="button" name="data_change"id="data_change"className="btn btn-danger">
                                            sign-in
                                            </button>
                                            </Link>
                                        </td>
                                        <tr>
                                            <td>
                                        <button type='submit' name="data_change" id="button" className='btn btn-primary'>Submit</button>
                                        </td>
                                        </tr>
                                        </tr>
                                   </tbody>      
                                </table> 
                                </div> 
              
            </div>
            <div
            className="col-lg 3">&nbsp;</div>
            </div>
        </div>
        </>
    )

    }

}