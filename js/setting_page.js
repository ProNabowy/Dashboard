import { images, randomNum, emptyInput, apperFormToUser, hideFromUi, filterApperUi } from "./basic_Functions.js";
import { darwInviteUI } from "./dom_Functions.js";
(function ()
{
    // ============================= Close Widonw Function =================================
    const closeWindow = () =>
    {
        let input_Close_Window = document.querySelector(".toggle-switch");
        let text_area = document.querySelector("textarea");
        let value = "";
        // Create Element to apper it when user click on input when text-area does not have value
        let element = document.createElement("p");

        element.style.cssText = "font-weight:bold; opacity: 0; visibility: hidden; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) scale(0);; background-color: #777; width: fit-content; padding: 5px 20px !important; border-radius: 4px; transition: var(--trasnition);";
        element.innerHTML = "You Should to Write Any Reson To Close This Page";
        let timeOut = null;

        // add the value from taken when user write on text-area to check for value length
        text_area.addEventListener("input", () =>
        {
            value += text_area.value;
        })

        input_Close_Window.addEventListener("click", () =>
        {
            if (value == "")
            {
                // prepend element to body to apper for user
                document.body.prepend(element);
                element.classList.add("scale_controal");
                if (element.classList.contains("scale_controal"))
                {
                    timeOut = setInterval(() =>
                    {
                        element.classList.remove("scale_controal");
                        clearInterval(timeOut);
                    }, 3000);
                };
            } else
            {
                window.close();
            }
        });
    }

    closeWindow();

    // ============================= user Sign Function  =============================
    const user_Sign = () =>
    {
        const firstName_Input = document.querySelector(".sign-box input");
        const lastName_Input = document.querySelectorAll(".sign-box input")[1];
        const form_btn = document.querySelector(".btn-form");
        let name = "";
        firstName_Input.addEventListener("blur", (e) => name += e.target.value);
        lastName_Input.addEventListener("blur", (e) =>
        {
            name += " ";
            name += e.target.value;
        });
        form_btn.addEventListener("click", () =>
        {
            if (!localStorage.getItem("name"))
            {
                localStorage.setItem("name", name);
            } else
            {
                localStorage.setItem("name", name);
            }
            firstName_Input.value = "";
            lastName_Input.value = "";
        });

    }
    user_Sign();


    //  ======================= Create Function To Set active border Class To Setting box ==========================

    const searchToSetActiveBorderClass = () =>
    {
        const search_Input = document.querySelector(".setting_inp");
        let words_List = {
            site_control: [
                "site_control", "Website Control", "Control", "Site Control", "Site", "Website",
                "site control", "Maintenace", "Open/Close"
            ],
            general_info: [
                "General Info", "First Name", "Last Name", "general_info", "General Info About Your Account", "name", "email", "submit"
            ],
            security: [
                "security Info", "security Information About Your Account", "Two-Factor Authentication", "Check The Login Devices List", "change", "security", "Password", "Two-Factor", "Authentication", "Devices"
            ],
            social_info: [
                "Social Info", "social_info", "social", "Social Media Information", "link"
            ],
            widgest: [
                "widgest", "Widgest Control", "Show/Hide Widgest", "Quick Draft",
                "Yearly Targets", "Tickets Statistics", "Latest News", "Latest Tasks", "Top Search Items",
                "Last Changes"
            ],
            backup: [
                "backup", "Backup Manager", "Control Backup Time And Location", "Daily", "Weekly", "Monthly",
                "Megaman", "Zero", "Sigma"
            ],
        };

        for (const key in words_List)
        {
            //  ======================= Covarte any words in object words as a  lowerCase latter   =======================
            words_List[key] = words_List[key].map(word => word = word.toLowerCase());
            search_Input.addEventListener("input", () =>
            {
                let value = search_Input.value.toLowerCase();
                // ======================= Set active-border For Corract Element ======================= 
                if (words_List[key].includes(value) && value !== "")
                {
                    document.querySelector(`#${key}`).classList.add("active-border");
                } else
                {
                    document.querySelector(`#${key}`).classList.remove("active-border");
                }
            })

        }


    }

    searchToSetActiveBorderClass();

    // ======================= Create function To Delelte Users ======================= 

    const deleteUsers = () =>
    {
        const delete_Message_Wrapper = document.querySelector(".delete-member");
        const user_control = document.querySelector(".users-control");
        const member_close_message = document.querySelector(".member-btn");
        const still_keep_member = document.querySelector(".delete-member .main-btn ");
        const removeMember_btn = document.querySelectorAll(".delete-member .main-btn")[1];
        const phragraph_Text = document.querySelector(".delete-member p ");

        // Check if target click have the same class of delete icone to set active class to delete message

        user_control.addEventListener("click", (e) =>
        {
            // Check If The Cureent event is a delete icone or not to set scale class to wrapper div
            if (e.target.classList.contains("fa-trash-can"))
            {
                delete_Message_Wrapper.classList.add("scale_controal");
            }

        });
        // ================ remvoe active class when user click on cansel message ================
        member_close_message.addEventListener("click", () => delete_Message_Wrapper.classList.remove("scale_controal"));

        // ================ remvoe active class when user click on don't delete Member ================
        still_keep_member.addEventListener("click", () => delete_Message_Wrapper.classList.remove("scale_controal"));


        // ================ show role_message when user click on removeMember_btn ================
        removeMember_btn.addEventListener("click", () =>
        {
            phragraph_Text.innerHTML = "Hello Sir, Sorry You don't have Role to Delete This employee";
            let textTimeOut = setTimeout(() =>
            {
                phragraph_Text.innerHTML = " You are about to remove a member witch will not allow this Person to login into your organization anymore";
            }, 3000);
        })

    }
    deleteUsers();


    // ============================== Create array of data to set data from it ======================

    let arrayOfItems = [
        {
            id: Math.random(),
            fName: "Esther",
            lastName: "Howard",
            email: "esther.howard@gmail.com",
            role: "admin",
        },
        {
            id: Math.random(),
            fName: "Kristin",
            lastName: "Waston",
            email: "kristin.waston@gmail.com",
            role: "reviewer",
        }
    ];

    // Check if LocalStorage Have item Or Not
    const checkLocalStorage = () =>
    {
        if (localStorage.getItem("users"))
        {
            let data = JSON.parse(localStorage.getItem("users"));
            arrayOfItems = data;
        }
    }
    checkLocalStorage();

    let object = {}

    // ============================== Create Function To Darw Ui ==============================

    darwInviteUI(arrayOfItems, deleteFromUi, images, randomNum);

    // ============================== Create Function To Get Value From User ==============================

    const getValueFromUser = () =>
    {
        let input_FirstName = document.querySelector("#first_Name");
        let input_LastName = document.querySelector("#last_Name");
        let input_Email = document.querySelector("#email_add");
        let role = document.querySelector(".role-wrapper");

        // ============================== Create function To Get The role from user ==============================
        const get_Role_F_User = () =>
        {
            role.addEventListener("click", (e) =>
            {
                if (e.target.classList.contains("admin"))
                {
                    return "admin";
                } else if (e.target.classList.contains("reviewer"))
                {
                    return "reviewer";
                }
            });
            // ====================== set a defualt class if user don't chose =======================
            return "reviewer";
        }

        // ============================== Set Object Values ==============================
        object = {
            id: Math.random(),
            fName: input_FirstName.value,
            lastName: input_LastName.value,
            email: input_Email.value,
            role: get_Role_F_User(),
        }

        // this Function To make every input at form as a empty input we get from basic_func file
        emptyInput({
            firstName: input_FirstName,
            lastName: input_LastName,
            email: input_Email,
        });

    }


    // ============================== this Function To apper Form for user ==============================

    // we import it from Basic Funtions File
    apperFormToUser(".invite-btn", ".invite-form", "scale_controal");


    // ============================== Create Function To Add New Task ==============================

    const addNewTask = () =>
    {
        getValueFromUser();

        arrayOfItems.push(object);

        // ============================== push new user to localstorage ==============================
        addUsersToLocalStorage(arrayOfItems);

    }

    // ==============================Create function to add person When user click on add btn ==============================

    const activeAddPerson = () =>
    {
        const invite_Form = document.querySelector(".invite-form");
        const invite_Btn = document.querySelector(".invite");
        const cansel = document.querySelector(".cansel");

        // ======================= add person if user click on invite btn ========================
        invite_Btn.addEventListener("click", () =>
        {
            // ====================== Calling function DarwUi to set a element to page ==============================
            addNewTask();
            darwInviteUI(arrayOfItems, deleteFromUi, images, randomNum);

            // Rmove active Class from invite-form when user add a new person
            invite_Form.classList.remove("scale_controal");
        });

        // ============================== hide form if user click on casnel btn or cansel icone ==============================
        // We import this funtion From Basic Function Js File
        hideFromUi(cansel, invite_Form);
        hideFromUi(document.querySelector(".cansel-intvite-btn"), invite_Form);

    }
    activeAddPerson();


    // ============================== this Function add users to local Storage ==============================

    function addUsersToLocalStorage(arrayOfItems)
    {
        let data = JSON.stringify(arrayOfItems);

        // add it to localStorage
        localStorage.setItem("users", data);

    };

    addUsersToLocalStorage(arrayOfItems);

    // Create another Function To Delete user from localStorage

    const deleteFromLocalStorage = (userId) =>
    {
        let data = JSON.parse(localStorage.getItem("users"));
        if (data)
        {
            // ============================== filtering array to set the correct users ==============================
            arrayOfItems = arrayOfItems.filter(user => user.id != userId.id);

            // ============================== add new users to localstorage ==============================
            localStorage.setItem("users", JSON.stringify(arrayOfItems));
            darwInviteUI(arrayOfItems, deleteFromUi, images, randomNum);
        }
    }

    // ============================== create Function To Delete user from page ui ==============================

    function deleteFromUi()
    {
        const remove_btns = document.querySelectorAll(".delete-invite");

        remove_btns.forEach(btn =>
        {
            btn.addEventListener("click", () =>
            {
                // ============================== filtering array to set the correct users ==============================
                arrayOfItems = arrayOfItems.filter(user => user.id != btn.id);

                // ====================== Calling Function delete from local to update local storage =========================
                deleteFromLocalStorage(btn.id);

                // ==================== calling ui function to update ui ==============================
                darwInviteUI(arrayOfItems, deleteFromUi, images, randomNum);
            });
        });
    }

    // ============================== Create function To Resend invite ==============================

    const resendInvite = () =>
    {
        const resend_Btns = document.querySelectorAll(".resend_invite");
        let message = document.createElement("div");
        message.innerHTML = "Hey, We're Resend Message From This User Again";
        message.style.cssText = "padding: 20px 50px !important; background-color: #8c2f4a; border: 2px solid #1a1c20; color:white; font-weight:bold; font-size:14px; position:absolute; left:50%; top:50%; transform: translate(-50%, -50%); ";
    
        resend_Btns.forEach(btn =>
        {
            btn.addEventListener("click", () =>
            {
                document.body.appendChild(message);

                // ==================== this variable to remove element after 4 sec =====================
                let removeDiv = setInterval(() => message.remove(), 4000);
            })
        })
    }
    resendInvite();


    // Create Function To apper users Div  or Security Div when user chose btween those

    const toggleApperUi = () =>
    {
        const users_Div = document.querySelector(".users");
        const security_Div = document.querySelector(".security");
        const users_btns = document.querySelectorAll(".users-btn");
        const security_btns = document.querySelectorAll(".security-btn");

        users_btns.forEach(btn =>
        {
            btn.addEventListener("click", () =>
            {
                // We import this function from Basic function Js File
                filterApperUi({
                    add_none: security_Div,
                    remove_none: users_Div,
                });
            });
        });

        security_btns.forEach(btn =>
        {
            btn.addEventListener("click", () =>
            {
                filterApperUi({
                    add_none: users_Div,
                    remove_none: security_Div,
                });
            });
        });

    }

    toggleApperUi();
})();