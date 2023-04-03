using DTO;
using Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace Controller.Controllers;

[ApiController]
[Route("agenda")]
public class AgendaController : ControllerBase
{

    public IConfiguration _configuration;

     public AgendaController(IConfiguration config){
        _configuration = config;
    }

    [HttpPost]
    [Route("register")]
    public object registerUser([FromBody] Agenda agenda){
        var Id = agenda.save();
        return new{
            StartDate = agenda.StartDate,
            EndDate = agenda.EndDate,
            Medico = agenda.Medico.Nome,
            Id = Id

        };

    }

    [HttpGet]
    [Route("get/{edv}")]
    
    public object getInformations(string edv)
    {
        
        Console.WriteLine(edv);
        var user = Model.User.findID(edv);
        return user;
    }

    [HttpGet]
    [Route("getAll")]

    public object getAllInformations()
    {
        var id = Lib.GetIdFromRequest(Request.Headers["Authorization"].ToString());
        var agendas = Model.Agenda.findAll(id);
        return agendas;
    }


}
