//                                      Start canvas Code :(

// ========================================= Selector All Element =============================================
let c = document.querySelector("#canvas");
let ctx = c.getContext("2d");
let array = [];
let counter = 0;
// ========================================= Size to Canvas =============================================
// Add Size To Canvas Element

c.width = window.innerWidth;
c.height = window.innerHeight;

// Add Size When Window Resize
window.addEventListener("resize", function ()
{
    c.width = window.innerWidth;
    c.height = window.innerHeight;
});

// ========================================= Mouse Object =============================================

let mouse = {
    x: undefined,
    y: undefined,
}
// ========================================= Create OOP To Set All Basic Functionalty =============================================

class Particle
{

    // Main Constructor To get some info from it's

    constructor(x, y, size, color, speedX, speedY)
    {

        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 25;
        this.color = 'hsl(' + counter + ', 100% , 50% )';
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

    }

    // Functions to update And darw shpas
    // Function To update

    update()
    {

        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.3) this.size -= 0.1;

    };

    // Function To Darw
    darw()
    {

        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

    };
}; // end OOP Class

// ========================================= Push Classes To Array =============================================

// Create Funtion To Looping class to array

function addToArray()
{
    for (let i = 0; i < 100; i++)
    {

        array.push(new Particle());

    };
}; // end function

addToArray();

// ========================================= darw shaps and update its =============================================
// Create Function to make update And darw

function finalDarw()
{

    for (let i = 0; i < array.length; i++)
    {
        array[i].update();
        array[i].darw();
        // window Condation To clear Shape If it Size less than 0.2;
        if (array[i].size <= 0.3)
        {
            array.splice(i, 1);
            i--;
        };
    }; // end loop

}; // end function

// ========================================= Create Animait Function =============================================

// Create Function To Animiat Shape if You Wanna it :(
function animait()
{

    // window Code To make opicty at cricles
    ctx.fillStyle = "rgba(0,0,0,.09)";
    ctx.fillRect(0, 0, c.width, c.height);
    // End Code To make opicty at cricles
    counter += 2;
    finalDarw();
    requestAnimationFrame(animait);

};

// Calling Animait Function
animait();


// ========================================= Toggle Darw Logic =============================================


// End functions To Randow Shape in Canvas element
// Mouse Mouve Event 

c.addEventListener("mousemove", function (e)
{

        mouse.x = e.x;
        mouse.y = e.y;
        // If You Wanna Change It To Create Custom Shape You Should To Change Mouse x and mouse y from Class Particle
        for (let i = 0; i < 5; i++)
        {
            array.push(new Particle());
        };

}); // end event

