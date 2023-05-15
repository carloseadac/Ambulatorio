using System;
using Microsoft.EntityFrameworkCore;
using DTO;

namespace Model;
public class Shift
{
    public int Id { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public bool Monday { get; set; }
    public bool Tuesday { get; set; }
    public bool Wednesday { get; set; }
    public bool Thursday { get; set; }
    public bool Friday { get; set; }
    public bool Saturday { get; set; }
    public bool Sunday { get; set; }

    public Medico Medico { get; set; }

    public int IdMedico { get; set; }


    public int save(ShiftDTO shiftDto)
    {
        using (var context = new Model.Context())
        {
            var medico = context.Medico.Where(m => m.Id == shiftDto.IdMedico).FirstOrDefault();
            context.Entry(medico).State = EntityState.Unchanged;
            var obj = new Model.Shift
            {
                StartTime = shiftDto.StartTime,
                EndTime = shiftDto.EndTime,
                Medico = medico,
                Monday = shiftDto.Monday,
                Tuesday = shiftDto.Tuesday,
                Wednesday = shiftDto.Wednesday,
                Thursday = shiftDto.Thursday,
                Friday = shiftDto.Friday,
                Saturday = shiftDto.Saturday,
                Sunday = shiftDto.Sunday
            };
            context.Shift.Add(obj);
            context.SaveChanges();
            Id = obj.Id;
        }
        return Id;
    }

    public static object findID(int id)
    {
        using (var context = new Context())
        {
            var agendas = context.Agenda.FirstOrDefault(d => d.Id == id);
            return new
            {
                StartDate = agendas.StartDate,
                EndDate = agendas.EndDate,
                Medico = agendas.Medico,
                User = agendas.User
            };
        }
    }
    public List<TimeSpan> findAvailableTimes(int idMedico, DateTime data) { 
        using (var context = new Context())
        {
            var consultas = context.Agenda.Where(x => x.StartDate > data.Date && x.EndDate < data.AddDays(1) && x.MedicoId == idMedico).ToList();
            Console.WriteLine(consultas);
            var shift = context.Shift.Where(c => c.Medico.Id == idMedico).FirstOrDefault();
            TimeSpan startHour = new TimeSpan(shift.StartTime.Hour, shift.StartTime.Minute,0);
            TimeSpan endHour = new TimeSpan(shift.EndTime.Hour, shift.EndTime.Minute, 0);

            TimeSpan increment = new TimeSpan(0, 30, 0); // 30 minutes

            List<TimeSpan> availableTimes = new List<TimeSpan>();

            if (shift.Monday && data.DayOfWeek == DayOfWeek.Monday ||
                shift.Tuesday && data.DayOfWeek == DayOfWeek.Tuesday ||
                shift.Wednesday && data.DayOfWeek == DayOfWeek.Wednesday ||
                shift.Thursday && data.DayOfWeek == DayOfWeek.Thursday ||
                shift.Friday && data.DayOfWeek == DayOfWeek.Friday ||
                shift.Saturday && data.DayOfWeek == DayOfWeek.Saturday ||
                shift.Sunday && data.DayOfWeek == DayOfWeek.Sunday)
            {
                for (TimeSpan time = startHour; time < endHour; time += increment)
                {
                    if (consultas.Count() > 0)
                    {
                        foreach (Agenda consulta in consultas)
                        {
                            if (time >= consulta.StartDate.TimeOfDay && time <= consulta.EndDate.TimeOfDay ||
                                time +increment >= consulta.StartDate.TimeOfDay && time + increment <= consulta.EndDate.TimeOfDay)
                            {

                            }
                            else
                            {
                                availableTimes.Add(time);
                            }
                        }
                    }
                    else
                    {
                        availableTimes.Add(time);
                    }


                }
            }
            

            return availableTimes;
        }
        
    }

    public static object findAll(int id)
    {
        using (var context = new Context())
        {
            var shift = context.Shift.Where(c => c.Medico.Id == id).FirstOrDefault();          

            return shift;
        }
    }

    public static void delete(int id)
    {
        using (var context = new Context())
        {
            var agendas = context.Agenda.FirstOrDefault(i => i.Id == id);

            context.Agenda.Remove(agendas);
            context.SaveChanges();
        }
    }
    public static void update(AgendaDTO agendaDTO, int id)
    {
        using (var context = new Context())
        {
            var agendas = context.Agenda.FirstOrDefault(i => i.Id == id);
            if (agendaDTO.StartDate != null)
            {
                agendas.StartDate = agendaDTO.StartDate;
            }
            if (agendaDTO.EndDate != null)
            {
                agendas.EndDate = agendaDTO.EndDate;
            }
            context.SaveChanges();
        }
    }
}