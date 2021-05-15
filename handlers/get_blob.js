// import corsHeaders from '../index';


const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
}

const headers = { 'Content-Type': 'application/json','status': '200', ...corsHeaders}

const handler = async () => {
    try {
        let books = await getBooks()
    return new Response(books, { headers })
        } catch (err) {
    return new Response(`Error! ${err} for ${JSON.stringify(books)}`)
    }
}

const getBooks = async () => {
    const data = await BOOKMARK_STORE.get('bid:9e78067f-b1e2-43d8-b1c6-a8d66d6167f6')
    // console.log(data)
    return data
  }

export default handler