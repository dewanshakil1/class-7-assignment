const phone=[
    {
        name:"shail",
        phone:"01851246...",
        age:20,
       location:"mirpur"
    },
    {
        name:"dewan",
        phone:"01751246...",
        age:30,
       location:"uttora"
    },
    {
        name:"hasina",
        phone:"0185124676...",
        age:18,
       location:"sherpur"
    },
    {
        name:"hasan",
        phone:"016771246...",
        age:25,
       location:"mirpur"
    },
    {
        name:"rokib",
        phone:"01851888...",
        age:33,
       location:"rongpur"
    }
    
]
phone.map((data)=>{
    console.log(`
    name        :${data.name}
    Phone Number:${data.phone}
    age         :${data.age}
    location    :${data.location}
    `)
})