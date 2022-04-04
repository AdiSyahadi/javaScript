let js = 'juned';
if (js === 'juned') alert('JavaScript keren');

40 + 5 + 3;
console.log(40 + 3 + 10);

let firstname = "adiSyahadi";
let first = "Juned"
let firstNamePerson //camelCase
let first_name_person //Snack_case

console.log(firstname);

let 3years = 3; // penulisan variabel tidak boleh di awali angka
let jonas&matlida = 'JN' // simbol & tidak boleh di gunakan untuk nama variabel
let function = 27; // tidak boleh menggunakan keyword yang ada dalam JavaScript
 
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


// Type data di dalam JavaScript

true;
console.log(true)
let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log('type data nya adalah : ',typeof true);
console.log('type data nya adalah : ',typeof javascriptIsFun);
console.log('type data nya adalah : ',typeof 23);
console.log('type data nya adalah : ',typeof 23.0);
console.log('type data nya adalah : ',typeof 'jonas');
let joni;
console.log('type data nya adalah : ',typeof joni);
console.log(typeof null)


//membuat variabel tanpa menggunakan let juga bisa
//merubah type data dari variabel juga bisa dilakukan
javascriptIsFun = 'Juned';
console.log(javascriptIsFun); 

// Penggunaan let, const, dan var dalam penulisan variabel

let age = 30; //variabel yang bisa di update nilainya
age= 31; //maka isi dari variabel age akan berubah/update menjadi 31

const tahunLahir = 1996; //menggunakan const maka variabel yang  tidak bisa di update nilainya
tahunLahir = 1997; // variabel tahunLahir tidak akan bisa di ubah/update

var kerja = 'prorgamer' //variabel yang bisa di update nilainya
kerja = 'pengajar' // maka akan berubah menjadi pengajar 

//OPERATOR DALAM JAVASCRIPT

// OPERATOR MATEMATIK
let tahunSekarang = 2022;
const adiSyahadi = tahunSekarang - 1996;
const anisaSetianingsih = 2022 - 1998;
console.log(adiSyahadi, anisaSetianingsih);

console.log(adiSyahadi * 2, anisaSetianingsih / 10, 2 ** 3);

const namaDepan = 'Juned';
const namaBelakang = 'Mulyadi';
console.log(namaDepan + namaBelakang);
console.log(namaDepan + ' ' + namaBelakang);

//ASSIGNT OPPERATOR
let x = 10 + 5;
x += 10; //hasil nilai x kemudian di tambah 10
x *= 10; // hasil nilai x kemudian di kali 10
x ++;
x --;
console.log(x);

// Operator Perbandingan
console.log(adiSyahadi > anisaSetianingsih);
console.log(adiSyahadi < anisaSetianingsih);
console.log(adiSyahadi >= 20);
console.log(21  <= anisaSetianingsih);

/Operator Precendece

let tahunSekarang = 2022;
const adiSyahadi = tahunSekarang - 1996;
const anisaSetianingsih = 2022 - 1998;

console.log(tahunSekarang - 1996 > tahunSekarang - 2019);

let x,y;
x = y = 30 - 26 + 5; // mengeksekusi dari kana ke kiri
// 30 - 26 + 5 = 9 maka nila x adalah y dan y memiliki nilai 9
console.log(x,y);
//maka hasilnya adalah x = 9 dan y = 9

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀*/

const massMark = 78 ;
const heightMark = 1.69 ;
const massJohn = 93 ;
const heightJohn = 1.95 ;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn,BMIMark);

const BMIJohnBMIMark = BMIJohn > BMIMark ;
console.log(BMIJohnBMIMark);
