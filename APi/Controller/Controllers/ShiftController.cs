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
[Route("shift")]
public class ShiftController : ControllerBase
{

    public IConfiguration _configuration;

     public ShiftController(IConfiguration config){
        _configuration = config;
    }

    [HttpPost]
    [Route("register")]
    public object registerShift([FromBody] Shift shift){
        var Id = shift.save();
        return new{
            StartDate = shift.StartTime,
            EndDate = shift.EndTime,
            Medico = shift.Medico.Nome,
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
        var shifts = Model.Shift.findAll(id);
        return shifts;
    }

    [HttpGet]
    [Route("getAllDay")]

    public object getAllInformationsDay()
    {
        var id = Lib.GetIdFromRequest(Request.Headers["Authorization"].ToString());
        var agendas = Model.Agenda.findAllDay(id);
        return agendas;
    }

    [HttpPut]
    [Route("Approve/{id}")]

    public void approveWithId(int id)
    {
        Model.Agenda.updateApproved(id);
    }


}
