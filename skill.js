function analyzeDocument() {

    let documentText = document.getElementById("document").value;
    let resultText = document.getElementById("resultText");

    if (documentText.trim() === "") {
        resultText.innerHTML =
            "⚠️ Please enter a legal document first.";
        return;
    }

    let wordCount = documentText.trim().split(/\s+/).length;

    resultText.innerHTML =
        "✅ Document received successfully.<br><br>" +
        "📌 Word Count: " + wordCount + "<br>" +
        "📌 Basic Analysis: The document is ready for legal review.<br>" +
        "📌 Important: This tool provides general information and is not a substitute for a qualified lawyer.";
}