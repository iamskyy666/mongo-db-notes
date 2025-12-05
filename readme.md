
# 🌐 **NoSQL Databases — Full Explanation**

## 1. **What is a NoSQL Database?**

A **NoSQL (Not Only SQL)** database is a type of database that stores and manages data in **non-relational** formats.
Unlike relational (SQL) databases that use tables, rows, and columns, NoSQL databases use **flexible schemas** and different storage models such as:

* Documents
* Key-value pairs
* Wide-column stores
* Graph structures

NoSQL databases were created to handle **large volumes of unstructured or semi-structured data**, support **horizontal scaling**, and power **high-performance applications** like social networks, e-commerce, and real-time analytics.

---

## 2. **Why NoSQL Was Created**

Traditional SQL databases struggled with:

* Rapidly growing data (big data)
* Unstructured data (JSON, logs, images, sensors)
* Need for massive scale (millions of users)
* Distributed architectures (global apps)
* Real-time performance

NoSQL solved these problems by offering:

* Schema flexibility
* Horizontal sharding
* High write/read throughput
* Easy scaling across servers

---

## 3. **Core Characteristics of NoSQL**

### ✔ **Schema-less (Flexible Schema)**

We don’t need to predefine columns.
For example, in MongoDB, we can insert documents with different fields.

### ✔ **Horizontal Scaling**

Instead of upgrading one big server (vertical scaling), NoSQL allows us to scale by adding more servers (horizontal).

### ✔ **High Performance**

Optimized for fast reads and writes.

### ✔ **Distributed by Design**

Built for replication + sharding across multiple nodes.

### ✔ **Handles Unstructured and Semi-Structured Data**

Perfect for JSON, logs, API responses, social media, IoT data.

---

# 4. **Types of NoSQL Databases**

### **1. Document Databases (e.g., MongoDB, CouchDB)**

* Store data in JSON-like documents.
* Flexible schema.
* Best for: APIs, user profiles, content management.

**Example Document (MongoDB):**

```json
{
  "name": "Skyy",
  "age": 29,
  "skills": ["React", "Node.js"],
  "location": "Kolkata"
}
```

### **2. Key-Value Stores (e.g., Redis, DynamoDB)**

* Simplest type: data stored as `{ key : value }`.
* Super fast.
* Best for: caching, sessions, real-time counters.

### **3. Column-Family / Wide-Column Stores (e.g., Cassandra, HBase)**

* Data stored in rows and dynamic columns.
* Designed for massive write throughput.
* Best for: analytics, log data, IoT.

### **4. Graph Databases (e.g., Neo4j, ArangoDB)**

* Data stored as **nodes and edges**.
* Best for: social networks, recommendations, relationships.

---

# 5. **NoSQL vs SQL (Key Differences)**

| Feature           | SQL                   | NoSQL                                        |
| ----------------- | --------------------- | -------------------------------------------- |
| Structure         | Tables, rows, columns | Documents, key-value, graphs                 |
| Schema            | Fixed schema          | Flexible schema                              |
| Scaling           | Vertical              | Horizontal                                   |
| ACID transactions | Strong support        | Limited (but improving)                      |
| Query language    | SQL                   | Varied (MongoDB queries, GraphQL-like, etc.) |
| Best for          | Structured data       | Unstructured/BIG data                        |
| Example           | MySQL, PostgreSQL     | MongoDB, Redis, Cassandra                    |

---

# 6. **When Should We Use NoSQL?**

## Use NoSQL When:

✔ We need **scalability**
✔ Our data is **unstructured**
✔ Schema changes often
✔ Massive amounts of data
✔ Real-time performance is needed
✔ We want a cloud-native, distributed system

## Use SQL When:

✔ Data is structured and relational
✔ Complex transactions are needed
✔ Banking-like ACID guarantees
✔ Relationships are strong

---

# 7. **Advantages of NoSQL**

### ✔ Flexibility — no schema migration needed

### ✔ High scalability (horizontal)

### ✔ High performance for specific workloads

### ✔ Naturally designed for cloud and distributed systems

### ✔ Great for real-time apps

### ✔ Can handle massive, unstructured data

---

# 8. **Disadvantages of NoSQL**

### ❌ Limited ACID transactions (some DBs improved this)

### ❌ No universal query language

### ❌ Data consistency may be weaker (depending on DB)

### ❌ Harder to perform complex joins

---

# 9. **Inside NoSQL — Architecture Concepts**

### **1. Sharding**

Splitting data into shards across multiple servers.

### **2. Replication**

Copying data to multiple nodes for availability.

### **3. CAP Theorem**

No database can provide all three perfectly:

* **C**onsistency
* **A**vailability
* **P**artition tolerance

NoSQL databases choose different trade-offs.

### **4. Indexing**

NoSQL databases create indexes to speed up queries.

---

# 10. **Popular NoSQL Databases & Their Use Cases**

### **MongoDB**

* Most popular NoSQL database
* Document model (JSON)
* Flexible schema
* Great for MERN/MEAN stack apps
* Used in: e-commerce, SaaS, IoT, healthcare apps

### **Redis**

* In-memory
* Extremely fast
* Used for caching, rate limiting, sessions

### **Cassandra**

* Wide-column
* Extremely scalable
* Great for big data and analytics pipelines

### **DynamoDB**

* AWS-managed NoSQL
* Serverless scaling
* Key-value + document store

### **Neo4j**

* Graph database
* Ideal for relationships (friends, followers)

---

# 11. **NoSQL in the Real World**

### NoSQL powers:

* Instagram feeds
* Amazon product recommendations
* YouTube metadata
* Uber ride tracking
* Netflix streaming preferences
* E-commerce cart systems
* Real-time chats and notifications

---

# 12. **Special Notes for MongoDB**

Because we’re working with MERN and MongoDB Atlas, here are MongoDB-specific insights:

### ✔ MongoDB uses BSON (binary JSON)

### ✔ Supports indexing, aggregation pipelines

### ✔ Supports ACID transactions for multi-doc operations

### ✔ Perfect match for Node.js because JSON ↔ BSON

### ✔ Scales easily with Atlas built-in sharding

### ✔ Flexible schema simplifies full-stack development

---

# 13. Summary (In Simple Terms)

NoSQL databases are:

* Flexible
* Scalable
* Fast
* Designed for modern web + mobile apps
* Great for unstructured data
* Often easier to use with JavaScript/Node.js

They are not:

* A replacement for SQL in all cases
* Ideal for complex transactions
* Best for strongly relational data

---

# 🟢 **MongoDB — Complete Explanation (From Zero to Expert)**

MongoDB is the world’s most popular **NoSQL, document-oriented, distributed database**, designed for modern applications that need **flexibility, high performance, horizontal scaling, and JSON-based data modeling**.

Let’s break down **EVERYTHING** step-by-step.

---

# 1️⃣ **What Is MongoDB?**

MongoDB is a **NoSQL document database** that stores data in **documents**, not tables.

