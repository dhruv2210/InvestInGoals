import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../App";
import "./profile.css";

// let userData=[];
const Profile = () => {
  const { dispatch } = useContext(UserContext);
  const history = useNavigate();
  const [userData, setUserData] = useState([]);


  const logout = async () => {
    fetch('/logout', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then((res) => {
      history('/login', { replace: true });
      dispatch({ type: "USER", payload: false })
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    }).catch((err) => {
      console.log(err);
    });
  }


  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/profile');
      setUserData(response.data);
    }
    getUser();
  }, []);



  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className="container box_profile" data-aos="fade-up">

          <form id="enterinfo" className="row form-control-lg">
            <div className="col-12 mt-3 mb-2">        
            </div>
            <div className="col-12 mt-3 mb-2">        
            </div>
            

            <div className="col-12 mt-3 mb-2">
              <h3>Name: {userData.fname} {userData.lname}</h3>
            </div>
            <div className="col-md-6 mt-2 mb-2">
              <h3>Phone Number: {userData.phone}</h3>
            </div>
            <div className="col-md-6 mt-2 mb-2">
              <h3>DOB: {userData.dob}</h3>
            </div>
            <div className="col-md-6 mt-2 mb-2">
              <h3>Email: {userData.email}</h3>
            </div>
            <div className="col-md-6 mt-2 mb-2">
              <h3>Aadhar Number: {userData.aadharNumber}</h3>
            </div>

            <div className="col-12 mt-3 mb-2">        
            </div>

            <div className=" col-12 mt-2 mb-2 ">
              <button type="submit" className="goalbutton btn btn-outline-light" onClick={logout}><b> Logout</b> </button>
            </div>

            <div className="col-12 mt-3 mb-2">        
            </div>
            <div className="col-12 mt-3 mb-2">        
            </div>
          </form>
        </div>

      
    </>
  );
}

export default Profile



// const [userData,setUserData] = useState({
//   title:"",
//   price:0,
//   price75:0,
//   monthlyprice:0
// })

// const setValue = (e) => {
//   setVal(e.target.value);
// let bs=((basket[0].price) * 75) / 100;
//   setmp(bs/mp);
//   setUserData({monthlyprice:mp,title:basket[0].title, price:basket[0].price, price75:bs});
//   console.log(userData);
// }

// const handleInputs = (e) => {
//   const name = e.target.name;
//   const value = e.target.value;
//   setUserData({ ...userData, [name]: value });
// }