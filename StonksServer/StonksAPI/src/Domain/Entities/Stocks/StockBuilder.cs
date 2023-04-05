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
        if (_stock.CandleDatas == null) _stock.CandleDatas = new Dictionary<string, IEnumerable<CandleData>>();
    }

    private void clearDupeKeys(string key)
    {
        if (_stock.CandleDatas.ContainsKey(key)) _stock.CandleDatas.Remove(key);
    }

    public StockBuilder Add1HCandle(IEnumerable<CandleData> hrCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Hour);
        _stock.CandleDatas.Add(Hour, hrCandles);
        return this;
    }
    
    public StockBuilder Add1DCandle(IEnumerable<CandleData> dayCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Day);
        _stock.CandleDatas.Add(Day, dayCandles);
        return this;
    }

    public StockBuilder Add1WCandle(IEnumerable<CandleData> wkCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Week);
        _stock.CandleDatas.Add(Week, wkCandles);
        return this;
    }

    public StockBuilder Add1MCandle(IEnumerable<CandleData> monthCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Month);
        _stock.CandleDatas.Add(Month, monthCandles);
        return this;
    }
    
    public StockBuilder Add1YCandle(IEnumerable<CandleData> yrCandles)
    {
        checkCandleDictNull();
        clearDupeKeys(Year);
        _stock.CandleDatas.Add(Year, yrCandles);
        return this;
    }

    public Stock Build()
    {
        return _stock;
    }
}