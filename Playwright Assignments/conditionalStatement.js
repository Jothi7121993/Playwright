//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages. 

function launchBrowser(browser) {
    if(browser === 'Chrome') {
        console.log('Launching Chrome browser...');
    } else if(browser === 'Firefox') {
        console.log('Launching Firefox browser...');
    } else {
        console.log('Browser not supported.');
    }
}

function runTests(testType) {
    switch(testType) {
        case 'unit':
            console.log('Running unit tests...');
            break;
        case 'integration':
            console.log('Running integration tests...');
            break;
        case 'end-to-end':
            console.log('Running end-to-end tests...');
            break;
        default:
            console.log('Test type not recognized.');
    }
}

// Call the functions
launchBrowser('Chrome');
runTests('unit');