* Uses **JSON-like** structure called **BSON**
* Schema is **flexible** (no strict tables/columns)
* Built to scale **horizontally** across servers
* Excellent for **real-time, high-traffic, cloud-native apps**

Because it stores data in JSON-like structures, it's perfect for JavaScript developers (like us), especially in the **MERN stack**.

---

# 2️⃣ **MongoDB vs SQL Databases**

| Feature      | MongoDB                              | SQL (MySQL, PostgreSQL) |
| ------------ | ------------------------------------ | ----------------------- |
| Data Model   | Documents (JSON)                     | Tables, rows, columns   |
| Schema       | Flexible                             | Fixed                   |
| Scaling      | Horizontal                           | Vertical                |
| Joins        | Limited (lookup)                     | Strong support          |
| Transactions | Supported (from v4)                  | Default                 |
| Performance  | Very fast for reads/writes           | Good but rigid          |
| Ideal For    | Modern apps, APIs, unstructured data | Relational data         |

---

# 3️⃣ **Core Concepts in MongoDB**

### ✔ **Databases**

A MongoDB **cluster** has multiple **databases**.

### ✔ **Collections**

Equivalent of “tables” in SQL, but schema-less.

### ✔ **Documents**

Equivalent of “rows”, but much more flexible.

Example Document:

```json
{
  "name": "Skyy",
  "age": 29,
  "profession": "Software Engineer",
  "skills": ["React", "Node.js"],
  "location": {
    "city": "Kolkata",
    "country": "India"
  }
}
```

### ✔ **BSON**

MongoDB stores data as **Binary JSON (BSON)** which adds more data types:

* Date
* ObjectId
* Binary
* Decimal128
* Boolean

---

# 4️⃣ **MongoDB Atlas (Cloud Version)**

MongoDB Atlas is MongoDB's **fully managed cloud service**, offering:

* Automatic scaling
* Backups
* Monitoring
* Global clusters
* Integrated security
* Extremely easy database deployment

Most MERN developers use Atlas; we already use it in our projects.

---

# 5️⃣ **CRUD Operations**

CRUD = **Create, Read, Update, Delete**

### ➤ Create

```js
db.users.insertOne({ name: "Skyy", age: 29 })
```

### ➤ Read

```js
db.users.find({ age: 29 })
```

### ➤ Update

```js
db.users.updateOne({ name: "Skyy" }, { $set: { age: 30 } })
```

### ➤ Delete

```js
db.users.deleteOne({ name: "Skyy" })
```

MongoDB uses **operators like `$set`, `$push`, `$pull`, `$inc`, `$gt`, `$lt`, `$regex`** etc.

---

# 6️⃣ **Indexes (VERY IMPORTANT)**

Indexes make queries **fast**.

```js
db.users.createIndex({ email: 1 }) // ascending index
```

Indexes:

* Improve query speed
* Increase write cost (because they update per insert)
* Essential for large-scale apps

---

# 7️⃣ **Aggregation Pipeline (MongoDB’s Superpower)**

Used for **advanced queries**, analytics, transformations.

Example:

```js
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }
])
```

Steps called **stages**:

* $match
* $group
* $sort
* $project
* $lookup (join)
* $limit
* $addFields

Aggregation = powerful alternative to SQL joins and stored procedures.

---

# 8️⃣ **Relationships in MongoDB**

MongoDB does **not** force strict relationships, but supports:

### 1️⃣ **Embedding** (nested documents)

Best for: small, related data

```json
{
  "name": "Skyy",
  "orders": [
    { "product": "Shoes", "price": 1200 },
    { "product": "Shirt", "price": 800 }
  ]
}
```

### 2️⃣ **Referencing** (manual joins)

Best for: large or frequently changing data

```json
{
  "userId": ObjectId("..."),
  "productId": ObjectId("...")
}
```

### 3️⃣ **$lookup** = MongoDB JOIN

```js
{
  $lookup: {
    from: "products",
    localField: "productId",
    foreignField: "_id",
    as: "productDetails"
  }
}
```

---

# 9️⃣ **Sharding (Horizontal Scaling)**

MongoDB supports **sharding**, which splits data across servers.

Benefits:

* Huge performance boosts
* Supports massive databases
* Perfect for global-scale apps

Shard keys decide how data is distributed.

---

# 🔟 **Replication (High Availability)**

MongoDB replica sets include:

* **Primary** (writes)
* **Secondary** (read-only copies)
* Automatic failover

If primary goes down → a secondary becomes primary automatically.

---

# 1️⃣1️⃣ **Transactions in MongoDB**

Since version 4.0, MongoDB supports **multi-document ACID transactions**, like SQL databases.

```js
const session = client.startSession();
session.startTransaction();

try {
  await users.updateOne(...);
  await orders.updateOne(...);
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
}
```

Used for:

* Payments
* Banking
* Inventory

---

# 1️⃣2️⃣ **MongoDB with Node.js (Important for MERN Developers)**

Most MERN apps use **Mongoose**, a popular ODM library.

### Example Schema:

```js
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number
});
```

### Creating a Model:

```js
const User = mongoose.model("User", UserSchema);
```

### Querying:

```js
await User.find({ age: { $gte: 18 } })
```

Mongoose adds:

* Validation
* Middleware
* Schemas
* Query helpers

---

# 1️⃣3️⃣ **Popular Use Cases**

MongoDB powers:

* E-commerce: carts, products, orders
* Healthcare systems
* Social media feeds
* Real-time chats
* IoT data collection
* Logistics and tracking
* Multi-tenant SaaS apps
* Streaming metadata
* Analytics dashboards

---

# 1️⃣4️⃣ **Advantages of MongoDB**

### ✔ Flexible schema

### ✔ Easy to use (JSON-style documents)

### ✔ Horizontally scalable

### ✔ Great for modern apps

### ✔ High performance

### ✔ Perfect for JavaScript developers

### ✔ Great community + cloud support

---

# 1️⃣5️⃣ **Disadvantages**

### ❌ Weaker relational joins (but `$lookup` helps)

### ❌ Requires good schema design

### ❌ More manual responsibility for data consistency

### ❌ Indexing must be done carefully

---

# 1️⃣6️⃣ **Best Practices for MongoDB**

✔ Always index fields used in searches
✔ Use embedding for small related data
✔ Use referencing for large data
✔ Avoid deep nested documents
✔ Use sharding when database grows
✔ Validate schema using Mongoose
✔ Use `.lean()` in queries to speed up reads
✔ Keep documents under 16MB

---

# 1️⃣7️⃣ **MongoDB in the MERN Stack**

MERN = MongoDB + Express + React + Node

Flow:

1. **React** → sends request
2. **Express/Node** → receives & validates
3. **MongoDB** → stores, retrieves data

MongoDB fits naturally because:

* Frontend uses JSON
* Backend uses JSON
* Database stores JSON

Perfect match.

---

# 1️⃣8️⃣ **Summary (Simple Terms)**

MongoDB is:

