document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const interest = document.getElementById('interest').value;
    const budget = document.getElementById('budget').value;
    const experience = document.getElementById('experience').value;
    
    let recommendations = '';

    
    if (interest === 'music') {
        recommendations = 'Based on your interest in music instruments, we recommend: ';
        if (budget <= 100) {
            recommendations += '1. Fender FA-115 Dreadnought Acoustic Guitar (~$90) - Perfect for beginners. \n' +
                               '2. Yamaha PSS-F30 Keyboard (~$70) - A budget-friendly, beginner-friendly keyboard.';
        } else if (budget <= 500) {
            recommendations += '1. Yamaha FG800 Acoustic Guitar (~$200) - Excellent for intermediate players.\n' +
                               '2. Roland FP-10 Digital Piano (~$450) - A great keyboard for intermediate learners.';
        } else {
            recommendations += '1. Gibson Les Paul Standard ’50s Electric Guitar (~$2,000) - For advanced guitarists.\n' +
                               '2. Yamaha Clavinova CLP-735 Digital Piano (~$1,800) - High-end piano with realistic sound.';
        }
    } 

    
    else if (interest === 'programming') {
        recommendations = 'Based on your interest in programming tools, we recommend: ';
        if (experience === 'beginner') {
            recommendations += '1. Raspberry Pi 4 Starter Kit (~$100) - A great entry-level kit for beginners.\n' +
                               '2. Arduino Uno Starter Kit (~$50) - Perfect for learning programming and electronics.';
        } else if (experience === 'intermediate') {
            recommendations += '1. Raspberry Pi 4 with accessories (~$120) - More power for intermediate projects.\n' +
                               '2. Arduino Mega 2560 (~$40) - Advanced microcontroller for complex projects.';
        } else {
            recommendations += '1. NVIDIA Jetson Nano Developer Kit (~$100) - Great for AI and machine learning projects.\n' +
                               '2. BeagleBone Black (~$55) - For professional development and embedded systems.';
        }
    } 

    
    else if (interest === 'electronics') {
        recommendations = 'Based on your interest in electronics, we recommend: ';
        if (budget <= 100) {
            recommendations += '1. Elegoo UNO R3 Project Super Starter Kit (~$40) - Comprehensive kit for learning electronics.\n' +
                               '2. Kuman 37 in 1 Sensor Kit (~$50) - Great for beginners to practice electronics with sensors.';
        } else if (budget <= 500) {
            recommendations += '1. Owon VDS1022I Digital Oscilloscope (~$250) - A mid-range oscilloscope for hobbyists.\n' +
                               '2. SparkFun Inventor\'s Kit (~$130) - A higher-end kit with sensors and microcontrollers.';
        } else {
            recommendations += '1. Rigol DS1054Z Digital Oscilloscope (~$350) - Great for advanced electronics projects.\n' +
                               '2. Keysight 34465A Multimeter (~$800) - A professional-level multimeter for precise measurements.';
        }
    }

    
    document.getElementById('recommendedInstruments').textContent = recommendations;
    document.getElementById('recommendations').style.display = 'block';
});

