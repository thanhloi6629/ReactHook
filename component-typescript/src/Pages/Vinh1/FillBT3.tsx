import React, { useCallback } from 'react'

// đề bài
// cột order show dữ liệu
// cột offered cho nhập trên rows + tổng thì không được nhập
// cột inspection thì ko nhập dòng mà nhập tổng

function FillBT3() {
    const players = [
        { id: 11, name: 'Messi', age: 33 },
        { id: 12, name: 'Ronaldo', age: 34 },
        { id: 12, name: 'Ronaldo', age: 30 },
        { id: 13, name: 'Young', age: 35 },
        { id: 14, name: 'Mane', age: 21 },
        { id: 15, name: 'Salah', age: 24 },
  ]

  const converModify = (array: any, key: any) =>{
    const initiValue = {};
    return array.reduce((object: any, item: any) =>{
        return {
            ...object,
            [item[key]]: item,
        }
    }, initiValue)
  }
  console.log("converModify", converModify(players, 'name'));
  

    

    const fillTable = [
        {name: 'loi1',code: 'C',value: 3},
        {name: 'loi1',code: 'A',value: 3},
        {name: 'loi1',code: 'B',value: 8},

        {name: 'loi2',code: 'A',value: 3},
        {name: 'loi3',code: 'D',value: 3},
        {name: 'loi4',code: 'B',value: 2},
        {name: 'loi4',code: 'H',value: 5},
        {name: 'loi5',code: 'F',value: 5},
        {name: 'loi6',code: 'E',value: 6},
        {name: 'loi7',code: 'G',value: 5},
        {name: 'loi8',code: 'B',value: 5},
        ]

    console.log("fillTable", fillTable);
    
        
    const fillterheader = fillTable.map((item) => item.code).sort((a,b)=> a > b ? 1: a < b ? -1 : 0);
    const header = fillterheader.filter((item, index) => fillterheader.indexOf(item) === index)

    const fillterbody = fillTable.map((item)=> item.name).sort((a, b) => Number(a)-Number(b));
    const body= fillterbody.filter((item, index) => fillterbody.indexOf(item) === index)
 
    const result = (rowIndex: any, colIndex: any) => {
        const result = fillTable.find((i) => i.name === rowIndex  && i.code === colIndex);
        return result?.value
    }

    // const sumRow = (rowIndex: any, colIndex: any) => {
    //     fillTable.reduce((item: any ,index: any) => {
    //         let sum = 0;
    //        if(item.name === rowIndex && item.code === colIndex) {
    //          sum =  item + index.value
    //        }
    //        return sum;
    //     })

    // }

    // console.log("sumRow", sumRow);
    


        // // Cach 1
    function group1(objectArray: any, property: any) {
        return objectArray.reduce(function (acc: any, obj: any) {
            var key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    console.log("group1", group1(fillTable, 'name'));
  

    let numbers = [
        [5, 12, 17, 9, 3],
        [13, 4, 8, 14, 1],
        [9, 6, 3, 7, 21]
    ];
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
                        {header.map((itemCol, index) =>{
                            // console.log("itemCol", itemCol);

                            
                            return (
                            <td>
                                <div onClick={() => console.log(itemRow, itemCol, index)}>
                                {result(itemRow,itemCol)}                     
                                </div>  
                            </td>
                        )} )}
                    </tr>
                )}
               
            </tbody>
            </table>
        </div>
        
    )
}

export default FillBT3
