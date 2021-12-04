const lfwf=[
    {
    name:"shakil",
    age:20,
    location:"mirpur",
    meb:"member"
    },
    {
    name:  "hasan",
    age: 10,
    location:"mirpur",
    mem:"member"
    },
    {
    name:"dewan",
    age:15,
    location:"mirpur",
    mem:"member"
    },
    {
    name:"rohim",
    age:25,
    location:"mirpur",
    mem:"member"
    },
    {
    name:"sofik",
    age:50,
    location:"mirpur",
    mem:"member"
    },
    {
    name:"korim",
    age:27,
    location:"mirpur",
    mem:"member"
    },
    {
    name:"rakib",
    age:55,
    location:"mirpur",
    mem:"member"
    }, 
    {
    name:"jakir",
    age:100,
    location:"mirpur",
    mem:"member"
    },
    {
    name:"momin",
    age:88,
    location:"mirpur",
    mem:"member",
    },
    {
    name:"liton",
    age:66,
    location:"mirpur",
    mem:"member"
   }

];
lfwf.map((data)=>{
   if(data.age > 18 ){
       console.log("welcome..")
   }
   else if(data.age > 40 ){
    console.log("welcome,,boss,,apnar jonnoi bose asi")
}
else if(data.age < 18 ){
    console.log("tumar boyos hoy nai ,,")
}



})
