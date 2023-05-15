
namespace DTO;

public class AgendaDTO
{
    public int Id { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Descricao { get; set; }
    public int MedicoId { get; set; }
    public int UserId { get; set; }
    public bool IsApproved { get; set; }
}
