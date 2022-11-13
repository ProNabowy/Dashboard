import { toggle_active_class } from "./basic_Functions.js";
const set_data_time = _ =>
{
    const array_Of_months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
    const array_Of_days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    // date variables

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let last_day = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let last_day_index = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    let first_day_Index = date.getDay();
    let prev_last_day = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let next_days = 7 - last_day_index - 1;

    // select elements
    const month_Element = document.querySelector(".month");
    const year_Element = document.querySelector(".year");
    const days = document.querySelector(".days");
    const left_angle = document.querySelector(".left-angel");
    const right_angle = document.querySelector(".right-angel");
    month_Element.innerHTML = array_Of_months[month];
    year_Element.innerHTML = year;

    // set new year when user click on angles

    // this function check for what is opration user wanna do it
    const change_month_year = (angle, opration) =>
    {

        angle.addEventListener("click", () =>
        {
            if (opration == "+")
            {

                month += 1;
                if (month == 12)
                {
                    month = 0;
                    year += 1;
                }
                month_Element.innerHTML = array_Of_months[month];
                year_Element.innerHTML = year;

            } else
            {

                if (month == 0)
                {
                    month = 12;
                    year -= 1;
                }
                month -= 1;
                month_Element.innerHTML = array_Of_months[month];
                year_Element.innerHTML = year;
            }
        });
    };

    change_month_year(right_angle, "+");
    change_month_year(left_angle, "-");

    // Create Function To Set darw days ui
    const darw_days_Ui = () =>
    {
        days.innerHTML = "";
        for (let i = first_day_Index; i > 0; i--)
        {
            days.innerHTML += `<p style="cursor: pointer; width: calc(100% / 7);" class="prevLastDays fw-bold p-2 mb-2"><span>${prev_last_day - i + 1}</span></p>`;
        }
        for (let i = 1; i <= last_day; i++)
        {
            days.innerHTML += `<p style="cursor: pointer; width: calc(100% / 7);" class="fw-bold p-2 mb-2"><span data-day="${i}">${i}</span></p>`;
        }
        for (let j = 1; j <= next_days; j++)
        {
            days.innerHTML += `<p style="cursor: pointer; width: calc(100% / 7);" class="nextDays fw-bold p-2 mb-2"><span>${j}</span></p>`;
        }
    }
    darw_days_Ui();

    // We import This Function From Basic Functions Js File
    toggle_active_class(days.querySelectorAll("p span"), "current_day");

    // Set active current_day calss to current day
    const current_day_class = () =>
    {
        return [...days.children].forEach(element => (element.children[0].getAttribute("data-day") == day) ? element.children[0].classList.add("current_day") : element);
    }
    current_day_class();

    const control_day_by_week = () =>
    {
        let day = date.getDay() + 1;
        if (day == 7)
        {
            day = 0;
        }
        return day;
    }


    // set day and week as innerHTML for time-line  div
    const time_Line = () =>
    {
        let span_Day_By_Week = document.querySelector(".today-by-week");
        let span_Day_By_Month = document.querySelector(".day-by-week-str");

        span_Day_By_Week.innerHTML = `${day}<sub style="opacity: 0.5;">th</sub>`;
        span_Day_By_Month.innerHTML = array_Of_days[control_day_by_week()];
    }
    time_Line();

};

set_data_time();

// Calling toggle active Class Function To Set use it with time line tasks

toggle_active_class(document.querySelectorAll(".time-line-task"), "active_task");


// ========================================== Chat Logic =======================================================

