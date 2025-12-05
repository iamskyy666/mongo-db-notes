// 💡UPDATE
use("ecommerce");

// db.products.updateOne({ name: "Wireless Mouse" }, { $set: { price: 889 } });

// db.products.updateMany({ category: "Electronics" }, { $inc: { stock: 11 } });

//! Using $push to Add to Arrays

// db.products.updateOne({ name: "Wireless Mouse" }, { $push: { tags: "new" } });