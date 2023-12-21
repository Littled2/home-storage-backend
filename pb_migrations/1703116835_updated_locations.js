/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35fn5scbpgznw3g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yex7cd61",
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
  const collection = dao.findCollectionByNameOrId("35fn5scbpgznw3g")

  // remove
  collection.schema.removeField("yex7cd61")

  return dao.saveCollection(collection)
})
