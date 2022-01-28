import React from 'react'

import listArray from './fillTable.json';
import fillHeader from './fillHeader.json';
//map data dong theo header
const fillHeader2 = [
    {
    　　targetCode: "000",
    　　targetName: "現金現金"
　  },
    {
    　　targetCode: "007",
    　　targetName: "thuytesteeeeeeeeeeeeeeeeeeeeeeeeeeee"
　  },
    {
        targetCode: "11",
        　　targetName: "kata"
    },
    {
        targetCode: "12",
        　　targetName: "payment01"
    },
    {
        targetCode: "13",
        　　targetName: "sida"
    },
   {
    　　targetCode: "00003",
    　　targetName: "paypaya"
　  },
    {
    　　targetCode: "14",
    　　targetName: "thuytest"
　  },
    {
    　　targetCode: "03",
    　　targetName: "LinePaya"
　  },
    {
    　　targetCode: "04",
    　　targetName: "payment07"
　  },
    {
    　　targetCode: "05",
    　　targetName: "現金code01"
　  },
    {
    　　targetCode: "14",
    　　targetName: "111"
　  },
    {
    　　targetCode: "99",
    　　targetName: "掛売"
　  },
    {
    　　targetCode: "15",
    　　targetName: "113"
　  },
]

const fillHeader3 = [
    [
        "000",
        "現金"
    ],
    [
        "0901",
        "スーパーホテル提携クーポン"
    ],
    [
        "154719",
        "現金１"
    ],
    [
        "154720",
        "クレジットカード"
    ],
    [
        "154721",
        "社内売掛"
    ],
    [
        "155422",
        "社外売掛"
    ],
    [
        "155423",
        "食べログ"
    ],
    [
        "155424",
        "OZポイント"
    ],
    [
        "155425",
        "一休ポイント"
    ],
    [
        "155426",
        "Uber"
    ],
    [
        "155427",
        "エデンレッド"
    ],
    [
        "155762",
        "QR PAY"
    ],
    [
        "168134",
        "menu"
    ],
    [
        "169196",
        "Family Ticket"
    ],
    [
        "170945",
        "コスキチ売掛"
    ],
    [
        "175129",
        "TGOミールチケット"
    ],
    [
        "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ],
    [
        "112",
        "預／現計"
    ],
    [
        "30001",
        "支払30001"
    ],
    [
        "M001",
        "PayPay"
    ],
    [
        "M003",
        "セブンペイ"
    ],
    [
        "NK",
        "NK"
    ],
    [
        "test1",
        "テスト１"
    ],
    [
        "113",
        "クレジット計"
    ],
    [
        "114",
        "掛計"
    ],
    [
        "115",
        "ｵﾌﾗｲﾝｸﾚｼﾞｯﾄ"
    ],
    [
        "116",
        "社内経費"
    ],
    [
        "117",
        "ポイント利用"
    ],
    [
        "012",
        "A支払"
    ],
    [
        "000001",
        "10%OFFクーポンカード"
    ],
    [
        "3333",
        "支払１"
    ],
    [
        "9999",
        "テスト9999"
    ]
]

function FillTable() {


    const getValue = (item: any, fillHeader: any) =>{
        // let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let array =  new Array(fillHeader.length).fill(0);
        item.mediaList.map((x: any, i: any) => {
            const index = fillHeader.indexOf(x.paymentMediaName)
            if (index !== -1) {
                array[index] = x.paymentMediaAmount;
            }
        })
        return array;
    }

    const getValue2 = (item: any, fillHeader2: any)=> {
       
        let targetCode = fillHeader2.map((item: any) => item.targetCode);
        let listTargetCode =  new Array(targetCode.length).fill(0);
        item.mediaList.map((x: any, i: any) => {
            const index = targetCode.indexOf(x.paymentMediaCode)
            if (index !== -1) {
                listTargetCode[index] = x.paymentMediaAmount;
            }
        })
        return listTargetCode;
        
    }

    
    const getValue3 = (item: any, fillHeader3: any)=> {
        const {mediaList} = item
        let targetCode = fillHeader3.map((item: any) => item[0]);
        let listTargetCode =  targetCode.map((item:any) => {
            const foundItem = mediaList.find((item1:any) => item1.paymentMediaCode === item)
            if(foundItem){
                return foundItem.paymentMediaAmount
            }else{
                return 0
            }
        })
        console.log("listTargetCode", listTargetCode);
        
        return listTargetCode;
    }


    console.log("listtarget Code", listArray);
    console.log("listtarget Code fillHeader3", fillHeader3);
    
    const getList = () => {
        listArray.map((item: any, index: any) => {
            const {mediaList} = item;
            let targetCode = fillHeader3.map((itemHeader:any) => itemHeader[0]);
            let listTargetCode = targetCode.map((item1: any) => {
                const foundItem = mediaList.find((item2: any) => item2.paymentMediaCode === item1);
                if(foundItem) {
                    return foundItem.paymentMediaAmount;
                }
                else {
                    return 0;
                }
                
            })
            console.log("listTargetCode111", listTargetCode);
            
            return listTargetCode;
        })
    }

    getList();

    return (
        <React.Fragment>
            <div className="periodSalesTable newDesignTable nobackground">
            <table>
                {/* <thead>
                    <tr>
                        {fillHeader2.map((item, index) => <th>{item.targetName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {listArray && listArray.length >0 && listArray.map((item: any, index: any) =>{
                            const list: any = getValue3(item, fillHeader2);
                            return (
                                <tr>
                                {
                                    list && list.map((item: any, index: any) => <td>{item}</td>)
                                }
                                </tr>
                            )
                        })
                    }        
                    
                </tbody> */}
                  <thead>
                    <tr>
                        {fillHeader3.map((item) => <th>{item[1]}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {listArray && listArray.length >0 && listArray.map((item: any, index: any) =>{
                            const list: any = getValue3(item, fillHeader3);
                            return (
                                <tr>
                                {
                                    list && list.map((item: any) => <td>{item}</td>)
                                }
                                </tr>
                            )
                        })
                    }        
                   
                    
                </tbody>
            </table>
            </div>
        </React.Fragment>
    )
}

export default FillTable
