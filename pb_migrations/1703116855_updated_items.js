/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ang7ud12i228xu9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cebzuhcb",
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
  const collection = dao.findCollectionByNameOrId("ang7ud12i228xu9")

  // remove
  collection.schema.removeField("cebzuhcb")

  return dao.saveCollection(collection)
})
