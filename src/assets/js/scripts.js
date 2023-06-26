// <!-- By setting 'this' as an argument in the unmark() function, the clicked element is passed as a parameter. -->

function unmark(element) {
  element.classList.remove("unread");
  let spanElement = element.querySelector("span.red_dot");
  // It is possible to achieve this without using an if statement. Instead, this condition checks for the presence of the element.
  if (spanElement) {
    spanElement.classList.remove("red_dot");
  }
  let hed_notifi = document.querySelector(".header_notifi a");
  if (hed_notifi.textContent > 0) {
    hed_notifi.textContent--;
  }
}

function unmarAll() {
  let aElements = document.querySelectorAll("a.unread");
  aElements.forEach((element) => {
    element.classList.remove("unread");
  });
  let spanElement = document.querySelectorAll("span.red_dot");
  spanElement.forEach((element) => {
    element.classList.remove("red_dot");
  });

  let hed_notifi = (document.querySelector(".header_notifi a").innerHTML = "0");
}
