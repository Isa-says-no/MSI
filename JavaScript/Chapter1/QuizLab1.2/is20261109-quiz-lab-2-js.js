function LoadFunc() {
console.log("Starting PageTurner Order System Debug Session");
let customerName = "Sarah Johnson";
// BUG 1: Using variable before declaration
console.log("Welcome " + customerName + "!");
        
// Step 1: INSTRUCTION - Move this line ABOVE the console.log
// Replace the blank with "let" to properly declare the variable
        
        
// BUG 2: Tax rate should never change (using let instead of const)
// Step 2: INSTRUCTION - Replace blank with "const" to make it unchangeable
const taxRate = 0.08;
        
// BUG 3: Trying to calculate with undefined values
let bookPrice = 25.99;
// This line is missing - Step 3: INSTRUCTION - Add this line:
// let quantity = 2;
let quantity = 2;
// Calculate totals
let subtotal = bookPrice * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;
        
// Debug logging to track our values
console.log("Order Calculations:");
console.log("Book price: $" + bookPrice);
console.log("Quantity: " + quantity);
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax (8%): $" + tax.toFixed(2));
console.log("Total: $" + total.toFixed(2));
        
// Check for errors in our calculations
if (isNaN(total)) {
    console.error("ERROR: Total calculation failed!");
    console.log("Debug info - bookPrice:", bookPrice, "quantity:", quantity);
} else {
    console.log("SUCCESS: Order calculated correctly!");
            
    // Update the webpage with results
    document.getElementById('results').innerHTML = 
        "<strong>Fixed Results:</strong><br>" +
        "Customer: " + customerName + "<br>" +
        "Book Price: $" + bookPrice + "<br>" +
        "Quantity: " + quantity + "<br>" +
        "Subtotal: $" + subtotal.toFixed(2) + "<br>" +
        "Tax: $" + tax.toFixed(2) + "<br>" +
        "<strong>Total: $" + total.toFixed(2) + "</strong>";
}
        
console.log("Debug session complete!");
}