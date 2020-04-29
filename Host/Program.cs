using BankTrankLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace Host
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.Title = "HOST";
            using (ServiceHost host = new ServiceHost(typeof(BankService)))
            {
                host.Open();
                Console.WriteLine("Working...");
                Console.ReadLine();
            }
        }
    }
}
