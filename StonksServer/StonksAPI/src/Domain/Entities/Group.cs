

namespace StonksAPI.Domain.Entities {
    public class Group {
        
        public string _id { get; set; }
        public string GroupName { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public IEnumerable<AppUser> users { get; set; }

    }
}