import React from 'react'
import mock from './mockup.json'

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

        const fillTable2 = mock
        console.log(mock,'check mock')

    const header = fillTable.map((item) => item.code);
    console.log("header", header);
//     const = ['C', 'A', 'D', 'B', 'H', 'F', 'E', 'G', 'B'];
//     const data = [{
//         name:'1', '', '', 'data', '','G',
//     },
//     {
//         name:'2', '', '', 'data', '','G', 'h',
//     }
// ,]
    let body = [];;
    
   const a = fillTable.map((item, index) => {
        
         body.push(item);
        if(item.name === '' ){
            console.log("hjeh");
            
        }
        return (
            <div>Loideptrai</div>
        )
    })
    return (
        <div>
            
        </div>
    )
}

export default FillBt1
