import React, { useEffect, useState } from "react";
import "./OrderAdmin.css";
import { useDispatch } from "react-redux";
import { GetBuyProduct, buyItem } from "../../redux/features/BuySlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state)=> ({...state.auth}));
  useEffect(()=>{
    if(isAuthenticated == false){
      navigate('/adminlogin');
    }
  },[isAuthenticated])
  const { BuyData } = useSelector((state) => ({ ...state.Buy }));
  console.log(BuyData);
  useEffect(() => {
    dispatch(GetBuyProduct());
  }, []);

  const handleLink = (id) => {
    navigate("/orderdata", { state: { id: id } });
  };
  const handlenavigate2 = () =>{
    navigate('/admincollect')
  }

  return (
    <div className="order1">
      
      {/* <button className='addbtn2' onClick={handlenavigate2}>collection Product </button> */}
      <div className="containorder">
        <table className="orderr">
          <tr className="trr">
            <th className="thh">razorpay_order_id</th>
            <th className="thh1">razorpay_payment_id</th>
            <th className="thh2">email</th>
            <th className="thh3">Phoneno</th>
            <th className="thh"></th>
          </tr>
          {Array.isArray(BuyData) ? (
            BuyData?.map((ele, index) => {
              return (
                <tr key={index}>
                  <th>{ele.razorpay_order_id}</th>
                  <th className="pay">{ele.razorpay_payment_id}</th>
                  <th className="email">{ele.email}</th>
                  <th className="phone">{ele.Phoneno}</th>
                  <th>
                    <h3
                      className="ul"
                      onClick={() => handleLink(ele.razorpay_order_id)}
                    >
                      Show Details
                    </h3>
                  </th>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default AdminOrder;
