/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ang7ud12i228xu9")

  collection.listRule = "@request.auth.gid = gid"
  collection.viewRule = "@request.auth.gid = gid"
  collection.createRule = "@request.auth.gid = gid"
  collection.updateRule = "@request.auth.gid = gid"
  collection.deleteRule = "@request.auth.gid = gid"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ang7ud12i228xu9")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
