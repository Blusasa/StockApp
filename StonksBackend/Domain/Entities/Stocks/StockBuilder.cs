// namespace StonksBackend.Domain.Entities.Stocks;
//
// public class StockBuilder
// {
//     private Stock _stock;
//
//     public StockBuilder()
//     {
//         _stock = new Stock();
//     }
//
//     public void AddQuote(Quote quote)
//     {
//         _stock.Quote = quote;
//     }
//
//     public void Add1HCandle(CandleData hrCandle)
//     {
//         _stock.CandleDatas.Add("1H", hrCandle);
//     }
//     
//     public void Add1DCandle(CandleData dayCandle)
//     {
//         _stock.CandleDatas.Add("1H", dayCandle);
//     }
//
//     public void Add1WCandle(CandleData wkCandle)
//     {
//         _stock.CandleDatas.Add("1W", wkCandle);
//     }
//
//     public void Add1MCandle(CandleData monthCandle)
//     {
//         _stock.CandleDatas.Add("1W", monthCandle);
//     }
//     
//     public void Add1YCandle(CandleData yrCandle)
//     {
//         _stock.CandleDatas.Add("1H", yrCandle);
//     }
//
//     public Stock Build()
//     {
//         return _stock;
//     }
// }