document.getElementById("lang").addEventListener("change", lang);

function lang(){
let lang = document.getElementById("lang").value;

            if (lang == "english"){

document.getElementById("englang").style.display = "block";
document.getElementById("englang2").style.display = "block";
document.getElementById("tululang").style.display = "none";
document.getElementById("tululang2").style.display = "none";
document.getElementById("kanlang").style.display = "none";
document.getElementById("kanlang2").style.display = "none";

document.getElementById("txt").placeholder = "type in kannada";
document.getElementById("txt").style.fontFamily="";

}else if (lang == "tulu"){

document.getElementById("englang").style.display = "none";
document.getElementById("englang2").style.display = "none";
document.getElementById("tululang").style.display = "block";
document.getElementById("tululang2").style.display = "block";
document.getElementById("kanlang").style.display = "none";
document.getElementById("kanlang2").style.display = "none";

document.getElementById("txt").placeholder = "knAnwwA  berel";
document.getElementById("txt").style.fontFamily="tulu2";

}else if(lang == "kannada"){

document.getElementById("englang").style.display = "none";
document.getElementById("englang2").style.display = "none";
document.getElementById("tululang").style.display = "none";
document.getElementById("tululang2").style.display = "none";
document.getElementById("kanlang").style.display = "block";
document.getElementById("kanlang2").style.display = "block";

document.getElementById("txt").placeholder = "ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಿರಿ";
document.getElementById("txt").style.fontFamily="";

}
}

function tulu(){
let tl = document.getElementById("tl");
if(tl.checked == true){
document.getElementById("resu").style.fontFamily="tulu";
}else{
document.getElementById("resu").style.fontFamily="";
}
}

