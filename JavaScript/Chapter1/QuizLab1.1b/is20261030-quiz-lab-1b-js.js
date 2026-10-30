let totalBooks = 10;       
    let freeBooks = totalBooks % 3;
    let paidSets = Math.floor(totalBooks / 3); 
    let paidBooks = totalBooks - freeBooks;
        
    console.log("PageTurner Promotion Calculator");
    console.log("Total books purchased: " + totalBooks);
    console.log("Complete sets of 3: " + paidSets);
    console.log("Books you pay for: " + paidBooks);
    console.log("FREE books you get: " + freeBooks);
    console.log("You saved money on " + freeBooks + " books!");
        
document.getElementById('results').innerHTML = 
    "Purchase Summary:<br>" +
    "• Total books: " + totalBooks + "<br>" +
    "• Books you pay for: " + paidBooks + "<br>" +
    "• FREE books: " + freeBooks + "<br>" +
    "• Money saved: " + freeBooks + " books!";