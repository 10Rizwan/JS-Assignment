//------------------------------------------ JAVASCRIPT ASSIGNMENT (1 to 16)------------------------------------------*

// ---------------------------------------------- Chapter No : 1 (Alerts)--------------------------------------------*

// //Task No : 1
    // alert("Welcome")

// //Task No : 2
    // alert("Error! Please Enter Valid Password")

// //Task No : 3
    // alert("Welcome to js Land... \nHappy Coding")

// // //Task No : 4
    // alert("Welcome to js Land")
    // alert("Happy Coding!")

// //Task No : 5
    // a = prompt("Enter Your Name")
    // alert("Hello...I can run Through my web console")
    // document.write("<h1>WELCOME "+a.toUpperCase()+"</h1>")

// ---------------------------------------------- Chapter No : 2 (Variable & Strings)--------------------------------*

// //Task No : 1
    // var Username
    // var MyName="Hafiz Ahmed Raza"

    // var message ="Hello World"

    // alert(message)
    // var Age = 19
    // var cer = "Certified Mobile Application Developement"
    // alert(MyName)
    // alert(Age+" Year old")
    // alert(cer)
    // document.writeln("Name :"+MyName)
    // document.writeln("<br> Age :"+Age)
    // document.writeln("<br> Certified :"+cer)

// //Task No : 2
    // alert("PIZZA \nPIZZ \nPIZ \nPI \nP")

// //Task No : 3
    // var email = "ghorishahrukh27@gmail.com"
    // alert("My Email Address :"+email)

// // //Task No : 4
    // var data ="A Smater Way to Learn Javascript"
    // alert("I am Trying to learn this Book."+data)

// // //Task No : 5
    // document.write("<br> Yah! I can write HTML Content Through Javascript")

// // // Task No : 6
    // alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

// ---------------------------------------------- Chapter No : 3 (Variables For Numbers)-----------------------------*

// //Task No : 1
    // var age = 19
    // alert("I am "+age+" Years Old")

// //Task No : 2
    // var v = 5
    // alert("You Have Visited This Site "+v+" Times")

// //Task No : 3
    // var by = 2003
    // var ty = typeof(by)
    // document.write("My Birth year is :"+by)
    // document.writeln("<br> Data type of my declared variable is number <br>")

// //Task No : 4
    // var name = "John Doe"
    // var pt = "T-Shirt(s)"
    // var q = 5
    // document.writeln( name +" ordered " + q +" " + pt +" on XYZ Clothing Store")

// ---------------------------------------------- Chapter No : 4 (Variable Names : Legal & Illegal)------------------*

//Task No : 1
    // var a=10,b=5,c=20

//Task No : 2

//Legal Variable
    // abc1
    // _abc
    // hello$
    // g$

//Illegal Variable
    // abc-1
    // -abc
    // ?abc

//Task No : 3

    //  document.write("<h1>Rules For Naming JS Variables</h1>")
    //  document.write("Variable names can only contain alphabets, numbers,$ and _ .<br>")
    //  document.write("Variables must begin with a letter, $ or _ .<br>")
    //  document.write("Variable names are case sensitive.<br>")
    //  document.write("Variable names should not be JS Keywords.")

// ---------------------------------------------- Chapter No : 5 (Math Expressions)--------------------------------*

//Task No : 1
    //  var a = parseInt(prompt("ENTER FIRST VALUE"));
    //  var b = parseInt(prompt("ENTER SECOND VALUE"));
    //  var z = a+b;
    //  document.write("Sum of "+a+" and "+b+" is "+z);

//Task No : 2
    //  var a = parseInt(prompt("ENTER FIRST VALUE"));
    //  var b = parseInt(prompt("ENTER SECOND VALUE"));
    //  var _sub = a-b;
    //  var _mul = a*b;
    //  var _div = a/b;
    //  var _mod = a%b;
    //  document.write("<br> Subtraction of "+a+" and "+b+" is "+ _sub + "<br/>");
    //  document.write("Multiplication of "+a+" and "+b+" is "+ _mul + "<br/>");
    //  document.write("Division of "+a+" and "+b+" is "+ _div + "<br/>");
    //  document.write("Modulus of "+a+" and "+b+" is "+ _mod + "<br/>");

//Task No : 3
    // var a;
    // document.write("value after declaration is"+a+"<br/>");
    // a  = 5;
    // document.write("Initial value:"+ a +"<br/>");
    // a++;
    // document.write("value after increment is :"+ a +"<br/>");
    // a = a+7;
    // document.write("value after addition is  is :"+ a +"<br/>");
    // document.write("Reminder is  :"+ a +"<br/>");
    // a%3;

