import express from 'express'
import { getExcuses, getCategoryExcuses, getAvailableExcuseCategories } from '../controllers/excuses.js'
const router = express.Router()

router.get('/categories', getAvailableExcuseCategories)
router.get('/:category', getCategoryExcuses)
router.get('/', getExcuses)

export default router