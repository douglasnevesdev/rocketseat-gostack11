// Appointments => Agendamentos
// Provider => Profissional que prestara serviço.
import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

// Listando Agendamentos
appointmentsRouter.get('/', async (request, response) => {
  console.log(request.user);
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();
  return response.json(appointments);
});

// Realizar um agendamento, precisa do provider e date.
appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  // Converte data
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);

  return response.status(400).json({ error: err.message });
});

export default appointmentsRouter;
