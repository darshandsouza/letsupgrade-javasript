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
display();
function display()
{
   for(let i=0; i<arrob.length; i++)
   {
	   console.log(arrob[i]);
   }
}