document.getElementById("downloadResume").addEventListener("click", function() {
    const resumeUrl = "https://drive.google.com/file/d/1DDpRSlt06Kj0e6ikbA0x_gCc6cqiUmVn/view?usp=sharing";

    // Open in a new tab
    window.open(resumeUrl, "_blank");

    // Try downloading the file
    fetch(resumeUrl)
        .then(response => response.blob()) // Convert response to a blob
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "Areeba-Majid.pdf"; // Set a custom filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => console.error("Download failed:", error));
});

document.getElementById("downloadResume2").addEventListener("click", function() {
    const resumeUrl = "https://drive.google.com/file/d/1DDpRSlt06Kj0e6ikbA0x_gCc6cqiUmVn/view?usp=sharing";

    // Open in a new tab
    window.open(resumeUrl, "_blank");

    // Try downloading the file
    fetch(resumeUrl)
        .then(response => response.blob()) // Convert response to a blob
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "Areeba-Majid.pdf"; // Set a custom filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => console.error("Download failed:", error));
});