//Task No : 4
    // var ticketcost = 600;
    // var ticketqty =  5 ;
    // var totalcost = ticketcost*ticketqty;
    // document.write("Total Cost to buy " +"<b>"+ ticketqty +"</b>"+ " tickets to a movie is "+"<b>"+ totalcost +"</b>"+ " PKR")

//Task No : 5
    // var tableof = parseInt(prompt("TYPE A NUM TO PRINT A TABLE"));
    // document.write(tableof+ "x 1 ="+tableof*1+"</br>");
    // document.write(tableof+ "x 2 ="+tableof*2+"</br>");
    // document.write(tableof+ "x 3 ="+tableof*3+"</br>");
    // document.write(tableof+ "x 4 ="+tableof*4+"</br>");
    // document.write(tableof+ "x 5 ="+tableof*5+"</br>");
    // document.write(tableof+ "x 6 ="+tableof*6+"</br>");
    // document.write(tableof+ "x 7 ="+tableof*7+"</br>");
    // document.write(tableof+ "x 8 ="+tableof*8+"</br>");
    // document.write(tableof+ "x 9 ="+tableof*9+"</br>");
    // document.write(tableof+ "x 10 ="+tableof*10+"</br>");
   
//Task No : 6
    // var tempInCen = 39;
    // var tempInFar = 105;
    // var FarToCen = (tempInCen*9/5)+32
    // var CenToFar = (tempInFar-32)*5/9;
    // document.write(tempInCen+"<sup>o</sup>"+CenToFar.toFixed(1)+"<sup>o</sup>F")
    // document.write("<br/>");
    // document.write(tempInFar+"<sup>o</sup>"+FarToCen.toFixed(1)+"<sup>o</sup>C")

//Task No : 7
    // document.write("<h1> SHOPPING CART</h1>");
    // var item1pri = 650;
    // var item2pri = 100;
    // var item1qty = 3;
    // var item2qty = 7;
    // var shipchar  = 100;
    // var TotalBILL = ((item1pri*item1qty)+(item2pri*item2qty)+shipchar)
    // document.write("Price of Item 1 is : "+ item1pri)
    // document.write("<br/>");
    // document.write("Quantity of Item 1 is : "+ item1qty)
    // document.write("<br/>");
    // document.write("Price of Item 2 is : "+ item2pri)
    // document.write("<br/>");
    // document.write("Quantity of Item 2 is : "+ item2qty)
    // document.write("<br/>");
    // document.write("Shipping Charges :"+shipchar)
    // document.write("<br/>");
    // document.write("Total Cost Of Your Order is :"+TotalBILL)
 
//Task No : 8
    // var marktotal = 750 ;
    // var markobt = 450 ;
    // var per = (marktotal/markobt)*100
    // document.write("<h1>Marks Sheet</h1>")
    // document.write("PERCENTAGE :"+ per);

//Task No : 9
    // var dollars = 30;
    // var riyal = 30;
    // var dollarToPkr = 30*221.55;
    // var riyalToPkr = 25*58.90;
    // var totalCurrency = dollarToPkr+riyalToPkr;
    // document.write("<h1>Currency in PKR</h1>");
    // document.write("Total Currency in PKR : "+totalCurrency.toFixed());
    
//Task No : 10
    // var a = 20;
    // a = ((a+5)*10)/2;
    // document.write(a);

//Task No : 11
    // document.write("<h1>Age Claculator</h1>");
    // var curryear = 2022;
    // var birthyear = 2003;
    // var age1 = (curryear-birthyear);
    // var age2 = (curryear-birthyear)-1;
    // document.write("Current Year : " +curryear);
    // document.write("<br/>");
    // document.write("Birth Year "+birthyear);
    // document.write("<br/>");
    // document.write("Your Age Is :" + age1 +" or "+ age2);
      
//Task No : 12
        // var r = 20;
        // var n = 3.142;
        // var c = (2 * n) * r;
        // var a = n * r ** 2;
        // document.write("<h1>The Geametrizer</h1>");
        // document.write("Radius of a circle : " + r + "<br/>");
        // document.write("The Circumference is :"+c+"<br/>")
        // document.write("The Area is : "+a+"<br/>")
       
