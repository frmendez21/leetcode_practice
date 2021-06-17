const sortSentence = s => {
    const split = s.split(' ');
    const res = new Array(split.length);
    for(let i = 0; i < split.length; i++) {
        const sNum = Number(split[i].slice(-1));
        res[sNum - 1] = split[i].slice(0, -1)
    }
    return res.join(' ');
};

const s = "is2 sentence4 This1 a3"; // "This is a sentence"
const s2 = "Myself2 Me1 I4 and3"; // "Me Myself and I"
console.log(sortSentence(s))
console.log(sortSentence(s2))