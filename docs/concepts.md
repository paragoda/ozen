# CONCEPTS

## c1. exception free

Error is returned as one of the possible values like in Rust, ...
So we don't need try catch. Something like this, but i am not sure exactly.
```ts
function result<T>(): [T, null] | [null, Error]
function result<T>(): [T, true] | [Error, false]
```

---
## c2. multi language
As minimum for client: Typescript, Dart. Dart is there, because of Flutter. Maybe we should also include C#, Kotlin, Swift in future, but I'm not sure. 
So api should be understandable for people without sdk. 
And SDK should be similar In meaning, but can have differences in syntax. Example: `c1`

---
## c3. typesafe
It's all about SDK outside layour (under the hood it can be not so typesafe).
When I type, that I want return only 2 fields, I should get object with 2 fields.
Return object will not have other fields, and you see it during development, not runtime.

---
## c4. only nessasary data
I don't want all object on frontend, only some fields.
And must keep `c3`.

---
## c5. easy *normal DX
*Normal, because sweet dx should not limit opportunities. But still it should be understandable, not hard to write.
And of course `c3` is also part of DX.

---
## c6. fast (really fast not like node)
It should be as fast as possible. Especially backend part,
which will be only for us, not for devs. I think we can sometimes make ugl code for performance reasns. Because a lot of small optimizations lead to more performance in general. So that's why we will need a lot of comments. SDK can have this only under the hood `c5`.