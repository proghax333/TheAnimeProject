
const titleElement = document.getElementsByTagName('title')[0];

export function setPageTitle(title) {
  titleElement.innerText = title;
}
