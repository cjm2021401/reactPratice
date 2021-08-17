const category=[
    {
        "_id" :1,
        "name" : "Top"
    },
    {
        "_id" :2,
        "name" : "Pants"
    },
    {
        "_id" :3,
        "name" : "Accessories"
    },
    {
        "_id" :4,
        "name" : "Etc"
    }
]

const price=[
    {
        "_id" : 0,
        "name" : "Any",
        "array" :[],
    },
    {
        "_id" : 1,
        "name" : "0 to 10000",
        "array" :[0, 10000],
    },
    {
        "_id" : 2,
        "name" : "10000 to 30000",
        "array" :[10000, 30000],
    },
    {
        "_id" : 3,
        "name" : "30000 to 50000",
        "array" :[30000, 50000],
    },
    {
        "_id" : 4,
        "name" : "More then 50000",
        "array" :[50000, 1000000],
    }
]

export {
    category,
    price
}