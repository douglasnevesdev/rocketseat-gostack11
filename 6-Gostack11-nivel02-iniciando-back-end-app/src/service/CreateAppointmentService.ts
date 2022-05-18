import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import AppError from '../errors/AppError';

/**
 * [X]Recebimento das informações
 * [X]Tratativas de erros/excessões
 * [X]Acesso ao Repositorio
 */

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmnetsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    // Analiso se existe a mesma data agendada.
    const findAppointmentInSameDate = await appointmnetsRepository.findByDate(
      appointmentDate,
    );

    // Retorno mensagem de erro caso encontrado data duplicada.
    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    // Crio um objeto appointment
    const appointment = appointmnetsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmnetsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
