// Create Function When user click on any img it's apper as a fullscreen element
import { fullscreen_img } from "./basic_Functions.js";

fullscreen_img("img");


// ========================================== Create Function To Set type of font and style of it =====================================================

const control_font = () =>
{
    const select_font = document.querySelector(".info-details select");
    const bold_btn = document.querySelector(".bold-btn");
    const oblique_btn = document.querySelector(".oblique-btn");
    const text_area = document.querySelector(".info-details textarea");
    select_font.addEventListener("click", () =>
    {
        let value = select_font.value;
        select_font.classList = `text-white ${value}`;
        text_area.classList = `text-white-50 ${value} p-2`;
    });
    // set toggle oblique class
    oblique_btn.addEventListener("click", _ =>
    {
        select_font.classList.toggle("fs-oblique");
        text_area.classList.toggle("fs-oblique");
    });
    // set toggle bold class
    bold_btn.addEventListener("click", _ =>
    {
        select_font.classList.toggle("fw-bold");
        text_area.classList.toggle("fw-bold");
    })
}

control_font();



// ========================================== Create Function To Control img statue update & delete... =====================================================

const update_delete_imgs = _ =>
{
    const profile_img = document.querySelector(".profile-header img");
    const photo_controler = document.querySelector(".info-details img");
    const delete_btn = document.querySelector(".delete-img-btn");
    const update_btn = document.querySelector("update-img-btn");
    // delete img when user add to delete btn
    delete_btn.addEventListener("click", _ =>
    {
        profile_img.src = "../images/default-user.jpg";
        photo_controler.src = "../images/default-user.jpg";
    });

}
update_delete_imgs();
