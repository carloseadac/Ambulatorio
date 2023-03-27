using System;
using Microsoft.EntityFrameworkCore;
using DTO;

namespace Model;
public class Agenda
{
    public int Id { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public Medico Medico { get; set; }
    public User User { get; set; }


    public int save()
    {
        using (var context = new Model.Context())
        {
            var obj = new Model.Agenda
            {
                StartDate = this.StartDate,
                EndDate = this.StartDate.AddMinutes(30), 
                Medico = this.Medico,
                User = this.User
            };
            context.Agenda.Add(obj);
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
                EndDate =   agendas.EndDate,
                Medico = agendas.Medico,
                User = agendas.User
            };
        }
    }

    public static List<object> findAll()
    {
        using (var context = new Context())
        {
            var agenda = context.Ocorrencias;

            List<object> agendas = new List<object>();

            foreach (var item in agenda)
            {
                agendas.Add(item);
            }

            return agendas;
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