//Task No : 13
        // var favSnack = "pizza";
        // var myAge = 19;
        // var maxAge = 60;
        // var perDay = 1;
        // var estSnacks = (maxAge-myAge)*perDay;
        // document.write("Favourite Snack : "+favSnack+"<br/>");
        // document.write("Current Age : "+myAge+"<br/>");
        // document.write("Estimated Maximum age : "+maxAge+"<br/>");
        // document.write("Amount of snacks per day : "+perDay+"<br/>");
        // document.write("You will need "+estSnacks+" "+favSnack+" to last you until the ripe old age of "+maxAge);

// ---------------------------------------------- Chapter No : 6 to 9 (Math Expressions)--------------------------------*

//Task No : 1
        // var a = 10;
        // document.write("Result : "+"<br/>");
        // document.write("The value of a is :"+a+"<br/>");
        // document.write("..................................... <br/>"+"<br/>");

        // document.write("The value of ++a is : "+ ++a +"<br/>");
        // document.write("Now the value of a is : "+a+"<br/>"+"<br/>");

        // document.write("The value of a++ is : "+ a++ +"<br/>");
        // document.write("Now the value of a is : "+a+"<br/>"+"<br/>");

        // document.write("The value of --a is : "+ --a +"<br/>");
        // document.write("Now the value of a is : "+a+"<br/>"+"<br/>");

//Task No : 2
        // var a = 2, b = 1;
        // var result = --a - --b + ++b + b--;
        // document.write("a is : "+a+"<br/>");
        // document.write("b is : "+b+"<br/>");
        // document.write("Result is : "+result)

//Task No : 3
        // var userName = prompt("Write your name");
        // alert("Welcome to website "+userName);

//Task No : 4 to 5
        // var tableOf;
        // console.log(tableOf);
        // tableOf = prompt("Enter a number to print a table ", 5);
        // if (tableOf == null || tableOf == undefined || tableOf == '') {
        //     tableOf = 5;
        //     document.write(tableOf + " x 1 = " + tableOf * 1 + "</br>");
        //     document.write(tableOf + " x 2 = " + tableOf * 2 + "</br>");
        //     document.write(tableOf + " x 3 = " + tableOf * 3 + "</br>");
        //     document.write(tableOf + " x 4 = " + tableOf * 4 + "</br>");
        //     document.write(tableOf + " x 5 = " + tableOf * 5 + "</br>");
        //     document.write(tableOf + " x 6 = " + tableOf * 6 + "</br>");
        //     document.write(tableOf + " x 7 = " + tableOf * 7 + "</br>");
        //     document.write(tableOf + " x 8 = " + tableOf * 8 + "</br>");
        //     document.write(tableOf + " x 9 = " + tableOf * 9 + "</br>");
        //     document.write(tableOf + " x 10 = " + tableOf * 10 + "</br>");
        // } else {
        //     document.write(tableOf + " x 1 = " + tableOf * 1 + "</br>");
        //     document.write(tableOf + " x 2 = " + tableOf * 2 + "</br>");
        //     document.write(tableOf + " x 3 = " + tableOf * 3 + "</br>");
        //     document.write(tableOf + " x 4 = " + tableOf * 4 + "</br>");
        //     document.write(tableOf + " x 5 = " + tableOf * 5 + "</br>");
        //     document.write(tableOf + " x 6 = " + tableOf * 6 + "</br>");
        //     document.write(tableOf + " x 7 = " + tableOf * 7 + "</br>");
        //     document.write(tableOf + " x 8 = " + tableOf * 8 + "</br>");
        //     document.write(tableOf + " x 9 = " + tableOf * 9 + "</br>");
        //     document.write(tableOf + " x 10 = " + tableOf * 10 + "</br>");
        // }

