import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


const Sommet: {
    [key: string]: {
        voisins: string[],
        distances: { [key: string]: number }
    }
}[] = [
        { a: { voisins: ["c"], distances: { b: 1, c: 1 } } },
        { b: { voisins: ["c", "a"], distances: { c: 3 } } },
        { c: { voisins: ["a", "b"], distances: { a: 12, b:4 } } }
    ];
const result: { [key: string]: any }[] = [{ a: 0 }, { b: 'infini' }, { c: 'infini' }];
let depart: string | undefined;
let distanceModified: string[];

for (let i = 0; i < result.length; i++) {
    const keys = Object.keys(result[i]);
    for (const key of keys) {
        if (result[i][key] === 0) {
            depart = key;
            break;
        }
    }
    if (depart) break;
}

for (let i = 0; i < result.length; i++) {
    const keys = Object.keys(result[i]);
    for (const key of keys) {
        let voisins: string[] | undefined;
        for (let j = 0; j < Sommet.length; j++) {
            const sommetKey = Object.keys(Sommet[j])[0];

            if (sommetKey === key) {
                voisins = Sommet[j][sommetKey].voisins;
                console.log(`Voisins de ${key}:`, voisins);
            }

        }
        if (voisins) {
            for (const key2 of keys) {
                for (const voisin of voisins) {
                    if (key2 === voisin) {
                        let d: number = /////////////////// distanceeee
                        
                        if (result[i][key] > result[i][voisin] + ) {

                        }
                    }

                }
            }
        }

    }
    if (depart) break;
}


console.log('test: ', depart);