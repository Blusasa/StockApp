namespace StonksAPI.Infrastructure.Clients.Market;

public class UrlBuilder
{
    private string _host;
    private string _path;
    private Dictionary<string, string> _queryParameters = new Dictionary<string, string>();

    public UrlBuilder WithHost(string host)
    {
        _host = host;
        return this;
    }

    public UrlBuilder WithPath(string path)
    {
        _path = path;
        return this;
    }

    public UrlBuilder WithQueryParameter(string name, string value)
    {
        _queryParameters[name] = value;
        return this;
    }

    public UrlBuilder WithQueryParameter(string name, Int64 value)
    {
        _queryParameters[name] = value.ToString();
        return this;
    }

    public string BuildUrl()
    {
        var queryString = string.Join("&", _queryParameters.Select(p => $"{p.Key}={p.Value}"));
        var url = $"{_host}/{_path}";

        if (!string.IsNullOrEmpty(queryString))
        {
            url += $"?{queryString}";
        }

        return url;
    }
}