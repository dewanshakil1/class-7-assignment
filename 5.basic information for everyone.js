const picnic=[
    {
        id :1,
        name:"shakil",
        age:20,      
        tk:500
    },
    {
        id :2,
        name:"rohim",
        age:20,      
        tk:400
   },
   {
        id :1,
        name:"shakila",
        age:10,      
        tk:300
    },
   
    {
        id :4,
        name:"rokiya",
        age:40,      
        tk:600
    },
   
    {
        id :5,
        name:"kamal",
        age:25,      
        tk:550
    },
   
    {
         id :6,
         name:"ropali",
         age:20,      
         tk:440
    },
   {
         id :7,
         name:"shakil",
         age:20,      
         tk:800
    },
    {
        id :8,
        name:"ripon",
        age:20,      
        tk:600
    },
    {
        id :9,
        name:"saiful",
        age:40,      
        tk:700
    }           

];
let total=0;
picnic.map((data)=>{
    console.log(`
    id:${data.id}
    name:${data.name}
    age:${data.age}
    money:${data.tk}    
    `)
    total=total + data.tk;
});
console.log(`total tk is:${total}`)
