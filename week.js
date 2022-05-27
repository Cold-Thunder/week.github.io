let date = new Date();

let arr = ['Sunday', 'Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday'];

let today = date.getDay();

for(let i = 0; i <= 6; i++){
   if(today == i){
       console.log(arr[i]);
   }
}
