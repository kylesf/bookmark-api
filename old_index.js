import Router from './router'

import add_bookmark from './handlers/add'
import list_bookmarks from './handlers/list'
import delete_bookmark from './handlers/delete'
import testing from './handlers/testing'

export const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
  'Access-Control-Allow-Origin': 'http://localhost:8100',
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
})


// async function handle(request) {
//   if (request.method === "OPTIONS") {
//     return handleOptions(request)
//   } else if (request.method === "POST") {
//     return handlePost(request)
//   } else if (request.method === "GET" || request.method == "HEAD") {
//     // Pass-through to origin.
//     return fetch(request)
//   } else {
//     return new Response(null, {
//       status: 405,
//       statusText: "Method Not Allowed",
//     })
//   }
// }

function handleOptions(request) {
  if (request.headers.get("Origin") !== null &&
    request.headers.get("Access-Control-Request-Method") !== null &&
    request.headers.get("Access-Control-Request-Headers") !== null) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders
    })
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        "Allow": "GET, HEAD, POST, OPTIONS",
      }
    })
  }
}


async function handleRequest(event) {
  if (request.method === "OPTIONS") {
    return handleOptions(request)
  } else if (request.method === "GET" || request.method == "HEAD") {
    try {
      const r = new Router()
      r.get('/api/list/bookmarks', list_bookmarks)
      r.get('/api/testing', testing)
      r.post('/api/add/bookmark', add_bookmark)
      r.delete('/api/delete/bookmark/.*', delete_bookmark)
      r.get('/', () => new Response('Bookmark API'))
    
      return r.route(event.request)
    } catch (err) {
      return new Response(err)
    } 
  }
  }