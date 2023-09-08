import React, { useState } from "react";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineTrackChanges } from "react-icons/md";
import { styles } from "../../styles/styles";
import {Link} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid"
import { Button } from '@mui/material';



const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name,setName] = useState(user && user.name);
  const [email,setEmail] = useState(user && user.email);
  const [phoneNumber,setPhoneNumber] = useState();
  const [zipCode,setZipCode] = useState();
  const [address2,setAddress2] = useState();
  const [address1,setAddress1] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="w-full">
      {/* profile page  */}
      {active === 1 && (
        <>
        <div className="flex justify-center w-full">
          <div className="relative">
            <img
              src={`${backend_url}/${user?.avatar}`}
              className="w-[150px] h-[150px] rounded-full border-[3px] border-[#3ad132]"
              alt=""
            />
            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
              <input
                type="file"
                id="image"
                className="hidden"
                // onChange={handleImage}
              />
              <label htmlFor="image">
                <AiOutlineCamera />
              </label>
            </div>
          </div>
         
        </div>
        <div className="w-full px-5">
        <br />
          <br />
            <form onSubmit={handleSubmit} aria-required={true}>
                <div className="w-full flex pb-3">
                <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="email"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                </div>
                
                </div>

                <div className="w-full flex pb-3">
                <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
                </div>
                </div>

                <div className="w-full flex pb-3">
                <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
                </div>


                </div>
                <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* order page  */}
      {
        active === 2 && (
          <div>
            <AllOrders />
          </div>
        )
      }

      {/* refund page  */}
      {
        active === 3 && (
          <div>
            <AllRefundOrders />
          </div>
        )
      }

      {/* Track order page  */}
      {
        active === 5 && (
          <div>
            <TrackOrders />
          </div>
        )
      }

      {/* Payment Method page  */}
      {
        active === 6 && (
          <div>
            <PaymentMethod />
          </div>
        )
      }

      {/* Address page  */}
      {
        active === 7 && (
          <div>
            <Address />
          </div>
        )
      }
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "wywbh37893bwbhdsh748w",
      orderItems: [
        {
          name: "Iphone 14 max pro",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ]

  const columns = [
    // orderId col 
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    // status col
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },

    // items quant
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    // 
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item)=> {
    row.push({
      id:item._id,
      itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
    })
  });

  return (
    <div className="pl-8 pt-1">
        <DataGrid 
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnclick
        autoHeight
        />
    </div>
  )
}

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "wywbh37893bwbhdsh748w",
      orderItems: [
        {
          name: "Iphone 14 max pro",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ]

  // feilds of col
  const columns = [
    // orderId col 
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    // status col
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },

    // items quant
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    // 
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item)=> {
    row.push({
      id:item._id,
      itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
    })
  });

 return (
  <div className="pl-8 pt-1">
    <DataGrid 
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnclick
        autoHeight
        />
  </div>
 )
}

const TrackOrders = () => {
  const orders = [
    {
      _id: "wywbh37893bwbhdsh748w",
      orderItems: [
        {
          name: "Iphone 14 max pro",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ]

  // feilds of col
  const columns = [
    // orderId col 
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    // status col
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },

    // items quant
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    // 
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders && orders.forEach((item)=> {
    row.push({
      id:item._id,
      itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
    })
  });

  return(
    <div className="pl-8 pt-1">
    <DataGrid 
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnclick
        autoHeight
        />
  </div>
  )
}

const PaymentMethod = () => {

  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">
            Add New
          </span>
        </div>
      </div>
      <br />

      <div className="bg-white h-[70px] rounded-[4px] flex items-center justify-between px-3 pr-10 w-full shadow">
        <div className="flex items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmxmXlnTwtB0D_9-BiYs2QdQuqTXgUpfxUB7eciZeQQ&s" alt="" 
          className="h-[60px]"
        />
        <h5 className="pl-5 font-[500]">Prachi Pachang</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>1234 *** ****</h6>
          <h5 className="pl-6">06/25</h5>
        </div>

        <div className="flex items-cennter min-w-[10%] justify-between pl-8 ">
          <AiOutlineDelete size={25} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

const Address = () => {
  return (
    <div className="w-full px-5">
    <div className="flex w-full items-center justify-between">
      <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
        Address
      </h1>
      <div className={`${styles.button} !rounded-md`}>
        <span className="text-[#fff]">
          Add New
        </span>
      </div>
    </div>
    <br />

    <div className="bg-white h-[70px] rounded-[4px] flex items-center justify-between px-3 pr-10 w-full shadow">
      <div className="flex items-center">
      <h5 className="pl-5 font-[500]">Default</h5>
      </div>
      <div className="pl-8 flex items-center">
        <h6>SR.19 Raviwar peth Pune </h6>
      </div>

      <div className="flex items-center"><h5 className="pl-6">+91 9088574539</h5></div>

      <div className="flex items-cennter min-w-[10%] justify-between pl-8 ">
        <AiOutlineDelete size={25} className="cursor-pointer"/>
      </div>
    </div>
  </div>
  )
}

export default ProfileContent;