//Task No : 6
        // var sub_1 = prompt("Enter First subject name : ");
        // var sub_2 = prompt("Enter Second subject name : ");
        // var sub_3 = prompt("Enter Third subject name : ");

        // var sub_1_max_marks = 150;
        // var sub_2_max_marks = 150;
        // var sub_3_max_marks = 150;

        // var sub1 = parseInt(prompt("Enter marks Obtained for " + sub_1));
        // var sub2 = parseInt(prompt("Enter marks Obtained for : " + sub_2));
        // var sub3 = parseInt(prompt("Enter marks Obtained for: " + sub_3));

        // var sub_1_per = (sub1 / sub_1_max_marks) * 100;
        // var sub_2_per = (sub2 / sub_2_max_marks) * 100;
        // var sub_3_per = (sub3 / sub_3_max_marks) * 100;

        // var net_total_marks = (sub_1_max_marks + sub_2_max_marks + sub_3_max_marks);
        // var net_total_obt = (sub1 + sub2 + sub3);
        // var net_total_per = (sub_1_per + sub_2_per + sub_3_per);
        // document.write("<table>");
    // Row
        // document.write("<tr>");
        // document.write("<td>");
        // document.write("<b>Subject</b>");
        // document.write("</td>");
        // document.write("<td>");
        // document.write("<b>Total Marks</b>");
        // document.write("</td>");
        // document.write("<td>");
        // document.write("<b>Obtained Marks</b>");
        // document.write("</td>");
        // document.write("<td>");
        // document.write("ُ<b>percentage</b>");
        // document.write("</td>");
        // document.write("</tr>");
    // Sub 1 Row
        // document.write("<tr>");
        // document.write("<td>");
        // document.write(sub_1);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub_1_max_marks);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub1);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub_1_per + "%");
        // document.write("</td>");
        // document.write("</tr>");
    // Sub 2 row
        // document.write("<tr>");
        // document.write("<td>");
        // document.write(sub_2);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub_2_max_marks);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub2);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub_2_per + "%");
        // document.write("</td>");
        // document.write("</tr>");
    // Sub 3 row
        // document.write("<tr>");
        // document.write("<td>");
        // document.write(sub_3);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub_3_max_marks);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub3);
        // document.write("</td>");
        // document.write("<td>");
        // document.write(sub_3_per + "%");
        // document.write("</td>");
        // document.write("</tr>");
    // Totals row
        // document.write("<tr>");
        // document.write("<td>");
        // document.write("");
        // document.write("</td>");
        // document.write("<td>");
        // document.write("<b>" + net_total_marks + "</b>");
        // document.write("</td>");
        // document.write("<td>");
        // document.write("<b>" + net_total_obt + "</b>");
        // document.write("</td>");
        // document.write("<td>");
        // document.write("<b>" + net_total_per + "%" + "</b>");
        // document.write("</td>");
        // document.write("</tr>");
        // document.write("</table>");

//---------------------------------------------- Chapter No : 9 to 11 (USER INPUT & CONDITIONAL STATEMENT)--------------------------------*

//Task No : 1
        // var cityname = prompt("Enter City NAME").toLocaleLowerCase();
        // if (cityname == "hyderabad"){
        //     alert("WELCOME TO THE CITY OF BIRDS 🐦")
        // }

        // if (cityname == "karachi"){
        //     alert("WELCOME TO THE CITY OF LIGHTS ")
        // }
        // else{
        //     alert("WELCOME TO THE CITY ")
        // }

//Task No : 2
        // var gender = prompt("Enter Your Gender").toLocaleLowerCase();
        // if (gender == "male"){
        //     document.write("GOOD MORNING SIR");
        // }
        // else if(gender == "female" ){
        //     document.write("GOOD MORNING Ma'am");
        // }
        // else{
        //     document.write("Invalid Inpu");
        // }

//Task No : 3
        // var currSignal = prompt("Enter traffic signal color : ").toLowerCase();
        // if (currSignal == 'red') {
        //     alert("Must stop!");
        // } else if (currSignal == 'yellow') {
        //     alert("Ready to move");
        // } else if (currSignal == 'green') {
        //     alert("Move now");
        // } else {
        //     alert("invalid input");
        // }

//Task No : 4
        // var Remainfuel = parseFloat(prompt("Enter fuel remaining : "));
        // if (Remainfuel < 0.25) {
        //     alert("Please refill the fuel in your car ");
        // } else {
        //     alert("Keep going");
        // }

