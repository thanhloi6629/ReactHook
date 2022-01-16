import React, { useState } from 'react';
import listArray from './mockup.json';

interface Iheader {
    ocNumber: string,
    sizeCode: string,
    sizeName: string
    orderQty: string
    offeredQty: string,
    inspectionQty: string,
}
interface IBodyLeft {
    sizeCode: string,
    ocNumber: string
    styleName: string
    colorName: string,
}
export interface ITable {
    ocNumber:      string;
    sizeCode:      string;
    sizeName:      string;
    colorCode:     string;
    colorName:     string;
    styleName:     string;
    styleCode:     string;
    orderQty:      number;
    offeredQty:    number;
    inspectionQty: number;
    acceptedQty:   number;
}

const BT2 = () => {
    console.log("listArray", listArray);


    const header = listArray.map((item: any) =>  {
        let obj: Iheader= {
            ocNumber: item.ocNumber,
            sizeCode: item.sizeCode,
            sizeName: item.sizeName,
            orderQty: item.orderQty,
            offeredQty: item.offeredQty,
            inspectionQty: item.inspectionQty,
        }
        return obj;
    });
    

    const body = listArray.map((item: any) =>  {
        let obj: IBodyLeft= {
            sizeCode: item.sizeCode,
            ocNumber: item.ocNumber,
            styleName: item.styleName,
            colorName: item.colorName
        }
        return obj;
    });

    const ocNumber = body.map((x) => x.ocNumber);
    const bodyLeft = body.filter((item, i) => ocNumber.indexOf(item.ocNumber) == i);


    const headerRightSizeCode = header.map((x) => x.sizeCode);
    const headerRight = header.filter((item,i)=>headerRightSizeCode.indexOf(item.sizeCode) == i)

    
    const headerGroup = headerRight.map((item: any) => {
        let obj = {
            ocNumber: item.ocNumber,
            sizeCode: item.sizeCode,
            sizeCodeValue: [{
                orderQty: item.orderQty,
                offeredQty: item.offeredQty,
                inspectionQty: item.inspectionQty,
             }] 
        }
        return obj;
    })
    
    console.log("headerGroup", headerGroup);
    console.log("bodyLeft", bodyLeft);
    
    
    
    // let hederTemp = ['Order Qty', 'Offered Qty', 'Inspected Qty'];
    // let header2 : Array<string> = [...hederTemp];
    // let i = 1;
    // while (i < headerRight.length) {
    //     header2 = [...header2, ...hederTemp]
    //     i++;
    // }


    let mang2: any = [0];
    const getValue =(octNumber: any, sizeCode: any) => {
        let MangValue: any = [];

        const result = listArray.filter((item: any) => (item.ocNumber === octNumber && item.sizeCode === sizeCode));
      
        result.length > 0 ?  result.map((item: any, index: any) => {
        return (
            MangValue = [...MangValue, item.orderQty, item.offeredQty, item.inspectionQty ]
            )
        }): (MangValue = [...MangValue, 0,0,0 ]);
       return result;
    }

    
    return (
        <div className='BT2 py-2' style={{overflow: 'auto', width:'1300px',maxWidth:'1300px'}}>
            <table>
                <thead>
                    <tr>
                        <td className='stickyStyle' rowSpan={2}>OC</td>
                        <td style={{left: '167px'}} className='stickyStyle' rowSpan={2}>Style</td>
                        <td style={{left: '270px'}} className='stickyStyle' rowSpan={2}>Color</td>

                        {headerRight.map((item, index) => (
                            <th colSpan={3}>{item.sizeName}</th>
                        ))}
                    </tr>
                    {/* <tr> {header2.map((x)=> <td>{x}</td>)}</tr> */}
                    <tr>
                    {headerRight.map((x) => (
                        <React.Fragment>
                            <td>Order Qty</td>
                            <td>Offered Qty</td>
                            <td>Inspected Qty</td>
                        </React.Fragment>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {bodyLeft.map((rowItem: any, i: any) => (
                    <React.Fragment key={i}>
                        <tr>
                            <td className='stickyStyle'>{rowItem.ocNumber}</td>
                            <td style={{left: '167px'}} className='stickyStyle'>{rowItem.colorName}</td>
                            <td style={{left: '270px'}} className='stickyStyle'>{rowItem.styleName}</td>
                            {
                            headerGroup.map((colItem: any, index: any) => {
                                const result = getValue(rowItem.ocNumber, colItem.sizeCode)
                                 return (
                                    <React.Fragment>
                                        {
                                            result.length> 0 ? result.map((item: any, index: any) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <td >{item.orderQty}</td>
                                                        <td >{ item.offeredQty} </td>
                                                        <td >{item.inspectionQty }</td>
                                                    </React.Fragment>
                                                )
                                            }):  ( <React.Fragment>
                                                    <td></td>
                                                    <td> </td>
                                                    <td></td>
                                                </React.Fragment>
                                            )
                                        }
                                        
                                    </React.Fragment>
                                )
                            })
                            }
                        </tr>
                       
                    </React.Fragment>
                    ))
                    }     
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>

                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default BT2