const chat_Logic = () =>
{
    const chat_Wrapper = document.querySelector(".chat-wrapper");
    const chat_input = document.querySelector(".user-chat input");
    let date = new Date();
    let current_time = `${date.getHours()}:${date.getMinutes()}`;
    let child_element;

    // Create Function To Darw Message UI

    const darw_Message_Ui = () =>
    {
        chat_input.addEventListener("input", (e) =>
        {
            child_element = `
            <div class="d-flex-center p-1 mb-2 pe-2"
                style="box-shadow: 0px 0px 2110px 20px #575f6e38 inset; border-radius: 5px; width: fit-content; max-width: 90%; align-self: flex-end;">
                <p style="font-weight: 400; font-size: 12px; width: 85%; word-break: break-all;">
                    ${e.target.value}
                </p>
                <span class="text-white-50 fw-bold"
                    style="width: 10%; font-size: 11px; align-self: flex-end; margin: 0 15px !important;">${current_time}</span>
            </div>`
        });

        // Set user message when he click on enter button
        chat_input.addEventListener("focus", () =>
        {
            document.addEventListener("keyup", (e) =>
            {
                if (e.key === "Enter")
                {
                    if (chat_Wrapper.value != "")
                    {
                        chat_Wrapper.innerHTML += child_element;
                        chat_input.value = "";
                        setTimeout(() =>
                        {
                            send_Auto_Message(chat_Wrapper, current_time);
                        }, 1000);
                    }
                    return false;
                }
            });
        });

    }

    darw_Message_Ui();

    // Create Function To Send Message To User 3lashn mya7sh eno w7aid xD
    const array_Of_Message = [
        "Thanks for reaching out to Nabowy Dashboard! Our business hours are M-F, 9 AM-5 PM PT. We’ll get back to you within one business day.",
        "Thanks for contacting Jill at Nabowy Dashboard. I’m currently out of the office. I’ll be back at 1 PM and will respond to your message shortly.",
        "I’m currently camping in a WiFi-free zone! I’ll be back on May 10 to respond to your message. For urgent matters, please reach out to Joe at 01125480514.",
        "Our team is out spending time with loved ones. We’ll be back on November 29 to respond to your text. Have a great Thanksgiving weekend!",
        "We’ve got your back! A member of our support team will respond to your message within 2-3 hours. Thank you for your patience.",
        "Hello! We’re currently getting more texts than usual. We’ve received your message and will respond as soon as we can. Thank you for your patience.",
        "Thanks for your message! An expert will get back to you very soon. In the meantime, our help center may be able to answer your questions faster",
        "We’ve received your report. We’ll reach out if we need more information and let you know once the bug is resolved. Thanks for helping our site perform better!",
        "Sorry we missed your call! A member of our team will get back to you by the end of the day.",
        "Thanks for leaving a voicemail! We appreciate your patience and will get back to you by the end of the day.",
        "Thanks for contacting Nabowy Dashboard! One of our sales reps will reach out to you shortly. Tap to browse our summer sale while you wait: nabowy.online",
        "Thanks for contacting Nabowy Dashboard! We’ll reach out within an hour. Have you read our latest eBook? Fill out this form to get your free copy",
        "Thanks for reaching out! This inbox is not monitored. Please call this number or email us at [enter your support email address] so we can support your needs.",
        "Welcome to Nabowy Dashboard SMS Rewards! Keep your eyes peeled for your first exclusive discount, coming to you soon.",
        "Thanks for opting into text alerts for your recent order. We’ll send you a message once your order has shipped!",
        "Sorry we missed your call. If you’re looking to book an appointment you can schedule online here: nabowy.online.",
        "Thanks for your first Nabowy Dashboard purchase! We’re excited for you to try out our product. Here’s how you can set it up: nabowy.work@gmail.com",
        "Thanks for entering the Nabowy Dashboard spring sweepstakes! We’ll reach out to the winners on August 31 by noon PST."
    ];

    function send_Auto_Message (wrapper_element , date)
    {
        const message = `
                            <div class="d-flex-center p-1 mb-2"
                                style="box-shadow: 0px 0px 2212210px 20px #575f6e38 inset; border-radius: 5px; width: fit-content; max-width: 90%;">
                                <p style="font-weight: 400; opacity: 0.2; font-size: 12px; width: 85%;">
                                    ${array_Of_Message[Math.floor(Math.random() * array_Of_Message.length)]}
                                    starting , i'll tell you more about it later</p>
                                <span class="text-white-50 fw-bold "
                                    style="opacity: 0.4; width: 10%; font-size: 11px; align-self: flex-end; margin: 0 10px !important;">${date}</span>
                            </div>`;
        wrapper_element.innerHTML += message;
    }


}

chat_Logic();