import React from 'react';



function GroupBy() {

  let team = [
    { name: 'cong phuong', country: 'Viet Nam' },
    { name: 'Ronaldo', country: 'Portugal' },
    { name: 'Quang Hai', country: 'Viet Nam' },
    { name: 'Messi', country: 'Argentina' },
    { name: 'Nani', country: 'Portugal' },
  ]

// // Cach 1
  function group1(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      console.log("acc", acc);
      var key = obj[property];
      console.log("key", key);
      console.log("acc[key]1", acc[key]);
      if (!acc[key]) {
        acc[key] = [];
        console.log("acc[key]-if", acc[key]);
      }
      console.log("object", obj);
      console.log("acc[key]", acc[key]);
      acc[key].push(obj);
      console.log("acc[key]2", acc[key]);

      return acc;
    }, {});
  }

  // Cách 2

  const group = (items, key) => items.reduce((result, item) =>  {
    // console.log("result",result);
    // console.log("item", item);
    // console.log("item[key]", item[key]);
    // console.log("----------------");
    // console.log("result[item[key]]", result[item[key]]);
    // console.log("(result[item[key]] || [])",(result[item[key]] || []));
    // console.log("[...(result[item[key]] || []), item]", [...(result[item[key]] || []), item]);
    // console.log("kq", {...result, [item[key]]: [...(result[item[key]] || []), item]}  );
    return ({...result, [item[key]]: [...(result[item[key]] || []), item]}   )
  }, {});

  console.log("group1", group(team,'country'));
  // console.log("group", group(team,'country').Portugal);



// Object
let date = {
  day : 10,
  month : 6,
  year : 2016
}

// Chuyển ba giá trị vào ba biến y
let { year : y} = date;

// In kết quả
console.log("gia tri của year: " + y);
// console.log("year: " + year); // year not defined

 

  // # reduce() thay thế cho map()
  const arr = [{name:'Amy'},{name:'Bob'}];
    const map1 = arr.map(item=> item.name); // map
    const Replace_map =  arr.reduce((accumulator, currentValue)=> [...accumulator, currentValue.name], []); // reduce

   console.log("map1", map1); // ["Amy", "Bob"]
   console.log("Replace_map", Replace_map); // /["Amy", "Bob"]


  // # reduce() thay thế cho filter()
  const arr1 = [{name:'Amy', age:18}, {name:'Bob',age:20}];
   const filter = arr1.filter(item=> item.age > 18); // filter
   const Replace_filter = arr1.reduce((accumulator, currentValue) => currentValue.age > 18 ? [...accumulator, currentValue] : accumulator, []);
   
  //  console.log("filter", filter); //{name: "Bob", age: 20}
  //  console.log("Replace_filter", Replace_filter); //{name: "Bob", age: 20}

  // # reduce() thay thế cho map() + filter()
  const array = [{name:'Amy',age:18}, {name:'Bob', age:20}];
  const filter_map = array.filter(item => item.age > 18).map(item => item.name); // 
  const Replace_filter_map = array.reduce((accumulator, currentValue) => currentValue.age > 18 ? [...accumulator, currentValue.name] : accumulator, [])

  // console.log("filter_map", filter_map); //["Bob"]
  // console.log("Replace_filter_map", Replace_filter_map); //["Bob"]


  // # reduce() thay thế cho some() or every()
  const arr3 = [{name:'Amy',age:18},{name:'Bob',age:20}];
  const some = arr3.reduce((c,n) => c || n.age > 18 , false); // some
  const every = arr3.reduce((c,n) => c && n.age > 18 , true); // every

  // console.log("some", some);
  // console.log("every", every);

  return (
    <div className="table-responsive">
      <table className="table table-bordered  table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ten</th>
              <th scope="col">Dia chi</th>
            </tr>
        </thead>
        <tbody>
          {group(team,'country').Portugal.map((item, index) => {
              return (
                <tr key={index}> 
                  <th scope="row">{index}</th>
                  <td >{item.name}</td>
                  <td >{item.country}</td>
                </tr>
              )
          })}
      </tbody>
    </table>
    </div>
  )
}

export default GroupBy

  
