/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zypkct4qlyw4rmt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4k6xlwky",
    "name": "gid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "llmitbhevx7jzor",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zypkct4qlyw4rmt")

  // remove
  collection.schema.removeField("4k6xlwky")

  return dao.saveCollection(collection)
})
