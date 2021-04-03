import Bookmark from '../functions/bookmarks'

const handler = async request => {
    try {
      const body = await request.json()
  
      if (!body) {
        throw new Error('Incorrect Data')
      }
    
      const book = new Bookmark(body.id,body.blob)

      await book.save()
  
      return new Response(book.id,{status: 200})
    } catch (err) {
      return new Response(err, { status: 400 })
    }
  }
  
  export default handler