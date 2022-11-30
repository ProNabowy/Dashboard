import { setSwiperImg } from "./dom_Functions.js";
import {images , randomNum , filterApperUi , setUserName , fullscreen_img} from "./basic_Functions.js";
// Create function To check if Local Storage Have name or not

    setUserName(".user-name" , "name");

let arrayOftasks = [
    {
        id: randomNum(),
        deleteId: randomNum(),
        type: "card",
        title: "Design Meeting",
        level: "High",
        descrption: "Development Task Assign For the Product Page Project, collaboration with the desgin"
    },
    {
        id: randomNum(),
        deleteId: randomNum(),
        type: "card",
        title: "Design Meeting",
        level: "Medium",
        descrption: "Development Task Assign For the Product Page Project, collaboration with the desgin",
    },
    {
        id: randomNum(),
        deleteId: randomNum(),
        type: "card",
        title: "Design Meeting",
        level: "Low",
        descrption: "Development Task Assign For the Product Page Project, collaboration with the desgin",
    },
    {
        id: randomNum(),
        deleteId: randomNum(),
        type: "plus",
        title: "Design Meeting",
        level: "Medium",
        descrption: "Development Task Assign For the Product Page Project, collaboration with the desgin",
    },
];
// Check if LocalStorage Have item Or Not
const checkLocalStorage = () =>
{
    let data = JSON.parse(localStorage.getItem("cards"));
    if (data)
    {
        arrayOftasks = data;
    }
}
checkLocalStorage();
// create Function to Get Value From User
let tasksObject = Object({});
// Create Function To Add Data to LocalStorage
const addDataToLocalStorage = () =>
{
    let data = JSON.stringify(arrayOftasks);

    localStorage.setItem("cards", data);
};


function getValueFromUser()
{
    // ==================================  Select Elements ====================================
    const select_lvl = document.querySelector(".select_lvl");
    const input_title = document.querySelector(".inp_title");
    const input_descrption = document.querySelector(".inp_desc");


    tasksObject = Object({
        id: Math.random(),
        deleteId: Math.random(),
        level: null,
        // this Function To Set The Current Level User Choseen
        setLevel: function ()
        {
            select_lvl.addEventListener("click", () =>
            {
                tasksObject.level = select_lvl.value;
            });
        }
    });
    

    // Set object value when user write it from Form Componant
    tasksObject.title = input_title.value;
    tasksObject.descrption = input_descrption.value;
    tasksObject.level = select_lvl.value;
    tasksObject.type = "card";

}

