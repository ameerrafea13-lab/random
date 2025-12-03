// function my_company(adminsnumber, admin1, admin2, admin3, admin4, admin5) {
//   document.write(`<h1 style=
//     "
//     background:orange;
//     width:250px;
//     color:white;
//     "
//     >
//     i have ${adminsnumber} admins</h1>
//     <h2 style= 
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin1}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin2}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin3}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin4}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:125px;
//     color:white;
//     "
//     >
//     1-${admin5}</h2>`);
// }

// my_company("five", "sayed", "ahmed", "hamza", "marah", "mohamed");


//***************** new lesson *********************//

// function showinfo(us, ag, hr, sh, ...sk)
// {
//   document.write(`<h1> welcome: ${us}</h1s>`)
//   document.write(`<p> data: </p>`)
//   document.write(`<p> age: ${ag}</p>`)
//   document.write(`<p> hour rate: ${hr}</p>`)
//   // for(i = 0; i > ;)
//   // {

//   // }
// }


// showinfo("hamza rafea", "14", "$350")


// let names = (...names) => `${(typeof "names").charAt(0).toUpperCase() + (typeof "names").slice(1)} [${names.join("], [")}] => Done ! `;


// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));


// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

// console.log(calc(10, myNumbers[2], myNumbers[3]));

// let myNumbers = [20, 50, 10, 60];

// let calc = function (one, two, ...nums) {
//   return one + two + nums[0];
// }
// console.log(calc(10, myNumbers[2], myNumbers[3]));

// let swappingCases = "elZERo";
// let invertednumbers = [1, -10, -20, 15, 100, -30];
// let ignorenumbers = "ELz123er4o";

// let test1 = swappingCases.split("").map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("");

// console.log(test1);

// let test2 = invertednumbers.map(el => -el);

// console.log(test2);

// let test3 = ignorenumbers.split("").map(el => isNaN(parseInt(el)) === true ? el : "").join("");

// console.log(test3);

// let freinds = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let freinds1 = freinds.filter( el => el.startsWith("A"));

// console.log(freinds1)

// let nums = [11, 20, 2, 5, 17, 10];

// let add = nums.filter( el => el % 2 === 0 );

// console.log(add)

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let check = 
// theBiggest.reduce
// (
//   function (acc, current)
//   {
//     console.log(`Acc => ${acc}`)
//     console.log(`Current Element => ${current}`)
//     console.log(acc.length > current.length ? acc : current);
//     console.log(`###########`);
//     return acc.length > current.length ? acc : current;
//   }
// );

// console.log(check);

// let chars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let letters = chars.filter(el => el !== "@").reduce((acc, current) => acc + current);

// console.log(letters);

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("")
// .filter(el => isNaN(parseInt(el)) === true && el !== ',' && el !== '_')
// .map(function(el) {
//   return  myString.slice();
// })
// .reduce((acc, el) => acc + el)
// console.log(solution);



// let user = {

  // "random": "$@#DFSeF%#$%$&%T#$E!!@#?%$$#%",

  // congrats: function () {
  //   return `<h3 style=
  // "
  //   text-align:center;
  //   color: purple
  // ">
  // New Quest Available</h3>`;
  // },
  // lvl: `<h3 style=
  // "
  //   text-align:center;
  //   color:green
  // ">
  // lvl up </h3> <h3 style=
  // "
  //   text-align:center;
  //   color:white
  // ">
  // > (1475)`,
  // lvl2: `<h2>lv.1475</h2>`,
  // lvl3: `<h3 style=
  // "
  //   text-align:center;
  //       color:green
  // ">
  // lvl up </h3> <h3 style=
  // "
  //   text-align:center;
  //   color:white
  // "> 
  // (1476) </h3>`,
  // money: `<h2> 589 324 543</h2>`,
  // health: `<h1 style=
  // "
  //   background: rgb(00, 255, 100);
  //   width:200px;WC;
  // "
  // > 13105 </h1>`,
  // energy: `<h1 style=
  // "
  //   background: rgb(00, 100, 255);
  //   width:200px;
  //   text-align:center;
  // ">
  // 13105</h1>`,
