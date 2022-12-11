const listExtendedViewElement = document.querySelector(".list-extended-view");

const extendedViewMainSection = document.createElement("section");
extendedViewMainSection.classList.add("extended-view-main-section");

const createExtendedMainContent = (todoName) => {
  const extendedViewMainContent = document.createElement("div");
  extendedViewMainContent.classList.add("extended-view-main-content");
  extendedViewMainContent.id = `main-content-${todoName}`;

  extendedViewMainSection.appendChild(extendedViewMainContent);
  listExtendedViewElement.appendChild(extendedViewMainSection);
};

export { createExtendedMainContent };
