using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace BankTrankLib
{
    [ServiceContract(SessionMode =SessionMode.Required)]
    public interface IBankService
    {
        [OperationContract] void Mithdraw(int m,int number);
        [OperationContract] int GetAccountInfo(int number);
        [OperationContract] int CreateAccount(int m);
        [OperationContract] void PutMoney(double money);
        [OperationContract] double GetBalance();
    }

    [ServiceBehavior]
    public class BankService : IBankService
    {
        List<Account> accounts = new List<Account>();
        double balance = 0;
        static int id = 0;

        public BankService()
        {
            ++id;
            Console.WriteLine("Account {0} created", id);
        }
        public double GetBalance()
        {
            return balance;
        }
      public int CreateAccount(int m)
        {

            accounts.Add(new Account() { Balance = m });
            return m;
        }
        [OperationBehavior(TransactionScopeRequired =true,TransactionAutoComplete =false)]
        [TransactionFlow(TransactionFlowOption.Allowed)]
        public void PutMoney(double money)
        {
            Console.WriteLine("Put money");
            balance += money;
            Console.WriteLine("shakeli = "+balance);
            Console.WriteLine("treansaction"+Transaction.Current.TransactionInformation.LocalIdentifier);
        }

        public void Mithdraw(int m, int number)
        {
            Account acc = (from p in accounts
                           where p.Number.Equals(number)
                           select p).First();
            acc.Balance -= m;
        }

        public int GetAccountInfo(int number)
        {
            Account acc = (from p in accounts
                           where p.Number.Equals(number)
                           select p).First();
            return acc.Balance;
        }
    }
    class Account
    {
        public Account()
        {
            Random rnd = new Random();
            Number = rnd.Next(0, 100);
        }
        public int Number { get; set; }
        public int Balance { get; set; }
    }
}
