// for-1

// let n = 10;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "*";
//     }

//     console.log(row)
// }


// while 3

// function xonaliSonniHisobla(son) {
//     let xonaSoni = 0;

//     while (son !== 0) {
//         son = Math.floor(son / 10);
//         xonaSoni++;
//     }

//     return xonaSoni;
// }

// var son = 59133927;
// var natija = xonaliSonniHisobla(son);

// console.log(`Son: ${son}`);
// console.log(`Xonali son: ${natija}`);


// while 4

// function teskariAylantir(son) {
//     let teskariSon = 0;

//     while (son !== 0) {
//         let qoldiq = son % 10;
//         teskariSon = teskariSon * 10 + qoldiq;
//         son = Math.floor(son / 10);
//     }

//     return teskariSon;
// }

// var son = 45789;
// var natija = teskariAylantir(son);

// console.log(`Son: ${son}`);
// console.log(`Teskari son: ${natija}`);


// while 5

// function polindromikSongaTekshir(son) {
//     let originalSon = son;
//     let teskariSon = 0;

//     while (son !== 0) {
//         let qoldiq = son % 10;
//         teskariSon = teskariSon * 10 + qoldiq;
//         son = Math.floor(son / 10);
//     }

//     return originalSon === teskariSon;
// }

// var son = 1234321;
// var natija = polindromikSongaTekshir(son);

// console.log(`Son: ${son}`);
// console.log(`Polindromik sonmi: ${natija}`);



// for 6


// function qatnashuvFor(N) {
//     var sonlar = "";

//     for (var i = 1; i <= N; i++) {
//         sonlar += i;
//     }

//     var qatnashganlar = 0;
//     var qatnashma = 1;
//     var index = 0;

//     while (index < sonlar.length - 1) {
//         var qatnashgan = parseInt(sonlar.substr(index, qatnashma));

//         if (qatnashgan === qatnashma) {
//             qatnashganlar++;
//             index += qatnashma.toString().length;
//             qatnashma++;
//         } else {
//             break;
//         }
//     }

//     console.log("Natija:", qatnashganlar, "ta");
// }

// var N = 20;
// qatnashuvFor(N);


// for 7

// function yigindisiFor(N) {
//     var sonlar = "";
//     for (var i = 1; i <= N; i++) {
//         sonlar += i;
//     }

//     var yigindi = 0;
//     for (var j = 0; j < sonlar.length; j++) {
//         yigindi += parseInt(sonlar[j]);
//     }

//     console.log("Yig'indisi (for):", yigindi);
// }

// var N = 20;
// yigindisiFor(N);


// for 8

// function xonaliFor(N) {
//     var sonlar = "";
//     for (var i = 1; i <= N; i++) {
//         sonlar += i;
//     }

//     var son = parseInt(sonlar);
//     var xonali = 0;
//     while (son > 0) {
//         son = Math.floor(son / 10);
//         xonali++;
//     }

//     console.log("Xonali (for):", xonali);
// }

// var N = 20;
// xonaliFor(N);


// for 10

// function tubSonlar(N) {
//     var tubSonlar = [];

//     for (var i = 2; i <= N; i++) {
//         if (tub(i)) {
//             tubSonlar.push(i);
//         }
//     }

//     console.log("Output:", tubSonlar.length, "(", tubSonlar.join(", "), ")");
// }

// function tub(n) {
//     if (n < 2) return false;
//     for (var i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// var N = 10;
// tubSonlar(N);


// for 11

// function birXilSonlar(N) {
//     var birXilSonlar = [];

//     for (var i = 11; i <= N; i += 11) {
//         birXilSonlar.push(i);
//     }

//     console.log("Output:", birXilSonlar.length, "(", birXilSonlar.join(", "), ")");
// }

// var N = 200;
// birXilSonlar(N);



// while 12

// function boshQisminaNatija(A, B) {
//     var boshQism = "";

//     while (A > B) {
//         boshQism += B;
//         A -= B;
//     }

//     console.log("Bo'sh qism:", boshQism);
// }

// var A = 17;
// var B = 3;

// boshQisminaNatija(A, B);


// while 13

