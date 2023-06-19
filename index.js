// // const num = 10;
// // const promise = new Promise((resolve, reject)=>{
// //   if(num === 10){
// //     return resolve(true);
// //   }else{
// //     return reject(false);
// //   }
// // });

// // promise.then(r=>{
// //   console.log(r)
// // }).catch(e=>{
// //   console.log(e)
// // })

// // const num = 10;
// // const promise = new Observable((resolve, reject)=>{
// //   if(num === 10){
// //     return resolve(true);
// //   }else{
// //     return reject(false);
// //   }
// // });

// // promise.then(r=>{
// //   console.log(r)
// // }).catch(e=>{
// //   console.log(e)
// // })

// // from:
// const arr = [
//   {
//       sid: 123,
//       name: 'aaa'
//   },
//   {
//       sid: 456,
//       name: 'bbb'
//   },
//   {
//       sid: 789,
//       name: 'ccc'
//   }
// ];
// // to:
// const result = arr.reduce((obj, cur) => ({...obj, [cur.sid]: cur}), {})
// console.log(result)

// let a = [
//   "MR",
//   "PRADEEP",
//   "SUTHAR"
// ];

// let obj = {
//   title: 'NA',
//   title2: 'NA',
//   fname: 'NA',
//   mname: 'NA',
//   lname: 'NA',
// }

// console.table(obj)

// if(a.length == 5){
//   obj['title'] = a[0]
//   obj['title2'] = a[1]
//   obj['fname'] = a[2]
//   obj['mname'] = a[3]
//   obj['lname'] = a[4]
// }else if(a.length == 4){
//   obj['title'] = a[0]
//   obj['fname'] = a[1]
//   obj['mname'] = a[2]
//   obj['lname'] = a[3]
// }else{
//   obj['title'] = a[0]
//   obj['fname'] = a[1]
//   obj['lname'] = a[2]
// }

// console.log(obj)

// const num = 1634;
// checkArms(num);

// function checkArms(num) {
//   let len = num.toString().length;
//   let sum = 0;
//   for (let i of num.toString()) {
//     sum += Number(i) ** len;
//   }
//   if (sum === num) {
//     console.log("Yes it's Armstrong");
//   } else {
//     console.log("No it's Armstrong");
//   }
// }

// const str = 'Hello Pradeep';
// let tmpStr = '';
// for (let i = str.length - 1; i >= 0; i--) tmpStr += str[i];
// console.log(tmpStr);

// const array = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7];
// const uniQue = [...new Set(array)];
// console.log('Unique array:', uniQue);

// let tmpArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (!tmpArray.includes(array[i])) tmpArray.push(array[i]);
// }
// console.log('Unique array:', tmpArray);

//

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1.map((x) => x * 10);
// console.log('arr2:', arr2);

// function recur(arr, func) {
//   let tmpArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     tmpArr.push(func(arr[i]));
//   }
//   return tmpArr;
// }

// let newArr = recur(arr1, (itm) => {
//   return itm * 10;
// });
// console.log('New', newArr);

// let arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((a, b) => a + b, 0);

// let arr2 = [
//   {
//     amt: 20,
//   },
//   {
//     amt: 20,
//   },
//   {
//     amt: 20,
//   },
//   {
//     amt: 40,
//   },
// ];

// let sum = 0;
// const total = arr2.reduce((accumulator, currentValue, index) => {
//   sum += currentValue.amt;
//   return {
//     sum,
//     array: arr2,
//   };
// }, 0);

// console.log('Total:', total);

