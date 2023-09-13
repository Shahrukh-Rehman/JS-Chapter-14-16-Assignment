// //1
// var emptyArrayOne = []
// //2
// var emtyArrayTwo = Array()
// //3
// var strings = ["Shahrukh","Shazaib","Ali","Ahmed"]
// //4
// var numbers = [1,2,3,4,5,6,7,8,9]
// //5
// var boolean = [true, false]
// //6
// var mixedArray = ["Shahrukh", true, 1,4,"BBQ"]
// //7
// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
// var list = ["1)","2)","3)","4)","5)","6)","7)","8)"]
// document.write("Qualification: <br> <br>".bold())

// for(i=0;i<=7;++i){
//     document.write(list[i]+" "+ qualification[i]+"<br>")
// }
//8
// var nameOfStudents = ["Ali","Ahmed","Akram"]
// var marksObtained = [320,230,480]
// var percentage = ["64%","46%","96%"]
// for(i=0;i<3;++i){
//     document.write("Score of " + nameOfStudents[i] +" is "+marksObtained[i]+".Percentage "+percentage[i]+"<br>")
// }
//9
// function loop(){
//     for(i=0;i<colors.length;i++){
//         document.write(colors[i]+"<br>")
//     }
// }
// var colors = ["Blue","White","Green"]

// loop();
// var colorInput = prompt("What color Do you want to add at the begining: Already colors includes are Blue White and Green ")

// colors.unshift(colorInput)

// document.write("<br>"+ "The Updated colors after adding one color at begining from user are :".bold()+"<br>")
// loop();
// colors.unshift("orange","violet")
// document.write("<br>"+ "The Updated colors after adding two colors at begining are:".bold()+"<br>")

// loop();
// colors.shift();
// document.write("<br>"+ "The Updated colors after remove one color at begining are:".bold()+"<br>")
// loop();
// colors.pop();
// document.write("<br>"+ "The Updated colors after remove one color from last are:".bold()+"<br>")
// loop();

// var colorInputTwo = prompt("Which color want to add and also tell location of it e.g Blue 9:")
// var NumindexValue = Number(colorInputTwo.match(/\d+/g));
// var colorName = colorInputTwo.match(/[a-zA-Z]+/g);

// // colors.splice(NumindexValue,0,colorName)
// colors[NumindexValue] = colorName;

// document.write("<br>"+ "The Updated colors after add one color according to defined user location are:".bold()+"<br>")
// loop();

// var colorInputTwo = prompt("Which color no want to remove and also tell location of it e.g 1 2:")
// var NumindexValueTwo = colorInputTwo.split(" ")

// colors.splice(NumindexValueTwo[0],NumindexValueTwo[1])

// document.write("<br>"+ "The Updated colors after remove colors according to user are:".bold()+"<br>")
// loop();

//10
// var scoreOfStudent = [320,230,480,120]
// var orderScoreOfStudent = scoreOfStudent.sort()
//11
// var cities = ["Karachi", "Lahore","Islamabad","Quetta","Peshawar"]
// var selectedCities = cities.slice(2,4)
//12
// var array = ["This","is","my","cat"]

// var string = array.join(" ")
//13
// var devices = ["Keyboard","Mouse","Printer","Monitor"]

// for (i=0;i<devices.length;i++) {
//     document.write("Out: <br>")
//     document.write(devices[i]+"<br>")
// }
//14
// var devices = ["Keyboard","Mouse","Printer","Monitor"]
// var revDevices = devices.reverse()
// for (i=0;i<devices.length;i++) {
//     document.write("Out: <br>")
//     document.write(devices[i]+"<br>")
// }
//15
// var manufactureMobile = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// for (i=0;i<manufactureMobile.length;i++) {
//     document.write("<br>")
//     document.write(manufactureMobile[i]+"<br>")
// }