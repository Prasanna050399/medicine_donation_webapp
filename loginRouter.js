const router = require('express').Router()
const loginController = require('./loginController')

router.post('/', loginController.verifyUser)
router.post('/activeRequest',loginController.getActiveCollectionData)
router.post('/completeRequest',loginController.getCompleteCollectionData)
// router.post('/completeRequest',loginController.setUser)
router.post('/getData',loginController.getData)
router.post('/rejectRequest',loginController.setRejectRequest)
router.post('/getCollectionRequest',loginController.getCollectionRequest)
module.exports = router