const darwCardsUI = (cards) => 
{
    
    // Select Current Parent Element
    const tasksParent = document.querySelector(".tasks");

    tasksParent.innerHTML = "";

    let cardsUI = cards.map(card =>
    {
        // Check For Card Type To Set The Corract Ui
        if (card.type === "card")
        {
            return `<div data-del="${card.deleteId}" draggable="true" class="draggable p-3 card  mb-3 position-relative"
                        style="width: calc(97% / 2); border-radius: 5px; background-color: var(--second-color); ">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center mb-3">
                                    <h2 class="fw-bold me-2 text-white" style="font-size: 20px;">${card.title}
                                        </h2>
                                    <div class="lvl ${card.level.toLowerCase()} fw-bold">${card.level}</div>
                            </div>
                                <span>
                                    <i data-id="${card.id}" class="fa-solid fa-ellipsis-vertical text-white-50"
                                        style="cursor: pointer;"></i>
                                </span>
                                <div data-id="${card.id}" class="dl-btn text-white-50 position-absolute"
                                    style="transition: var(--trasnition); cursor: pointer; border-radius: 4px; background-color: #6a6a6a; padding: 5px 20px !important; right: 25px; top: 40px ; opacity: 0; transform: scale(0); visibility: hidden;">
                                    <p class="dl-target" data-del="${card.deleteId}">Delete</p>
                                </div>
                        </div>
                            <p class="text-white-50 mb-3 fw-bold" style="font-size: 14px; max-width: 80%;"> ${card.descrption}</p>
                    <div>
                            <div class="d-flex" style="max-width: 100%;">
                                <img src="images/Elipse 15.png" alt="img" style="max-width: 30px;">
                                <img src="images/Elipse 15.png" alt="img"
                                    style="max-width: 30px;margin-left: -5px !important;">
                                <img src="images/Elipse 15.png" alt="img"
                                    style="max-width: 30px;margin-left: -5px !important;">
                                <img src="images/Elipse 15.png" alt="img"
                                    style="max-width: 30px;margin-left: -5px !important;">
                                <img src="images/Elipse 15.png" alt="img"
                                    style="max-width: 30px;margin-left: -5px !important;">
                            </div>
                    </div>
            </div>`
        } else if (card.type === "plus") 
        {
            return `
                        <div draggable="true"
                        class="card draggable p-2  d-flex justify-content-center align-items-center mb-3"
                        style="width: calc(97% / 2);  min-height: 162px; border-radius: 5px; background-color: var(--second-color);">
                        <div class="text-center">
                        <div class="mb-2 d-flex justify-content-center align-items-center"
                            style="width: 35px; height: 35px; background-color: #6a6a6a; border-radius: 50%; margin: 16px auto !important;">
                            <span class="plus-btn"><i class="fa-solid fa-plus text-white"
                                    style="cursor: pointer;"></i></span>
                        </div>
                        <h3 class="text-white-50 fw-bold" style="font-size: 15px;">Add New Task</h3>
                        </div>
                    </div>
                    `
        }
    });

    // append all cards to parent div
    let elements = [...cardsUI];
    for (let i = 0; i < elements.length; i++)
    {
        tasksParent.innerHTML += elements[i];
    }

    // Calling Function active_Plus_Btn to active plus btn when any change happen
    active_Plus_Btn();
    
    // Calling Function deleteTask to active delete btn when any change happen
    deleteTask();

    // Calling Function addDataToLocalStorage to data to localStorage when any change happen
    addDataToLocalStorage();
}

    darwCardsUI(arrayOftasks);
    
// ==================================  active_Plus_Btn ====================================
// this Function to Re_active New task btn
function active_Plus_Btn ()
{
    // ==================================  Select Elements ====================================
    const user_tasks = document.querySelector(".user-tasks");
    const plus_btn = document.querySelector(".fa-plus").parentElement;
    const close_btn = document.querySelector(".close");

    plus_btn.addEventListener("click", () =>
    {
        user_tasks.classList.add("active_scale_with_right");
    });
    // Hide Form
    close_btn.addEventListener("click", () =>
    {
        user_tasks.classList.remove("active_scale_with_right");
    });
}

const toggleDeleteBtn = () =>
{
    // ==================================  Select Elements ====================================
    const icone = document.querySelectorAll(".fa-ellipsis-vertical");
    const btns = document.querySelectorAll(".dl-btn");

    icone.forEach(cureent_icone =>
    {
        cureent_icone.parentElement.addEventListener("click", () =>
        {
            btns.forEach(cureent_btn =>
            {
                if (cureent_btn.getAttribute("data-id") == cureent_icone.getAttribute("data-id"))
                {
                    cureent_btn.classList.toggle("active");
                }
            });
        });
    });
};
toggleDeleteBtn();

// Create Function To Delete Task

function deleteTask()
{
    let cards = document.querySelectorAll(".card");
    cards.forEach(card_element =>
    {
        card_element.addEventListener("click", event =>
        {

            // Check If target click contains target class to compaer it with each item in  array of tasks

            if (event.target.classList.contains("dl-target"))
            {
                arrayOftasks = arrayOftasks.filter(item => item.deleteId != event.target.getAttribute("data-del"));
                darwCardsUI(arrayOftasks);
                toggleDeleteBtn();
            }
        })
    })



};
deleteTask();

