// Dark Mode Functionality
const toggle_mode = () =>
{
  const darkMode = document.querySelector(".light-mode");
  const text_color_element = document.querySelectorAll(".text-white");
  const text_color_elment_with_opaicty = document.querySelectorAll(".text-white-50");
  darkMode.addEventListener("click", function ()
  {
    if (document.body.classList.contains("light-mode"))
    {
      darkMode.querySelector("span").textContent = "dark mode";
      darkMode.querySelector(".mode-icone").innerHTML = `<i class="fa-regular fa-moon"></i>`;
      add_remove(text_color_element, text_color_elment_with_opaicty, false);

    } else
    {
      darkMode.querySelector("span").textContent = "light mode";

      darkMode.querySelector(".mode-icone").innerHTML = `<i class="fa-solid fa-sun"></i>`;

      add_remove(text_color_element, text_color_elment_with_opaicty, true);
    }
    document.body.classList.toggle("light-mode");
  });
}

toggle_mode();
// <i class="fa-solid fa-sun"></i>

function add_remove(text_color_element , text_color_elment_with_opaicty , statue)
{
  if (statue == true)
  {
    text_color_element.forEach(element =>
    {
      element.classList.remove("text-white");
      element.classList.add("text-black");

    });
    text_color_elment_with_opaicty.forEach(element =>
    {
      element.classList.remove("text-white-50");
      element.classList.add("text-black-50");
    });
  } else
  {
    text_color_element.forEach(element =>
    {
      element.classList.add("text-white");
      element.classList.remove("text-black");

    });
    text_color_elment_with_opaicty.forEach(element =>
    {
      element.classList.add("text-white-50");
      element.classList.remove("text-black-50");
    });
  }
}