//Task No : 5
        // var a = 4;
        // if (++a === 5){
        //     alert("Given Condition of variable a is true ")
        // }

        // var b = 89;
        // if (b++ === 90) {
        //     alert("Given Condition of variable b is true ");
        // }

        // var b = 82;
        // if (b++ === 83) {
        //     alert("given condition for variable b is true");
        // }
        // var c = 12;
        // if (c++ === 13) {
        //     alert("condition 1 is true")
        // }
        // // false
        // if (c === 13) {
        //     alert("condition 2 is true")
        // }
        // // true
        // if (c === 14) {
        //     alert("condition 4 is true");
        //     // true
        // }

        // var matcost = 20000;
        // var labcost = 2000;
        // var totalCost = matcost + labcost;
        // if (totalCost === labcost + matcost) {
        //     alert("The cost is equal");
        // }

        // if ("car" < "cat") {
        //     alert("car is smaller than cat");
        // }

        // var sub_1 = parseInt(prompt(" obtained Marks in first subject"));
        // var sub_2 = parseInt(prompt(" obtained Marks in second subject"));
        // var sub_3 = parseInt(prompt(" obtained Marks in third subject"));
        // var max_marks = 300;
        // var total_obt = (sub_1+sub_2) + sub_3 ;
        // var obt_per = ((total_obt/max_marks)*100).toFixed(2);
        // document.write("<h1>Marks Sheet</h1>");
        // document.write("Total Marks :"+ max_marks +"<br/>");
        // document.write("Marks Obtained :"+ total_obt +"<br/>");
        // document.write("Percentage :"+ obt_per +"%"+"<br/>");
        // if(obt_per >= 80){
        //     document.write("Grade : A-one"+"<br/>");
        //     document.write("Remarks : Excellent"+"<br/>");
        // }else if(obt_per >= 70){
        //     document.write("Grade : A"+"<br/>");
        //     document.write("Remarks : Good"+"<br/>");
        // }else if(obt_per >= 60){
        //     document.write("Grade : B"+"<br/>");
        //     document.write("Remarks : You need to improve"+"<br/>");
        // }else if(obt_per < 60){
        //     document.write("Grade : Fail"+"<br/>");
        //     document.write("Remarks : Sorry"+"<br/>");
        // }else{
        //     document.write("invalid input"+"<br/>");
        // }

//Task No : 6
        // var ran_num =Math.random()*10;
        // var guess  = random.tofixed();
        // var user = parseInt(prompt("Guess a num between 1 TO 10 "));
        // if (user == guess){
        //     document.write("HURRY ! correct ")
        // }
        // else if (user+1 == guess){
        //     document.write("close Enough")
        // }
        // else{
        //     document.write(" ^_^ WRONG ANSWER ^_^")
        // }

//Task No : 7
        // var checkNum = parseInt(prompt("Enter Number : "));
        // if (checkNum%3 == 0){
        //     document.write("Number is divisible by 3");
        // }else{
        //     document.write("Number is not divisible by 3");
        // }

//Task No : 8
        // var checkEven = parseInt(prompt("WRITE A Number : "));
        // if (checkEven % 2 == 0) {
        //     document.write("Even");
        // } else {
        //     document.write("Odd");
        // }

//Task No : 9
        // var inpTemp = parseInt(prompt("Input temperature : "));
        // if (inpTemp > 40){
        //     document.write("too hot outside.");
        // }else if (inpTemp > 30){
        //     document.write("Normal Weather Today.");
        // }else if (inpTemp > 20){
        //     document.write("Todays Weather is good for walk.");
        // }else if (inpTemp > 10){
        //     document.write(" Today’s weather is so Cool . Stay Home ,Stay save ");
        // }else{
        //     document.write("Please Enter A Correct Temprature");
        // }

//Task No : 10
        // var firstNumber = parseInt(prompt("Enter First Number : "));
        // var SecondNumber = parseInt(prompt("Enter Second Number : "));
        // var operation = prompt("Enter Operator symbol Ex. '+','-','*','/','%' : ");
        // if (operation == '+'){
        //     document.write(firstNumber+SecondNumber);
        // }else if (operation == '-'){
        //     document.write(firstNumber-SecondNumber);
        // }else if (operation == '*'){
        //     document.write(firstNumber*SecondNumber);
        // }else if (operation == '/'){
        //     document.write(firstNumber/SecondNumber);
        // }else if (operation == '%'){
        //     document.write(firstNumber%SecondNumber);
        // }else{
        //     document.write("Invalid Input.")
        // }

//------------------------------------ Chapter No : 12 to 13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)--------------------------------* 

//Task No : 1
        //  var  input = prompt("Input Single Character Or Single Number");
        // var  ascii =  input.charCodeAt(0);
        // if ( ascii >= 97 &&  ascii <= 122) {
        //     document.write(" Small Alphabet");
        // }
        // else if ( ascii >= 65 &&  ascii <= 90) {
        //     document.write(" Capital Alphabet");
        // }
        // else if ( ascii >= 48 &&  ascii <= 57) {
        //     document.write(" Number ");
        // }

//Task No : 2
        // var  num1 = parseInt(prompt("Enter first NUmber : "));
        // var  num2 = parseInt(prompt("Enter second Number : "));
        // if( num1 >  num2){
        //     document.write( num1);
        // }else if ( num1 <  num2){
        //     document.write( num2);
        // }else if ( num1 ==  num2){
        //     document.write(" Equal");
        // }else{
        //     document.write(" invalid input.")
        // }

