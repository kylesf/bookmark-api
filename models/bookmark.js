import { v4 as uuidv4 } from 'uuid';

class Bookmark {
    constructor(uuid, blob) {
        if (!blob) {
          throw new Error(`Missing bookmark blob`)
        }
        this.uuid = uuid || uuidv4()
        this.blob = blob
      }

    static list(ids) {
      return Promise.all(ids.map(Bookmark.find))
    }
  
    static async find(uuid) {
      const persisted = await BOOKMARK_STORE.get(uuid.name)
      const book = JSON.parse(persisted)
      return book
    }
    
    save() {
      return BOOKMARK_STORE.put(`bid:${this.uuid}`, JSON.stringify(this))
    }
}
  
export default Bookmark