import React, { useState } from 'react'


const dailyData = {
    "cash_data": {
        "cash_register": {
            "total_discount_amount": undefined,
            "tax": 0,
        }

    }

} 
const dailyData2 = {
    "cash_data": {
        "cash_register": {
            "total_discount_amount": null,
            "tax": 0,
        }

    }
} 
const dailyData3= {
    "cash_data": {
        "cash_register": {
            "total_discount_amount": 20,
            "tax": 0,
        }

    }
} 
const dailyData4= {
    "cash_data": {
        "cash_register22222222": {
            "total_discount_amount": 10,
            "tax": 0,
        }

    }
} 

let customer = {
    name: "Carl",
    details: {
      age: 82,
      location: "Paradise Falls" // detailed address is unknown
    }
  };


const Test = () =>{
    const [testUndefined, setTestUndefined] = useState(3);
    let test = dailyData?.cash_data?.cash_register?.total_discount_amount || 0;
    
    console.log("test", test);
    
    React.useEffect(()=>{
        console.log("loi", test)
        setTestUndefined(test);
    },[test])
    return (
        <div>
            { console.log("render")}
            loi
        </div>
    )
}

export default Test
