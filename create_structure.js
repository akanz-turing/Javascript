#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createFolderStructure(parentFolder) {
    if (!/^\d+$/.test(parentFolder)) {
        console.error(`Error: The folder name '${parentFolder}' is not a number.`);
        return;
    }

    // Create folders
    const folders = ['ideal', 'model_A', 'model_B'];
    folders.forEach(folder => {
        fs.mkdirSync(path.join(parentFolder, folder), { recursive: true });
    });

    // Create HTML files
    const fileMapping = {
        'ideal': 'ideal.html',
        'model_A': 'a1.html',
        'model_B': 'b1.html'
    };
    Object.entries(fileMapping).forEach(([folder, filename]) => {
        fs.writeFileSync(path.join(parentFolder, folder, filename), `<!-- ${filename} -->`);
    });

    // Create final_output_video.txt
    fs.writeFileSync(path.join(parentFolder, 'final_output_video.txt'), 'Final output video placeholder');

    console.log(`Folder structure created successfully in '${parentFolder}'`);
}

if (process.argv.length !== 3) {
    console.log('Usage: node create_structure.js <folder_name>');
    process.exit(1);
}

createFolderStructure(process.argv[2]);

// Setup instructions:
// 1. Save this script as 'create_structure.js' in a convenient location.
// 2. Make sure you have Node.js installed on your system.
// 3. Run the script from the console: node create_structure.js <folder_name>
//    Replace <folder_name> with the numeric folder name you want to create the structure in.
// 
// Example: node create_structure.js 29450



