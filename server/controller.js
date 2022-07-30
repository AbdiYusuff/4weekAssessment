let usersDB = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "A fresh start will put you on your way", "A good time to finish up old tasks", " Adventure can be real happiness","All your hard work will soon pay off"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }, 

    deleteItem: (req, res) => {
    
        const {id} = req.params;
        usersDB.splice(id, 1);
        res.status(200).send(usersDB)
    }, 
    
    submitCompliment: (req, res) => {
        const {userValue} = req.body
        usersDB.push(userValue)
        res.status(200).send(usersDB)
    },

}