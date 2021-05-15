import Router from './router'

// import add_bookmark from './handlers/add'
// import list_bookmarks from './handlers/list'
// import delete_bookmark from './handlers/delete'
import get_blob from './handlers/get_blob'
import add_blob from './handlers/add_blob'

export const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function handleRequest(request) {
    try {
        const r = new Router()
        r.options('/.*', () => new Response('OK', corsHeaders))
        r.get('/api/get', get_blob)
        r.post('/api/add', add_blob)

        // Old functionality - Keep for now
        // r.get('/api/list/bookmarks', list_bookmarks)
        // r.post('/api/add/bookmark', add_bookmark)
        // r.delete('/api/delete/bookmark/.*', delete_bookmark)
        
        r.get('/', () => new Response('Bookmark API'))
      
        return r.route(request)
    } catch (err) {
        return new Response(err)
    }
}
