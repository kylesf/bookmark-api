const headers = { 'Content-Type': 'application/json','status': '200' }
import Bookmark from '../models/bookmark'

const handler = async () => {
    try {
        let books = await getBooks()
    return new Response(JSON.stringify(books), { headers })
        } catch (err) {
    return new Response(`Error! ${err} for ${JSON.stringify(books)}`)
    }
}

const getBooks = async () => {
    const ids = await BOOKMARK_STORE.list()
    return ids.list_complete ? Bookmark.list(ids.keys) : []
  }

export default handler