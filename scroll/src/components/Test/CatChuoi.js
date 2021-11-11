import React from 'react'

function CatChuoi() {

  let b = 'SpecialMessage: <id>asdiawjdiawjaw</id> bi <id>wqeqweqw</id> bi kich ra group';


const catChuoi= b.split(" ");
console.log("catChuoi", catChuoi);

const mang = catChuoi.map((item, index) => {
  let array = [];
  console.log("item", item);
  const vt1 = item.indexOf("<id>");
  const vt2 = item.indexOf("</id>");
  console.log("<id>", item.indexOf("<id>"));
  console.log("<id>", item.indexOf("</id>"));

  if(item.includes("<id>") && item.includes("</id>")){
    const chuoi = item.slice(vt1+4, vt2);
     array.push(chuoi);
     console.log("chuoi", chuoi);
  }
  return array; 
})

console.log("mang", mang);
  return (
    <div>
      
    </div>
  )
}

export default CatChuoi