* a **NoSQL document database**
* that stores flexible **JSON-like documents**
* scales **horizontally**
* is extremely **fast**
* easy for **JavaScript developers**
* perfect for modern cloud apps
* used widely in the **MERN stack**

---

# 🟡 **What is BSON?**

**BSON = Binary JSON**
It is a **binary-encoded data format** designed by MongoDB to store documents efficiently and make reading, writing, and searching extremely fast.

Even though the name suggests “Binary JSON”, BSON is **not** identical to JSON.
Instead, BSON:

* Supports **more data types** than JSON
* Stores data in a **binary format** instead of plain text
* Is optimized for **speed** (fast scanning, fast indexing)
* Is optimized for **space** (most fields encoded compactly)

MongoDB uses BSON **internally** for:

* Storing documents on disk
* Exchanging data between server ↔ drivers
* Representing documents in memory
* Index storage
* Query processing

---

# 🧠 Why BSON Exists (What JSON Couldn’t Do)

### JSON Problems:

JSON is human-readable, but:

| Limitation                    | Problem                                                      |
| ----------------------------- | ------------------------------------------------------------ |
| No variety of numeric types   | JSON has only one number type (double precision).            |
| No efficient binary format    | JSON stores everything as text, wastes space, slow to parse. |
| No dates                      | JSON has only strings, not actual date types.                |
| No 32-bit ints or 64-bit ints | Required for precision in databases.                         |
| No object ID type             | MongoDB needed something unique per document.                |
| No efficient traversal        | JSON requires parsing every character.                       |

### BSON solves all of these

BSON adds:

* 32-bit integers
* 64-bit integers
* High-precision decimal128
* Binary data
* ObjectId
* Date type
* Timestamps
* Boolean
* Regex
* MinKey, MaxKey
* Arrays
* Embedded subdocuments

…and stores them in a **compact binary form**.

---

# 🧬 **BSON Structure Internally** (How MongoDB Stores Documents)

Every BSON document has:

```
<total document size in bytes>
<field1 type> <field1 name> <field1 value>
<field2 type> <field2 name> <field2 value>
...
<null terminator>
```

### Example BSON document:

JSON:

```json
{ "name": "John", "age": 25 }
```

Internal BSON representation (conceptually):

```
16                      → total byte size 
02 6E 61 6D 65 00       → type=string, field name='name'
04 00 00 00 4A 6F 68..  → length + "John"
10 61 67 65 00          → type=int32, field=age
19 00 00 00             → age = 25
00                      → null terminator
```

MongoDB can **jump directly to fields** because each field starts with a type identifier.

---

# 🔬 **All BSON Data Types Explained**

Here is the full list of BSON types used in MongoDB:

### **1. Double (64-bit floating point)**

Used for numeric values with decimals.

Example:

```js
{ price: 25.75 }
```

---

### **2. String**

UTF-8 encoded.

```js
{ name: "Laptop" }
```

---

### **3. Object (Embedded Document)**

Documents inside documents.

```js
{ user: { name: "John", age: 30 } }
```

---

### **4. Array**

List of values.

```js
{ tags: ["electronics", "gaming"] }
```

---

### **5. Binary Data**

Arbitrary byte data (e.g., images, encrypted data).

```js
{ file: <Binary Data> }
```

MongoDB GridFS uses this for large files.

---

### **6. Undefined** (deprecated)

---

### **7. ObjectId**

MongoDB’s default primary key.
12-byte structure:

| Bytes | Meaning                      |
| ----- | ---------------------------- |
| 4     | timestamp                    |
| 5     | machine + process identifier |
| 3     | random increment counter     |

Example:

```
ObjectId("65c4321fea8902bb139a77a2")
```

---

### **8. Boolean**

```js
{ isAvailable: true }
```

---

### **9. Date**

Stored as milliseconds since Unix epoch.

```js
{ createdAt: new Date() }
```

---

### **10. Null**

```js
{ middleName: null }
```

---

### **11. Regular Expression**

```js
{ name: /John/i }
```

---

### **12. JavaScript Code**

Used in server-side scripts, but mostly avoided now.

---

### **13. Symbol** (rare)

---

### **14. Int32 (32-bit integer)**

Used for small integers.

```js
{ quantity: 10 }
```

---

### **15. Timestamp**

Used internally for replication.

Not the same as Date.

---

### **16. Int64 (Long)**

Needed for large integers.

---

### **17. Decimal128**

High precision decimals.
Used for:

* Money
* Banking
* Scientific calculations

```js
{ price: NumberDecimal("9999.99") }
```

---

### **18. MinKey / MaxKey**

Used to compare values. Special types used in queries.

---

# 🧩 How BSON Helps MongoDB Perform Better

### **1. Fast Traversal**

Binary structure allows jumping through fields without parsing character-by-character like JSON.

### **2. More Efficient Storage**

Binary encoding reduces space usage (especially for numbers & dates).

### **3. Richer Data Types**

Essential for databases—especially numeric precision.

### **4. Faster in Memory**

BSON is designed to be decoded quickly, improving query performance.

### **5. Indexing**

MongoDB indexes store values in BSON format.

---

# 📦 BSON vs JSON vs Extended JSON

| Feature           | JSON | Extended JSON | BSON |
| ----------------- | ---- | ------------- | ---- |
| Human-readable    | ✔️   | ✔️            | ❌    |
| Machine-efficient | ❌    | ❌             | ✔️   |
| Has dates         | ❌    | ✔️            | ✔️   |
| Has binary data   | ❌    | ✔️            | ✔️   |
| Has ObjectId      | ❌    | ✔️            | ✔️   |

Extended JSON example:

```json
{ "_id": { "$oid": "65f123a2..." } }
```

---

# 📌 BSON in the Mongo Shell

When we insert a document:

```js
db.users.insertOne({ name: "John", age: 25 });
```

Shell shows JSON.
But on disk, it is stored as **BSON**.

The shell automatically **converts BSON → JSON-like output** for readability.

---

# 🧠 Why Developers Should Understand BSON

For serious MongoDB development, BSON knowledge helps us:

### ✔ Handle correct numeric types (int vs double vs decimal128)

### ✔ Avoid common bugs (floating-point errors)

### ✔ Design efficient schemas

### ✔ Understand `.explain()` output

### ✔ Handle ObjectId behavior

### ✔ Use binary fields & GridFS

### ✔ Predict storage cost

### ✔ Optimize queries and indexes

---

# 🎯 Summary (in simple words)

* BSON is **Binary JSON**, optimized for speed and storage.
* It adds many **extra data types** beyond JSON.
* MongoDB stores everything internally in BSON.
* BSON is **not human readable**, but the shell converts it for us.
* BSON helps MongoDB become fast, flexible, and scalable.

---

Below is **the most complete, deeply detailed, interview-level explanation of indexing in MongoDB** — from fundamentals to advanced tuning, covering internals, cost, types, pitfalls, and best-practices.

We’ll explore **everything**:

