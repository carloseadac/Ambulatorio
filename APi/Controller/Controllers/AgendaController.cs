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
    public object registerAgenda([FromBody] AgendaDTO agenda){
        var Id = new Agenda().save(agenda);
        return new{
            StartDate = agenda.StartDate,
            EndDate = agenda.EndDate,
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

    [HttpGet]
    [Route("getAllDay")]

    public IList<Agenda> getAllInformationsDay()
    {
        var id = Lib.GetIdFromRequest(Request.Headers["Authorization"].ToString());
        var agendas = new Agenda().findAllDay(id);
        return agendas;
    }

    [HttpGet]
    [Route("getToday")]

    public IList<AgendaTodayDTO> getAllToday()
    {
        var id = Lib.GetIdFromRequest(Request.Headers["Authorization"].ToString());
        var agendas = new Agenda().findToday(id);
        return agendas;
    }

    [HttpPut]
    [Route("Approve/{id}")]

    public void approveWithId(int id)
    {
        Model.Agenda.updateApproved(id);
    }


}
