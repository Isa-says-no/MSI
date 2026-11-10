function LoadFunc() {
    let debugLog = "";
        
    function addDebug(message, color = "#63b3ed") {
        debugLog += `<div style="color: ${color}">${message}</div>`;
        document.getElementById('debugOutput').innerHTML = debugLog;
    }
        
    addDebug("Starting PageTurner Error Handling Test");
        
    // Test 1: Valid customer input
    addDebug("Test 1: Processing valid order...");
    let customerZip = "12345";
        
    // Step 1: INSTRUCTION - Replace blank with "try"
    try {
        addDebug("Checking ZIP code: " + customerZip);
        let zipNumber = parseInt(customerZip);
            
        if (isNaN(zipNumber) || zipNumber < 10000) {
            throw new Error("Invalid ZIP code format");
        }
            
        addDebug("ZIP code is valid: " + zipNumber, "#68d391");
        addDebug("Order can be processed!", "#68d391");
            
    // Step 2: INSTRUCTION - Replace blank with "catch"  
    } catch (err) {
        addDebug("Error caught: " + err.message, "#fc8181");
        addDebug("Showing user-friendly message", "#ffa500");
            
    // Step 3: INSTRUCTION - Replace blank with "finally"
    } finally {
        addDebug("Cleanup: Input validation complete");
    }
        
    // Test 2: Invalid customer input
    addDebug("Test 2: Processing invalid input...");
    let badInput = "ABC123";
        
    try {
        addDebug("Checking ZIP code: " + badInput);
        let zipNumber = parseInt(badInput);
            
        if (isNaN(zipNumber) || zipNumber < 10000) {
            throw new Error("ZIP code must be 5 digits");
        }
            
        addDebug("ZIP code is valid: " + zipNumber, "#68d391");
            
    } catch (err) {
        addDebug("Error caught: " + err.message, "#fc8181");
        addDebug("Suggestion: Please enter a 5-digit ZIP code", "#ffa500");
            
    } finally {
        addDebug("Cleanup: Validation attempt finished");
    }
        
    // Test 3: Book quantity validation
    addDebug("Test 3: Checking book quantity...");
    let bookQuantity = -5;
        
    try {
        addDebug("Validating quantity: " + bookQuantity);
            
        if (bookQuantity <= 0) {
            throw new Error("Quantity must be greater than 0");
        }
            
        if (bookQuantity > 100) {
            throw new Error("Maximum 100 books per order");
        }
            
        addDebug("Quantity is valid: " + bookQuantity, "#68d391");
            
    } catch (err) {
        addDebug("Quantity error: " + err.message, "#fc8181");
        addDebug("Setting quantity to 1 as default", "#ffa500");
        bookQuantity = 1;
        addDebug("Corrected quantity: " + bookQuantity, "#68d391");
            
    } finally {
        addDebug("Cleanup: Quantity check complete");
    }
        
    // Final summary
    addDebug("Error Handling Summary:", "#63b3ed");
    addDebug("• try blocks attempt risky operations");
    addDebug("• catch blocks handle errors gracefully");  
    addDebug("• finally blocks always run for cleanup");
    addDebug("• Scripts stay stable even with bad input");
    addDebug("Error handling test complete!", "#68d391");
}