let htmlElement = document.getElementsByTagName("html")[0];

const localStorageEventHandler = (e) => {
    htmlElement.setAttribute("class", window.localStorage.getItem("darkModeEnabled") ? "dark" : "");
}

document.addEventListener("itemInserted", localStorageEventHandler);
