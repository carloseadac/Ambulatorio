
namespace DTO;

public class AgendaDTO
{
    public int Id { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public UserDTO Medico { get; set; }
    public UserDTO Usuario { get; set; }
}
