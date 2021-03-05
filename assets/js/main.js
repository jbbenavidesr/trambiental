(function () {
    const docList = document.querySelectorAll(".document-file");
    const docDownload = document.querySelector(".document-download");

    document.querySelector("#searchBar").addEventListener("keyup", (evt) => {
        const query = evt.target.value.toLowerCase();
        for (let i = 0; i < docList.length; i++) {
            const name = docList[i]
                .querySelector(".documentName")
                .textContent.toLowerCase();
            if (name.includes(query)) {
                docList[i].classList.remove("hide");
            } else {
                docList[i].classList.add("hide");
            }
        }
    });

    document.addEventListener("click", (event) => {
        // Open Modal
        if (event.target.closest(".open-modal")) {
            let selectedDoc = event.target.closest(".document-file").dataset
                .file;
            docDownload.href = selectedDoc;

            document.body.classList.add("modal-is-open");
        }

        // Closing the modal
        if (
            event.target.closest(".jsModalClose") ||
            event.target.matches(".modal-overlay")
        ) {
            document.body.classList.remove("modal-is-open");
        }
    });
})();
