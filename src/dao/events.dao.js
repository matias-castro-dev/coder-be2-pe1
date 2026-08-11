// Acceso a datos. Todavía sin DB, devuelve lista vacía
class EventsDao {
  async getAll() {
    return [];
  }
}

export const eventsDao = new EventsDao();