* What an index is and how MongoDB stores it internally
* Types of indexes
* Covered queries
* Multikey indexing
* Partial and sparse indexes
* TTL, hashed, text, geo indexes
* How indexing affects performance
* When indexes hurt us
* Collations, cardinality, selectivity
* How index usage is chosen
* Compound index rules
* Practical patterns for real-world apps (MERN, eCommerce, logging systems, etc.)

---

# ✅ **1. What is an Index in MongoDB (Deep Definition)**

A **MongoDB index** is a **special ordered data structure** stored separately from documents in a collection.
It behaves like the index of a book: instead of scanning the entire book, MongoDB jumps directly to the page where the value is located.

Internally:

### **🔹 MongoDB uses a B-tree / B+tree–like structure**

* Balanced tree
* Sorted by index key
* Fast lookups (logarithmic time complexity: O(log n))
* Supports range queries efficiently (`$gt`, `$lt`, `$gte`, `$lte`)

### **🔹 Data in an index is stored as key/value:**

```
(key) → pointer to actual document location
```

### **🔹 Indexes are stored in RAM**

Because they must be fast.

If our working set (frequently accessed data) + indexes > available RAM → performance drops.

---

# ✅ **2. Why Indexes Matter**

### Without indexes

MongoDB does **COLLSCAN** → collection scan
→ checks every document in the collection
→ slow when the collection is large (millions of docs)

### With indexes

MongoDB performs **IXSCAN** → index scan
→ quickly jumps to relevant documents
→ extremely fast

---

# ✅ **3. Creating an Index**

### Basic index

```js
db.users.createIndex({ email: 1 });
```

* `1` = ascending
* `-1` = descending
* For single-field indexes ascending/descending doesn't matter.

### Check existing indexes

```js
db.users.getIndexes();
```

### Drop index

```js
db.users.dropIndex("email_1");
```

---

# ✅ **4. Single-Field Index**

```js
db.products.createIndex({ price: 1 });
```

Helps queries like:

```js
db.products.find({ price: { $gt: 500 } });
db.products.find().sort({ price: 1 });
```

---

# ✅ **5. Compound Index (Most Important Topic)**

A compound index indexes **multiple fields in one index**.

Example:

```js
db.users.createIndex({ age: 1, city: 1 });
```

This index will support queries on:

* `{ age: value }`
* `{ age: value, city: value }`
* Range queries on age followed by equality on city

### ❌ BUT NOT THIS:

`{ city: value }`
— because **the index order matters**.

---

# 📌 **THE GOLDEN RULE OF COMPOUND INDEXES**

🔥 **“Prefix Rule” / Leftmost Prefix Rule**

For an index:

```js
{ a: 1, b: 1, c: 1 }
```

It supports:

* `a`
* `a, b`
* `a, b, c`

BUT **not**:

* `b`
* `b, c`
* `c`
* `a, c` (skips b)

**MongoDB must follow the order.**

---

# ⭐ Example (Important MERN Example)

Query:

```js
db.orders.find({ userId: 13, status: "Pending" }).sort({ createdAt: -1 })
```

Best index:

```js
db.orders.createIndex({ userId: 1, status: 1, createdAt: -1 });
```

Why?

* Equality → comes first (userId & status)
* Then sort → createdAt

---

# ✅ **6. Multikey Indexes (for arrays)**

If a document contains:

```js
{ tags: ["tech", "coding", "ai"] }
```

MongoDB automatically creates **one index entry per array value**.

```js
db.articles.createIndex({ tags: 1 });
```

Supported queries:

```js
db.articles.find({ tags: "ai" });
```

### ⚠ Limitations:

* Only one multikey field per compound index unless using different subpaths.
* Range queries can become expensive.

---

# ✅ **7. Text Indexes**

```js
db.posts.createIndex({ content: "text" });
```

Supports:

```js
db.posts.find({ $text: { $search: "mongodb indexing" } });
```

### Features:

* stemming (`running` → `run`)
* stop words removal
* case-insensitive
* multilingual support with special analyzers

### ⚠ Limitations:

* Only one text index allowed per collection.
* Cannot mix text with non-text fields in same index except as metadata fields.

---

# ✅ **8. Hashed Indexes**

Used for **sharding**, equal distribution of keys.

```js
db.users.createIndex({ userId: "hashed" });
```

Pros:

* Avoids hotspot issues
* Good for equality lookups

Cons:

* ❌ Cannot support range queries
* ❌ Cannot be used for sorting

---

# ✅ **9. Partial Indexes**

Index only documents that match a filter.

```js
db.users.createIndex(
  { email: 1 },
  { partialFilterExpression: { emailVerified: true } }
);
```

Benefits:

* Smaller index
* Faster writes
* Lower memory usage

Perfect for:

* soft-deleted data
* sparse categories
* flags (like verified users)

---

# ✅ **10. Sparse Indexes**

Does not index documents where the field is missing or null.

```js
db.users.createIndex({ phone: 1 }, { sparse: true });
```

Good when:

* Not all docs have the key
* Field appears rarely

⚠ Danger:
Sparse searches may return **no results** if queried incorrectly.

---

# ✅ **11. Unique Indexes**

```js
db.users.createIndex({ email: 1 }, { unique: true });
```

Prevents duplicates.

---

# ✅ **12. TTL Indexes**

Time-to-live → auto-delete documents.

```js
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

Use cases:

* sessions
* logs
* temp data

---

# ✅ **13. Covered Queries**

A query is **covered** when:

* All fields in filter are in index
* All fields returned are in index
* No need to touch the document on disk → super fast

Example:

```js
db.users.createIndex({ email:1, age:1 });