// function joylashtirishMumkinligi(A, B) {
//     var joylarSoni = 0;

//     while (A >= B) {
//         A -= B;
//         joylarSoni++;
//     }

//     console.log("Joylashtirish mumkinligi:", joylarSoni);
// }

// var A = 17;
// var B = 3;

// joylashtirishMumkinligi(A, B);



// while 14

// function darajaTekshirish(n) {
//     while (n > 0) {
//         if (n % 3 === 0) {
//             console.log("3 - ning darajasi");
//         } else {
//             console.log("3 - ning darajasi emas");
//         }
//         break;
//     }
// }

// var n = 27; 
// darajaTekshirish(n);



// while 15

// function bolishsizNatija(n, m) {
// var butunQism = Math.floor(n / m);
// var qoldiq = n % m;

// console.log("Butun qism:", butunQism);
// console.log("Qoldiq:", qoldiq);
// }

// var n = 17;
// var m = 3;

// bolishsizNatija(n, m);


// while 16

// function teskariTartibdaChiqar(n) {
//     while (n > 0) {
//         var qoldiq = n % 10;
//         console.log(qoldiq);
//         n = Math.floor(n / 10);
//     }
// }

// var n = 12345;
// teskariTartibdaChiqar(n);


// while 17

// function yigindisiVaOxirgiRaqam(n) {
//     var yigindi = 0;
//     var oxirgiRaqam;

//     while (n > 0) {
//         var qoldiq = n % 10;
//         yigindi += qoldiq;
//         n = Math.floor(n / 10);
//         oxirgiRaqam = qoldiq;
//     }

//     console.log("Raqamlar yig'indisi:", yigindi);
//     console.log("Raqamlari soni:", oxirgiRaqam);
// }

// var n = 12345;
// yigindisiVaOxirgiRaqam(n);


// while 18

// function ikkiRaqamBor(n) {
//     var ikkiRaqamBor = false;

//     while (n > 0) {
//         var raqam = n % 10;

//         if (raqam === 2) {
//             ikkiRaqamBor = true;
//             break; 
//         }

//         n = Math.floor(n / 10);
//     }

//     if (ikkiRaqamBor) {
//         console.log("Berilgan sonda 2 raqami bor");
//     } else {
//         console.log("Berilgan sonda 2 raqami yo'q");
//     }
// }

// var n = 12345;
// ikkiRaqamBor(n);


// while 19

// function toqRaqamBor(n) {
//     var toqRaqamBor = false;

//     while (n > 0) {
//         var raqam = n % 10;

//         if (raqam % 2 !== 0) {
//             toqRaqamBor = true;
//             break; 
//         }

//         n = Math.floor(n / 10);
//     }

//     if (toqRaqamBor) {
//         console.log("Berilgan sonda toq raqam bor");
//     } else {
//         console.log("Berilgan sonda toq raqam yo'q");
//     }
// }

// var n = 12345;
// toqRaqamBor(n);


// while 20

// function palindromikSonTekshirish(son) {
//     var asalSon = son.toString();
//     var palindromik = true;

//     var i = 0;
//     var j = asalSon.length - 1;

//     while (i < j) {
//         if (asalSon[i] !== asalSon[j]) {
//             palindromik = false;
//             break; 
//         }
//         i++;
//         j--;
//     }

//     return palindromik;
// }

// console.log(palindromikSonTekshirish(1345431)); 
// console.log(palindromikSonTekshirish(45788754)); 
// console.log(palindromikSonTekshirish(12321)); 
// console.log(palindromikSonTekshirish(12345));   


// while 21

// function tubSonTekshirish(n) {
//     var tub = true;

//     if (n < 2) {
//         tub = false;
//     } else {
//         var i = 2;
//         while (i <= Math.sqrt(n)) {
//             if (n % i === 0) {
//                 tub = false;
//                 break;
//             }
//             i++;
//         }
//     }

//     if (tub) {
//         console.log(n + " tub son");
//     } else {
//         console.log(n + " tub emas");
//     }
// }

// tubSonTekshirish(17);  
// tubSonTekshirish(20);  
// tubSonTekshirish(1);   
// tubSonTekshirish(29); 
