const devs=[
    {
      name:"shakil",
      age:20,
      skill:"meran stack",
      income:20000
    },
    {
     name:"shakil",
     age:20,
     skill:"meran stack",
     income:20000
   },
   {
      name:"shakil",
      age:20,
      skill:"meran stack",
      income:20000
    },
   
    {
        name:"sohel",
        age:25,
        skill:"Laravel",
        income:25000
    },
   
    {
        name:"dewan",
       age:30,
       skill:"Django",
       income:10000
    },
   
    {
      name:"hasan",
      age:40,
      skill:"gango",
      income:22000
    },
   {
      name:"arif",
       age:50,
      skill:"wordpress",
       income:24000
    },
    {
      name:"arshad",
      age:55,
      skill:"java",
      income:4000
    },
    {
      name:"forhad",
      age:45,
      skill:"wordpress",
       income:4000
    }  
   
          

];

let total =0;
devs.map((data)=>{
  
   console.log(`
   name:${data.name}
   age:${data.age}
   skill:${data.skill}
   income:${data.income}
   
   `)
   total=total + data.income;
});
console.log(`our total income: ${total}`);