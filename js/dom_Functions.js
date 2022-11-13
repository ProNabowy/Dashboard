const person_Names = [
    "Tomas",
    "Michal",
    "Elena",
    "Jorge",
    "John",
    "Jesica",
    "Zula",
    "Seth",
    "Ted",
    "Keith",
    "Paul",
    "Ron",
    "Craig",
    "Bruce",
]

function setSwiperImg(images)
{

    const  domFunctionImgs = (srcIndex, caption) => 
    {
        let swiper_Slide = [...document.querySelectorAll(".swiper-slide")];

        for (let i = 0; i < swiper_Slide.length; i++)
        {
            // Set img var style
            let img_style = "margin-bottom: 5px !important; cursor: pointer; border-radius: 50%; border: 2px solid #f4782e; display: block;";
            // Create warpper Div to set img and caption img as innerHTML 
            let div = document.createElement("div");
            div.classList = "wrapper-img d-flex flex-column me-2 align-items-center fw-bold";
            div.style.fontSize = "11px";

            // Create img and caption img
            let child = `
                    <img src="${srcIndex}" width="30px" height="30px" alt="img" style="${img_style}">
                    <span class="d-block fw-bold" style="font-size: 12px;">${caption}</span>`
            
            div.innerHTML = child;
            swiper_Slide[i].appendChild(div);

        };
    };

    // Re-calling Dom Function  10 times to set at swiper img
    for (let i = 0; i < 10; i++)
    {
            domFunctionImgs(images[i], person_Names[i], (i + 1));
    }

}


const darwInviteUI = (arrayOfItems , deleteFromUi , images , randomNum) =>
{
    let wrapper_Elements = document.querySelector(".peopel-invites");

    wrapper_Elements.innerHTML = "";

    let people = arrayOfItems.map((person) =>
    {
        return person = `
            <div class="person d-flex-between p-2 ${person.role}" id="${person.id}"  style="background-color: var(--off-dark); border-bottom: 1px solid #444;">
                <div class="d-flex align-items-center">
                    <img src="${images[randomNum()]}"
                        style="margin-right: 10px !important; width: 30px; height:30px; border-radius: 50%;" alt="img">
                    <div class="person-info">
                        <h3 class="fw-bold  mb-2" style="font-size: 13px;">${person.fName} ${person.lastName} <span
                                style="padding: 5px !important; color:white; border-radius: 4px; margin-left: 5px !important; background-color: #404148;">Panding</span>
                        </h3>
                        <p class="text-white-50 fw-bold" style="font-size: 12px;">${person.email}</p>
                    </div>
                </div>
                <div class="d-flex align-items-center person-btns">
                    <div class="main-btn resend_invite me-1" style="background-color: var(--bg-color); font-size: 13px;">Resend Invite
                    </div>
                    <div class="main-btn delete-invite" id="${person.id}" style="background-color: transparent; color: #8c2f4a; border: 1px solid var(--text-color);">
                        Remove
                        Invite</div>
                </div>
            </div>
        `;
    });

    // ============================== append each element to parent div ==============================

    const each_Person = [...people];
    for (let i = 0; i < each_Person.length; i++)
    {
        wrapper_Elements.innerHTML += each_Person[i];
    }

    deleteFromUi();

}


export {setSwiperImg , darwInviteUI}