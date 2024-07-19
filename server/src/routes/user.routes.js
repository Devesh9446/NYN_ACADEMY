import {Router} from 'express'

const router =Router()

router.route("/").post(
    upload.fields([
        {
            name:"",
            maxCount:1
        },
        {
            name:"",
            maxCount:1
        }
    ])
,)

router.route("/logOutUser").post(verifyJWT,logOutUser)

export default router