db.users.find({ email: "a@b.com" }, { email:1, age:1, _id:0 });
```

MongoDB serves the query **entirely from the index** → best performance.

---

# ✅ **14. Indexing and Sorting**

Sorting uses indexes **only when index prefix matches sort order**.

Example:

```js
db.products.createIndex({ price: 1 });
```

Sort works:

```js
db.products.find().sort({ price: 1 });
```

Does NOT work:

```js
db.products.find().sort({ rating: 1 }); // full in-memory sort
```

---

# ✅ **15. How MongoDB Chooses an Index**

MongoDB runs a **query planner**:

* Tests candidate indexes
* Predicts cost
* Picks the cheapest index plan

Use `.explain()` to see what’s happening:

```js
db.users.find({ age: 19 }).explain("executionStats")
```

Look for:

* `stage: "IXSCAN"` → good
* `stage: "COLLSCAN"` → bad
* `nReturned`, `nExamined`
* `totalKeysExamined`, `totalDocsExamined`

Ideally:

```
totalDocsExamined = 0
```

---

# ❌ **16. When Indexes Hurt Performance**

### 1. Every index increases WRITE cost

On insert/update/delete:

* MongoDB updates index entries
* More indexes → slower writes

### 2. Indexes consume RAM

Index too large → evicts our working set → performance tanks

### 3. Wrong compound index ordering

Index `{ age:1, city:1 }` is useless for queries on `{ city }`.

### 4. Over-indexing

More indexes ≠ better performance.

---

# 🔥 **17. Best Practices (Real World)**

### ✔ Prefer compound indexes over multiple single-field indexes

→ Better performance & fewer index scans

### ✔ Equality → Sort → Range (ESR Rule)

Order fields in an index like:

1. equality filters first
2. sort fields next
3. range queries last

### ✔ Avoid indexing low-cardinality fields

Bad: gender, active flag, boolean, category if small set.

### ✔ Use `partialFilterExpression` for sparse data

### ✔ Use `.hint()` only for debugging

(forcing wrong index can break production)

---

# 🔥 Full Example: Best Index for an E-Commerce Query

Query:

```js
db.orders.find({
  userId: 123,
  status: "Delivered",
  total: { $gte: 500 }
}).sort({ createdAt: -1 });
```

Best compound index:

```js
db.orders.createIndex({
  userId: 1,       // equality
  status: 1,       // equality
  createdAt: -1,   // sorting
  total: 1         // range
});
```

Follows ESR rule:

* equality fields first
* sort fields next
* range fields last

---

# ⭐ Final Summary Table

| Feature        | Purpose                       |
| -------------- | ----------------------------- |
| Single Index   | Simple lookups                |
| Compound Index | Optimizes multi-field queries |
| Multikey Index | Arrays                        |
| Partial Index  | Only some docs indexed        |
| Sparse Index   | Skip missing fields           |
| Unique Index   | Prevent duplicates            |
| TTL Index      | Auto-delete docs              |
| Text Index     | Full-text search              |
| Hashed Index   | Sharding, equality lookup     |
| Covered Query  | Extreme speed                 |

---

Let’s build a solid mental model and a working blueprint for using **MongoDB as the database with Golang + Gin**. We’ll cover architecture, best practices, code you can copy, production concerns (pooling, timeouts, TLS), transactions, testing tips, and a recommended project layout.

Below are a few authoritative references we leaned on while preparing this: the official MongoDB Go driver docs (connect & tutorials), the official tutorial that pairs Gin + Go driver, connection-pool guidance, and transaction docs. ([mongodb.com][1])

---

# 1) High-level design & responsibilities

* **Single global Mongo client**: create one `*mongo.Client` per process and reuse it. The client manages connection pools under the hood. Creating a new client per request is expensive and will exhaust connections. ([mongodb.com][1])
* **Context per operation**: use `context.Context` with reasonable timeouts for each DB call; never reuse a cancelled context. Timeouts protect your app and avoid leaked goroutines. ([Go Packages][2])
* **Dependency injection into handlers**: inject the DB (or collections) into Gin handlers via middleware or an application struct.
* **Graceful shutdown**: disconnect the client on shutdown to allow the driver to close pools cleanly. ([mongodb.com][1])

---

# 2) Dependencies & install

```bash
go get go.mongodb.org/mongo-driver/mongo
go get github.com/gin-gonic/gin
```

(Driver docs & examples use `go.mongodb.org/mongo-driver`.) ([GitHub][3])

---

# 3) Boilerplate: connect, ping, graceful shutdown

```go
package db

import (
    "context"
    "time"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "log"
)

func Connect(ctx context.Context, uri string) (*mongo.Client, error) {
    // ctx should have timeout (e.g., 10-20s) when calling Connect
    clientOpts := options.Client().ApplyURI(uri)
    // configure pool if needed:
    // clientOpts.SetMaxPoolSize(100)
    client, err := mongo.Connect(ctx, clientOpts)
    if err != nil {
        return nil, err
    }
    // Ping to verify connection
    pingCtx, cancel := context.WithTimeout(ctx, 5*time.Second)
    defer cancel()
    if err := client.Ping(pingCtx, nil); err != nil {
        return nil, err
    }
    return client, nil
}

func Disconnect(ctx context.Context, client *mongo.Client) error {
    return client.Disconnect(ctx)
}
```

**Notes**: pass an explicit timeout on the `Connect` call (we usually use 10–20s). Ping verifies connectivity. ([Go Packages][2])

---

# 4) Wire Mongo into Gin (middleware / app struct)

Approach A — *application struct* (explicit DI):

```go
type App struct {
    Router *gin.Engine
    DB     *mongo.Database
}

func NewApp(db *mongo.Database) *App {
    r := gin.Default()
    a := &App{Router: r, DB: db}
    // register handlers with closures capturing a.DB
    r.GET("/users/:id", a.getUser)
    return a
}
```

Approach B — *Gin middleware* that attaches DB or collections to `*gin.Context`:

```go
func DBMiddleware(db *mongo.Database) gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Set("db", db) // or set specific collection
        c.Next()
    }
}
```

Then in handler:

```go
db := c.MustGet("db").(*mongo.Database)
users := db.Collection("users")
```

We prefer the app-struct pattern for type-safety and ease of testing, but middleware is quick for small apps.

---

# 5) Models, BSON tags, and validation

Define models with BSON tags for Mongo encoding/decoding:

```go
type User struct {
    ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
    Name      string             `bson:"name" json:"name" binding:"required"`
    Email     string             `bson:"email" json:"email" binding:"required,email"`
    CreatedAt time.Time          `bson:"createdAt" json:"createdAt"`
}
```

* Use `primitive.ObjectID` for `_id`.
* Use Gin’s `binding` tags for request validation, and keep BSON/JSON tags in sync where possible.

---

# 6) Common CRUD examples (concise, idiomatic)

Insert document:

```go
func createUser(ctx context.Context, coll *mongo.Collection, u *User) (*mongo.InsertOneResult, error) {
    u.CreatedAt = time.Now().UTC()
    return coll.InsertOne(ctx, u)
}
```

Find one by id:

```go
func getUserByID(ctx context.Context, coll *mongo.Collection, idStr string) (*User, error) {
    id, err := primitive.ObjectIDFromHex(idStr)
    if err != nil { return nil, err }
    var u User
    err = coll.FindOne(ctx, bson.M{"_id": id}).Decode(&u)
    if err == mongo.ErrNoDocuments { return nil, nil }
    return &u, err
}
```

Find many (cursor):

```go
cur, err := coll.Find(ctx, bson.M{"active": true})
defer cur.Close(ctx)
for cur.Next(ctx) {
    var u User
    if err := cur.Decode(&u); err != nil { ... }
}
```

Update:

```go
res, err := coll.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": bson.M{"name": "New"}})
```

Delete:

```go
res, err := coll.DeleteOne(ctx, bson.M{"_id": id})
```

**Remember**: always pass a context with timeout for each operation.

---

# 7) Indexes & performance

* Create indexes for fields used in filters/sorts (e.g., `email` unique index). Creating indexes at app startup is common for small apps, or via migrations for larger apps.
* Use `coll.Indexes().CreateOne(ctx, mongo.IndexModel{ Keys: bson.D{{"email", 1}}, Options: options.Index().SetUnique(true) })`.
* Tune `maxPoolSize`, `minPoolSize` when you have predictable concurrency/throughput needs; the driver manages pools internally but we can override defaults. ([mongodb.com][4])

---

# 8) Transactions (multi-document / multi-collection)

* Transactions require a **replica set** or **sharded cluster**; single-node standalone does not support them. Use transactions only when atomicity across multiple documents/collections is required. ([mongodb.com][5])

Example:

```go
session, err := client.StartSession()
if err != nil { ... }
defer session.EndSession(ctx)

