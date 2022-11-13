
const images = [
    "images/Elipse 1.jpg",
    "images/Elipse 2.jpg",
    "images/Elipse 3.jpg",
    "images/Elipse 4.jpg",
    "images/Elipse 5.jpg",
    "images/Elipse 6.jpg",
    "images/Elipse 7.jpg",
    "images/Elipse 8.jpg",
    "images/Elipse 9.jpg",
    "images/Elipse 10.jpg",
    "images/Elipse 11.jpg",
    "images/Elipse 12.jpg",
    "images/Elipse 13.jpg",
    "images/Elipse 14.jpg",
];

// Create function To Return a random number
let randomNum = () =>
{
    return Math.floor(Math.random() * images.length);
}

// Create Function To make every input at form as a empty input

function emptyInput(inputs)
{
    inputs.firstName.value = "";
    inputs.lastName.value = "";
    inputs.email.value = "";
}
// Create Function To apper Form for user

function apperFormToUser(btn_invite_Class, form_Class, main_class)
{
    const btn_invite = document.querySelector(btn_invite_Class);
    const form = document.querySelector(form_Class);
    btn_invite.addEventListener("click", () =>
    {
        form.classList.add(main_class);
    });

}

function hideFromUi(current_btn, element_to_hide)
{
    // hide form if user click on casnel btn
    current_btn.addEventListener("click", () =>
    {
        element_to_hide.classList.remove("scale_controal");
    });
};

function filterApperUi(elements, type)
{
    elements.add_none.classList.add("d-none");
    elements.remove_none.classList.remove("d-none");
    if (type == "flex")
    {
        elements.add_flex.classList.add("d-flex");
        elements.remove_flex.classList.remove("d-flex");
    }
}

function setUserName(element, item)
{
    const elment = document.querySelector(element);
    if (localStorage.getItem(item))
    {
        elment.innerHTML = localStorage.getItem(item);
    }
}

const toggle_active_class = (elements, current_class) =>
{
    elements.forEach(el =>
    {
        // add active for current target el
        el.addEventListener("click", (e) =>
        {
            // Remove From All Spans
            elements.forEach(element => element.classList.remove(current_class));

            // Add For current Span
            e.target.classList.add(current_class);
        });
    });
}


const fullscreen_img = (selector) =>
{
    const images = document.querySelectorAll(selector);
    images.forEach(img =>
    {
        img.style.cssText += "cursor: pointer;";
        img.addEventListener("click", () =>
        {
            img.style.cssText += "border-radius: 0;";
            img.requestFullscreen();
        });
        img.addEventListener("fullscreenchange", () =>
        {
            if (!document.fullscreenElement)
            {
                img.style.cssText += "border-radius: 50%;";
            }
        })
    });
}


export { images, randomNum, emptyInput, apperFormToUser, hideFromUi, filterApperUi, setUserName, toggle_active_class, fullscreen_img };