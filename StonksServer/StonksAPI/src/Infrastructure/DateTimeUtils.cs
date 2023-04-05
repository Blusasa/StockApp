namespace StonksAPI.Infrastructure;

public class DateTimeUtils
{
    public static long GetUnixTimeFromDate(DateTime date)
    {
        return (long)date.ToUniversalTime().Subtract(DateTime.UnixEpoch).TotalSeconds;
    }
    
    public static DateTime UnixToDateTime(long timestamp)
    {
        return DateTimeOffset.FromUnixTimeSeconds(timestamp).DateTime;
    }

    public static DateTime GetPreviousFridayCloseFromNow()
    {
        DayOfWeek currentDay = DateTime.Now.DayOfWeek;

        //Get the distance to previous Friday. Subtract a week from the forward distance between the current day and friday.
        int distanceToFriday = ((int)DayOfWeek.Friday - (int)currentDay);
        
        /*
         * This works because the reverse distance to friday is always a 0-sum game between the forward distance and 7. Sunday starts at 0 and proceeds
         * by 1 each day. The smaller the forward gap, the larger the reverse gap and the 2 combined always = 7.
         * EX: Day = Tue --- Fri(5) - Tue(2) = 3, 7 - 3 = 4. Tue -> Mon(1) -> Sun(2) -> Sat(3) -> Fri(4).
         * So if friday hasn't happened yet, we add -7 to the distance so that the distance is -(int) for the AddDays method
         * If it's saturday just use -1.
         */
        if (currentDay != DayOfWeek.Saturday) distanceToFriday += -7;
        else distanceToFriday = -1;


        DateTime fridayAtClose = DateTime.Today.AddDays(distanceToFriday).AddHours(20);

        return fridayAtClose;
    }

    public static DateTime GetPreviousThurdayCloseFromNow()
    {
        return GetPreviousFridayCloseFromNow().AddDays(-1);
    }

    public static DateTime GetTodayAt8PM()
    {
        return DateTime.Today.AddHours(20).AddMinutes(59);
    }

    public static DateTime GetYesterDayAt8PM()
    {
        return DateTime.Today.AddDays(-1).AddHours(19).AddMinutes(59);
    }
}