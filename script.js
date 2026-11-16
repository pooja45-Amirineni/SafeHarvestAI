
// =================================
// SAFEHARVEST AI - CHATBOT
// =================================

// 1. LANGUAGE SUPPORT

function toggleLanguage() {

    const page = document.body;
    const current = page.dataset.language || "en";
    const next = current === "en" ? "te" : "en";

    document.querySelectorAll("[data-en][data-te]").forEach(function(element) {
        element.textContent = element.getAttribute(
            next === "te" ? "data-te" : "data-en"
        );
    });

    page.dataset.language = next;

    const btn = document.getElementById("languageBtn");

    if (btn) {
        btn.textContent = next === "te" ? "English" : "తెలుగు";
    }

    const input = document.getElementById("userInput");

    if (input) {
        input.placeholder = next === "te"
            ? "మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి..."
            : "Type your question here...";
    }
}


// 2. SEND MESSAGE

function sendMessage() {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatMessages");

    if (!input || !chat) return;

    const originalMessage = input.value.trim();

    if (originalMessage === "") {
        alert("Please enter your question!");
        return;
    }

    const message = originalMessage.toLowerCase();
    const language = document.body.dataset.language || "en";

    // User message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = originalMessage;
    chat.appendChild(userDiv);

    // Bot response
    const botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.textContent = getResponse(message, language);
    chat.appendChild(botDiv);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}


// 3. CHATBOT RESPONSES

function getResponse(message, language) {

    const telugu = language === "te";

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("హలో") ||
        message.includes("నమస్కారం")
    ) {
        return telugu
            ? "నమస్కారం! SafeHarvest AI కి స్వాగతం. మీ వ్యవసాయ ప్రశ్న అడగండి."
            : "Hello! Welcome to SafeHarvest AI. Ask me your farming question.";
    }

    if (
        message.includes("vermicompost") ||
        message.includes("వర్మీ")
    ) {
        return telugu
            ? "వానపాముల సహాయంతో సేంద్రీయ వ్యర్థాలను కుళ్లబెట్టి తయారు చేసే ఎరువును వర్మీకంపోస్ట్ అంటారు."
            : "Vermicompost is a natural fertilizer prepared with the help of earthworms using organic waste.";
    }

    if (
        message.includes("compost") ||
        message.includes("కంపోస్ట్")
    ) {
        return telugu
            ? "ఆకులు, మొక్కల వ్యర్థాలు మరియు వంటగది వ్యర్థాలను కుళ్లబెట్టి కంపోస్ట్ తయారు చేస్తారు."
            : "Compost is made from decomposed leaves, plant waste and kitchen waste. It adds organic matter to soil.";
    }

    if (
        message.includes("fertilizer") ||
        message.includes("ఎరువు")
    ) {
        return telugu
            ? "ఎరువులు మొక్కలకు అవసరమైన పోషకాలను అందిస్తాయి. నేల పరీక్ష మరియు నిపుణుల సలహా ఆధారంగా సరైన ఎరువును ఎంచుకోవాలి."
            : "Fertilizers provide nutrients needed for plant growth. Choose fertilizers based on soil testing and expert advice.";
    }

    if (
        message.includes("pesticide") ||
        message.includes("పురుగు మందు") ||
        message.includes("పురుగుమందు")
    ) {
        return telugu
            ? "పురుగుమందులు పంటలకు హాని చేసే పురుగులను నియంత్రించడానికి ఉపయోగిస్తారు. ఉత్పత్తి లేబుల్ సూచనలు మరియు భద్రతా జాగ్రత్తలను తప్పనిసరిగా పాటించాలి."
            : "Pesticides are used to control harmful pests. Always follow the product label and recommended safety precautions.";
    }

    if (
        message.includes("organic") ||
        message.includes("సేంద్రీయ")
    ) {
        return telugu
            ? "సేంద్రీయ వ్యవసాయంలో కంపోస్ట్, వర్మీకంపోస్ట్ మరియు పంట మార్పిడి వంటి సహజ పద్ధతులను ఉపయోగిస్తారు."
            : "Organic farming uses natural practices such as composting, vermicomposting and crop rotation.";
    }

    if (
        message.includes("wash") ||
        message.includes("fruit") ||
        message.includes("vegetable") ||
        message.includes("కడగ")
    ) {
        return telugu
            ? "పండ్లు మరియు కూరగాయలను తినే ముందు శుభ్రమైన ప్రవహించే నీటితో బాగా కడగండి."
            : "Wash fruits and vegetables thoroughly under clean running water before eating.";
    }

    if (
        message.includes("chemical") ||
        message.includes("రసాయన")
    ) {
        return telugu
            ? "వ్యవసాయ రసాయనాలను తప్పుగా లేదా అధికంగా ఉపయోగించడం వల్ల నేల, నీరు మరియు పర్యావరణంపై ప్రభావం పడవచ్చు. నిపుణుల సలహా పాటించండి."
            : "Improper or excessive chemical use can affect soil, water and the environment. Follow expert agricultural advice.";
    }

    if (
        message.includes("food safety") ||
        message.includes("ఆహార భద్రత")
    ) {
        return telugu
            ? "ఆహార భద్రత కోసం పండ్లు, కూరగాయలను శుభ్రపరచడం, సరైన విధంగా నిల్వ చేయడం మరియు పరిశుభ్రత పాటించడం ముఖ్యం."
            : "Food safety includes washing, handling and storing fruits and vegetables properly.";
    }

    if (
        message.includes("soil") ||
        message.includes("నేల")
    ) {
        return telugu
            ? "నేల ఆరోగ్యంగా ఉండటానికి సేంద్రీయ పదార్థాలు కలపడం, పంట మార్పిడి మరియు నేల పరీక్ష చేయించడం ఉపయోగకరంగా ఉంటుంది."
            : "Adding organic matter, crop rotation and soil testing can help maintain healthy soil.";
    }

    return telugu
        ? "క్షమించండి, మీ ప్రశ్నకు సమాధానం తెలియదు. ఎరువులు, పురుగుమందులు, కంపోస్ట్ లేదా ఆహార భద్రత గురించి అడగండి."
        : "Sorry, I don't have an answer for that question. Try asking about fertilizers, pesticides, compost or food safety.";
}


// 4. ENTER KEY SUPPORT

document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("userInput");

    if (input) {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    }

});
