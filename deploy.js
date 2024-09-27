const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function deployUpdates(folderName, description) {
    if (!/^\d+$/.test(folderName)) {
        console.error(`Error: The folder name '${folderName}' is not a number.`);
        return;
    }

    const repoPath = path.join(__dirname, folderName);
    if (!fs.existsSync(repoPath)) {
        console.error(`Error: The folder '${folderName}' does not exist.`);
        return;
    }

    try {
        // Navigate to the repository folder
        process.chdir(repoPath);

        // Add changes to git
        execSync('git add .', { stdio: 'inherit' });

        // Commit changes with the provided description
        execSync(`git commit -m "${description}"`, { stdio: 'inherit' });

        // Push changes to the remote repository
        execSync('git push', { stdio: 'inherit' });

        console.log('Updates deployed successfully.');
    } catch (error) {
        console.error('Error deploying updates:', error.message);
    }
}

if (process.argv.length !== 4) {
    console.log('Usage: node deploy.js <folder_name> <description>');
    process.exit(1);
}

const folderName = process.argv[2];
const description = process.argv[3];

deployUpdates(folderName, description);
