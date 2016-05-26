var data = require('../products.json');

// Write your solutions below


// =============== Part One ==================== //

// var itemTotal = 0;

// for (var i=0; i < data.items.length; i++) {
//   if ( data.items[i].kind === "shopping#product"){
//     itemTotal ++;
//   }
// }

// console.log("Total Items are " + itemTotal);
// console.log("Also, we can grab it from here: " + data.currentItemCount)


// =============== Part Two ==================== //



// for (var i=0; i < data.items.length; i++) {
//   if ( data.items[i].product.inventories[0].availability == "backorder" ){
//     // console.log("inside if  condition");
//     console.log(data.items[i].product.title)
//   }
// }

// =============== Part Three ==================== //

// for (var i=0; i < data.items.length; i++) {
//   if ( data.items[i].product.images.length > 1 ){
//     console.log(data.items[i].product.title)
//   }
// }

// =============== Part Four ==================== //

// for (var i=0; i < data.items.length; i++) {
//   if ( data.items[i].product.brand == "Canon" ){
//     console.log(data.items[i].product.title)
//   }
// }

// =============== Part Five ==================== //

// for (var i=0; i < data.items.length; i++) {
//   if ( data.items[i].product.brand == "Canon" &&
//        data.items[i].product.author.name == "eBay" ){
//     console.log(data.items[i].product.title)
//   }
// }


// =============== Part Six ==================== //

for (var i=0; i < data.items.length; i++) {
  console.log( data.items[i].product.brand +
    " - $" + data.items[i].product.inventories[0].price);
  console.log( data.items[i].product.images[0].link );
  console.log("\n\n");
}
