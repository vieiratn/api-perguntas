const configs = {
    data: {
        "author": "Thiago Nascimento",
        "description": "An api that returns a random question",
        "access": "/api endpoint",
        "version": "1.0.0"
    },
    randInt: (max) => {
        let num = Math.floor(Math.random() * max + 1);
        return num;
    }
}

module.exports = configs;