callback := func(sessCtx mongo.SessionContext) (interface{}, error) {
    if _, err := collA.InsertOne(sessCtx, docA); err != nil { return nil, err }
    if _, err := collB.UpdateOne(sessCtx, filterB, updateB); err != nil { return nil, err }
    return nil, nil
}

_, err = session.WithTransaction(ctx, callback)
```

The driver takes care of retries for transient errors if you use `WithTransaction`. Test transaction flows carefully. ([mongodb.com][5])

---

# 9) Connection pool & timeouts (production concerns)

* **Pool**: defaults are reasonable; adjust `MaxPoolSize` when connection limits or concurrency demand it. Monitor pool wait times to detect undersizing. ([mongodb.com][6])
* **Socket / operation timeouts**: set operation-level timeouts (via contexts). Avoid very short timeouts for large queries.
* **Network resilience**: implement retry logic for transient network errors; the Go driver automatically handles some retries (e.g., `WithTransaction`), but explicit retries for idempotent ops may be required.
* **DNS SRV with Atlas**: if using Atlas, use the SRV URI (starting `mongodb+srv://`) and enable TLS.

---

# 10) Security & deployment tips

* Use **environment variables** (or secret manager) for credentials/URIs.
* Use TLS; Atlas enforces TLS by default.
* Limit DB user permissions — prefer least privilege.
* For production on Kubernetes / containers: mount CA certs if needed, set connection limits based on pod replicas and DB max connections. Monitor metrics (MongoSI/Atlas metrics). ([mongodb.com][1])

---

# 11) Testing strategies

* **Integration tests**: use a real MongoDB instance spun up in CI — options: MongoDB Atlas ephemeral projects, Testcontainers (docker) for local/CI, or a dedicated test cluster.
* **Unit tests**: abstract DB access behind interfaces so we can use fake implementations in unit tests. Example:

```go
type UserStore interface {
    Insert(ctx context.Context, u *User) error
    FindByID(ctx context.Context, id string) (*User, error)
}
```

* The official driver does not provide an in-memory replacement, so use DI + fakes or testcontainers. (This keeps tests deterministic and fast.) ([DigitalOcean][7])

---

# 12) Example project layout (recommended)

```
/cmd/app/main.go
/internal/app/app.go          // wire router and services
/internal/db/mongo.go         // connect/disconnect, client wrapper
/internal/models/user.go
/internal/store/user_store.go // interacts with mongo.Collection
/internal/handlers/user.go
/internal/migrations/*        // index creation, migrations
/pkg/config/config.go         // env loader
```

Pros: clear separation of concerns, easy to mock `store` layer in tests.

---

# 13) Graceful shutdown example (Gin + Mongo)

```go
srv := &http.Server{
    Addr:    ":8080",
    Handler: router,
}

go func(){ srv.ListenAndServe() }()

quit := make(chan os.Signal)
signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
<-quit

ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
defer cancel()
srv.Shutdown(ctx)
db.Disconnect(ctx) // mongo client disconnect
```

Always call `client.Disconnect(ctx)` so the driver closes connections/pools cleanly. ([mongodb.com][1])

---

# 14) Common pitfalls & debug tips

* **Reusing cancelled contexts** causes `context canceled` errors. Create a fresh context per operation. ([mongodb.com][8])
* **Creating many clients** (one per request) exhausts connections — use singleton client. ([mongodb.com][1])
* **Forgetting indexes** leads to slow queries at scale — create index migrations early. ([mongodb.com][4])

---

# 15) Minimal end-to-end example (summary)

1. `Connect()` on app startup with timeout and `Ping`. ([mongodb.com][1])
2. Build an `App` struct with `*mongo.Database` and attach Gin routes.
3. For each request, create `ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)` and defer `cancel()`. Use that ctx for DB calls.
4. Use `coll.FindOne(ctx, filter).Decode(&result)` patterns.
5. Indexes and pool tuning as app scales. ([mongodb.com][6])

---

Now, let’s add **JWT auth** to our Go + Gin + MongoDB app. Below we’ll build a secure, production-minded flow with:

* signup (hash passwords with bcrypt)
* login (issue access + refresh tokens)
* refresh token endpoint (rotate + persist refresh tokens)
* middleware that protects routes by validating access tokens
* logout (revoke refresh token)
* secure configuration and deployment notes

We'll use a hybrid approach: **stateless access tokens** (short-lived JWTs) + **stateful refresh tokens** stored in MongoDB so we can revoke/rotate them. This gives good UX and enables session invalidation.

---

# 1) Dependencies

```bash
go get github.com/gin-gonic/gin
go get go.mongodb.org/mongo-driver/mongo
go get github.com/golang-jwt/jwt/v5
go get golang.org/x/crypto/bcrypt
```

(We use `github.com/golang-jwt/jwt/v5` for JWT handling, `bcrypt` for password hashing.)

---

# 2) Environment / config

Put secrets and expiries into environment variables (or secret manager):

```
JWT_ACCESS_SECRET=super-secret-access-key
JWT_REFRESH_SECRET=super-secret-refresh-key
JWT_ACCESS_EXPIRE_MINUTES=15
JWT_REFRESH_EXPIRE_DAYS=7
```

We’ll read them in a `config` struct in code.

---

# 3) Models

```go
// models/user.go
package models

import (
    "time"
    "go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
    ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
    Email     string             `bson:"email" json:"email"`
    Password  string             `bson:"password,omitempty" json:"-"`
    Name      string             `bson:"name" json:"name"`
    CreatedAt time.Time          `bson:"createdAt" json:"createdAt"`
}

// models/token.go
package models

import (
    "time"
    "go.mongodb.org/mongo-driver/bson/primitive"
)

type RefreshTokenRecord struct {
    ID           primitive.ObjectID `bson:"_id,omitempty"`
    Token        string             `bson:"token"`
    UserID       primitive.ObjectID `bson:"userId"`
    ExpiresAt    time.Time          `bson:"expiresAt"`
    CreatedAt    time.Time          `bson:"createdAt"`
    Revoked      bool               `bson:"revoked"`
    ReplacedBy   string             `bson:"replacedBy,omitempty"`
}
```

---

# 4) Auth helpers — hashing + verifying passwords

```go
package auth

import "golang.org/x/crypto/bcrypt"

func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
    return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}
```

---

# 5) JWT generation & validation

We define claims and functions for signing/validating access and refresh tokens.

