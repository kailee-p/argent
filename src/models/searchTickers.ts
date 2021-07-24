import { Handler } from '@netlify/functions'

const searchTickers: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "test" })
  }
}

export { searchTickers }