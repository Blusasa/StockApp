namespace StonksAPI.Domain.Entities.Stocks;

public class News
{
    public string Category { get; set; } = string.Empty;
    public DateTime PublishTime { get; set; }
    public string Headline { get; set; } = string.Empty;
    public int Id { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public string RelatedStocksSymbol { get; set; } = string.Empty;
    public string Source { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string SourceUrl { get; set; } = string.Empty;
}