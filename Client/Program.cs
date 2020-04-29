using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using Client.ServiceReference1;

namespace Client
{
    class Program
    {
        static void Main(string[] args)
        {
            using (TransactionScope scope = new TransactionScope())
            {


                using (BankServiceClient client = new BankServiceClient())
                {
                    double money;
                    do
                    {
                        Console.WriteLine("Enter money: ");
                        money = Convert.ToInt32(Console.ReadLine());
                    } while (money > 0);
                }
                scope.Complete();
            }
        }
    }
}