const addTaskToArray = () =>
{

    getValueFromUser();

    arrayOftasks.push(tasksObject);

    darwCardsUI(arrayOftasks);

    deleteTask();
    toggleDeleteBtn();

};

// =========== This  Function To Active Btn new task when user click on it  ===========
const activeBtnNewTask = () =>
{
    const user_tasks = document.querySelector(".user-tasks");
    const add_btn = document.querySelector(".add_btn");

    active_Plus_Btn();

    add_btn.addEventListener("click", () =>
    {
        addTaskToArray();
        user_tasks.classList.remove("active_scale_with_right");

        // make any input as empty input after user add task
        document.querySelectorAll("input").forEach(input => input.value = "");
    });

}
activeBtnNewTask();


// =============================  Draggeble Elements Logic   =================================

function draggableElements()
{
    const cards = document.querySelectorAll(".card");
    const container = document.querySelector(".tasks");
    cards.forEach(card =>
    {
        card.addEventListener("dragstart", () =>
        {
            card.classList.add("dragging");
        });
        card.addEventListener("dragend", () =>
        {
            card.classList.remove("dragging");
        })

    });

    container.addEventListener("dragover", (e) =>
    {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement === null)
        {
            container.appendChild(draggable);
        } else
        {
            container.insertBefore(draggable, afterElement);
        }
    });

    // this Function to set element in the right place
    function getDragAfterElement(container, y)
    {
        const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
        return draggableElements.reduce((closest, child) =>
        {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset)
            {
                return { offset: offset, element: child }
            } else
            {
                return closest;
            }

        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}

draggableElements();

// =============================  import Swiper img Function from D   =================================



setSwiperImg(images);

window.addEventListener("resize", _ => setSwiperImg(images ));


//  =============== import Toggle Fullscreen img  Request ===============

fullscreen_img(".wrapper-img img");

//  =============== Create Function To Set HTML Dynamic animation Number ===============
function animitNum()
{
    const shereSpan = [...document.querySelectorAll(".shere")];
    const heartSpan = [...document.querySelectorAll(".heart")];
    const chatSpan = [...document.querySelectorAll(".chat")];
    let randomNums = [123, 435, 645, 978, 457, 725, 584];
    let count = 0;


    // Create Interval Function To Set Dynamic Animation
    let interval = setInterval(() =>
    {
        animaitNumFunction(shereSpan);
        animaitNumFunction(heartSpan);
        animaitNumFunction(chatSpan);
    }, 10);
    // Create Function To Loop For Each span to set new Dynamic Animation Number
    function animaitNumFunction(everyElement)
    {
        everyElement.forEach(eachElement =>
        {
            eachElement.innerHTML = count++;

            if (Number(eachElement.innerHTML) === randomNums[Math.round(Math.random() * randomNums.length)] && Number(eachElement.innerHTML) < 1000)
            {
                clearInterval(interval);
            }
        });
    };
    
        setInterval(() => clearInterval(interval), 5000);
    
};

animitNum();

// ==================================== Filteration Project =============================

const  projectFilter = () => 
{
    const onGoingElement = document.querySelector(".going");
    const pendingElement = document.querySelector(".pending");
    const going_btn = document.querySelector(".going-btn");
    const pending_btn = document.querySelector(".pending-btn");

    // =============== Create Function To Add and remove flex class to control filter ===============
    const  toggleBtn = (btnType, showDiv, hideDiv, btnRmoveClass) =>
    {
        btnType.addEventListener("click", () =>
        {
            btnType.classList.add("active_toggle_btn");
            btnRmoveClass.classList.remove("active_toggle_btn");

            // =============== this Functio was import From Basi_Functions Js File ==========
            filterApperUi({
                add_flex: showDiv,
                remove_none: showDiv,
                add_none: hideDiv,
                remove_flex: hideDiv,
            }, "flex");
        });
    }

    toggleBtn(going_btn, onGoingElement, pendingElement, pending_btn);
    toggleBtn(pending_btn, pendingElement, onGoingElement, going_btn);

}

projectFilter();


// ==================== Create Function To Filter table Role ==================== 
const filter_Role = () =>
{
    let select_box = document.querySelector("#filter_Select");
    // ====================  Set toggle Classes When User Select option From Select Box ===================
    select_box.addEventListener("click", () =>
    {
        let value = select_box.value;

        // ==================== Set Value To LocalStorage ==================== 
        localStorage.setItem("table Select", value);

        // ==================== Calling Function When User Select To Show only user select ===================
        user_Table_filter_Option(value);
    });

}

filter_Role();

// ==================== Create Function To Hide And Show table elements ==================== 

const toggleTableClasses = (elments) =>
{
    elments.admins.forEach(admin => admin.style.display = elments.classOne);
    elments.partner.forEach(admin => admin.style.display = elments.classTwo);
}

// ==================== Create Function To Set Condation to Controal Elements ====================
function user_Table_filter_Option(value)
{
    let admins = document.querySelectorAll(".admin");
    let partner = document.querySelectorAll(".partner");

    if (value == "admin")
    {
        toggleTableClasses({
            partner: partner,
            admins: admins,
            classOne: "table-row",
            classTwo: "none",
        });
    } else if (value == "partner")
    {
        toggleTableClasses({
            partner: partner,
            admins: admins,
            classOne: "none",
            classTwo: "table-row",
        });
    } else if (value == "All")
    {
        toggleTableClasses({
            partner: partner,
            admins: admins,
            classOne: "table-row",
            classTwo: "table-row",
        });
    }
}

let Select_value = document.querySelector("#filter_Select").value;

// ==================== this function to set user option Select at LocalStorage ====================
const userSelect = () =>
{
    // ==================== Check if LocalStorage Have Item Or Not To Set Logic ==================== 
    if (localStorage.getItem("table Select"))
    {
        let options_element = document.querySelectorAll("#filter_Select option");
        Select_value = localStorage.getItem("table Select");

        //  ==================== Set Selected Attr at target element and remove it from another elements  ====================
        options_element.forEach(option => option.value === Select_value ? option.setAttribute("selected", "") : option.removeAttribute("selected"));
    }
}


userSelect();

user_Table_filter_Option(Select_value);


//  ==================== this Function To Sort table  ==================== 
const tableTr = document.querySelectorAll("table tbody tr");

const sortTableByColum = (table, column, asc = true, sortBy) =>
{
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    //  ==================== Sort Each Row  ====================
    const sortedRows = rows.sort((a, b) =>
    {
        const aColText = a.querySelector(`td:nth-child(${column + 2})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 2})`).textContent.trim();

        if (sortBy == "partner")
        {
            return aColText > bColText ? (-1 * dirModifier) : (1 * dirModifier)
        } else
        {
            return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier)
        }
    });
    while (tBody.firstChild)
    {
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows);
}

// This Function To Set Default Sort For Table

const default_tSort = _ =>
{
    const tableTbody = document.querySelectorAll("table tbody tr");
    tableTbody.forEach(el => el.remove());
    const tbody = document.querySelector("table tbody");
    tableTr.forEach(tr =>
    {
        tbody.append(tr);
    });
}

// This Function To Calling the Corract Function When User select from options

const select_Corract_Opation = _ =>
{
    let sortSelect = document.querySelector("#sort");
    sortSelect.addEventListener("click", () =>
    {
        if (sortSelect.value == "admin-partner")
        {
            sortTableByColum(document.querySelector("table"), 1, true, "admin");
        } else if (sortSelect.value == "partner-admin")
        {
            sortTableByColum(document.querySelector("table"), 1, true, "partner");
        } else if (sortSelect.value == "defualt")
        {
            default_tSort();
        }
    });
}
select_Corract_Opation();
