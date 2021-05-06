function testpackage(options){
    let images = document.querySelectorAll('.shadowizard');

    let shadowVal = '';

    if(options.shadow_type === 'hard'){
        shadowVal = '0px';
    }
    else{
        shadowVal = '15px';
    }

    images.forEach(image =>{
        image.style.boxShadow = `10px 10px ${shadowVal} 1px green`;

    });
}

module.exports.testpackage = testpackage;