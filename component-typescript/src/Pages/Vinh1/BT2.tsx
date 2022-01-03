import React from 'react';
import listArray from './mockup.json';

interface Iheader {
    sizeName: string
    orderQty: string
    offeredQty: string,
    inspectionQty: string,
}
interface IBodyLeft {
    ocNumber: string
    styleName: string
    colorName: string,
}

const BT2 = () => {

    const header = listArray.map((item: any) =>  {
        let obj: Iheader= {
            sizeName: item.sizeName,
            orderQty: item.orderQty,
            offeredQty: item.offeredQty,
            inspectionQty: item.inspectionQty,
        }
        return obj;
    });
    

    const body = listArray.map((item: any) =>  {
        let obj: IBodyLeft= {
            ocNumber: item.ocNumber,
            styleName: item.styleName,
            colorName: item.colorName
        }
        return obj;
    });

    
    const ocNumber = body.map((x) => x.ocNumber);
    const bodyLeft = body.filter((item, i) => ocNumber.indexOf(item.ocNumber) == i);


    let hederTemp = ['Order Qty', 'Offered Qty', 'Inspected Qty'];
    let header2 : Array<string> = [...hederTemp];
    let i = 1;
    while (i < header.length) {
        header2 = [...header2, ...hederTemp]
        i++;
    }


    return (
        <div className='BT2 py-2' style={{overflow: 'auto', width:'1300px',maxWidth:'1300px'}}>
            <table>
                <thead>
                    <tr>
                        <td className='stickyStyle' rowSpan={2}>OC</td>
                        <td style={{left: '167px'}} className='stickyStyle' rowSpan={2}>Style</td>
                        <td style={{left: '270px'}} className='stickyStyle' rowSpan={2}>Color</td>

                        {header.map((item, index) => (
                            <th colSpan={3}>{item.sizeName}</th>
                        ))}
                    </tr>
                    {/* <tr> {header2.map((x)=> <td>{x}</td>)}</tr> */}
                    <tr>
                    {header.map((x) => (
                        <React.Fragment>
                            <td>Order Qty</td>
                            <td>Offered Qty</td>
                            <td>Inspected Qty</td>
                        </React.Fragment>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {bodyLeft.map((rowItem) => (
                    <React.Fragment>
                        <tr>
                            <td className='stickyStyle'>{rowItem.ocNumber}</td>
                            <td style={{left: '167px'}} className='stickyStyle'>{rowItem.colorName}</td>
                            <td style={{left: '270px'}} className='stickyStyle'>{rowItem.styleName}</td>
                            {
                            listArray.map((item, i)=> {
                                const ocNumber = item.ocNumber === rowItem.ocNumber;
                                return (
                                    <React.Fragment key={i}>
                                        <td onClick={() => console.log("item", item )}>{ocNumber && item.orderQty }</td>
                                        <td onClick={() => console.log("item2", item )}>{ocNumber && item.offeredQty }</td>
                                        <td onClick={() => console.log("item3", item )}>{ocNumber && item.inspectionQty }</td>
                                    </React.Fragment>
                                )
                            } )
                            }
                        </tr>
                    </React.Fragment>
                    ))
                    }     
                </tbody>
            </table>
        </div>
    )
}

export default BT2
