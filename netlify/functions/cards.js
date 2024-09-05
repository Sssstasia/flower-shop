const getDbClient = require("../../our-library/getDbClient")


const handler = async () => {
    const client = await getDbClient()
    const cards = await client.db().collection("cards").find().toArray()
    client.close()
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(cards)
    }
}
module.exports = { handler }
