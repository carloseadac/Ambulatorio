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
    public object registerShift([FromBody] ShiftDTO shift){
        var Id = new Shift().save(shift);
        return new{
            StartDate = shift.StartTime,
            EndDate = shift.EndTime,
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
        var agendas = new Agenda().findAllDay(id);
        return agendas;
    }

    [HttpPut]
    [Route("Approve/{id}")]

    public void approveWithIdTrue(int id)
    {
        Model.Agenda.updateApproved(id);
    }

    [HttpPut]
    [Route("update")]

    public void approveWithId(ShiftDTO shift)
    {
        var id = Lib.GetIdFromRequest(Request.Headers["Authorization"].ToString());
        Model.Shift.update(shift, id);
    }

    [HttpGet]
    [Route("getAvailableTimes/{idMedico}/{data}")]

    public List<TimeSpan> getAvailableTimes(int idMedico, DateTime data)
    {
        var times = new Shift().findAvailableTimes(idMedico, data);
        return times;
    }


}
