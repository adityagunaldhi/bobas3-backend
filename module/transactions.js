app.post("/transactions", async (req, res) => {
    const data = req.body
    const menuDariFrontEnd = data.menu

    let todayDate= new Date()
    let generateId = todayDate.getTime()

    const insertTransactions = await knex('transactions').insert({
        id : generateId,
        buyer: data.buyer,
        cashier : data.cashier
    })
    
    const insertTransactionsMenu = await knex('transaction_menu').insert(
        menuDariFrontEnd.map((menu) => ({
            transaction_id : generateId,
            menu_id : menu.id,
            quantity : menu.quantity
        }))
    )
    res.json(insertTransactions)
});