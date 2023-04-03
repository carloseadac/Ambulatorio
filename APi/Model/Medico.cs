using System;
using Microsoft.EntityFrameworkCore;

namespace Model;
public class Medico
{
    public int Id { get; set; }
    public string Nome { get; set; }

    public string Edv { get; set; }
    public string Area { get; set; }
    public DateTime DataNasc { get; set; }
    public string Email { get; set; }
    public string Senha { get; set; }

    public int save()
    {

        int Id = 0;

        using (var context = new Context())
        {
            var medico = new Medico()
            {
                Nome = this.Nome,
                Edv = this.Edv,
                Senha = this.Senha,
                Area = this.Area,
                DataNasc = this.DataNasc,
                Email = this.Email,

            };
            context.Medico.Add(medico);
            context.SaveChanges();
            Id = medico.Id;
        }
        return Id;
    }

    public static object findID(string edv)
    {
        using (var context = new Context())
        {
            var medicos = context.Medico.FirstOrDefault(d => d.Edv == edv);
            return new
            {
                Nome = medicos.Nome,
                Edv = medicos.Edv,
                Senha = medicos.Senha,
                Area = medicos.Area,
                DataNasc = medicos.DataNasc,
                Email = medicos.Email,
            };
        }
    }

    public static object findByID(int id)
    {
        using (var context = new Context())
        {
            var medicos = context.Medico.FirstOrDefault(d => d.Id == id);
            return new
            {
                Nome = medicos.Nome,
                Edv = medicos.Edv,
                Senha = medicos.Senha,
                Area = medicos.Area,
                DataNasc = medicos.DataNasc,
                Email = medicos.Email,
                Id = id
            };
        }
    }

    // public static int find(int id){

    // }

    public static List<object> findAll()
    {
        using (var context = new Context())
        {
            var medico = context.Medico;

            List<object> medicos = new List<object>();

            foreach (var item in medico)
            {
                medicos.Add(item);
            }

            return medicos;
        }
    }

    public static Medico findByUser(String edv, string senha)
    {
        using (var context = new Context())
        {
            var userFind = context.Medico.FirstOrDefault(o => o.Edv == edv && o.Senha == senha);

            if (userFind != null)
            {
                Console.WriteLine(userFind.Id);
                return userFind;
            }

            return null;
        }
    }

    public static void update(Medico userDTO, string edv)
    {
        using (var context = new Context())
        {
            var usuario = context.Medico.FirstOrDefault(i => i.Edv == edv);
            if (userDTO.Senha != null)
            {
                usuario.Senha = userDTO.Senha;
            }
            context.SaveChanges();
        }
    }
}
