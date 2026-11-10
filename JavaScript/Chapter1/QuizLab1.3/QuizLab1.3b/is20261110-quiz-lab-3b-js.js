function LoadFunc() {
    let debugLog = "";
        
    function addDebug(message, color = "#63b3ed") {
        debugLog += `<div style="color: ${color}">${message}</div>`;
        document.getElementById('debugOutput').innerHTML = debugLog;
    }
        
    addDebug("Starting customer validation...");
        
    // Test 1: Age verification for adult books
    let customerAge = 16;
    let minimumAge = 18;
        
    try {
        addDebug("Customer age: " + customerAge);
        addDebug("Required age: " + minimumAge + " or older");
            
        if (customerAge < minimumAge) {
            // Step 1: INSTRUCTION - Replace blank with "throw"
            throw new Error("Customer must be 18 or older");
        }
            
        addDebug("Age verification passed!", "#68d391");
            
    } catch (err) {
        addDebug("Age problem: " + err.message, "#fc8181");
    }
        
    // Test 2: Large order inventory check
    let bigOrder = 20;
    let limitedStock = 8;
        
    try {
        addDebug("Customer wants: " + bigOrder + " books");
        addDebug("We have: " + limitedStock + " books");
            
        if (bigOrder > limitedStock) {
            // Step 2: INSTRUCTION - Replace blank with "throw"  
            throw new Error("Order too large for our stock");
        }
            
        addDebug("Order approved!", "#68d391");
            
    } catch (err) {
        addDebug("Stock problem: " + err.message, "#fc8181");
        addDebug("Telling customer...", "#ffa500");
            
        // Step 3: INSTRUCTION - Replace blank with "alert"
        alert("Sorry! We only have " + limitedStock + " books available.");
    }
        
    addDebug("Validation complete!", "#68d391");
}