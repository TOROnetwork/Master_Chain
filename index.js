var Chain3 = require('./lib/chain3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Chain3 === 'undefined') {
    window.Chain3 = Chain3;
}

// Add window LBR
if ( typeof window !== 'undefined' && typeof window.LBR === 'undefined'){
    window.LBR = Chain3;
}

module.exports = Chain3;
