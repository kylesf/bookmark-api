import { v4 as uuidv4 } from 'uuid';

class Bookmark {
    constructor(id, blob) {
        if (!blob) {
          throw new Error(`Missing bookmark blob`)
        }
        this.id = id || uuidv4()
        this.blob = blob
      }

    static list(ids) {
      return Promise.all(ids.map(Bookmark.find))
    }
  
    static async find(id) {
      const persisted = await BOOKMARK_STORE.get(id.name)
      const book = JSON.parse(persisted)
      return book
    }
    
    save() {
      return BOOKMARK_STORE.put(`bid:${this.id}`, JSON.stringify(this))
    }
}
  
export default Bookmark