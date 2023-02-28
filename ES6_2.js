 
class myClass{

    constructor(name)
    {
        this.names =name;//class variables.use this allover the class as variables.
        console.log('Hii');
          this.name = name;
          console.log(this.name);
          
     }

    myfun() {
          console.log('hello');  
      }
      wishes(wish) {
          console.log(wish,this.names);  
      }
  }
  
   let obj = new myClass('Faysal');
   obj.myfun();
   obj.wishes('Good Night');

   //ES6 Static keywords
 class newClass{
    static calling(name){
       console.log('hello',name); 
    }
 }
newClass.calling('Faysal');


//ES6 Inheritance classes.
 class parentClass{

   propert(){
     console.log(' parent propert');
   }

   hello(){
    console.log('Welcome to the parent class!');
   }

 }



 class childClass extends parentClass{
  //method override
  propert(){
    console.log(' parent propert give child');
  }

  //to call parentClass method

   demo(){
    //ES6 Super keywords...
    super.hello();
   }

 child(){
    console.log(' child propert');
 }

 }

 var obj1 = new childClass();

obj1.propert();
obj1.child()
obj1.demo();


//ES6 Module.

//Module.Exports and Import