//Task No : 3
        // var inputnum = parseInt(prompt(" Enter a value"));
        // if(inputnum > 0){
        //     document.write(" Positive");
        // }else if(inputnum < 0){
        //     document.write(" Negative");
        // }else{
        //     document.write(" ZERO");
        // }

//Task No : 4
        // var inp = prompt(" Enter a character : ").toLowerCase();
        // if(inp.length > 1){
        //     document.write(" Invalid input");
        // }else if(inp == 'a' ||inp == 'e' || inp == 'i' || inp == 'o' || inp == 'u' ){
        //     document.write(true);
        // }else{
        //     document.write(false)
        // }

//Task No : 5
        // var sahipass = ' sahi he ';
        // var passinp = prompt("Enter password : ");
        // if(passinp == ''||passinp == null || passinp == undefined){
        //     document.write("Please enter your password ");
        // }else if(passinp == sahipass) {
        //     document.write("Correct! ");
        // }else{
        //     document.write(" Incorrect password ");
        // }

//Task No : 6
        // var GREETING;
        // var HR = 13;
        // if (HR < 18) {
        //     GREETING = " Good day ";

        //     GREETING = " Good evening ";
        // }

        // var GREETING;
        // var HR = 13;
        // if (HR < 18) {
        //     GREETING = " Good day ";
        //     document.write(GREETING);
        // }else{
        //     GREETING = " Good evening ";
        //     document.write(GREETING);
        // }
        
//Task No : 7
        // var waqt = parseInt(prompt("Enter waqt in 24 Hr between 0000 and 23 59"));
        // if(waqt >= 0000 && waqt < 1200){
        //     document.write(" Good Morning.");
        // }else if(waqt >= 1200 && waqt < 1700){
        //     document.write(" Good Afternoon. ");
        // }else if(waqt >= 1700 && waqt < 2100){
        //     document.write("Good Evening. ");
        // }else if(waqt >= 2100 && waqt < 2359){
        //     document.write("Good Night. ");
        // }else{
        //     document.write("Invalid Input. ");
        // }

//-------------------------------------------- Chapter No : 14 to 16 (ARRAYS)-----------------------------------------* 

// Task No : 1
//         var arr0 = [];

// Task No : 2
//         var arr1 = new Array(100);

// Task No : 3
//         var strarr = ["a","b","c","d"];

// Task No : 4
//         var numarr = [44,22,35,46,90];

// Task No : 5
//         var bolarr = [true,false];

// Task No : 6
//         var mixArray = ["mango","football",33,50,true,"mouse",45,true];

// Task No : 7
//         var EDUCATION = ['SSC','HSC','BCS','BS','BSIT','MS','PhD'];
//         for(i in EDUCATION){
//             document.write(`<b> ${parseInt(i)+1} ) $ {EDUCATION[i]} <b> <br/>`)
//         }

// Task No : 8
//         var students = ['asad', 'anas', 'rahul'];
//         var score = [550, 250, 350];
//         for(i in students){
//             document.write(`Score of ${students[i]} is ${score[i]}. Percentage: ${score[i]/500*100}% <br/>`)
//         }

//  Task No : 9
//         var colors = ['white','yellow','blue '];
//         document.write("Array after first initialization : ",colors);

// Task No : 10
//         var stuscr =[250,340,555,200];
//         document.write(`<br> Scores of Students : ${stuscr} <br/>`);
//         var scrSorted = stuscr.sort();
//         document.write(`Ordered Scores of Students : ${scoreSorted}`);

// Task No : 11
//         var cityname = ['karachi','islamabad','lahore','sukkur'];
//         document.write(`City's list : <br/>${cityname}<br/> <br/>`);
//         var selectedCities = cityname.slice(2,4);
//         document.write(`Selected city's list : <br/>${selectedCities}`);

// Task No : 12
//         var array = ['this','is','my','cat'];
//         document.write('Array : <br/>',arr);
//         var arrToStr = arr.join();
//         document.write('<br/> String : <br/>',arrToStr);

// Task No : 13
//         var arr = ['scanner','fax','printer','lcd'];
//         document.write("Devices : <br/> ",arr,"<br/> <br/> FIFO <br/> <br/>")
//         document.write(`Out : <br/> ${arr[0]} <br/> Out : <br/> ${arr[1]} <br/> Out : <br/> ${arr[2]} <br/> Out : <br/> ${arr[3]} <br/>`)

//-------------------------------------------------- THE END--------------------------------------------------------*        