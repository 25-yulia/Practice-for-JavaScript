'use strict';

document.write("<table border='1' align='center' width='300' height='300'>");

for (let i = 0; i < 11; i++) {
    document.write("<tr align='center'>");
    for (let j = 0; j < 11; j++) {
        if (i == 0) {
            document.write("<td bgcolor='white''>" + j + "</td>");  
        }
        else if(j == 0){
            document.write("<td bgcolor='white''>" + i + "</td>");  
        }
        else if (i % 2 == 0 && j % 2 == 0) {
            document.write("<td bgcolor='red'>" + i * j + "</td>");
        }
        else if (i % 2 != 0 && j % 2 != 0) {
            document.write("<td bgcolor='red'>" + i * j + "</td>");
        }
        else {
            document.write("<td bgcolor='yellow'>" + i * j + "</td>");
        }
    }
    document.write("</tr>");
}

document.write("</table>");