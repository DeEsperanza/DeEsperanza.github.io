/**
* copyright
* SPDX-FileCopyrightText: © 2022 DeEsperanza
* SPDX-License-Identifier: BSD-3-Clause
*/

    /// const myArticle = document.querySelector("article");
    /// const myLinks = document.querySelectorAll("ul a");
function loader(url) {
    const links = document.querySelectorAll("#list");
    
    /// Add click event listener.
    for (const link of links) {
        link.onclick = (e) => {
            e.preventDefault();
            const linkData = e.target.dataset.page;

            /// Below code is the original code.
            /// However, it did not work.
            /// const linkData = e.target.getAttribute("data-page");

            console.log(`${linkData} is selected`);
            loadMarkDown(url, linkData);
        };
    }
}

function loadMarkDown(url, pageId) {
    const myArticle = document.querySelector("article");

    console.log(pageId);
    const myRequest = new Request(`${url}/${pageId}.md`);

    fetch(myRequest)
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.text();
    })
    .then((text) => {
        myArticle.innerHTML = marked.parse(text);
    })
    .catch((error) => {
        myArticle.innerText = `Error: ${error.message}`;
    });
}
