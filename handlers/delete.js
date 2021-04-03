const handler = async request => {
    try {
        const url = new URL(request.url);
        const id = url.pathname.split('/')[3]
        await BOOKMARK_STORE.delete(id)
        
      return new Response("Sucessfully Deleted",{status: 200})
    } catch (err) {
      return new Response(err, { status: 400 })
    }
  }
  
  export default handler