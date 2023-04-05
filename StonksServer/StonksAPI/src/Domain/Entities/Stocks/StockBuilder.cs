namespace StonksAPI.Domain.Entities.Stocks;

public class StockBuilder
{
    private Stock _stock;

    public StockBuilder()
    {
        _stock = new Stock();
    }

    public StockBuilder ProvideInfo(string name, string symbol)
    {
        _stock.CompanyName = name;
        _stock.Symbol = symbol;
        return this;
    }

    public StockBuilder AddNews(News news)
    {
        _stock.News.Add(news);
        return this;
    }

    public StockBuilder AddQuote(Quote quote)
    {
        _stock.Quote = quote;
        return this;
    }

    public StockBuilder Add1HCandle(CandleData hrCandle)
    {
        _stock.CandleDatas.Add("1H", hrCandle);
        return this;
    }
    
    public StockBuilder Add1DCandle(CandleData dayCandle)
    {
        _stock.CandleDatas.Add("1D", dayCandle);
        return this;
    }

    public StockBuilder Add1WCandle(CandleData wkCandle)
    {
        _stock.CandleDatas.Add("1W", wkCandle);
        return this;
    }

    public StockBuilder Add1MCandle(CandleData monthCandle)
    {
        _stock.CandleDatas.Add("1M", monthCandle);
        return this;
    }
    
    public StockBuilder Add1YCandle(CandleData yrCandle)
    {
        _stock.CandleDatas.Add("1Y", yrCandle);
        return this;
    }

    public Stock Build()
    {
        return _stock;
    }
}