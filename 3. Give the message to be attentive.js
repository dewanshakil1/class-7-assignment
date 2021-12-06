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

  let ages=function(age){
    if(age >= 18 && age<=40 ){
        return "welcome apnake ai khan a ashar jonno";        
    }
    else if(age > 40){
        return "welcome boss, apnake ai khan a ashar jonno ,,apnar jonnoi opetha kor te si";        
    }
    else if(age < 18 ){
        return "tumi bacha ,,tumar voyos hoy nai"
    }
 }
 

 lfwf.map((data)=>{  
     console.log(`
     name:${data.name}
     age:${data.age}
     loction:${data.location}
     member:${data.mem}
     mes:${data.name} ${ages(data.age)}
     `)       
    
})




