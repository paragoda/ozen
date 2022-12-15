# OZEN
Cross Platform ORM. Access your data from anywhere with same dx.

Table of content: 
[requirements](#requirements)
[ideas](#ideas)
[questions]()


## Requirements

### Basic funtionality should be super easy to setup
If I don't need extend main server I don't want ever clone repo to my machine.

---
### Extendable
Should be able to extend server as usual backend.

---
### Only nessasary
It's about all:
1. fetch from client only nessasary data
2. get from db only nessasary data on server
3. keep on server only things that are used in runtime
4. generate client/server sdk/orm only for required tables
5. auth only if required
6. no autogenerated columns in table

Keep all as minimum as possible. But, at the same time, not sacrifice opportunities for minimal.

---
### Independent
Each sdk must not be connected with framework or even db connector. But of course Ozen will have fast start, where already will be backend framework abd db connector, so you shouldn't do it by yourself. At the same time I want add posibility to use ozen in with any framework or db connector.


## Ideas

### i7. own lang
It will be cool if we will have own language as prisma or grpc has.
Pros:
- clear syntax
- highlight
- less symbols, shorter
Cons:
- new lang
- need parser
Check [schema.ozen](./docs/schema/schema.ozen)
Looks like great idea.
Need more code, but It's not runtime code, so it's ok.

---
### i1. new paradigm of working with data!
Find or invent paradigm of working with partial data to keep autocomplete like in OOP.
But work only with partial data, because of `c4`.

```ts
// maybe like this

// full layout type
type Layout = {
    id: string
    name: string
    stars: number
    keys: string
    fingers: string
}

/**
 * static class that handles layout logic
 * keep autocomplete
 * but only take nessasary data
 * it also can be namespace or similar things
 */
class LayoutLogic {
    public static export(data: { keys: string, fingers: string }) {
        // do some export stuff
    }

    // if previous doesn't work
    public static exportT<T extends { keys: string, fingers: string }>(data: T) {
        // do some export stuff
    }
}

// usage
const layouts = await ozen.layouts
    .select(l => [ l.keys, l.fingers ]))  // this looks cool, but hmm `c5`
    // .select(l => ({ keys: l.keys, fingers: l.fingers })) 
LaoutLogic.export(layouts[0])
```

---
### i2. merge with current on client
After getting object (for example id after insert) you just merge it with current on client, wich already contains other fields (like title, content, ...)

## Questions

