
namespace DTO;

public class ShiftDTO
{
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public bool Monday { get; set; }
    public bool Tuesday { get; set; }
    public bool Wednesday { get; set; }
    public bool Thursday { get; set; }
    public bool Friday { get; set; }
    public bool Saturday { get; set; }
    public bool Sunday { get; set; }

    public int IdMedico { get; set; }
}
