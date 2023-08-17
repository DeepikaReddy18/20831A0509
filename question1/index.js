const express = require('express');

const axios = require('axios');

const app = express();

const port = 8008;

app.get('/numbers', async (req, res) => { 
    const urls = req.query.url || [];

    const numberSets = [];

    try {

        await Promise.all(

            urls.map(async (url) => {

               try {

                const response = await axios.get(url);

                if (response.data.numbers) {

                   numberSets.push(...response.data.numbers);
                   
                }
               }catch(error){
                console.error('Error fetching data from ${url}:',error.message);

               }
            })
        );
        const uniqueNumberrs =Array.from(new Set(numberSets));
        const sortNumbers = uniqueNumberrs.sort((a,b) => a-b);
        res.json({numbers : sortNumbers})
    }
    catch(error){
        console.error('Error',error.message);
        res.status(500).json({error : 'Internal Server Error'});

    }
});
app.listen(port, () => {
    console.log('Server is running on port ${port}');

});
