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
    ocNumber: string;
    sizeCode: string;
    sizeName: string;
    colorCode: string;
    colorName: string;
    styleName: string;
    styleCode: string;
    orderQty: number;
    offeredQty: number;
    inspectionQty: number;
    acceptedQty: number;
}

const BT2 = () => {
    console.log("listArray", listArray);


    const header = listArray.map((item: any) => {
        let obj: Iheader = {
            ocNumber: item.ocNumber,
            sizeCode: item.sizeCode,
            sizeName: item.sizeName,
            orderQty: item.orderQty,
            offeredQty: item.offeredQty,
            inspectionQty: item.inspectionQty,
        }
        return obj;
    });


    const body = listArray.map((item: any) => {
        let obj: IBodyLeft = {
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
    const headerRight = header.filter((item, i) => headerRightSizeCode.indexOf(item.sizeCode) == i)


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

    // let hederTemp = ['Order Qty', 'Offered Qty', 'Inspected Qty'];
    // let header2 : Array<string> = [...hederTemp];
    // let i = 1;
    // while (i < headerRight.length) {
    //     header2 = [...header2, ...hederTemp]
    //     i++;
    // }


    const getValue = (octNumber: any, sizeCode: any) => {
        const result = listArray.filter((item: any) => (item.ocNumber === octNumber && item.sizeCode === sizeCode));
        return result;
    }

    const gettotalColum = (octNumber: any) => {
        const getTong = listArray.filter((item) => item.ocNumber === octNumber);
        const kq = getTong.reduce((previousValue: any, currentValue: any) => previousValue + currentValue.orderQty +  currentValue.offeredQty+  currentValue.inspectionQty, 0);
        return kq;
    }

    const gettotalRow = (sizeCode: number) =>{
        const getTong = listArray.filter((item: any) => item.sizeCode === sizeCode);
        const orderQty = getTong.reduce((previousValue: any, currentValue: any ) => previousValue + currentValue.orderQty, 0 )
        const offeredQty = getTong.reduce((previousValue: any, currentValue: any ) => previousValue + currentValue.offeredQty, 0 )
        const inspectionQty = getTong.reduce((previousValue: any, currentValue: any ) => previousValue + currentValue.inspectionQty, 0)
        return {orderQty,offeredQty, inspectionQty};
    }

    return (
        <div className='BT2 py-2' style={{ overflow: 'auto', width: '1300px', maxWidth: '1300px' }}>
            <table>
                <thead>
                    <tr>
                        <td className='stickyStyle' rowSpan={2}>OC</td>
                        <td style={{ left: '167px' }} className='stickyStyle' rowSpan={2}>Style</td>
                        <td style={{ left: '270px' }} className='stickyStyle' rowSpan={2}>Color</td>

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
                <React.Fragment>
                {bodyLeft.map((rowItem: any, i: any) => {
                        const tongColumn = gettotalColum(rowItem.ocNumber);
                 
                        console.log("tongColumn", tongColumn);
                        return (
                            <React.Fragment key={i}>
                                <tr>
                                    <td className='stickyStyle'>{rowItem.ocNumber}</td>
                                    <td style={{ left: '167px' }} className='stickyStyle'>{rowItem.colorName}</td>
                                    <td style={{ left: '270px' }} className='stickyStyle'>{rowItem.styleName}</td>
                                    {
                                        headerGroup.map((colItem: any, index: any) => {
                                            const result = getValue(rowItem.ocNumber, colItem.sizeCode);
                                            return (
                                                <React.Fragment>
                                                    {
                                                        result.length > 0 ? result.map((item: any, index: any) => {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <td >{item.orderQty}</td>
                                                                    <td >{item.offeredQty} </td>
                                                                    <td >{item.inspectionQty}</td>
                                                                </React.Fragment>
                                                            )
                                                        }) : (<React.Fragment>
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
                                    <td>{tongColumn}</td>
                                </tr>
                            </React.Fragment>
                        )
                    })
                    }

                    {
                         <tr>
                             <td className='stickyStyle' colSpan={3}>Total</td>
                            {
                                headerGroup.map((colItem: any) => {
                                const {orderQty, offeredQty,inspectionQty } = gettotalRow(colItem.sizeCode );
                                return (
                                    <React.Fragment>
                                        <td>{orderQty}</td>
                                        <td>{offeredQty}</td>
                                        <td>{inspectionQty}</td>
                                    </React.Fragment>
                                )
                                })
                            }
                     </tr>
                    }
                </React.Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default BT2