// const testObj = {
//   serviceType: '000-1',
//   odpPinCode: '313001',
//   billingFaxNumber: 'gh678676',
//   typeOfProcess: '',
//   purposeId: '100-422',
//   odpStreet: 'HARIDASJIKIMAGRI',
//   supplyRequiredDays: '0',
//   connectionType: '1000-2',
//   odpEmail: 'SUTHARPRADEEP081@GMAIL.COM',
//   supplyRequiredDateFrom: '28-Jun-2023',
//   odpMobileNumber: '6756765456',
//   permanentResidenceNumber: '8440077147',
//   permanentArea: 'JGJHGHJGJH',
//   plotSize: '6',
//   divisionId: '100-13',
//   supplyVoltage: '100-11',
//   areaSize: '56',
//   contractedLoad: '45',
//   subdivisionId: '100-754',
//   loadMetric: '100-1',
//   permanentEmail: 'SUTHARPRADEEP081@GMAIL.COM',
//   odpArea: 'JGJHGHJGJH',
//   applicantName: 'MR.PRADEEP.KUMAR.SUTHAR',
//   odpDistrictId: '100-26',
//   panNumber: '677JH686867',
//   subCategoryId: '100-33',
//   permanentStreet: 'HARIDASJIKIMAGRI',
//   permanentPinCode: '313001',
//   permanentMobileNumber: '6756765456',
//   dobIncopDate: '29-Jun-2023',
//   billingDistrictId: '100-27',
//   status: 'SUCCESS',
//   odpPhoneNumber: '8440077147',
//   numberOfShifts: '0',
//   protectiveLoad: '',
//   fatherHusbandName: 'S/O.MR.PRAKASH.KUMAR.SUTHAR',
//   billingDoorNumber: '867',
//   billingOfficePhone: '687766987879',
//   permanentFaxNumber: '6876768767',
//   billingResidencePhone: '686687676763',
//   billingMobile: '686767676767',
//   billingArea: 'JHGJHGJHGHG',
//   permanentDoorNumber: '56',
//   website: 'GFG.VG',
//   odpFaxNumber: '6876768767',
//   odpDoorNumber: '56',
//   permanentDistrictId: '100-26',
//   statusMessage: 'SUCCESS',
//   isSubmitted: 'false',
//   aadharNumber: '87687687678',
//   billingStreet: 'JHGJHGJHGHGH',
//   faxNumber: '6876768767',
//   categoryId: '100-1',
//   category: '',
//   subCategory: '',
// };

// let Data = [];

// for (let i of Object.keys(testObj)) {
//   let ob = {
//     key: i,
//     value: testObj[i],
//   };
//   Data.push(ob);
// }
// console.log(Data);

// let array = ['padeep','isha']
// array[2] = "Dad";
// array.reverse();
// array.sort();
// const newArray = array.toSorted();
// console.log(array, newArray)

let faxNos = [
  'permanentFaxNumber',
  'contactPersonFaxNumber',
  'billingFaxNumber',
  'odpFaxNumber',
];

let mobileNos = [
  'odpMobileNumber',
  'permanentMobileNumber',
  'billingMobile',
  'odpPhoneNumber',
  'permanentResidenceNumber',
  'contactPersonPhone',
  'billingResidencePhone',
  'billingOfficePhone',
];

let pinCodes = ['odpPinCode', 'permanentPinCode'];

let array = [...faxNos, ...mobileNos, ...pinCodes];

// console.log(faxNos);
// console.log(mobileNos);
// console.log(pinCodes);
// console.log(array);

let minVal = 0,
  maxVal = 11;

for (let i = 0; i < array.length; i++) {
  if (faxNos.includes(array[i])) {
    minVal = 7;
    maxVal = 11;
  } else if (mobileNos.includes(array[i])) {
    minVal = 10;
    maxVal = 10;
  } else if (pinCodes.includes(array[i])) {
    minVal = 4;
    maxVal = 6;
  } else {
    minVal = 0;
    maxVal = 12;
  }
}
// console.log(minVal, maxVal);

let a = [1, 2, 3];
let p = a.pop();
// console.log(p)

let str = 'javascript';
str = str.split('').reverse().join('');
// console.log(str);

let aa = a.reduce((acm, i) => {
  return { acm, i };
}, []);
// console.log(aa)

function binarySearch(array, x, low, high) {
  if (high >= low) {
    let mid = low + (high - low) / 2;
    // If found at mid, then return it
    if (array[mid] == x) return mid;

    // Search the left half
    if (array[mid] > x) return binarySearch(array, x, low, mid - 1);

    // Search the right half
    return binarySearch(array, x, mid + 1, high);
  }
}

const arr = [100, 200, 300, 400, 500];

const find = binarySearch(arr, 300, 0, arr.length - 1);

if (find == -1) console.log('Not found');
else console.log('Element is found at index %d', find);
