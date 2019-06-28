import React,{useState} from 'react'

function Form(props) {
    const [entry,setEntry] = useState('');
    const [amount,setAmount] = useState('');
    const [incomeBtn,handleIncomeBtn] = useState(false);
    const [expenseBtn, handleExpenseBtn] = useState(false);
    const obj = {
        entry,
        amount,
        incomeBtn,
        expenseBtn
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newEntry(obj)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="entry" className="label-title">Enter Income or Expense</label>
            <input type="text"
            placeholder="Income/Expense"
            id="entry"
            name="entry"
            required
            value={entry}
            onChange={ e => setEntry(e.target.value)}
            />
            <label htmlFor="amount" className="label-title">Amount</label>
            <input type="text"
            placeholder="add an amount"
            id="amount"
            name="amount"
            required
            value={amount}
            onChange={e => setAmount(e.target.value)}
            />
            
            <input type="checkbox" 
            name="income" 
            id="income"
            value="income"
            onChange={e => handleIncomeBtn(!incomeBtn)}/>Income

            <input type="checkbox" 
            name="expense" 
            id="expense"
            value="expense"
            onChange={e => handleExpenseBtn(!expenseBtn)}/> Expense
            <button className="form-btn">Add</button>
        </form>
    )
}

export default Form