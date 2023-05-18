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
    public User? User { get; set; }
    public bool Aprovado { get; set; }
    public int MedicoId { get; set; }
    public int? UserId { get; set; }
    public string Descricao { get; set; }




    public int save(AgendaDTO agenda)
    {
        using (var context = new Model.Context())
        {
            Medico = context.Medico.FirstOrDefault(d=> d.Id == agenda.MedicoId);
            User = context.User.FirstOrDefault(d=> d.Id == agenda.UserId);
            context.Entry(Medico).State = EntityState.Unchanged;
            var obj = new Model.Agenda
            {
                StartDate = agenda.StartDate,
                EndDate = agenda.EndDate,
                Descricao = agenda.Descricao,
                MedicoId = agenda.MedicoId,
                UserId = User == null ? 1 : agenda.UserId,
                Aprovado = agenda.IsApproved
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
    public IList<Agenda> findAllDay(int id)
    {
        using (var context = new Context())
        {
            Console.WriteLine(DateTime.Now);
            var agenda = context.Agenda.Include(p => p.User).Include(p => p.Medico).Where(c => c.Medico.Id == id).ToList();
            Console.WriteLine(agenda);

            return agenda;
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