```go
package auth

import (
    "time"
    "errors"

    jwt "github.com/golang-jwt/jwt/v5"
    "go.mongodb.org/mongo-driver/bson/primitive"
)

type JWTManager struct {
    AccessSecret  []byte
    RefreshSecret []byte
    AccessTTL     time.Duration
    RefreshTTL    time.Duration
}

type AccessClaims struct {
    UserID string `json:"uid"`
    jwt.RegisteredClaims
}

type RefreshClaims struct {
    UserID string `json:"uid"`
    jwt.RegisteredClaims
}

func NewJWTManager(accessSecret, refreshSecret string, accessTTL, refreshTTL time.Duration) *JWTManager {
    return &JWTManager{
        AccessSecret:  []byte(accessSecret),
        RefreshSecret: []byte(refreshSecret),
        AccessTTL:     accessTTL,
        RefreshTTL:    refreshTTL,
    }
}

func (m *JWTManager) GenerateAccessToken(userID primitive.ObjectID) (string, time.Time, error) {
    expiresAt := time.Now().Add(m.AccessTTL)
    claims := AccessClaims{
        UserID: userID.Hex(),
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(expiresAt),
            IssuedAt:  jwt.NewNumericDate(time.Now()),
            Subject:   userID.Hex(),
        },
    }
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    signed, err := token.SignedString(m.AccessSecret)
    return signed, expiresAt, err
}

func (m *JWTManager) GenerateRefreshToken(userID primitive.ObjectID) (string, time.Time, error) {
    expiresAt := time.Now().Add(m.RefreshTTL)
    claims := RefreshClaims{
        UserID: userID.Hex(),
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(expiresAt),
            IssuedAt:  jwt.NewNumericDate(time.Now()),
            Subject:   userID.Hex(),
            ID:        primitive.NewObjectID().Hex(), // unique id for rotation tracking
        },
    }
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    signed, err := token.SignedString(m.RefreshSecret)
    return signed, expiresAt, err
}

func (m *JWTManager) VerifyAccessToken(tokenStr string) (*AccessClaims, error) {
    token, err := jwt.ParseWithClaims(tokenStr, &AccessClaims{}, func(t *jwt.Token) (interface{}, error) {
        if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, errors.New("invalid signing method")
        }
        return m.AccessSecret, nil
    })
    if err != nil {
        return nil, err
    }
    claims, ok := token.Claims.(*AccessClaims)
    if !ok || !token.Valid {
        return nil, errors.New("invalid token claims")
    }
    return claims, nil
}

func (m *JWTManager) VerifyRefreshToken(tokenStr string) (*RefreshClaims, error) {
    token, err := jwt.ParseWithClaims(tokenStr, &RefreshClaims{}, func(t *jwt.Token) (interface{}, error) {
        if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, errors.New("invalid signing method")
        }
        return m.RefreshSecret, nil
    })
    if err != nil {
        return nil, err
    }
    claims, ok := token.Claims.(*RefreshClaims)
    if !ok || !token.Valid {
        return nil, errors.New("invalid token claims")
    }
    return claims, nil
}
```

---

# 6) Persistence for refresh tokens (Mongo)

We store refresh tokens so we can revoke or rotate them.

```go
package store

import (
    "context"
    "time"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
    "myapp/models"
)

type TokenStore struct {
    col *mongo.Collection
}

func NewTokenStore(db *mongo.Database, collName string) *TokenStore {
    return &TokenStore{col: db.Collection(collName)}
}

func (s *TokenStore) SaveRefreshToken(ctx context.Context, token string, userID primitive.ObjectID, expiresAt time.Time) error {
    rec := models.RefreshTokenRecord{
        Token:     token,
        UserID:    userID,
        ExpiresAt: expiresAt,
        CreatedAt: time.Now(),
        Revoked:   false,
    }
    _, err := s.col.InsertOne(ctx, rec)
    return err
}

func (s *TokenStore) RevokeRefreshToken(ctx context.Context, token string) error {
    _, err := s.col.UpdateOne(ctx, bson.M{"token": token}, bson.M{"$set": bson.M{"revoked": true}})
    return err
}

func (s *TokenStore) FindValidToken(ctx context.Context, token string) (*models.RefreshTokenRecord, error) {
    var rec models.RefreshTokenRecord
    err := s.col.FindOne(ctx, bson.M{"token": token, "revoked": false}).Decode(&rec)
    if err != nil {
        return nil, err
    }
    if rec.ExpiresAt.Before(time.Now()) {
        return nil, mongo.ErrNoDocuments
    }
    return &rec, nil
}
```

We should create TTL indexes on `expiresAt` and maybe an index on `token` for fast lookup:

```go
s.col.Indexes().CreateOne(ctx, mongo.IndexModel{
    Keys: bson.D{{"expiresAt", 1}},
    Options: options.Index().SetExpireAfterSeconds(0),
})
```

---

# 7) Handlers: Register, Login, Refresh, Logout

Assume `userStore` implements user creation & lookup. We'll sketch handlers.

