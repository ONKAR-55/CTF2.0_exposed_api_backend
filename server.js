const express = require('express');
const cors = require('cors'); // Vital for frontend/backend communication
const app = express();
const PORT = process.env.PORT || 3000;

// This is the key the player MUST find in the GitHub history
const LEAKED_API_KEY = "EMP_SECURE_TOKEN_8829_X"; 

// This is the flag the player wants
const HIDDEN_FLAG = "flag{git_l0gs_ar3_forever_2026}";

app.use(cors()); // Allows your frontend to talk to this backend
app.use(express.json());

app.get('/api/employees', (req, res) => {
    const userKey = req.headers['x-api-key'];
    
    console.log('Received headers:', req.headers);
    console.log('API Key received:', userKey);
    console.log('API Key expected:', LEAKED_API_KEY);

    if (userKey === LEAKED_API_KEY) {
        // If the key is correct, return the "secret" data
        res.json([
            { name: "Alice Johnson", position: "Developer", contact: "alice@corp.com" },
            { name: "Bob Smith", position: "Designer", contact: "bob@corp.com" },
            { name: "Internal Admin", position: "System Root", contact: HIDDEN_FLAG },
            { name: "John Doe", position: "Developer", contact: "john.doe@corp.com" },
            { name: "Jane Smith", position: "Designer", contact: "jane.smith@corp.com" },
            { name: "Peter Jones", position: "Manager", contact: "peter.jones@corp.com" },
            { name: "Mary Johnson", position: "Developer", contact: "mary.johnson@corp.com" },
            { name: "David Williams", position: "Designer", contact: "david.williams@corp.com" },
            { name: "Susan Brown", position: "Manager", contact: "susan.brown@corp.com" },
            { name: "Michael Davis", position: "Developer", contact: "michael.davis@corp.com" },
            { name: "Linda Miller", position: "Designer", contact: "linda.miller@corp.com" },
            { name: "Robert Wilson", position: "Manager", contact: "robert.wilson@corp.com" },
            { name: "Patricia Moore", position: "Developer", contact: "patricia.moore@corp.com" },
            { name: "James Taylor", position: "Designer", contact: "james.taylor@corp.com" },
            { name: "Barbara Anderson", position: "Manager", contact: "barbara.anderson@corp.com" },
            { name: "William Thomas", position: "Developer", contact: "william.thomas@corp.com" },
            { name: "Elizabeth Jackson", position: "Designer", contact: "elizabeth.jackson@corp.com" },
            { name: "Richard White", position: "Manager", contact: "richard.white@corp.com" },
            { name: "Jessica Harris", position: "Developer", contact: "jessica.harris@corp.com" },
            { name: "Charles Martin", position: "Designer", contact: "charles.martin@corp.com" },
            { name: "Karen Thompson", position: "Manager", contact: "karen.thompson@corp.com" },
            { name: "Joseph Garcia", position: "Developer", contact: "joseph.garcia@corp.com" },
            { name: "Nancy Martinez", position: "Designer", contact: "nancy.martinez@corp.com" },
            { name: "Thomas Robinson", position: "Manager", contact: "thomas.robinson@corp.com" },
            { name: "Sarah Clark", position: "Developer", contact: "sarah.clark@corp.com" },
            { name: "Christopher Rodriguez", position: "Designer", contact: "christopher.rodriguez@corp.com" },
            { name: "Lisa Lewis", position: "Manager", contact: "lisa.lewis@corp.com" },
            { name: "Daniel Lee", position: "Developer", contact: "daniel.lee@corp.com" },
            { name: "Betty Walker", position: "Designer", contact: "betty.walker@corp.com" },
            { name: "Paul Hall", position: "Manager", contact: "paul.hall@corp.com" },
            { name: "Sandra Allen", position: "Developer", contact: "sandra.allen@corp.com" },
            { name: "Mark Young", position: "Designer", contact: "mark.young@corp.com" },
            { name: "Ashley Hernandez", position: "Manager", contact: "ashley.hernandez@corp.com" },
            { name: "Donald King", position: "Developer", contact: "donald.king@corp.com" },
            { name: "Kimberly Wright", position: "Designer", contact: "kimberly.wright@corp.com" },
            { name: "George Lopez", position: "Manager", contact: "george.lopez@corp.com" },
            { name: "Donna Hill", position: "Developer", contact: "donna.hill@corp.com" },
            { name: "Kenneth Scott", position: "Designer", contact: "kenneth.scott@corp.com" },
            { name: "Carol Green", position: "Manager", contact: "carol.green@corp.com" },
            { name: "Steven Adams", position: "Developer", contact: "steven.adams@corp.com" },
            { name: "Michelle Baker", position: "Designer", contact: "michelle.baker@corp.com" },
            { name: "Edward Gonzalez", position: "Manager", contact: "edward.gonzalez@corp.com" },
            { name: "Deborah Nelson", position: "Developer", contact: "deborah.nelson@corp.com" },
            { name: "Brian Carter", position: "Designer", contact: "brian.carter@corp.com" },
            { name: "Laura Mitchell", position: "Manager", contact: "laura.mitchell@corp.com" },
            { name: "Kevin Perez", position: "Developer", contact: "kevin.perez@corp.com" },
            { name: "Amy Roberts", position: "Designer", contact: "amy.roberts@corp.com" },
            { name: "Jason Turner", position: "Manager", contact: "jason.turner@corp.com" },
            { name: "Melissa Phillips", position: "Developer", contact: "melissa.phillips@corp.com" },
            { name: "Gary Campbell", position: "Designer", contact: "gary.campbell@corp.com" },
            { name: "Cynthia Parker", position: "Manager", contact: "cynthia.parker@corp.com" }
        ]);
    } else {
        // If the key is wrong or missing
        res.status(401).json({ error: "Unauthorized: Invalid or missing API Key." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});