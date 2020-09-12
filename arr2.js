let arrob=[{   "name": "abraham",
             "age"  : 25,
			 "country": "america",
            "hobbies" :[ "travel","game","fight"]},
		 {
			 "name": "darshan",
             "age"  : 28,
			 "country": "Ind",
            "hobbies" :["learning","acting","travel"]},		
		{	" name": "pinto",
            " age " : 46,
			" country": "england",
            "hobbies" :[ "collecting coins","running","fishing"]} ,
		{
			 "name": "zahid",
             "age"  : 29,
			 " country": "bangladesh",
            "hobbies" :["helping","swimming","party"]}
	];
    disp(30);
    disp1("Ind");
    
    function disp(age)
    {
       for(let i=0; i<arrob.length; i++)
       {
           if(arrob[i].age<age)
           {
               console.log(arrob[i]);
           }
       }
    
    }
    function disp1(str)
    {
       for(let i=0; i<arrob.length; i++)
       {
           if(str==arrob[i].country)
           {
               
               console.log(arrob[i]);
           }
       }
    
    }
    