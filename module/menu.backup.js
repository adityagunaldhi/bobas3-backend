app.get('/menu', function (req, res) {
  
    //res.send("Disini adalah data apapun yang akan dimunculkan")
    //res.json({disini adalah data json yang akan ditampilkan})

    connection.query('SELECT * FROM menu', function (error, results, fields) {
       res.json(results)
      });

});

app.post("/menu", (req, res) => {
    const data = req.body
    
    connection.query(`INSERT INTO menu (name, description, price, stock) VALUES ('${data.name}', '${data.description}', '${data.price}', '${data.stock}')`, (error, results, fields) => {
        res.json(results)
    });
});

app.delete("/menu/:id", (req, res) => {
    const primaryKey = req.params.id

    connection.query(`DELETE FROM menu WHERE id = '${primaryKey}'`, (error, results, fields) => {
        res.json(results)
    });
});

app.put("/menu/:id", (req, res) => {
    const primaryKey = req.params.id
    const data = req.body
    
    connection.query(`UPDATE menu SET name = '${data.name}', price = '${data.price}', stock = '${data.stock}' WHERE id = '${primaryKey}'`, (error, results, fields) => {
        res.json(results);
    });
});