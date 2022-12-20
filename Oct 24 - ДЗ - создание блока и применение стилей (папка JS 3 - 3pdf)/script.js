'use sctrict';

document.write("<div id='block'></div>");  
let rec = document.getElementById('block');  
rec.innerHTML = "Дюбель —конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах (бетон, кирпич и прочее).Сам дюбель удерживается в конструкции при помощи сил трения.С некоторого времени элементы связи и укрепления, дюбели и винт(шуруп) объединяют в одно целое и используются, прежде всего, для тяжёлых нагрузок.Дюбели предлагаются в различных величинах, которые руководствуются диаметром дюбеля(и соответственно необходимым отверстием), измеренным в миллиметрах..";  

rec.style.background = "#f0f";
rec.style.color = "#99ffff";
rec.style.width = "50%";
rec.style.outline = "10px dotted #000";


rec.className = "klass";  
let cl = document.querySelector(".klass"); 
cl.style.fontSize = "12pt";
cl.style.fontWeight = "bold";
cl.style.textDecoration = "line-through";
