import Bookmark from '../models/bookmark'
// import corsHeaders from '../index';

const corsHeaders = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
  }

const headers = {'status': '200', ...corsHeaders}

const handler = async request => {
    try {
      const body = await request.json()
  
      if (!body) {
        throw new Error('Incorrect Data')
      }
    
      const book = new Bookmark(body.uuid,body.blob)

      await book.save()
  
      return new Response("Success",{headers})
    } catch (err) {
      return new Response(err, {headers})
    }
  }
  
  export default handler