import React from 'react';

const  FillTableArray =()=> {
        /* ---------------------------------- BAI 1 --------------------------------- */
const discountMonthlyReport = [
    {
        discountAmount: 10,
        discountTypeMstCode: "M002",
        id: "b05b76b2-3dd4-4b6a-bb2c-a92df4ad110d",
        orgCode: "1402",
        orgName: "SES事業部",
    },
    {
        discountAmount: null,
        discountTypeMstCode: null,
        id: "b05b76b2-3dd4-4b6a-bb2c-a92df4ad110d",
        orgCode: "1403",
        orgName: "SES事業部3",
    },
    {   
        discountAmount: 495,
        discountTypeMstCode: "M002",
        id: "38a5fb15-63ae-41c9-b0bb-849874e97292",
        orgCode: "1500",
        orgName: "開発部",
    },
    {
        discountAmount: 1455,
        discountTypeMstCode: "M003",
        id: "15c76bbe-c49b-4ae7-9b93-8f5a01d63c97",
        orgCode: "1500",
        orgName: "開発部",
    },
    {
        discountAmount: 2415,
        discountTypeMstCode: "M004",
        id: "c51899b7-e0f1-4414-aaee-149c80c4ed23",
        orgCode: "1500",
        orgName: "開発部",
    },
    {
        discountAmount: 5555,
        discountTypeMstCode: "M010",
        id: "c51899b7-e0f1-4414-aaee-149c80c4ed23",
        orgCode: "1500",
        orgName: "開発部",
    },
    {
        discountAmount: null,
        discountTypeMstCode: null,
        id: "c5eefce0-1f82-438c-9114-584e1d23fa86",
        orgCode: "1515",
        orgName: "保守・運用ユニット",
    },
    {
        discountAmount: 99,
        discountTypeMstCode: "M009",
        id: "29b2e29d-262c-4473-b130-63cf84541408",
        orgCode: "1801",
        orgName: "ラボ事業部",
    },
    {
        discountAmount: 199,
        discountTypeMstCode: "M010",
        id: "29b2e29d-262c-4473-b130-63cf84541408",
        orgCode: "1801",
        orgName: "ラボ事業部",
    },
    {
        discountAmount: null,
        discountTypeMstCode: null,
        id: "c5eefce0-1f82-438c-9114-584e1d23fa86",
        orgCode: "1802",
        orgName: "保守・運用ユニット",
    },
    {
        discountAmount: 1803,
        discountTypeMstCode: "M001",
        id: "c5eefce0-1f82-438c-9114-584e1d23fa86",
        orgCode: "1803",
        orgName: "保守・運用ユニット",
    },
    {
        discountAmount: 1804,
        discountTypeMstCode: "M003",
        id: "c5eefce0-1f82-438c-9114-584e1d23fa86",
        orgCode: "1804",
        orgName: "保守・運用ユニット",
    },
]
const mstCodeArr =[
    "M001,値引１,1",
    "M002,値引２,2",
    "M003,値引３,3",
    "M004,値引４,4",
    "M005,値引５,5",
    "M006,値引６,6",
    "M007,値引７,7",
    "M008,値引８,8",
    "M009,値引９,9",
    "M010,値引１０,10",
]
/*  LẤY RA MANG CÓ DẠNG List LOAI BỎ DÒNG TRUNG NHAU, GỘP CÁC discountAmount VÀ HIỂN THI THEO MẪU
            [
                {
                orgCode: "1402",
                orgName: "SES事業部",
                discountAmountArr : [0,10,0,0,0,0,0,0,0,0]
            },
                {
                orgCode: "1403",
                orgName: "SES事業部",
                discountAmountArr : [0,0,0,0,0,0,0,0,0,0]
            },
                {
                orgCode: "1500",
                orgName: "開発部",
                discountAmountArr : [0,495,1455,2415,0,0,0,0,0,5555]
            },
            {
                orgCode: "1515",
                orgName: "保守・運用ユニット",
                discountAmountArr : [0,0,0,0,0,0,0,0,0,0]
            }
            {
                orgCode: "M011",
                orgName: "ラボ事業部",
                discountAmountArr :[0,0,0,0,0,0,0,0,0,99]
            }
        ],                                 */
/* -------------------------------------------------------------------------- */
 const listHeader = mstCodeArr.map(item => item.split(','))[0];
 console.log("listHeader", listHeader);
 
  return <div>dd</div>;
}

export default FillTableArray;
