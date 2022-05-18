// Appointments => Agendamentos
// Provider => Profissional que prestara serviço.
import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentsRouter = Router();

// Informo o repositorio
const appointmentsRepository = new AppointmentsRepository();

// Listando Agendamentos
appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();
  return response.json(appointments);
});

// Realizar um agendamento, precisa do provider e date.
appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    // Converte data
    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
