import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * [X]Recebimento das informações
 * [X]Tratativas de erros/excessões
 * [X]Acesso ao Repositorio
 */

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    // Analiso se existe a mesma data agendada.
    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    // Retorno mensagem de erro caso encontrado data duplicada.
    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    // Crio um objeto appointment
    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
