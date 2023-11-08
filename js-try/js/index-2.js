//  задача 1 

// const productName = "Droid";
//  const pricePerItem = 2000;
// console.log (productName);
// console.log (pricePerItem);

// задача 2 
// let productName = "Droid";
//  let pricePerItem = 2000;
//  productName = "Repair droid";
//  pricePerItem = 2000 + 1500;
//  console.log (productName);
//   console.log (pricePerItem);

// задача 3 ю
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// let isOnline = true;
// let isAdmin = false;
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// завдання 4
// const pricePerItem = 3500;
// const orderedQuantity = 4;

 
// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(pricePerItem * orderedQuantity);

// завдання 5
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = "You picked Droid, price per item is 3500 credits";
 
// завдання 6
// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;

// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in  total price.`;
// console.log(message);

// завдання 7
// function sayHi() {
//     console.log("Hello, this is my first function!")
//   }
//   sayHi();
// завдання 8
// function add(a, b, c) {
//     // let result = (a + b + c);
  
//     console.log(`Addition result equals " ${a + b + c}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10); 
//   add(10, 20, 30);
//   add(5, 10, 15);

// завдання 9 
// function add(a, b, c) {
//     // Change code below this line
  
//   return a + b + c;
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// завдання10
// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };
//   console.log("You picked Radar, price per item is 6150 credits");
//   console.log("You picked Scanner, price per item is 3500 credits");
//   console.log("You picked Reactor, price per item is 8000 credits");
//   console.log("You picked Engine, price per item is 4070 credits");

// завдання 11

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;
  
//     // Change code above this line
//     return totalPrice;
//   };
//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));
//   console.log(calculateTotalPrice(1, 3500));
//   console.log(calculateTotalPrice(12, 70));

// завдання 12
//  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// //     // Change code below this line
  
//  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  
// //     // Change code above this line
//  return  `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   }
//  console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
//  console.log(makeOrderMessage(10, 70, 200));

// завдання 13 

// function isAdult(age) {
//     // Change code below this line
//     const passed = age>= 18;
  
//     // Change code above this line
//     return passed;
//   }

//   console.log(isAdult(20));
//   console.log(isAdult(14));
//   console.log(isAdult(8));
//   console.log(isAdult(37));

// завдання14
// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = SAVED_PASSWORD === password;
  
//     // Change code above this line
//     return isMatch;
//   }
//   console.log(isValidPassword("mangodab3st"));
//   console.log(isValidPassword("kiwirul3z"));
//   console.log(isValidPassword("jqueryismyjam"));

// завдання15
// function checkAge(age) {
//     let message;
  
//     if (age >= 18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }
// console.log(checkAge(20));  
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// завдання 16
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (ordered >= available) {
//         message = 'Not enough goods in stock!';
//       }
//       else {
//         message = 'Order is processed, our manager will contact you.';
//       }
//     // Change code above this line
//     return message;
//   }
// console.log(checkStorage(100, 50));  
// console.log(checkStorage(100, 130));  
// console.log(checkStorage(200, 20));  
// console.log(checkStorage(200, 150));  
// console.log(checkStorage(150, 180));  

// завдання 17
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//       message = 'Insufficient funds!';
//     }
//   else {
//     const creditsLeft = customerCredits - totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
//   }
//     // Change code above this line
//     return message;
//   }
  
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// завдання 18
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (ADMIN_PASSWORD === password) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }
//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword(null));
//   console.log(checkPassword("polyhax"));
//   console.log(checkPassword("jqueryismyjam"));

// завдання 19
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   }
//   else if (available < ordered) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   }
//   else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//     // Change code above this line
//     return message;
//   }
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));

// завдання20
// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; // Change this line
  
//     return isInRange;
//   }
//   console.log(isNumberInRange(10, 30, 17));
//   console.log(isNumberInRange(10, 30, 5));
//   console.log(isNumberInRange(20, 50, 24));
//   console.log(isNumberInRange(20, 50, 76));

// завдання 21
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
  
//     return canAccessContent;
//   }
//   console.log(checkIfCanAccessContent("pro"));
//   console.log(checkIfCanAccessContent("starter"));
//   console.log(checkIfCanAccessContent("vip"));
//   console.log(checkIfCanAccessContent("free"));

// завдання 22
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
  
//     return isNotInRange;
//   }
//   console.log(isNumberNotInRange(10, 30, 17));
//   console.log(isNumberNotInRange(10, 30, 5));
//   console.log(isNumberNotInRange(20, 50, 24));
//   console.log(isNumberNotInRange(20, 50, 76));

// завданн 23                           не зрозуміле для мене.
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
  
//    if (totalSpent >= 50000) {
//       discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000) {
//       discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000) {
//       discount = BRONZE_DISCOUNT;
//     } else {
//       discount = BASE_DISCOUNT;
//     }
  
