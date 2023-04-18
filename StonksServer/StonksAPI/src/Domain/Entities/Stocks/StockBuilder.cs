namespace StonksAPI.Domain.Entities.Stocks;

public class StockBuilder
{
    private Stock _stock;
    private const string Hour = "1H";
    private const string Day = "1D";
    private const string Week = "1W";
    private const string Month = "1M";
    private const string Year = "1Y";

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

    private void checkCandleDictNull()
    {
        if (_stock.CandleData == null) _stock.CandleData = new Dictionary<string, IEnumerable<Candle>>();
    }

    private void clearDupeKeys(string key)
    {
        if (_stock.CandleData.ContainsKey(key)) _stock.CandleData.Remove(key);
    }

    public StockBuilder Add1HCandle(IEnumerable<Candle> hrCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Hour);
        _stock.CandleData.Add(Hour, hrCandles);
        return this;
    }
    
    public StockBuilder Add1DCandle(IEnumerable<Candle> dayCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Day);
        _stock.CandleData.Add(Day, dayCandles);
        return this;
    }

    public StockBuilder Add1WCandle(IEnumerable<Candle> wkCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Week);
        _stock.CandleData.Add(Week, wkCandles);
        return this;
    }

    public StockBuilder Add1MCandle(IEnumerable<Candle> monthCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Month);
        _stock.CandleData.Add(Month, monthCandles);
        return this;
    }
    
    public StockBuilder Add1YCandle(IEnumerable<Candle> yrCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Year);
        _stock.CandleData.Add(Year, yrCandles);
        return this;
    }

    public Stock Build()
    {
        return _stock;
    }
}