// }

// user.age = 38;

// document.write(user.lvl)
// document.write(user.congrats())
// document.write(user.lvl3)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(`<br>`)
// document.write(user.lvl2)
// document.write(user.money)
// document.write(user.health)
// document.write(user.energy)

// console.log(typeof this);

// let obj = {
//   prop1: 1,
//   meth1: function() {
//     return this.prop1;
//   }
// }

// console.log(obj)

// let finalobj = (Object.assign({}, obj, {prop2: 2}))

// console.log(finalobj)

// New Lesson DOM (Creating Elements Practice)

// for(let i = 0; i < 100; i++)
// {
//   let newElement = document.createElement("div");
//   let newHeading = document.createElement("h2");
//   let newParagraph = document.createElement("p");

//   newParagraph.textContent = "product description";
//   newHeading.textContent = "Product name";
//   newElement.setAttribute("class", "Product");

//   newElement.appendChild(newHeading);
//   newElement.appendChild(newParagraph);
//   document.body.appendChild(newElement);
// }



// new lesson DOM (deal with children's)


// let contentcontainer = document.querySelector("div");

// contentcontainer.onclick = one

// contentcontainer.addEventListener("click", function() {
//   if(e.target())
//   {
//     e.target;
//   }
// })



// let header = document.createElement('header');
// let logoDiv = document.createElement('div');
// let logo = document.createElement('a');
// let ul = document.createElement('ul');
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');
// let li4 = document.createElement('li');
// let a1 = document.createElement('a');
// let a2 = document.createElement('a');
// let a3 = document.createElement('a');
// let a4 = document.createElement('a');

// let logotext = document.createTextNode('Ameer');
// let text1 = document.createTextNode('Home');
// let text2 = document.createTextNode('About');
// let text3 = document.createTextNode('Service');
// let text4 = document.createTextNode('Contact');

// document.body.appendChild(header);
// header.appendChild(logoDiv);
// header.appendChild(ul);
// logoDiv.appendChild(logo);
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// li1.appendChild(a1);
// li2.appendChild(a2);
// li3.appendChild(a3);
// li4.appendChild(a4);
// logo.appendChild(logotext);
// a1.appendChild(text1);
// a2.appendChild(text2);
// a3.appendChild(text3);
// a4.appendChild(text4);

// document.body.style.cssText = 'padding: 0; margin: 0; font-family: arial, tahoma ';
// header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px';
// logo.style.cssText = 'color: #22A96E; font-weight: 700; font-size: 25px ';
// ul.style.cssText = 'display: flex; align-items:center;';
// li1.style.cssText = 'list-style: none';
// li2.style.cssText = 'list-style: none';
// li3.style.cssText = 'list-style: none';
// li4.style.cssText = 'list-style: none';
// a1.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px';
// a2.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px';
// a3.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px';
// a4.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px';

// let Content = document.createElement('div');
// Content.className = 'content';
// header.after(Content);
// for(let i = 1; i <  16; i++){
//   let product = document.createElement('div');
//   let span = document.createElement('span');
//   span.textContent = i;
//   let product_text = document.createTextNode('Product');
//   product.className = 'product';

//   Content.append(product);
//   product.prepend(span);
//   product.append(product_text);

//   Content.style.cssText = 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; background-color: #f1f1f1; padding: 20px';
//   product.style.cssText = 'background-color: white; display: flex; flex-direction: column; text-align: center; padding: 20px; border: 1px solid; border-color:black; border-radius: 5px; color: gray; font-size: 14px';
//   span.style.cssText = 'font-size: 25px; color: black; margin-bottom: 10px; font-weight:normal; margin-top';
// }

// let footer = document.createElement('footer');
// footer.textContent = "Copyright 2025";
  
// footer.style.cssText = 'font-size: 26px; background-color: #22A96E; text-align: center; color: white; padding: 20px ';

// Content.after(footer);

// new lesson(bom challenge)

