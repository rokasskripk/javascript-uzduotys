let num = 6 + 4;
let vcs ="Labas";
let relationship = (vcs == num);

console.log(num + ", " + vcs + ", " + typeof(vcs) + ", " + relationship);
console.log(`${num}, ${vcs}, ${typeof(vcs)}, ${relationship} `)

let vardas = "Vardenis";
let pavarde = "Pavardenis";
let vp = vardas + " " + pavarde;
console.log(vp);

let x = 5;
let y = "5";

if(x === y) {
    console.log("lygu");
} else {
    console.log("nelygu");
}

console.log(x + y);

console.log(vcs.length);

let tekstas= "pirmas";
console.log(tekstas.length);
console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());
console.log(tekstas.toLowerCase());
console.log(tekstas.charAt(1));
console.log(tekstas.indexOf("m"));

tekstas = "Cia gali buti jusu reklama";
console.log(tekstas.replace ("gali buti", "yra"));
console.log(tekstas.substring(4, 14));
console.log(tekstas.substring(14));
console.log(tekstas.substr(4, 9));

x = 6.34;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));

y = 5.8;
let z = 9;
console.log(Math.max (x, y, z));
console.log(Math.min (x, y, z));

let i= Math.round(Math.random() * 30);
console.log(i);

let a = Math.floor(Math.random() * (50 - 10 + 1) + 10)
console.log(a);