/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35fn5scbpgznw3g")

  collection.listRule = "@request.auth.gid = gid"
  collection.viewRule = "@request.auth.gid = gid"
  collection.createRule = "@request.auth.gid = gid"
  collection.updateRule = "@request.auth.gid = gid"
  collection.deleteRule = "@request.auth.gid = gid"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35fn5scbpgznw3g")

  collection.listRule = ""
  collection.viewRule = null
  collection.createRule = ""
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
