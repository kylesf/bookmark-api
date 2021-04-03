import Router from './router'

import add_bookmark from './handlers/add'
import list_bookmarks from './handlers/list'
import delete_bookmark from './handlers/delete'

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handleRequest(request) {
    try {
      const r = new Router()
      r.get('/list/bookmarks', list_bookmarks)
      r.post('/add/bookmark', add_bookmark)
      r.delete('/delete/bookmark/.*', delete_bookmark)
      r.get('/', () => new Response('Bookmark API'))
    
      return r.route(request)
    } catch (err) {
      return new Response(err)
    }
  }