/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vard= "Vardenis";
let pav= "Pavardenis";
let met= 2003;
let thisYear = new Date().getFullYear();

console.log( "As esu" + " " + vard + " " + pav + ". " + "Man yra" + " " + (thisYear - met) + " " + "metai(-u)" )



/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let x = Math.round(Math.random() * 4);
let y = Math.round(Math.random() * 4);

console.log(`The two numbers are ${x} and ${y}.`)

if (x == 0 || y == 0) {
    console.log("Nope");
} else if (a > b) {
    console.log((x / y).toFixed(2));  
} else {
    console.log((y / x).toFixed(2));
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let n1 = Math.round(Math.random() * 25);
let n2 = Math.round(Math.random() * 25);
let n3 = Math.round(Math.random() * 25);

console.log(`The three numbers are ${n1}, ${n2} and ${n3}`);

let largest = Math.max(n1, n2, n3);
let smallest = Math.min(n1, n2, n3);
let midNum;

if (n1 != largest && n1 != smallest) {
    midNum = n1;  
} else if (n2 != largest && n2 != smallest) {
    midNum = n2;
} else if (n3 != largest && n3 != smallest){
    midNum = n3;
} else {
    midNum = "abcdefg";
}

console.log(`vidurinis skaicius yra ${midNum}`);


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.ceil(Math.random() * 10);
let kr2 = Math.ceil(Math.random() * 10);
let kr3 = Math.ceil(Math.random() * 10);

console.log(`Kraštinių ilgiai yra ${kr1}, ${kr2} ir ${kr3}.`);

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
    console.log(`Taip, trikampis įmanomas`);
} else {
    console.log(`Ne, trikampis neįmanomas`);
}



/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let sk1 = Math.round(Math.random() * 2);
let sk2 = Math.round(Math.random() * 2);
let sk3 = Math.round(Math.random() * 2);
let sk4 = Math.round(Math.random() * 2);

console.log(`Duoti skaičiai yra ${sk1}, ${sk2}, ${sk3} ir ${sk4}.`);

let nulis = 0;
let vienas = 0;
let du = 0;

if (sk1 == 0) {
    nulis++;
}

if (sk1 == 1) {
    vienas++;
}

if (sk1 == 2) {
    du++;
}


/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let skl1 = Math.floor(Math.random() * 21) - 10;
let skl2 = Math.floor(Math.random() * 21) - 10;
let skl3 = Math.floor(Math.random() * 21) - 10;



/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let kiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5);
let kaina = 1;

if (kiekis > 2000) {
    kaina = (kaina * kiekis * 0.96).toFixed(2);
} else if (kiekis > 1000) {
    kaina = (kaina * kiekis * 0.97).toFixed(2);
} else {
    kaina = (kaina * kiekis).toFixed(2);
}

console.log(`Kiekis: ${kiekis}, Suma: ${kaina}.`);


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let kn1 = Math.round(Math.random() * 100);
let kn2 = Math.round(Math.random() * 100);
let kn3 = Math.round(Math.random() * 100);
let skai = 3;

let vidurkis = Math.round((kn1 + kn2 + kn3) / skai);

console.log(`Trys skaičiai yra ${kn1}, ${kn2} ir ${kn3}.`);
console.log(`Vidurkis: ${vidurkis}.`);

if (kn1 < 10 || kn1 > 90) {
    skai--;
    kn1 = 0;
}

if (kn2 < 10 || kn2 > 90) {
    skai--;
    kn2 = 0;
}

if (kn3 < 10 || kn3 > 90) {
    skai--;
    kn3 = 0;
}

if (kn1 == 0 && kn2 == 0 && kn3 == 0) {
    console.log(`neskaiciuojama`);
} else {
    vidurkis = Math.round((kn1 + kn2 + kn3) / skai);
    console.log(`vidurkis: ${vidurkis}.`);
}


/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
let totsek = Math.round(Math.random() * 86400);
let val = Math.floor(totalSeconds / 3600);
let minut = Math.floor((totalSeconds - (hours * 3600)) / 60);
let sek = totalSeconds - (hours * 3600) - (mins * 60);


/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let kint1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint4 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint5 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint6 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

let first = Math.max(kint1, kint2, kint3, kint4, kint5, kint6);
let last = Math.min(kint1, kint2, kint3, kint4, kint5, kint6); 