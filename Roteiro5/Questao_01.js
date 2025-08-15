const request = (url) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(`Dados recebidos de ${url}`);
            } else {
                reject(`Erro ao acessar ${url}`);
            }
        }, 2000);
    });

const fetchData = async (url) => {
    try {
        const response = await request(url);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

fetchData();
