# QUESTIONS
A lot of

## q1. Several queries in 1 request
For example I want to make 2 independ selects.
Or delete some rows and make new select after this.
Can be powerfull option. Several selects or inserts for different tables can be used often. But mixing requests is rarely used and can be bad practice.

---
## q2. Renaming table or column
That's really question. I see only 1 way: add attribute to column/table `renamed`, which will contain old name of column/field. Or maybe create uuid for each column and table, but it's sh*t.

---
## q3. Can we support grpc
It will be cook to use grpc. Because It's faster, when use HTTP 2. But a loot of people like rest more and it's more standart.

---
## q4. Nullable unique

---
## q5. Why dev will not write sql to define schema
Because they don't want use sql! And it's different for each db.
Closed.

---
## q6. Why not use ts as schema definition lang
Denied => look [schema.ts](./schema/schema.ts)