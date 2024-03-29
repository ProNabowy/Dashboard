const images = [
    "https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1668347514~exp=1668348114~hmac=20ce02fd91a51e41cbff5bdfd3c6927ad6e6dd66fb36bd5e386f71575e16f03e",
    "https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg?w=1380&t=st=1668347739~exp=1668348339~hmac=ef33d15202cf819ef8df01edfa1185b71cf031b4df74f094573f8055ccac84c1",
    "https://img.freepik.com/premium-photo/closeup-young-female-model-pointing-fingers-left-copy-space-showing-company-logo-smiling-standing-white-background_176420-52167.jpg?w=1380",
    "https://vtphna.org.au/wp-content/uploads/2019/09/Population-Health-Planning.jpg",
    "https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?w=1380&amp;t=st=1668348020~exp=1668348620~hmac=60f633b3e633f17f0a9bc7e8fbed0dc46c2671306a60cc4d3c0060fdb6f70fb5",
    "https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?w=1380&amp;t=st=1668348020~exp=1668348620~hmac=60f633b3e633f17f0a9bc7e8fbed0dc46c2671306a60cc4d3c0060fdb6f70fb5",
    "https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?w=1380&t=st=1668348020~exp=1668348620~hmac=60f633b3e633f17f0a9bc7e8fbed0dc46c2671306a60cc4d3c0060fdb6f70fb5",
    "https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1668347514~exp=1668348114~hmac=20ce02fd91a51e41cbff5bdfd3c6927ad6e6dd66fb36bd5e386f71575e16f03e",
    "https://img.freepik.com/free-photo/portrait-man-with-beard-ukraine-sumy_8353-6061.jpg?size=626&ext=jpg&uid=R83129894&ga=GA1.2.935105513.1666868158",
    "https://img.freepik.com/free-photo/excited-little-boy-standing-showing-okay-gesture_171337-16369.jpg?w=1380&t=st=1668348157~exp=1668348757~hmac=7d98be5148fd8011b24bc6eab00316d873a8abff194a2b759809db5a32e5a981",
    "https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?w=1380&amp;t=st=1668348020~exp=1668348620~hmac=60f633b3e633f17f0a9bc7e8fbed0dc46c2671306a60cc4d3c0060fdb6f70fb5",
    "https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1380&t=st=1668347514~exp=1668348114~hmac=20ce02fd91a51e41cbff5bdfd3c6927ad6e6dd66fb36bd5e386f71575e16f03e",
    "https://img.freepik.com/premium-photo/closeup-young-female-model-pointing-fingers-left-copy-space-showing-company-logo-smiling-standing-white-background_176420-52167.jpg?w=1380",
    "https://img.freepik.com/free-photo/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background_1258-65597.jpg?w=1380&t=st=1668347739~exp=1668348339~hmac=ef33d15202cf819ef8df01edfa1185b71cf031b4df74f094573f8055ccac84c1",
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




// ======================================= Stup Loader  ======================================= 

function loader() {
  const loaderEle = document.querySelector(".loader");

  document.body.style.overflowY = "hidden";

  window.addEventListener("DOMContentLoaded" , function() {
    loaderEle.remove();
    document.body.style.overflowY = "visible";
  });

};

loader();

export { images, randomNum, emptyInput, apperFormToUser, hideFromUi, filterApperUi, setUserName, toggle_active_class, fullscreen_img };
