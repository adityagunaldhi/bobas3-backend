

app.get('/menu', async (req, res) => {
    const results = await knex('menu').select ();
    res.json(results);
    //res.send("Disini adalah data apapun yang akan dimunculkan")
    //res.json({disini adalah data json yang akan ditampilkan})
});

app.post("/menu", async (req, res) => {
    const data = req.body
    const results = await knex('menu').insert({
        name : data.name,
        description: data.description,
        price : data.price,
        stock : data.stock,
    })
    res.json(results)
    // connection.query(`INSERT INTO menu (name, description, price, stock) VALUES ('${data.name}', '${data.description}', '${data.price}', '${data.stock}')`, (error, results, fields) => {
    // });
});

app.delete("/menu/:id", async (req, res) => {
    const primaryKey = req.params.id
    const results = await knex("menu").where("id", primaryKey).del();
    res.json(results);
    
    // connection.query(`DELETE FROM menu WHERE id = '${primaryKey}'`, (error, results, fields) => {
        //     res.json(results)
        // });
});

app.put("/menu/:id", async (req, res) => {
    const primaryKey = req.params.id
    const data = req.body
    const results = await knex("menu").where("id", primaryKey).update({
        name : data.name,
        description: data.description,
        price : data.price,
        stock : data.stock,
    });
    res.json(results);
    
    // connection.query(`UPDATE menu SET name = '${data.name}', price = '${data.price}', stock = '${data.stock}' WHERE id = '${primaryKey}'`, (error, results, fields) => {
    //     res.json(results);
    // });
});