/*
Sistema de gastos familiares

crie um objeto que possuirá 2 propriedades, ambas do tipo Array:
* receitas []
* despesas []

Agora, crie uma função que irá calcular o total de receitas e despesas e
irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
seguido do valor do saldo.
*/


let family = {
    incomes: [2500, 1500, 200.45, 350.75],
    expenses: [650, 100, 50, 40, 300, 500]
}


function sum(array) {
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    const total = calculateIncomes - calculateExpenses

    if(total >= 0) {
        console.log("Saldo positivo de R$" + total + " Reais.")
    } else {
        console.log("Saldo negativo de R$" + total + " Reais.")
    }
}

calculateBalance()