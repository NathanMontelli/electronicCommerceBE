const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', async function (req, res) {
  const tags = await Tag.findAll({ include: [Product] })
  res.json(tags)
  // find all tags
  // be sure to include its associated Product data
})

router.get('/tags/:id', async function ({ params: { id }}, res) {
  const tags = await Tag.findOne({ where: { id }, include: [Product] })
  res.json(tags)
  // find a single tag by its `id`
  // be sure to include its associated Product data
})

router.post('/tags', async function (req, res) {
  const tags = await Tag.create(req.body)
  res.status(200).json(tags)
  // create a new tag
})

router.put('/tags/:id', async function ({params: { id } }, res) {
  const tags = await Tag.update(req.body, {where: { id } })
res.status(200).json(tags)
  // update a tag's name by its `id` value
})

router.delete('/tags/:id', async function ({params: { id }}, res) {
  const tags = await tag.destroy({ where: { id } })
  res.status(200).json(tags)
  // delete on tag by its `id` value
})

module.exports = router
