// 💡INDEXES
use("ecommerce");

db.products.getIndexes();
db.products.createIndex({ name: 1 });