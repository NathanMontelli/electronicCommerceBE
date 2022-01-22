const router = require('express').Router()
const req = require('express/lib/request')
const res = require('express/lib/response')
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', async function (req, res) {
  const categories = await Category.findAll({ include: [Product] })
  res.json(categories)
  // find all categories
  // be sure to include its associated Products
})

router.get('/categories/:id', async function ({ params: { id }}, res) {
  const categories = await Category.findOne({ where: { id }, include: [Product]})
  res.json(categories)
  // find one category by its `id` value
  // be sure to include its associated Products
})

router.post('/categories', async function (req, res) {
  const categories = await Category.create(req.body)
  res.status(200).json(categories)
  // create a new category
})

router.put('/categories/:id', async function (req, res) {
const categories = await Category.update(req.body, {where: { id: req.params.id }})
res.status(200).json(categories)
  // update a category by its `id` value
})

router.delete('/categories/:id', async function ({ params: { id }}, res) {
  const categories = await Category.destroy({ where: { id } })
  res.status(200).json(categories)
  // delete a category by its `id` value
})

module.exports = router
