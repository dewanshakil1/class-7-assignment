const student=[
  {
      roll:1,
      name:"shakil",
      age:20,
      fname:"shamajol",
      bn:40,
      en:45,
      mat:50,
      s:55,
      ss:70,
      rel:90,

  },
  {
    roll:2,
    name:"shakila",
    age:10,
    fname:"shamajol",
    bn:50,
    en:55,
    mat:60,
    s:55,
    ss:33,
    rel:80,

},
{
    roll:3,
    name:"karim",
    age:25,
    fname:"rafik",
    bn:75,
    en:55,
    mat:55,
    s:67,
    ss:760,
    rel:75,

},
{
    roll:4,
    name:"sahin",
    age:30,
    fname:"karim",
    bn:40,
    en:45,
    mat:50,
    s:75,
    ss:70,
    rel:70,

},
{
    roll:5,
    name:"shakil",
    age:20,
    fname:"shamajol",
    bn:40,
    en:45,
    mat:50,
    s:55,
    ss:70,
    rel:90,

}
]; 
function StudentResult() {
    //           gpa function
    this.gpa = function (marks) {
      
      if (marks >= 0 && marks <= 32) {
       return gpa = 0
      } else if (marks >= 33 && marks < 40) {
         return gpa = 1
      } else if (marks >= 40 && marks < 50) {
         return gpa = 2
      } else if (marks >= 50 && marks < 60) {
        return gpa = 3
      } else if (marks >= 60 && marks < 70) {
          return gpa = 3.5
      } else if (marks >= 70 && marks < 80) {
        return gpa = 4
      } else if (marks >= 80 && marks < 100) {
         return gpa = 5
      }
      
    };
          
    this.grade =function (marks){
    
      if (marks >= 0 && marks <= 32) {
       grade = "F"
      } else if (marks >= 33 && marks < 40) {
        grade = "B"
      } else if (marks >= 40 && marks < 50) {
        return (grade = "C");
      } else if (marks >= 50 && marks < 60) {
       grade = "D"
      } else if (marks >= 60 && marks < 70) {
        grade = "A-"
      } else if (marks >= 70 && marks < 80) {
       grade = "A"
      } else if (marks >= 80 && marks < 100) {
        grade = "A+"
      }
      return grade;
     
    };
    /***
     * total 
     */
  
    
    //   
  
    this.totalGrade =function (cgpa){
    
      if ( cgpa<1  ) {
       return "F"
      } else if (cgpa >=1 && cgpa <2) {
      return "B"
      } else if (cgpa >=2 && cgpa<3) {
       return"C";
      } else if (cgpa >=3 && cgpa < 3.5) {
        return "D"
      } else if (cgpa >= 3.5 &&  cgpa < 4) {
       return "A-"
      } else if (cgpa>= 4 &&cgpa<5 ) {
       return  "A"
      } else if (cgpa >=5 ) {
         return "A+"
      }
      
     
    };
    
    /*****
     * CGPA function
     */
       this.cgpaa= function( ban,en,mat,ss,s,rel){
        
        
    
      if(result. ban==0 || result. en==0 ||result. mat==0 ||result. ss==0 || result. s==0 || result. rel==0){
        return `you are faided`
      }
      else{
        return `your cgpa ${gpa} ${result.totalGrade(gpa)} `;
  
      }
      }
    
    
  }
  let result = new StudentResult();
student.result. map((data)=>{
    console.log(data.ban)

})


 
 