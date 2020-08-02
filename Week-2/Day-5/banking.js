/**
This class is the primary Banking class. It incorporates all bank related entities and functions in a Banking ecosystem.
*/
class Bank{
	constructor(code,address, customerList, atmList, accountList){
		this.code= code;
		this.address= address;
		this.customerList=customerList;
		this.atmList= atmList;
		this.accountList= accountList;
	}
	manages(){}
	maintains(){}
}

/**
This class is an abstract class. It has account details like AccountNumber, account holding customer and atm transaction lists.
*/
class Account {
	constructor(number, balance, customerObject, atmTransactionList){
		this.number=number;
		this.balance=balance;
		this.customerObject= customerObject;
		this.atmTransactionList= atmTransactionList;
	}
	deposit(){}
	withdraw(){}
	createTransaction(){}
}

/**
This class is meant to have customer personal details and activities related to customer.
*/
class Customer{
	constructor(name, address, dob, cardNumber, pin,accountList){
		this.name= name;
		this.address= address;
		this.dob=dob;
		this.cardNumber=cardNumber;
		this.pin=pin;
		setAccountList(accountList);
	}
	verifyPassword(){}
	setAccountList(accountList){
		if(accountList.length>2) throw "Customer can't have more than two accounts";
		this.accountList= accountList;
	}
}

/**
This class is meant to have ATM details and related functionalities.
*/
class ATM{
	constructor(location, managedBy){
		this.location= location;
		this.managedBy= managedBy;
	}
	identifies(){}
	transactions(){}
}

/**
This class is meant to have ATM transcation details and related functionalities.
*/
class ATM_Transactions{
	constructor(transaction_ID, date, type, amount, post_balance){
		this.transaction_ID=transaction_ID;
		this.date= date;
		this.type= type;
		this.amount= amount;
		this.post_balance= post_balance;
	}
	modifies(){}
}

/**
This class is child class of Account class meant to have functionalities related to Current accounts.
*/
class Current_Account extends Account{
	constructor(number, balance, accountNo, balance){
		super(number, balance);
		this.accountNo= accountNo;
		this.balance= balance;
	}
	withdraw(){}
}

/**
This class is child class of Account class meant to have functionalities related to savings accounts.
*/
class Saving_Account extends Account{
	constructor(number, balance, accountNo, balance){
		super(number, balance);
		this.accountNo= accountNo;
		this.balance=balance;
	}
}