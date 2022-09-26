const formEl = document.getElementById("form");
const formNav = document.getElementById("form-nav");
const formNavFrame = formNav.querySelector(".frame");
const btnSaveForm = document.getElementById("btn-save-form");

const N_QUESTIONS = 15;

// const mockTitle = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
const mockTextContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corrupti reprehenderit sequi perspiciatis eius voluptatum corporis placeat quisquam voluptates ad quaerat quidem repellendus ducimus, mollitia quam esse saepe, ea laudantium?";


btnSaveForm.onclick = (event) => {
  const formContent = getFormContent();
  createPDFContent(formContent); 
};

for (let idx = 1; idx < N_QUESTIONS + 1; idx++) {
  formEl.innerHTML += createQuestion(idx, mockTextContent);
  formNavFrame.innerHTML += createAnchor(idx);
}

function createQuestion(id, textContent) {
  return (
    `<div id=${id}>
      <span>Question ${id}</span>
      <textarea name="text-${id}" cols="60" rows="4">${textContent}</textarea>
    </div>`
  );
}

function createAnchor(id){
  return `<a href="#${id}">${id}</a>`;
}

function getFormContent(){
  let element, title, textContent;
  const children = form.children;
  const formContent = [];
  for (let idx = 0; idx < N_QUESTIONS; idx++) {
    element = children[idx];
    title = element.querySelector("span").textContent;
    textContent = element.querySelector("textarea").innerHTML;
    formContent.push([title,textContent]);
  }
  return formContent;
}

