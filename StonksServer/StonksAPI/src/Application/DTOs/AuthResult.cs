namespace StonksAPI.Helpers;

public class AuthResult
{
    public string Token { get; set; }
    
    public bool Authenticated { get; set; }
    public List<string> errors { get; set; }
}