using System;
using Microsoft.EntityFrameworkCore;

namespace Model;

public class Context : DbContext
{
    public DbSet<Adm> Adm { get; set; }
    public DbSet<Ocorrencia> Ocorrencia { get; set; }
    public DbSet<Ocorrencias> Ocorrencias { get; set; }
    public DbSet<User> User { get; set; }
    public DbSet<Medico> Medico{ get; set; }
    public DbSet<Agenda> Agenda { get; set; }
    public DbSet<Shift> Shift { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

        optionsBuilder.UseSqlServer("Data Source=SNCCH01LAB01F18\\SQLEXPRESS;Initial Catalog=ProjetoOcorrencias; Integrated Security=True");

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Adm>(entity =>{

            entity.HasKey(a => a.Id);
            entity.Property(a => a.Nome);
            entity.Property(a => a.Area);
            entity.Property(a => a.Edv);
            entity.Property(a =>a.DataNasc);
            entity.Property(a =>a.Email);
            entity.Property(a=>a.Senha);

        });
        modelBuilder.Entity<Ocorrencias>(entity =>{

            entity.HasKey(a => a.Id);
            entity.Property(a => a.Nome);
        });
        modelBuilder.Entity<Ocorrencia>(entity =>{

            entity.HasKey(a => a.Id);
            entity.Property(a => a.Descricao);
            entity.Property(a => a.DataEntrada);
            entity.Property(a =>a.DataSaida);
            entity.Property(a =>a.Comprovante);
            entity.Property(a=>a.Documento);
            entity.HasOne(a=>a.Ocorrencias);
            entity.HasOne(a => a.Usuario)
            .WithMany()
            .HasForeignKey(a => a.UsuarioId); ;

        });
        modelBuilder.Entity<User>(entity =>{

            entity.HasKey(a => a.Id);
            entity.Property(a => a.Nome).IsRequired();
            entity.Property(a => a.Area).IsRequired();
            entity.Property(a => a.Edv).IsRequired();
            entity.Property(a =>a.DataNasc).IsRequired();
            entity.Property(a =>a.Email).IsRequired();
            entity.Property(a=>a.Senha).IsRequired();

        });
        modelBuilder.Entity<Medico>(entity => {

            entity.HasKey(a => a.Id);
            entity.Property(a => a.Nome);
            entity.Property(a => a.Area);
            entity.Property(a => a.Edv);
            entity.Property(a => a.DataNasc);
            entity.Property(a => a.Email);
            entity.Property(a => a.Senha);

        });
        modelBuilder.Entity<Agenda>(entity => {
            entity.HasKey(a => a.Id);
            entity.Property(a => a.StartDate).IsRequired();
            entity.Property(a => a.EndDate).IsRequired();
            entity.Property(a => a.Descricao).IsRequired();
            entity.HasOne(a => a.User)
            .WithMany()
            .HasForeignKey(a => a.UserId).IsRequired(false);
            entity.HasOne(a => a.Medico)
            .WithMany()
            .HasForeignKey(a => a.MedicoId);
        });
        modelBuilder.Entity<Shift>(entity => {
            entity.HasKey(a => a.Id);
            entity.Property(a => a.StartTime);
            entity.Property(a => a.EndTime);
            entity.Property(a => a.Monday);
            entity.Property(a => a.Tuesday);
            entity.Property(a => a.Wednesday);
            entity.Property(a => a.Thursday);
            entity.Property(a => a.Friday);
            entity.Property(a => a.Saturday);
            entity.Property(a => a.Sunday);
            entity.Property(a => a.IdMedico);
            entity.HasOne(a => a.Medico)
            .WithMany()
            .HasForeignKey(a => a.IdMedico);
        });

    }
}