```go
// handlers/auth.go
package handlers

import (
    "context"
    "net/http"
    "time"

    "github.com/gin-gonic/gin"
    "go.mongodb.org/mongo-driver/bson/primitive"

    "myapp/auth"   // JWTManager + helpers
    "myapp/store"  // TokenStore, UserStore
    "myapp/models"
)

type AuthHandler struct {
    JWT    *auth.JWTManager
    Users  *store.UserStore
    Tokens *store.TokenStore
}

type registerReq struct {
    Name     string `json:"name" binding:"required"`
    Email    string `json:"email" binding:"required,email"`
    Password string `json:"password" binding:"required,min=8"`
}

func (h *AuthHandler) Register(c *gin.Context) {
    var req registerReq
    if err := c.BindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
    defer cancel()
    // check existing
    if exists, _ := h.Users.ExistsByEmail(ctx, req.Email); exists {
        c.JSON(http.StatusConflict, gin.H{"error": "email already in use"})
        return
    }
    hashed, err := auth.HashPassword(req.Password)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to hash password"})
        return
    }
    user := &models.User{
        Email:     req.Email,
        Password:  hashed,
        Name:      req.Name,
        CreatedAt: time.Now(),
    }
    newID, err := h.Users.Create(ctx, user)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create user"})
        return
    }
    c.JSON(http.StatusCreated, gin.H{"id": newID.Hex()})
}

type loginReq struct {
    Email    string `json:"email" binding:"required,email"`
    Password string `json:"password" binding:"required"`
}

func (h *AuthHandler) Login(c *gin.Context) {
    var req loginReq
    if err := c.BindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
    defer cancel()
    user, err := h.Users.FindByEmail(ctx, req.Email)
    if err != nil || user == nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid credentials"})
        return
    }
    if !auth.CheckPasswordHash(req.Password, user.Password) {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid credentials"})
        return
    }
    uid := user.ID
    accessTok, accessExp, err := h.JWT.GenerateAccessToken(uid)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "couldn't create access token"})
        return
    }
    refreshTok, refreshExp, err := h.JWT.GenerateRefreshToken(uid)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "couldn't create refresh token"})
        return
    }
    // persist refresh token
    if err := h.Tokens.SaveRefreshToken(ctx, refreshTok, uid, refreshExp); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to store token"})
        return
    }
    // return tokens; recommended: put refresh token in httpOnly secure cookie
    c.JSON(http.StatusOK, gin.H{
        "access_token": accessTok,
        "expires_at": accessExp.UTC().Format(time.RFC3339),
        "refresh_token": refreshTok, // opt: omit if using cookie
    })
}

type refreshReq struct {
    RefreshToken string `json:"refresh_token" binding:"required"`
}

func (h *AuthHandler) Refresh(c *gin.Context) {
    var req refreshReq
    if err := c.BindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
    defer cancel()
    claims, err := h.JWT.VerifyRefreshToken(req.RefreshToken)
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid refresh token"})
        return
    }
    // verify token exists & not revoked
    rec, err := h.Tokens.FindValidToken(ctx, req.RefreshToken)
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "refresh token not found or expired"})
        return
    }
    // rotate: revoke old token and issue new refresh token
    if err := h.Tokens.RevokeRefreshToken(ctx, req.RefreshToken); err != nil {
        // log error but continue maybe
    }
    uid, _ := primitive.ObjectIDFromHex(claims.UserID)
    newRefresh, newRefreshExp, err := h.JWT.GenerateRefreshToken(uid)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to generate refresh token"})
        return
    }
    if err := h.Tokens.SaveRefreshToken(ctx, newRefresh, uid, newRefreshExp); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to save refresh token"})
        return
    }
    // issue new access token
    accessTok, accessExp, err := h.JWT.GenerateAccessToken(uid)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to generate access token"})
        return
    }
    c.JSON(http.StatusOK, gin.H{
        "access_token": accessTok,
        "expires_at": accessExp.UTC().Format(time.RFC3339),
        "refresh_token": newRefresh,
    })
}

type logoutReq struct {
    RefreshToken string `json:"refresh_token" binding:"required"`
}

func (h *AuthHandler) Logout(c *gin.Context) {
    var req logoutReq
    if err := c.BindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    ctx, cancel := context.WithTimeout(c.Request.Context(), 5*time.Second)
    defer cancel()
    if err := h.Tokens.RevokeRefreshToken(ctx, req.RefreshToken); err != nil {
        // ignore or return error
    }
    c.Status(http.StatusNoContent)
}
```

Notes:

* Prefer to return refresh token in an **HttpOnly Secure cookie** instead of JSON to reduce XSS risk. If we do cookies, we must set `SameSite` appropriately and use HTTPS.
* Rotate refresh tokens: revoke old and store new token; store `replacedBy` if you want to trace.

---

# 8) Middleware for protecting endpoints (access token)

```go
package middleware

import (
    "net/http"
    "strings"

    "github.com/gin-gonic/gin"
    "myapp/auth"
)

func AuthRequired(jwtManager *auth.JWTManager) gin.HandlerFunc {
    return func(c *gin.Context) {
        authHeader := c.GetHeader("Authorization")
        if authHeader == "" {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "authorization header required"})
            return
        }
        parts := strings.SplitN(authHeader, " ", 2)
        if len(parts) != 2 || strings.ToLower(parts[0]) != "bearer" {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "authorization header format must be Bearer {token}"})
            return
        }
        token := parts[1]
        claims, err := jwtManager.VerifyAccessToken(token)
        if err != nil {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid or expired token"})
            return
        }
        c.Set("userID", claims.UserID)
        c.Next()
    }
}
```

In handlers we can get user id:

```go
uidStr, _ := c.Get("userID")
```

---

# 9) Wiring it together in `main.go`

```go
func main() {
    // load env
    accessSecret := os.Getenv("JWT_ACCESS_SECRET")
    refreshSecret := os.Getenv("JWT_REFRESH_SECRET")
    accessTTL := time.Minute * 15
    refreshTTL := time.Hour * 24 * 7

    jwtManager := auth.NewJWTManager(accessSecret, refreshSecret, accessTTL, refreshTTL)

    client := // connect to mongo
    db := client.Database("yourdb")
    userStore := store.NewUserStore(db, "users")
    tokenStore := store.NewTokenStore(db, "refresh_tokens")

    authHandler := handlers.AuthHandler{
        JWT: jwtManager,
        Users: userStore,
        Tokens: tokenStore,
    }

    r := gin.Default()
    api := r.Group("/api")
    api.POST("/register", authHandler.Register)
    api.POST("/login", authHandler.Login)
    api.POST("/refresh", authHandler.Refresh)
    api.POST("/logout", authHandler.Logout)

    // protected
    protected := api.Group("/me")
    protected.Use(middleware.AuthRequired(jwtManager))
    protected.GET("/", func(c *gin.Context) {
        uid, _ := c.Get("userID")
        c.JSON(200, gin.H{"user_id": uid})
    })

    r.Run(":8080")
}
```

---

# 10) Security best practices (must-follow)

* **Use HTTPS** always. Never send tokens over plain HTTP.
* **HttpOnly & Secure cookies** for refresh tokens reduce XSS risk. If we do cookies, protect against CSRF (use double submit cookie or SameSite=strict/lax depending on UX).
* **Rotate secrets & support secret rotation**: keep short access secret lifetime, rotate refresh secret carefully (maintain old secret for a short overlap if needed).
* **Least privilege DB user**: limit Mongo user to only required collections and actions.
* **Short-lived access tokens** (e.g., 5–30 minutes).
* **Store refresh tokens server-side** if we need to be able to revoke sessions (logout, password change).
* **Monitor** suspicious token usage (multiple refresh token uses from different IPs — possible token theft). Consider storing `ip`, `userAgent` in `RefreshTokenRecord`.
* **Limit concurrent sessions** if business requires — e.g., restrict number of active refresh tokens per user.
* **Hash refresh tokens in DB** (optional): to avoid DB compromise exposing raw refresh tokens, store a hashed version (like bcrypt or HMAC) and compare hash of presented token. That prevents attackers with DB read-only access from using tokens.

---

# 11) Testing tips

* Unit test token generation/verification with known secrets and simulated time (use `jwt.WithLeeway` or set `IssuedAt` / `ExpiresAt` manually).
* Integration test login/refresh flows with a real Mongo instance (testcontainers or local mongo in CI).
* Test security edge-cases: reuse of revoked refresh token should be rejected. Test refresh token rotation.

---

# 12) Optional improvements

* **Stateless refresh tokens** — we can sign refresh tokens but still keep a revocation list in DB for logout.
* **Use asymmetric keys (RS256)** — allows key rotation and separation of signing vs verification if we have multiple services. Keep private key safe.
* **Use OAuth2/JWT libraries** (if we need more features): consider full OAuth2 for third-party auth.
* **Rate-limit login endpoint** (prevent credential stuffing).

---



