import { eventsRepository } from "../repositories/events.repository.js";

// Reglas de negocio de events (por ahora vacío)
class EventsService {
  async getAll() {
    return await eventsRepository.getAll();
  }
}

export const eventsService = new EventsService();
