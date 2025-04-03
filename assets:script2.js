{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function() \{\
    const form = document.getElementById("contactForm");\
\
    form.addEventListener("submit", function(event) \{\
        event.preventDefault();\
\
        const name = document.getElementById("name").value;\
        const email = document.getElementById("email").value;\
        const message = document.getElementById("message").value;\
\
        const telegramBotToken = "YOUR_BOT_TOKEN";\
        const chatId = "YOUR_CHAT_ID";\
\
        const text = `New Contact Form Submission:\\nName: $\{name\}\\nEmail: $\{email\}\\nMessage: $\{message\}`;\
\
        fetch(`https://api.telegram.org/bot$\{telegramBotToken\}/sendMessage?chat_id=$\{chatId\}&text=$\{encodeURIComponent(text)\}`)\
            .then(response => response.json())\
            .then(data => \{\
                if (data.ok) \{\
                    alert("Message sent successfully!");\
                    form.reset();\
                \} else \{\
                    alert("Error sending message.");\
                \}\
            \})\
            .catch(error => console.error("Error:", error));\
    \});\
\});\
}