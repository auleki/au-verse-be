import axios from "axios"
/**
export const <function_name> = async (req, res) => {
    try {

    } catch (error) {

    }
}
*/

// class ExcusesController {
//     constructor(model) {
//         this._model = model
//         this.getExcuses = this.getExcuses
//     }

//     getExcuses(req, res) {

//     }
// }

let baseUrl = process.env.EXCUSE_BASE_URL

export const getExcuses = async (req, res) => {
    try {
        const fetchedExcuses = await axios.get(`${baseUrl}/6`)
        res.status(200).send({
            message: "Fetched excuses successfully",
            data: fetchedExcuses.data
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

/**
 * To get a single excuse
 * Need -> excuse category, amount of items to show
 */
export const getCategoryExcuses = async (req, res) => {
    try {
        const cateogry = req.params.category
        const { data } = await axios.get(`${baseUrl}/${cateogry}/6`)
        res.status(200).send({ message: "Excuses fetched", data })
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getAvailableExcuseCategories = (req, res) => {
    const categories = ["office", "family", "children", "college", "party"]
    res.status(200).send({ message: "Fetched supported excuse categories", categories })
}