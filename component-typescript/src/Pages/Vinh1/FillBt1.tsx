import React, { useCallback } from 'react'

// đề bài
// cột order show dữ liệu
// cột offered cho nhập trên rows + tổng thì không được nhập
// cột inspection thì ko nhập dòng mà nhập tổng

function FillBt1() {
    

    const fillTable = [
        {name: '1',code: 'C',value: 'data'},
        {name: '2',code: 'A',value: 'data'},
        {name: '3',code: 'D',value: 'data'},
        {name: '4',code: 'B',value: 'data'},
        {name: '4',code: 'H',value: 'data'},
        {name: '5',code: 'F',value: 'data'},
        {name: '6',code: 'E',value: 'data'},
        {name: '7',code: 'G',value: 'data'},
        {name: '8',code: 'B',value: 'data'},
        ]

    console.log("fillTable", fillTable);
    
        
    const fillterheader = fillTable.map((item) => item.code).sort((a,b)=> a > b ? 1: a < b ? -1 : 0);
    const header = fillterheader.filter((item, index) => fillterheader.indexOf(item) == index)

    const fillterbody = fillTable.map((item)=> item.name).sort((a, b) => Number(a)-Number(b));
    const body= fillterbody.filter((item, index) => fillterbody.indexOf(item) == index)
 
    const result = (rowIndex: any, colIndex: any) => {
        const result = fillTable.find((i) => i.name === rowIndex  && i.code === colIndex);
        return result?.value
    }

    return (
        <div className='BT1 py-2'>
            <table>
            <thead>
                <tr>
                    <th rowSpan={2}>Cot</th>
                    <th colSpan={header.length}></th>
                </tr>
                <tr>
                {header.map((item) => (
                    <th>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {body.map((itemRow) =>
                    <tr>
                        <td>{itemRow}</td>
                        {header.map((itemCol, index) => (
                            <td>
                                <div onClick={() => console.log(itemRow, itemCol, index)}>
                                {result(itemRow,itemCol)}                     
                                </div>  
                            </td>
                        ))}
                    </tr>
                )}
                
            </tbody>
            </table>
        </div>
        
    )
}

export default FillBt1
