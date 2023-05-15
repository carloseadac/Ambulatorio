using Microsoft.AspNetCore.Mvc;
using Model;
using DTO;

namespace Controller.Controllers;

[ApiController]
[Route("Ocorrencia")]
public class OcorrenciaController : ControllerBase
{
    public IConfiguration _configuration;

    public OcorrenciaController(IConfiguration config)
    {
        _configuration = config;
    }

    [HttpGet]
    [Route("getAll")]

    public object getAllInformations()
    {
        var ocorrencia = Model.Ocorrencia.findAll();
        return ocorrencia;
    }

    [HttpGet]
    [Route("get/{id}")]
    public object getInformations(int id)
    {
        var ocorrencia = Model.Ocorrencia.findID(id);
        return ocorrencia;
    }

    [HttpGet]
    [Route("getEdv/{edv}")]
    public object getInformationsByEDV(string edv)
    {
        var ocorrencia = Model.Ocorrencia.findEDV(edv);
        return ocorrencia;
    }

    

    [HttpPost]
    [Route("registrar")]
    public object OccurrenceRegister([FromBody] OcorrenciaDTO ocorrencia){
        var Id = new Ocorrencia().save(ocorrencia.UsuarioId, ocorrencia.Ocorrencias.Id, ocorrencia);
        return new{
            Id = Id,
            Descricao = ocorrencia.Descricao,
            DataEntrada = ocorrencia.DataEntrada,
            DataSaida = ocorrencia.DataSaida,
            Comprovante = ocorrencia.Comprovante,
            Documento = ocorrencia.Documento,
            Ocorrencias = ocorrencia.Ocorrencias
        };
    }

    [HttpDelete]
    [Route("del/{id}")]
    public object OcurrenceDelet(int id){
        var obj = Model.Ocorrencia.deleta(id);
        return obj;
    }

    [HttpPut]
    [Route("update/{Id}")]
    public object editOcorrencia([FromBody] Ocorrencia ocorrenciaDTO, int Id){
        Model.Ocorrencia.update(ocorrenciaDTO, Id);
        return new{
            status = "ok",
            mensagem = "deu boa"
        };

    }
}
