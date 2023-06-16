// // Oppgave 2. 

function findSufficientTeam(s, p) {
    // s = requiredSkills[]
    // p = people[]

    let team = [];
    // mens det er elementer i requiredSkills 
    while (s.length > 0){
        let sharedSkills = 0;
        let mostSharedSkillsIndex = -1; // -1 index = undefined i en array

        // finner index fra people med flest matchende elementer fra requiredSkills
        for (let i = 0; i < p.length; i++) {
            let currentSharedSkills = findSharedSkills(s, p[i])
            if (currentSharedSkills > sharedSkills){
                sharedSkills = currentSharedSkills

                // index fra people med flest like elementer
                mostSharedSkillsIndex = i
            }
        };

        for (let i = 0; i < s.length; i++) {
            // hvis mostShardSkillsIndex = -1, p[-1] finnes ikke derfor === undefined
            if (p[mostSharedSkillsIndex] === undefined){
                return "shared people skills could not satisfy requiredSkills"
            }

            // sjekker hvilken index som matcher.
            const index = p[mostSharedSkillsIndex].indexOf(s[i]);
            

            if (index !== -1) {
                // fjern index som matcher
                s.splice(i, 1);
                i--;
            }
        }
        // indexen til personen 
        team.push(mostSharedSkillsIndex)

        // fjerner elementene fra personen som er blitt med i team
        p[mostSharedSkillsIndex].length = 0
    }
    return team;
};
// Returnerer/Sjekker hvor mange elementer to lister deler
function findSharedSkills(p, s){
    let count = 0;
    for (let i = 0; i < p.length; i++){
        if (s.includes(p[i])){
            count++
        }
    }
    return count;
}

const requiredSkills = ["mongodb", "nodejs", "reactjs"];
const people = [["java", "reactjs"], ["reactjs"], ["mongodb", "nodejs"], ["c++"], ["reactjs",  "java"]];

console.log(findSufficientTeam(requiredSkills, people));
