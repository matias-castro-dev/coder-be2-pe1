import { eventsDao } from "../dao/events.dao.js";

// Delega en el DAO, sin reglas de negocio
class EventsRepository {
  async getAll() {
    return await eventsDao.getAll();
  }
}

export const eventsRepository = new EventsRepository();
