// Step 1: Create and Initialize Variables
const itemName = "Vanilla Cloud Fragrance";
let unitCost = 9.99;
let currentStock = 100;
let reorderLevel = 120;
let targetStock = 300;
let weeklyDemand = 40;
let supplierLeadTimeWeeks = 2;

// Step 2: Calculate Inventory Metrics
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

// Step 3: Print to Console
console.log("Inventory Reorder Assistant:"
console.log("Iten Name: " + itemName);
console.log("Weeks of Cover: " + weeksOfCover.toFixed(2));
console.log("Reorder Now: " + reorderNow);
console.log("Recommended Reorder Quantity: " + reorderQuantity);
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2));
