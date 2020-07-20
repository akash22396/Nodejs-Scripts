/***********************Working Code*****************************/
var reverseOnlyLetters = function(str) {
  let data = str.split('');
let wordArr=[];
let specialChar =[];
data.forEach((dt,i)=>{
  if(dt.match(/[a-zA-Z]/g)){
    wordArr.push(dt)
  }else{
specialChar.push({id:i,val:dt})
  }
})
let revString = wordArr.reverse().join('')
specialChar.forEach(dt=>{
  revString=revString.substr(0,dt.id)+dt.val+revString.substr(dt.id)
})
return revString
};

/****************************************************************/


/***************************** Testing Code *********************************/
let str = "-1nig#t9@";

const reverseWord=(data)=> data.split('').reverse().join('')
console.log(reverseWord(str));

// Reverse string without unshifting special character
const reverseWordWithoutSpecialChar = (data) => {
  let strData = data.toLowerCase().split("");
  let numMt = "0123456789".split("");
  let strMt = "abcdefghijklmnopqrstuvwxyz".split("");
  // console.log(strData,numMt,strMt);
  let newArr = [];
  let specArr = [];
  strData.forEach((dt) => {
    // console.log(dt,strMt.indexOf(dt)> -1,numMt.indexOf(dt)> -1)
    if (strMt.indexOf(dt) > -1 || numMt.indexOf(dt) > -1) {
      newArr.push(dt);
    } else {
      specArr.push(dt);
    }
  });
  let reverseAr = newArr.reverse().join("");
  specArr.forEach((dt) => {
    let leftH = reverseAr.substr(0, data.indexOf(dt));
    let rightH = reverseAr.substr(data.indexOf(dt));
    reverseAr = leftH + dt + rightH;
  });
  //    console.log(reverseAr);
  return reverseAr;
};
console.log(reverseWordWithoutSpecialChar(str));