//     // Change code above this line
//     return discount;
//   }
//    console.log(getDiscount(137000));
//     console.log(getDiscount(46900));
//     console.log(getDiscount(8250));
//     console.log(getDiscount(1300));
//     console.log(getDiscount(5000));
//     console.log(getDiscount(20000));
//   console.log(getDiscount(50000));

// завдання 24
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//      message = available >= ordered ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
  
//     // Change code above this line
//     return message;
//   }
// console.log(checkStorage(100, 50)); 
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// завданн 25
// function getSubscriptionPrice(type) {
//     let price;
    // Change code below this line
  
//    switch (type) { // Change this line
//       case "starter": // Change this line
//         price = 0; // Change this line
//         break;
  
//       case "professional": // Change this line
//         price = 20; // Change this line
//         break;
  
//       case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return price;
//   }
//   console.log(getSubscriptionPrice("professional"));
//   console.log(getSubscriptionPrice("organization"));
//   console.log(getSubscriptionPrice("starter"));

// завдання 26
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
  
//     switch (password) { // Change this line
//               case null: // Change this line
//               message = "Canceled by user!";
//                  break;
          
//                case ADMIN_PASSWORD: // Change this line
//                message = "welcome";
//              break;
//           default:
//             message ="Access denied, wrong password!";
         
//             }
    // if (password === null) {
    //   message = "Canceled by user!";
    // } else if (password === ADMIN_PASSWORD) {
    //   message = "Welcome!";
    // } else {
    //   message = "Access denied, wrong password!";
    // }
  
    // Change code above this line
//     return message;
//   }
// console.log(checkPassword("mangohackzor"));  
// console.log(checkPassword(null)); 
// console.log(checkPassword("polyhax")); 
// console.log(checkPassword("jqueryismyjam"));

// завдання 27 
// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//   switch (country){
//   case "China":
//    message = "Shipping to China will cost 100 credits";
//     break;

//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//     break;

//     case "Australia":
//     message = "Shipping to Australia will cost 170 credits";
//     break;

//     case "Jamaica":
//         message = "Shipping to Jamaica will cost 120 credits";
//     break;

//     default:

//         message = "Sorry, there is no delivery to your country";
//   }
//     // Change code above this line
//     return message;
//   }
// console.log(getShippingCost("Australia"));  
// console.log(getShippingCost("Germany"));  
// console.log(getShippingCost("China"));  
// console.log(getShippingCost("Chile"));  
// console.log(getShippingCost("Jamaica"));  
// console.log(getShippingCost("Sweden"));  

// завдання 28


// function getNameLength(name) {
//     const length = name.length;
//     const message = `Name ${name} is ${length} characters long`;
//     return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// завдання 29
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// завдання30
// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line
  
//     return substring;
//   }
//   console.log(getSubstring("Hello world", 3));
//   console.log(getSubstring("Hello world", 6));
//   console.log(getSubstring("Hello world", 8));
//   console.log(getSubstring("Hello world", 11));
//   console.log(getSubstring("Hello world", 0));

// завдання 31
// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//    if (message.length <= maxLength) {
//       return message;
//     } else {
//       return message.substring(0, maxLength) + "...";
//     }
//     /// Change code above this line
//     return result;
//   }
// console.log(formatMessage("Curabitur ligula sapien", 16)); 
// console.log(formatMessage("Curabitur ligula sapien", 23)); 
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));  
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));  
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));  
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));   


// завдання 32
// function checkAge(age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }
//   console.log(checkAge(20));
//   console.log(checkAge(8));
//  console.log(checkAge(14));
//   console.log(checkAge(38));

// завдання 33
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
    
  
//     if (password === ADMIN_PASSWORD) {
//       message = "Welcome!";
//     } 
//        "Access denied, wrong password!";
    
  
    
//     // Change code above this line
//   }
//  console.log(checkPassword("mangohackzor"));  
//  console.log(checkPassword("polyhax"));  
//  console.log(checkPassword("jqueryismyjam"));  
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
   
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
//       return "Access denied, wrong password!";
    
  
  
//     // Change code above this line
//   }

// завдання  34
// function checkStorage(available, ordered) {
//     // Change code below this line
    
  
//     if (ordered === 0) {
//       return  "Your order is empty!";
//     } else if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } 
//    return "The order is accepted, our manager will contact you";
    
  
   
//     // Change code above this line
//   }

//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));
// завдання 35

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
  
   
  
//     numbers.forEach(function(number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));


// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE);{
//     return "Error! Price exceeds the maximum";
//   }
//       else {
//       return "Success! Price is within acceptable limits";
//     }
//     }
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     } 
  
//   }
  
 

  // class Car {
  //   static #MAX_PRICE = 50000;
  //   static checkPrice(price) {
  //     if (price > Car.#MAX_PRICE) {
  //       return "Error! Price exceeds the maximum";
  //     } else {
  //       return "Success! Price is within acceptable limits";
  //     }
  //   }
  //   constructor({ price }) {
  //     this.price = price;
  //   }
  // }
  // const audi = new Car({ price: 36000 });
  // const bmw = new Car({ price: 64000 });
  
  // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
  // console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
  