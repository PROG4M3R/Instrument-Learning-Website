        const button1 = document.querySelector(".guitar");

        const audio1 = new Audio("audio/guitar.mp4");


        button1.addEventListener("click", () => {
            audio1.currentTime = 0;
            audio1.play(); 
            audio1.volume=0.5;
        });
        button1.addEventListener("mouseleave", () => {
            audio1.pause();
            audio1.currentTime = 0; 
        });

    

        const button2 = document.querySelector(".piano");

        const audio2 = new Audio("audio/piano.mp4");


        button2.addEventListener("click", () => {
            audio2.currentTime = 0;
            audio2.play(); 
            audio2.volume=0.2;
        });
        button2.addEventListener("mouseleave", () => {
            audio2.pause(); 
            audio2.currentTime = 0; 
        });



        const button3 = document.querySelector(".flute");

        const audio3 = new Audio("audio/flute.mp4");

        button3.addEventListener("click", () => {
            audio3.currentTime = 0;
            audio3.play(); 
            audio3.volume=0.05;  
        });
        button3.addEventListener("mouseleave", () => {
            audio3.pause(); 
            audio3.currentTime = 0; 
        });


        
        const button4 = document.querySelector(".drum");

        const audio4 = new Audio("audio/drum.mp4");

        button4.addEventListener("click", () => {
            audio4.currentTime = 0;
            audio4.play();
            audio4.volume=0.2;
        });
        button4.addEventListener("mouseleave", () => {
            audio4.pause(); 
            audio4.currentTime = 0; 
        });


        const button5 = document.querySelector(".eguitar");

        const audio5 = new Audio("audio/eguitar.mp4");

        button5.addEventListener("click", () => {
            audio5.currentTime = 0;
            audio5.play(); 
            audio5.volume=0.02
        });
        button5.addEventListener("mouseleave", () => {
            audio5.pause(); 
            audio5.currentTime = 0; 
        });