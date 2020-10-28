// extracts TLD (Top-level-domain) from e-mail adress


const emailTldExtractor = (emailAdress) => {
    let emailPartAfterAt = emailAdress.split('@')[1];
    let arrayDevidedByDots = emailPartAfterAt.split('.');

    let emailAfterLastDot = arrayDevidedByDots[ arrayDevidedByDots.length - 1 ];

    if ( emailPartAfterAt === arrayDevidedByDots[0]) {
        emailAfterLastDot = '';
    };
    
    // console.log(`${emailAdress} - ${emailPartAfterAt} - ${arrayDevidedByDots} - [[${emailAfterLastDot}]]`)

    return emailAfterLastDot;
};

export default emailTldExtractor;

// emailTldExtractor('john@domain.com');
// emailTldExtractor('john@domain.co');
// emailTldExtractor('john@domain.co.uk');
// emailTldExtractor('john@domain.co.gov');
// emailTldExtractor('john@subdomain.domain.co.gov');