document.getElementById("txt").addEventListener("input", myfunc);
function myfunc(){

let txt = document.getElementById("txt").value; 

let sp = document.getElementById("spcl");
if (sp.checked == true){

let j = txt.indexOf("ೆV"); 
while (j > -1) { 
if(txt[j-4]==="ರ" && txt[j-3]==="X" && txt[j-2]==="್"){
txt = txt.slice(0, j - 4) + "o" + txt.slice(j - 4, j) + txt.slice(j + 2);
j = txt.indexOf("ೆV"); 
}else{
if (txt[j - 4] === "್" && txt[j - 2] === "್") { 
txt = txt.slice(0, j - 5) + "o" + txt.slice(j - 5, j) + txt.slice(j + 2);
j = txt.indexOf("ೆV"); 
} else { 
if (txt[j - 2] === "್") { 
txt = txt.slice(0, j - 3) + "o" + txt.slice(j - 3, j) + txt.slice(j + 2); 
j= txt.indexOf("ೆV"); 
} else { 
txt = txt.slice(0, j - 1) + "o" + txt[j - 1] + txt.slice(j + 2); 
j = txt.indexOf("ೆV"); 
}
} 
}}



let J = txt.indexOf("ೇV"); 
while (J > -1) { 
if(txt[J-4]==="ರ" && txt[J-3]==="X" && txt[J-2]==="್"){
txt = txt.slice(0, J - 4) + "e" + txt.slice(J - 4, J) + txt.slice(J + 2);
J = txt.indexOf("ೇV"); 
}else{
if (txt[J - 4] === "್" && txt[J - 2] === "್") { 
txt = txt.slice(0, J - 5) + "O" + txt.slice(J - 5, J) + txt.slice(J + 2);
J = txt.indexOf("ೇV"); 
} else { 
if (txt[J - 2] === "್") { 
txt = txt.slice(0, J - 3) + "O" + txt.slice(J - 3, J) + txt.slice(J + 2); 
J= txt.indexOf("ೇV"); 
} else { 
txt = txt.slice(0, J - 1) + "O" + txt[J - 1] + txt.slice(J + 2); 
J = txt.indexOf("ೇV"); 
}
} 
}}

txt = txt.replace(/ಎV/g, "oA").replace(/ಏV/g, "OA").replace(/ುV/g, "uAX");

}

txt = txt.replace(/್ /g, "್  ");
txt = txt.replace(/ಕೊೖ/g, "eXeka");

let x = txt.indexOf("‍");
while(x>-1){
if(txt[x-2]==="ರ" && txt[x-1]==="್"){
txt = txt.slice(0,x-2) + "ರX್" + txt.slice(x+1);
x = txt.indexOf("‍");
}else{
txt = txt.slice(0,x) + "X" + txt.slice(x+1);
x = txt.indexOf("‍");
}
}


let e = txt.indexOf("ೆ");
while (e > -1) { 
if(txt[e-4]==="ರ" && txt[e-3]==="X" && txt[e-2]==="್"){
txt = txt.slice(0, e - 4) + "e" + txt.slice(e - 4, e) + txt.slice(e + 1);
e = txt.indexOf("ೆ"); 
}else{
if (txt[e - 4] === "್" && txt[e - 2] === "್") { 
txt = txt.slice(0, e - 5) + "e" + txt.slice(e - 5, e) + txt.slice(e + 1);
e = txt.indexOf("ೆ"); 
} else { 
if (txt[e - 2] === "್") { 
txt = txt.slice(0, e - 3) + "e" + txt.slice(e - 3, e) + txt.slice(e + 1); 
e = txt.indexOf("ೆ"); } else { 
txt = txt.slice(0, e - 1) + "e" + txt[e - 1] + txt.slice(e + 1); 
e = txt.indexOf("ೆ"); 
}
} 
} 
}


let E = txt.indexOf("ೇ"); 
while (E > -1) { 
if(txt[E-4]==="ರ" && txt[E-3]==="X" && txt[E-2]==="್"){
txt = txt.slice(0, E - 4) + "E" + txt.slice(E - 4, E) + txt.slice(E + 1);
E = txt.indexOf("ೇ"); 
}else{
if (txt[E - 4] === "್" && txt[E - 2] === "್") { 
txt = txt.slice(0, E - 5) + "E" + txt.slice(E - 5, E) + txt.slice(E + 1);
E = txt.indexOf("ೇ"); 
} else { 
if (txt[E - 2] === "್") { 
txt = txt.slice(0, E - 3) + "E" + txt.slice(E - 3, E) + txt.slice(E + 1); 
E = txt.indexOf("ೇ"); } else { 
txt = txt.slice(0, E - 1) + "E" + txt[E - 1] + txt.slice(E + 1); 
E = txt.indexOf("ೇ"); 
}
} 
} }


let F = txt.indexOf("ೖ"); 
while (F > -1) { 
if (txt[F - 4] === "್" && txt[F - 2] === "್") { 
txt = txt.slice(0, F - 5) + "eXe" + txt.slice(F - 5, F) + txt.slice(F + 1);
F = txt.indexOf("ೖ"); 
} else { 
if (txt[F - 2] === "್") { 
txt = txt.slice(0, F - 3) + "eXe" + txt.slice(F - 3, F) + txt.slice(F + 1); 
F = txt.indexOf("ೖ"); } else { 
txt = txt.slice(0, F - 1) + "eXe" + txt[F - 1] + txt.slice(F + 1); 
F = txt.indexOf("ೖ"); 
}
} 
} 


let g = txt.indexOf("ೊ");

while (g > -1) {
if(txt[g-4]==="ರ" && txt[g-3]==="X" && txt[g-2]==="್"){
txt = txt.slice(0, g - 4) + "e" + txt.slice(g - 4, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("ೊ"); 
}else{
if (txt[g - 4] === "್" && txt[g - 2] === "್") {
txt = txt.slice(0, g - 5) + "e" + txt.slice(g - 5, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("ೊ");
} else {
if (txt[g - 4] !== "್" && txt[g - 2] === "್") {
txt = txt.slice(0, g - 3) + "e" + txt.slice(g - 3, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("ೊ");
} else {
txt = txt.slice(0, g - 1) + "e" + txt.slice(g - 1, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("ೊ");
}
}
}}

let G = txt.indexOf("ೋ");

while (G > -1) {
if(txt[G-4]==="ರ" && txt[G -3]==="X" && txt[G-2]==="್"){
txt = txt.slice(0, G - 4) + "F" + txt.slice(G - 4, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("ೋ"); 
}else{
if (txt[G - 4] === "್" && txt[G - 2] === "್") {
txt = txt.slice(0, G - 5) + "F" + txt.slice(G - 5, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("ೋ");
} else {
if (txt[G - 4] !== "್" && txt[G - 2] === "್") {
txt = txt.slice(0, G - 3) + "F" + txt.slice(G - 3, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("ೋ");
} else {
txt = txt.slice(0, G - 1) + "F" + txt.slice(G - 1, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("ೋ");
}
}
}}


let f = txt.indexOf("ೈ"); 
while (f > -1) { 
if(txt[f-4]==="ರ" && txt[f-3]==="X" && txt[f-2]==="್"){
txt = txt.slice(0, f - 4) + "eXe" + txt.slice(f - 4, f) + txt.slice(f + 1);
f = txt.indexOf("ೈ"); 
}else{
if (txt[f - 4] === "್" && txt[f - 2] === "್") { 
txt = txt.slice(0, f - 5) + "eXe" + txt.slice(f - 5, f) + txt.slice(f + 1);
f = txt.indexOf("ೈ"); 
} else { 
if (txt[f - 2] === "್") { 
txt = txt.slice(0, f - 3) + "eXe" + txt.slice(f - 3, f) + txt.slice(f + 1); 
f = txt.indexOf("ೈ"); } else { 
txt = txt.slice(0, f - 1) + "eXe" + txt[f - 1] + txt.slice(f + 1); 
f = txt.indexOf("ೈ"); 
}
} 
} }






let H = txt.indexOf("ರ್");
let ra2 = txt[H+2];
while (H > -1){
if (/ಕ|ಖ|ಗ|ಘ|ಙ|ಚ|ಛ|ಜ|ಝ|ಞ|ಟ|ಠ|ಡ|ಢ|ಣ|ತ|ಥ|ದ|ಧ|ನ|ಪ|ಫ|ಬ|ಭ|ಮ|ಯ|ಲ|ವ|ಶ|ಷ|ಸ|ಹ|ಳ/.test(ra2) && txt[H-1] !== "್"){
txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
H = txt.indexOf("ರ್");
ra2 = txt[H+2];
}else{
txt = txt.replace("ರ್", "rA");
H = txt.indexOf("ರ್");
ra2 = txt[H+2];
}
}





let rep = txt.replace(/ಅ/g, "XAA").replace(/ಆ/g, "XAa").replace(/ಇ/g, "XAi").replace(/ಈ/g, "XAI").replace(/ಉ/g, "XAu").replace(/ಊ/g, "XAU").replace(/ಋ/g, "XAR").replace(/ೠ/g, "XARR").replace(/ಎ/g, "eA").replace(/ಏ/g, "EA").replace(/ಐ/g, "eeA").replace(/ಒ/g, "eAa").replace(/ಓ/g, "FAa").replace(/ಔ/g, "XAY").replace(/ಂ/g, "M").replace(/ಃ/g, "H").replace(/ಕ/g, "k").replace(/ಖ/g, "K").replace(/ಗ/g, "g").replace(/ಘ/g, "G").replace(/ಙ/g, "Z").replace(/ಚ/g, "c").replace(/ಛ/g, "C").replace(/ಜ/g, "j").replace(/ಝ/g, "J").replace(/ಞ/g, "z").replace(/ಟ/g, "q").replace(/ಠ/g, "Q").replace(/ಡ/g, "w").replace(/ಢ/g, "W").replace(/ಣ/g, "N").replace(/ತ/g, "t").replace(/ಥ/g, "T").replace(/ದ/g, "d").replace(/ಧ/g, "D").replace(/ನ/g, "n").replace(/ಪ/g, "p").replace(/ಫ/g, "P").replace(/ಬ/g, "b").replace(/ಭ/g, "B").replace(/ಮ/g, "m").replace(/ಯ/g, "y").replace(/ರ/g, "r").replace(/ಲ/g, "l").replace(/ವ/g, "v").replace(/ಶ/g, "S").replace(/ಷ/g, "x").replace(/ಸ/g, "s").replace(/ಹ/g, "h").replace(/ಳ/g, "L").replace(/್/g, "A").replace(/ಾ/g, "a").replace(/ು/g, "u").replace(/ೂ/g, "U").replace(/ೌ/g, "Y").replace(/ಿ/g, "i").replace(/ೀ/g, "I").replace(/ೃ/g, "R").replace(/‌/g, "X").replace(/‍/g, ""); 


/* error manager */
rep = rep.replace(/eXee/g, "eXe").replace(/kh/g, "kXh");





document.getElementById("resu").value = rep;
}





function copy() {
  let copyText = document.getElementById("resu");
  
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value.replace(/A  /, "A ")).then(function() {
  alert("Copied to clipboard. Please note that copied text will not be in Tulu script. Because Tulu doesn't have unicode yet. Please apply baravu font to get text in Tulu.");
}, function(err) {
  alert("Could not copy text.");
});
  }


