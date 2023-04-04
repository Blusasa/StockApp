

using StonksBackend.Services.DTOs;

namespace StonksBackend.Domain.Entities {
    public class Group {
        
        public string _id { get; set; }
        public string GroupName { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public IEnumerable<User> users { get; set; }

    }
}