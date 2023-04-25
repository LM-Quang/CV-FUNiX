const regex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const confirmEmail = () => {
   const inputEmail = document.querySelector(".input-email");
   const email = document.getElementById("email").value;
   const info = document.querySelector(".info");
   const socialMedia = document.querySelector(".personal-social-media");
   const noticeText = document.querySelector(".notice-text");
   if (regex.test(email)) {
      inputEmail.classList.add("hidden");
      info.classList.remove("hidden");
      socialMedia.classList.remove("hidden");
      noticeText.textContent = "Hãy nhập email để xác thực";
      noticeText.style.color = "color: rgba(0, 0, 0, 0.5)";
   } else {
      noticeText.textContent = "Email không hợp lệ! Vui lòng nhập lại!";
      noticeText.style.color = "red";
   }
};
const viewMore = (id) => {
   const jobInfoContents = document.getElementsByClassName("job-info-contents");
   const viewMoreBTN = document.getElementsByClassName("view-more");
   const viewMoreText = document.getElementsByClassName("view-more-text");
   for (let i = 0; i < jobInfoContents.length; i++) {
      if (i === id) {
         jobInfoContents[i].classList.toggle("hidden");
         viewMoreText[i].textContent =
            viewMoreText[i].textContent === "VIEW MORE" ? "VIEW LESS" : "VIEW MORE";
         viewMoreBTN[i].style.visibility =
            viewMoreText[i].textContent === "VIEW MORE" ? "" : "visible";
         break;
      }
   }
};
