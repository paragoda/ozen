# IDEAS

## i1. new paradigm of working with data!
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
## i2. merge with current on client
After getting object (for example id after insert) you just merge it with current on client, wich already contains other fields (like name, keys, ...)

---
## i3. devide project to several
Want superate part of serealization and operation with db to seperate proj.
Then we will not depend on framework and can add system of working with db to any backend. So maybe it's better to use query parameters rather than subroutes. Use 1 endpoint (like GraphQl) for each http header for db.

---
## i4. keep separate proj for managing ozen
If we use cross enviroment (aka  different langs/repos) it will be nessasary share config without coping it. I want keep one 1 point of true database structure. 
Also can make in each separate proj ozen.config file, that will describe what to generate, what we need.
```
|- ozen-server
|- mobile
 |- ozen.config.json
|- web
 |- ozen.config.json
|- micro-service
 |- ozen.config.json
```
web ozen.config.json
```js
{
   from: 'htts://raw.github.io/name/repo/ozen.json',
   tables: ['stats', 'analytics', 'posts']
}
```
mobile ozen.config.json
```js
{
    from: '?',
    tables: ['posts', 'comments', 'likes']
}
```

---
## i5. Full ozen definition in 1 json file
Because it's universal, of course it can be genarated from typescript,... sdk.
```js
{
    git: { // should it be there?
        owner: 'org-or-user-name',
        repo: 'main-server'
    },
    lang: 'rust',
    db: {
        type: 'mysql',
        connectionStrEnv: 'OZEN_DB_CONNECTION_STR', // name of env variable, that contains connection string
        tables: {
            posts: {
                fields: {
                    id: {
                        type: 'bigint',
                        flags: ['autoincrement', 'pk']
                    },
                    title: {
                        // all high level is 
                        type: 'varchar',
                        flags: ['unique']
                        props: {
                            size: 255,
                        }
                    }
                },
                access: {
                    select: 'true',
                    insert: 'current_user IS NOT NULL',
                    delete: 'false'
                }
            },
        }
   }
}
```

---
## i6. Change names "clinet", "server" to something else
Because independent api will work throught client sdk. 
Mot messasary but still.

---
## i7. own lang
It will be cool if we will have own language as prisma or grpc has.
Pros:
- clear syntax
- highlight
- less symbols, shorter

Cons:
- new lang
- need parser
Check [schema.ozen](./schema/schema.ozen)
Looks like great idea.
Need more code, but It's not runtime code, so it's ok

---
## i8. npx create-ozen
TS proj where define schema, run migrations, ...
Ozen manager. Closed, denied. Not good idea.

---
## i9. on sync change files in repos
When run `ozen sync`, it will change orm files in github repos.
So on every new migration we will be sure that nothing breaks in already written code in other projects, which use this db. If new migration will break them you will see failed build and remember to fix it.