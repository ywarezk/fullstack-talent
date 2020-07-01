## Node.js + MongoDB

### Databases

we use databases to store data and retrieve and manipulate that data

### Database types

- Relational database, SQL databases
  - MySQL, Oracle, Postgres
- Non relational - NoSQL 
  - MongoDb, CouchDb, DynamoDb
- Memory based
  - redis, memcached
- GraphDb
  - Neo4J

  ### Relational Db - SQL database

  - tables
  - rows
  - columns

  ### Non Relational Db - NoSQL - Mongo

  - collection = table
  - documents = row
  - fields = columns

### The major difference between SQL / NoSQL

Mongo the document is dynamic in structure 
Postgres - a row is well defined and static

```
{
    firstName: 'Yariv',
    age: 35,
    dogs: [
        {
            name: 'Piglet'
        },
        {
            name: 'Sweetness'
        }
    ]
}
```

users
| firstName

dogs
| name

## How will my database look like

1. decide how your tables will look like
  - tables associations / relations
2. Query analysis
  - Collection A arrives only with Collection B or collection A should be separate
  - Insert, Update, Read, Delete

### Tables associations

- one2many
- one2one
- many2many

### one2one

```
{
    firstName 'Yariv',
    address: {
        city: 'ramat gan',
        ...
    }
}
```

### Many2Many

user
```
{
    firstName: 'Yariv',
    tag: [
        ObjectId('...')
    ]
}
```

tag
```
{
    title: 'hello',
    users: [
        {
            ObjectId('...'),
            firstName: 'Yariv'
        }
    ]
}
```


Mongo reduce the amount of joins
Mongo reduce the amount of tables













