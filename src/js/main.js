(function () {
    const docList = document.querySelectorAll(".document-file");
    const docDownload = document.querySelector(".document-download");
    const modalCta = document.querySelector(".modalCta");

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
        // Show more files
        if (event.target.matches(".show-more")) {
            for (let i = 0; i < docList.length; i++) {
                docList[i].classList.remove("hide");
            }
            event.target.classList.add("hide");
        }

        // Open Modal
        if (event.target.closest(".open-modal")) {
            let selectedDoc = event.target.closest(".document-file");
            let docName = selectedDoc
                .querySelector(".documentName")
                .textContent.toLowerCase()
                .trim()
                .replace(/\s\s+/g, " ");
            docDownload.href = selectedDoc.dataset.file;
            modalCta.href =
                "https://wa.me/573107631605?text=Buenas,%20necesito%20la%20ayuda%20de%20un%20experto%20en%20tramites%20ambientales%20de%20trambiental%20para%20llenar%20el%20formato%20de%20" +
                docName.replace(/\s/g, "%20");

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
