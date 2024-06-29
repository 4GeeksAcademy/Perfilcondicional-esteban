import "../style/index.css";
function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1> ${variables.name ? variables.name : ""} ${
    variables.lastName ? variables.lastName : ""
  } </h1>         
          <h2>Web Developer</h2>
          <h3>Miami, USA</h3>
          <ul class="position-right">                  
            <li><a href="${
              variables.twitter
                ? `https://twitter.com/${variables.twitter}`
                : ""
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${
              variables.github ? `https://github.com/${variables.github}` : ""
            }">
            <i class="fab fa-github"></i></a></li>           
            <li><a href="${
              variables.linkedin
                ? `https://linkedin.com/u/${variables.linkedin}`
                : ""
            }" >
            <i class="fab fa-linkedin"></i></a></li>            
            <li><a href="${
              variables.instagram
                ? "https://instagram.com/" + variables.instagram
                : ""
            }">
            <i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,

    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",

    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",

    socialMediaPosition: "position-left",

    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
