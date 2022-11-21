using System.Data.SqlClient;
class Program
{
    static void Main(string[] args)
    {
        var connectionStr = new SqlConnectionStringBuilder();
        connectionStr.DataSource = "jevon.cmniog6zdesn.ap-southeast-2.rds.amazonaws.com";
        connectionStr.UserID = "Admin";
        connectionStr.Password = "Cache3108!!";
        connectionStr.InitialCatalog = "ng_assessment";
        Console.WriteLine($"{connectionStr.ConnectionString}");
    }
}