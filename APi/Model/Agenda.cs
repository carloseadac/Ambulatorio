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
    public bool Aprovado { get; set; }


    public int save()
    {
        using (var context = new Model.Context())
        {
            Medico = context.Medico.FirstOrDefault(d=> d.Id == this.Medico.Id);
            User = context.User.FirstOrDefault(d=> d.Id == this.User.Id);
            var obj = new Model.Agenda
            {
                StartDate = this.StartDate,
                EndDate = this.StartDate.AddMinutes(30),
                Medico = Medico,
                User = User,
                Aprovado = false
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
            var agenda = context.Agenda.Include(p => p.User).Include(p => p.Medico).Where(c => c.Medico.Id == id);
            Console.WriteLine(agenda);
            List<object> agendas = new List<object>();

            foreach (var item in agenda)
            {
                // User = context.User.Where(d=> d.id == item.user.id);
                // item.user = User;
                agendas.Add(item);
                Console.WriteLine(item);
            }

            return agendas;
        }
    }
    public static List<object> findAllDay(int id)
    {
        using (var context = new Context())
        {
            Console.WriteLine(DateTime.Now);
            var agenda = context.Agenda.Include(p => p.User).Include(p => p.Medico).Where(c => c.Medico.Id == id).Where(f => f.StartDate > DateTime.Now);
            List<object> agendas = new List<object>();

            foreach (var item in agenda)
            {
                // User = context.User.Where(d=> d.id == item.user.id);
                // item.user = User;
                agendas.Add(item);
                Console.WriteLine(item);
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
            if (agendaDTO.IsApproved != null)
            {
                agendas.Aprovado= agendaDTO.IsApproved;
            }
            context.SaveChanges();
        }
    }
    public static void updateApproved(int id)
    {
        using (var context = new Context())
        {
            var agendas = context.Agenda.FirstOrDefault(i => i.Id == id);
            agendas.Aprovado = true;
            context.SaveChanges();
        }
    }
}