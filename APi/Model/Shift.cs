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


    public int save()
    {
        using (var context = new Model.Context())
        {
            var obj = new Model.Shift
            {
                StartTime = this.StartTime,
                EndTime = this.EndTime.AddMinutes(30),
                Medico = this.Medico,
                Monday = this.Monday,
                Tuesday = this.Tuesday,
                Wednesday = this.Wednesday,
                Thursday = this.Thursday,
                Friday = this.Friday,
                Saturday = this.Saturday,
                Sunday = this.Sunday
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

    public static List<object> findAll(int id)
    {
        using (var context = new Context())
        {
            var shift = context.Shift.Where(c => c.Medico.Id == id);

            List<object> shifts = new List<object>();

            foreach (var item in shift)
            {
                shifts.Add(item);
            }

            return shifts;
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