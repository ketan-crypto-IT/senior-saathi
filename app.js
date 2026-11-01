/* =========================================================
   SENIOR SAATHI 2.0
   COMPLETE APP.JS
========================================================= */

"use strict";

/* =========================================================
   APP DATA
========================================================= */

const lessons = {
 smartphone: {
  icon: "📱",
  number: "Module 01",

  title: {
    en: "Smartphone Basics",
    hi: "स्मार्टफोन की मूल बातें",
    mr: "स्मार्टफोनच्या मूलभूत माहिती"
  },

  pages: [

    {
      title: {
        en: "1. Know Your Smartphone",
        hi: "1. अपने स्मार्टफोन को जानें",
        mr: "1. तुमचा स्मार्टफोन ओळखा"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">📱</div>

            <h3>What is a Smartphone?</h3>

            <p>
              A smartphone is a mobile phone that can make calls,
              send messages, use the internet, take photos and run apps.
            </p>

            <h3>Important Parts</h3>

            <ul>
              <li>🔘 <strong>Power Button</strong> – Turns the phone on or off.</li>
              <li>🔊 <strong>Volume Buttons</strong> – Increase or decrease sound.</li>
              <li>📱 <strong>Touchscreen</strong> – Tap, swipe and scroll.</li>
              <li>📷 <strong>Camera</strong> – Take photos and videos.</li>
              <li>🔌 <strong>Charging Port</strong> – Used for charging.</li>
              <li>🎤 <strong>Microphone</strong> – Used for voice and calls.</li>
              <li>🔊 <strong>Speaker</strong> – Plays sound.</li>
            </ul>

            <div class="lesson-tip">
              💡 <strong>Remember:</strong> Handle your phone carefully and keep it away from water.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">📱</div>

            <h3>स्मार्टफोन क्या है?</h3>

            <p>
              स्मार्टफोन एक मोबाइल फोन है जिससे आप कॉल, मैसेज,
              इंटरनेट, फोटो और अलग-अलग Apps का उपयोग कर सकते हैं।
            </p>

            <h3>महत्वपूर्ण हिस्से</h3>

            <ul>
              <li>🔘 <strong>Power Button</strong> – फोन चालू या बंद करने के लिए।</li>
              <li>🔊 <strong>Volume Buttons</strong> – आवाज कम या ज्यादा करने के लिए।</li>
              <li>📱 <strong>Touchscreen</strong> – टैप, स्वाइप और स्क्रॉल करने के लिए।</li>
              <li>📷 <strong>Camera</strong> – फोटो और वीडियो लेने के लिए।</li>
              <li>🔌 <strong>Charging Port</strong> – फोन चार्ज करने के लिए।</li>
              <li>🎤 <strong>Microphone</strong> – आवाज और कॉल के लिए।</li>
              <li>🔊 <strong>Speaker</strong> – आवाज सुनने के लिए।</li>
            </ul>

            <div class="lesson-tip">
              💡 <strong>याद रखें:</strong> फोन को सावधानी से रखें और पानी से दूर रखें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">📱</div>

            <h3>स्मार्टफोन म्हणजे काय?</h3>

            <p>
              स्मार्टफोन हा असा मोबाइल फोन आहे ज्याद्वारे कॉल,
              मेसेज, इंटरनेट, फोटो आणि विविध Apps वापरता येतात.
            </p>

            <h3>महत्त्वाचे भाग</h3>

            <ul>
              <li>🔘 <strong>Power Button</strong> – फोन सुरू किंवा बंद करण्यासाठी.</li>
              <li>🔊 <strong>Volume Buttons</strong> – आवाज कमी किंवा जास्त करण्यासाठी.</li>
              <li>📱 <strong>Touchscreen</strong> – टॅप, स्वाइप आणि स्क्रोल करण्यासाठी.</li>
              <li>📷 <strong>Camera</strong> – फोटो आणि व्हिडिओ काढण्यासाठी.</li>
              <li>🔌 <strong>Charging Port</strong> – फोन चार्ज करण्यासाठी.</li>
              <li>🎤 <strong>Microphone</strong> – आवाज आणि कॉलसाठी.</li>
              <li>🔊 <strong>Speaker</strong> – आवाज ऐकण्यासाठी.</li>
            </ul>

            <div class="lesson-tip">
              💡 <strong>लक्षात ठेवा:</strong> फोन काळजीपूर्वक वापरा आणि पाण्यापासून दूर ठेवा.
            </div>
          </div>
        `
      }
    },


    {
      title: {
        en: "2. Touchscreen & Gestures",
        hi: "2. टचस्क्रीन और जेस्चर",
        mr: "2. टचस्क्रीन आणि जेश्चर"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">👆</div>

            <h3>Learn Touch Gestures</h3>

            <ul>
              <li>👆 <strong>Tap</strong> – Touch once to open something.</li>
              <li>👆👆 <strong>Double Tap</strong> – Touch twice quickly.</li>
              <li>👉 <strong>Swipe</strong> – Move your finger across the screen.</li>
              <li>⬆️ <strong>Scroll</strong> – Move up or down to see more.</li>
              <li>🤏 <strong>Pinch</strong> – Use two fingers to zoom in or out.</li>
              <li>🔄 <strong>Rotate</strong> – Turn the phone to change screen orientation.</li>
            </ul>

            <div class="lesson-tip">
              💡 Practice slowly. You do not need to press the screen hard.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">👆</div>

            <h3>टचस्क्रीन के जेस्चर सीखें</h3>

            <ul>
              <li>👆 <strong>Tap</strong> – किसी चीज को खोलने के लिए एक बार छुएं।</li>
              <li>👆👆 <strong>Double Tap</strong> – जल्दी से दो बार छुएं।</li>
              <li>👉 <strong>Swipe</strong> – उंगली को स्क्रीन पर एक दिशा में चलाएं।</li>
              <li>⬆️ <strong>Scroll</strong> – ऊपर या नीचे जाने के लिए।</li>
              <li>🤏 <strong>Pinch</strong> – दो उंगलियों से Zoom करें।</li>
              <li>🔄 <strong>Rotate</strong> – स्क्रीन की दिशा बदलने के लिए फोन घुमाएं।</li>
            </ul>

            <div class="lesson-tip">
              💡 धीरे-धीरे Practice करें। स्क्रीन को जोर से दबाने की जरूरत नहीं है।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">👆</div>

            <h3>टचस्क्रीनचे जेश्चर शिका</h3>

            <ul>
              <li>👆 <strong>Tap</strong> – काही उघडण्यासाठी एकदा स्पर्श करा.</li>
              <li>👆👆 <strong>Double Tap</strong> – पटकन दोनदा स्पर्श करा.</li>
              <li>👉 <strong>Swipe</strong> – बोट स्क्रीनवर एका दिशेने फिरवा.</li>
              <li>⬆️ <strong>Scroll</strong> – वर किंवा खाली जाण्यासाठी.</li>
              <li>🤏 <strong>Pinch</strong> – दोन बोटांनी Zoom करा.</li>
              <li>🔄 <strong>Rotate</strong> – स्क्रीनची दिशा बदलण्यासाठी फोन फिरवा.</li>
            </ul>

            <div class="lesson-tip">
              💡 हळूहळू Practice करा. स्क्रीनवर जोरात दाबण्याची गरज नाही.
            </div>
          </div>
        `
      }
    },


    {
      title: {
        en: "3. Settings & Personalization",
        hi: "3. सेटिंग्स और पर्सनलाइजेशन",
        mr: "3. सेटिंग्ज आणि पर्सनलायझेशन"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">⚙️</div>

            <h3>Useful Phone Settings</h3>

            <ul>
              <li>☀️ Adjust screen brightness.</li>
              <li>🔊 Change ringtone and volume.</li>
              <li>📶 Turn Wi-Fi on or off.</li>
              <li>📡 Turn mobile data on or off.</li>
              <li>🔔 Control notifications.</li>
              <li>🔒 Set a screen lock.</li>
              <li>🌐 Change language.</li>
            </ul>

            <div class="lesson-tip">
              🔐 Always use a screen lock such as PIN, password or fingerprint when available.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">⚙️</div>

            <h3>जरूरी फोन सेटिंग्स</h3>

            <ul>
              <li>☀️ स्क्रीन की brightness बदलें।</li>
              <li>🔊 Ringtone और volume बदलें।</li>
              <li>📶 Wi-Fi चालू या बंद करें।</li>
              <li>📡 Mobile data चालू या बंद करें।</li>
              <li>🔔 Notifications को control करें।</li>
              <li>🔒 Screen lock लगाएं।</li>
              <li>🌐 Language बदलें।</li>
            </ul>

            <div class="lesson-tip">
              🔐 हमेशा PIN, password या fingerprint जैसा screen lock इस्तेमाल करें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">⚙️</div>

            <h3>उपयुक्त फोन सेटिंग्ज</h3>

            <ul>
              <li>☀️ स्क्रीनची brightness बदला.</li>
              <li>🔊 Ringtone आणि volume बदला.</li>
              <li>📶 Wi-Fi सुरू किंवा बंद करा.</li>
              <li>📡 Mobile data सुरू किंवा बंद करा.</li>
              <li>🔔 Notifications नियंत्रित करा.</li>
              <li>🔒 Screen lock लावा.</li>
              <li>🌐 Language बदला.</li>
            </ul>

            <div class="lesson-tip">
              🔐 PIN, password किंवा fingerprint सारखा screen lock नेहमी वापरा.
            </div>
          </div>
        `
      }
    },


    {
      title: {
        en: "4. Calls & Contacts",
        hi: "4. कॉल और कॉन्टैक्ट",
        mr: "4. कॉल आणि कॉन्टॅक्ट"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">📞</div>

            <h3>Make a Call</h3>

            <ol>
              <li>Open the Phone app.</li>
              <li>Enter or select a number.</li>
              <li>Tap the Call button.</li>
              <li>Use the End Call button when finished.</li>
            </ol>

            <h3>Save a Contact</h3>

            <ol>
              <li>Open Contacts.</li>
              <li>Tap Add Contact.</li>
              <li>Enter the person's name and number.</li>
              <li>Tap Save.</li>
            </ol>

            <div class="lesson-tip">
              🚨 Save important family and emergency contacts.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">📞</div>

            <h3>कॉल करें</h3>

            <ol>
              <li>Phone app खोलें।</li>
              <li>नंबर डालें या Contact चुनें।</li>
              <li>Call button दबाएं।</li>
              <li>कॉल खत्म करने के लिए End Call दबाएं।</li>
            </ol>

            <h3>Contact सेव करें</h3>

            <ol>
              <li>Contacts खोलें।</li>
              <li>Add Contact दबाएं।</li>
              <li>नाम और नंबर डालें।</li>
              <li>Save दबाएं।</li>
            </ol>

            <div class="lesson-tip">
              🚨 परिवार और जरूरी emergency contacts सेव करके रखें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">📞</div>

            <h3>कॉल करा</h3>

            <ol>
              <li>Phone app उघडा.</li>
              <li>नंबर टाका किंवा Contact निवडा.</li>
              <li>Call button दाबा.</li>
              <li>कॉल संपवण्यासाठी End Call दाबा.</li>
            </ol>

            <h3>Contact सेव करा</h3>

            <ol>
              <li>Contacts उघडा.</li>
              <li>Add Contact निवडा.</li>
              <li>नाव आणि नंबर टाका.</li>
              <li>Save दाबा.</li>
            </ol>

            <div class="lesson-tip">
              🚨 कुटुंबातील आणि आवश्यक emergency contacts सेव करून ठेवा.
            </div>
          </div>
        `
      }
    },


    {
      title: {
        en: "5. Camera, Photos & Videos",
        hi: "5. कैमरा, फोटो और वीडियो",
        mr: "5. कॅमेरा, फोटो आणि व्हिडिओ"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">📷</div>

            <h3>Take a Photo</h3>

            <ol>
              <li>Open Camera.</li>
              <li>Point the camera at the subject.</li>
              <li>Tap the shutter button.</li>
              <li>Open Gallery or Photos to view it.</li>
            </ol>

            <h3>Basic Safety</h3>

            <ul>
              <li>☁️ Back up important photos when possible.</li>
              <li>🔒 Avoid sharing private photos publicly.</li>
              <li>📱 Keep enough storage space on the phone.</li>
            </ul>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">📷</div>

            <h3>फोटो लें</h3>

            <ol>
              <li>Camera खोलें।</li>
              <li>कैमरा सामने की चीज की तरफ रखें।</li>
              <li>Shutter button दबाएं।</li>
              <li>Gallery या Photos में फोटो देखें।</li>
            </ol>

            <h3>जरूरी सावधानी</h3>

            <ul>
              <li>☁️ जरूरी फोटो का backup रखें।</li>
              <li>🔒 Private photos को public जगह पर share न करें।</li>
              <li>📱 फोन में पर्याप्त storage रखें।</li>
            </ul>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">📷</div>

            <h3>फोटो काढा</h3>

            <ol>
              <li>Camera उघडा.</li>
              <li>कॅमेरा वस्तूकडे ठेवा.</li>
              <li>Shutter button दाबा.</li>
              <li>Gallery किंवा Photos मध्ये फोटो पाहा.</li>
            </ol>

            <h3>महत्त्वाची काळजी</h3>

            <ul>
              <li>☁️ महत्त्वाच्या फोटोचा backup ठेवा.</li>
              <li>🔒 Private photos सार्वजनिक ठिकाणी share करू नका.</li>
              <li>📱 फोनमध्ये पुरेशी storage ठेवा.</li>
            </ul>
          </div>
        `
      }
    },


    {
      title: {
        en: "6. Apps & App Permissions",
        hi: "6. Apps और Permissions",
        mr: "6. Apps आणि Permissions"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">📲</div>

            <h3>What are Apps?</h3>

            <p>
              Apps are programs that provide different services such as
              messaging, banking, shopping, maps and entertainment.
            </p>

            <h3>Before Installing an App</h3>

            <ul>
              <li>🏪 Prefer the official app store.</li>
              <li>⭐ Check the app name and developer.</li>
              <li>🔐 Review permissions requested by the app.</li>
              <li>🔄 Keep apps updated.</li>
              <li>🗑️ Remove apps you no longer use.</li>
            </ul>

            <div class="lesson-tip">
              ⚠️ Do not install unknown APK files just because someone sends you a link.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">📲</div>

            <h3>Apps क्या हैं?</h3>

            <p>
              Apps ऐसे programs हैं जिनसे messaging, banking, shopping,
              maps और entertainment जैसी सुविधाएं मिलती हैं।
            </p>

            <h3>App Install करने से पहले</h3>

            <ul>
              <li>🏪 Official app store का उपयोग करें।</li>
              <li>⭐ App का नाम और developer जांचें।</li>
              <li>🔐 App कौन-कौन सी permissions मांग रहा है देखें।</li>
              <li>🔄 Apps को update रखें।</li>
              <li>🗑️ इस्तेमाल न होने वाले Apps हटाएं।</li>
            </ul>

            <div class="lesson-tip">
              ⚠️ किसी के भेजे हुए unknown APK link से App install न करें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">📲</div>

            <h3>Apps म्हणजे काय?</h3>

            <p>
              Apps म्हणजे विविध सेवा देणारे programs आहेत.
              त्याद्वारे messaging, banking, shopping, maps आणि entertainment वापरता येते.
            </p>

            <h3>App Install करण्यापूर्वी</h3>

            <ul>
              <li>🏪 Official app store वापरा.</li>
              <li>⭐ App चे नाव आणि developer तपासा.</li>
              <li>🔐 App कोणत्या permissions मागत आहे ते पहा.</li>
              <li>🔄 Apps update ठेवा.</li>
              <li>🗑️ वापरात नसलेले Apps हटवा.</li>
            </ul>

            <div class="lesson-tip">
              ⚠️ कोणीतरी पाठवलेल्या unknown APK link वरून App install करू नका.
            </div>
          </div>
        `
      }
    },


    {
      title: {
        en: "7. Battery & Charging Safety",
        hi: "7. बैटरी और चार्जिंग सुरक्षा",
        mr: "7. बॅटरी आणि चार्जिंग सुरक्षा"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">🔋</div>

            <h3>Charge Your Phone Safely</h3>

            <ul>
              <li>🔌 Use a suitable charger and cable.</li>
              <li>💧 Keep electrical equipment away from water.</li>
              <li>🔥 Do not use damaged cables.</li>
              <li>🌡️ If the phone becomes unusually hot, unplug it.</li>
              <li>🛏️ Avoid covering a phone while it is charging.</li>
            </ul>

            <h3>Battery Saving</h3>

            <ul>
              <li>☀️ Reduce unnecessary screen brightness.</li>
              <li>📶 Turn off connections you do not need.</li>
              <li>🔋 Use Battery Saver when needed.</li>
            </ul>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">🔋</div>

            <h3>फोन को सुरक्षित चार्ज करें</h3>

            <ul>
              <li>🔌 सही charger और cable इस्तेमाल करें।</li>
              <li>💧 Electrical equipment को पानी से दूर रखें।</li>
              <li>🔥 खराब cable इस्तेमाल न करें।</li>
              <li>🌡️ फोन बहुत गर्म हो तो unplug करें।</li>
              <li>🛏️ Charging के दौरान फोन को ढककर न रखें।</li>
            </ul>

            <h3>Battery बचाने के तरीके</h3>

            <ul>
              <li>☀️ जरूरत से ज्यादा brightness न रखें।</li>
              <li>📶 जरूरी न होने पर connections बंद करें।</li>
              <li>🔋 जरूरत पड़ने पर Battery Saver इस्तेमाल करें।</li>
            </ul>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">🔋</div>

            <h3>फोन सुरक्षितपणे चार्ज करा</h3>

            <ul>
              <li>🔌 योग्य charger आणि cable वापरा.</li>
              <li>💧 Electrical equipment पाण्यापासून दूर ठेवा.</li>
              <li>🔥 खराब cable वापरू नका.</li>
              <li>🌡️ फोन खूप गरम झाल्यास unplug करा.</li>
              <li>🛏️ Charging करताना फोन झाकून ठेवू नका.</li>
            </ul>

            <h3>Battery वाचवण्याचे उपाय</h3>

            <ul>
              <li>☀️ गरजेपेक्षा जास्त brightness ठेवू नका.</li>
              <li>📶 गरज नसलेले connections बंद करा.</li>
              <li>🔋 गरज असल्यास Battery Saver वापरा.</li>
            </ul>
          </div>
        `
      }
    },


    {
      title: {
        en: "8. Smartphone Safety Checklist",
        hi: "8. स्मार्टफोन सुरक्षा चेकलिस्ट",
        mr: "8. स्मार्टफोन सुरक्षा चेकलिस्ट"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">🛡️</div>

            <h3>Before You Finish Module 01</h3>

            <p>Make sure you understand these basic safety habits:</p>

            <ul>
              <li>🔒 I use a screen lock.</li>
              <li>📲 I install apps from trusted sources.</li>
              <li>🔐 I check app permissions.</li>
              <li>🔄 I keep my phone and apps updated.</li>
              <li>📸 I protect private photos and information.</li>
              <li>🔌 I use safe charging equipment.</li>
              <li>🚫 I do not click unknown links or install unknown APKs.</li>
              <li>🆘 I ask a trusted person when I am unsure.</li>
            </ul>

            <div class="lesson-tip">
              🎉 <strong>Module 01 Complete!</strong><br>
              You now know the important basics of using a smartphone safely.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">🛡️</div>

            <h3>Module 01 खत्म करने से पहले</h3>

            <p>इन जरूरी safety habits को याद रखें:</p>

            <ul>
              <li>🔒 मैं screen lock इस्तेमाल करता/करती हूं।</li>
              <li>📲 मैं trusted sources से Apps install करता/करती हूं।</li>
              <li>🔐 मैं App permissions check करता/करती हूं।</li>
              <li>🔄 मैं phone और Apps को updated रखता/रखती हूं।</li>
              <li>📸 मैं private photos और information की सुरक्षा करता/करती हूं।</li>
              <li>🔌 मैं safe charging equipment इस्तेमाल करता/करती हूं।</li>
              <li>🚫 मैं unknown links या APKs पर भरोसा नहीं करता/करती हूं।</li>
              <li>🆘 परेशानी होने पर trusted person से मदद लेता/लेती हूं।</li>
            </ul>

            <div class="lesson-tip">
              🎉 <strong>Module 01 Complete!</strong><br>
              अब आपको smartphone इस्तेमाल करने की जरूरी basic बातें पता हैं।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">🛡️</div>

            <h3>Module 01 पूर्ण करण्यापूर्वी</h3>

            <p>या महत्त्वाच्या safety habits लक्षात ठेवा:</p>

            <ul>
              <li>🔒 मी screen lock वापरतो/वापरते.</li>
              <li>📲 मी trusted sources मधून Apps install करतो/करते.</li>
              <li>🔐 मी App permissions तपासतो/तपासते.</li>
              <li>🔄 मी phone आणि Apps updated ठेवतो/ठेवते.</li>
              <li>📸 मी private photos आणि information सुरक्षित ठेवतो/ठेवते.</li>
              <li>🔌 मी सुरक्षित charging equipment वापरतो/वापरते.</li>
              <li>🚫 मी unknown links किंवा APKs वर विश्वास ठेवत नाही.</li>
              <li>🆘 अडचण असल्यास trusted person ची मदत घेतो/घेते.</li>
            </ul>

            <div class="lesson-tip">
              🎉 <strong>Module 01 Complete!</strong><br>
              आता तुम्हाला smartphone वापरण्याच्या महत्त्वाच्या basic गोष्टी माहित आहेत.
            </div>
          </div>
        `
      }
    }

  ]
},
  whatsapp: {
  icon: "💬",
  number: "Module 02",

  title: {
    en: "WhatsApp",
    hi: "व्हाट्सऐप",
    mr: "व्हॉट्सॲप"
  },

  pages: [

    {
      title: {
        en: "1. WhatsApp Basics",
        hi: "1. व्हाट्सऐप की मूल बातें",
        mr: "1. व्हॉट्सॲपच्या मूलभूत माहिती"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">💬</div>

            <h3>What is WhatsApp?</h3>

            <p>
              WhatsApp is a messaging application used to communicate
              with family, friends and other people using the internet.
            </p>

            <h3>What can you do with WhatsApp?</h3>

            <ul>
              <li>💬 Send text messages.</li>
              <li>📷 Share photos and videos.</li>
              <li>📄 Send documents.</li>
              <li>🎤 Send voice messages.</li>
              <li>📞 Make voice calls.</li>
              <li>📹 Make video calls.</li>
              <li>👥 Communicate in groups.</li>
            </ul>

            <div class="lesson-tip">
              💡 <strong>Remember:</strong> WhatsApp uses an internet connection
              such as mobile data or Wi-Fi.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">💬</div>

            <h3>WhatsApp क्या है?</h3>

            <p>
              WhatsApp एक messaging application है जिससे आप internet की मदद से
              family, friends और दूसरे लोगों से बात कर सकते हैं।
            </p>

            <h3>WhatsApp से क्या कर सकते हैं?</h3>

            <ul>
              <li>💬 Text messages भेज सकते हैं।</li>
              <li>📷 Photos और videos शेयर कर सकते हैं।</li>
              <li>📄 Documents भेज सकते हैं।</li>
              <li>🎤 Voice messages भेज सकते हैं।</li>
              <li>📞 Voice calls कर सकते हैं।</li>
              <li>📹 Video calls कर सकते हैं।</li>
              <li>👥 Groups में बात कर सकते हैं।</li>
            </ul>

            <div class="lesson-tip">
              💡 <strong>याद रखें:</strong> WhatsApp इस्तेमाल करने के लिए
              mobile data या Wi-Fi जैसे internet connection की जरूरत होती है।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">💬</div>

            <h3>WhatsApp म्हणजे काय?</h3>

            <p>
              WhatsApp हे messaging application आहे ज्याद्वारे internet च्या
              मदतीने family, friends आणि इतर लोकांशी संवाद साधता येतो.
            </p>

            <h3>WhatsApp द्वारे काय करता येते?</h3>

            <ul>
              <li>💬 Text messages पाठवता येतात.</li>
              <li>📷 Photos आणि videos शेअर करता येतात.</li>
              <li>📄 Documents पाठवता येतात.</li>
              <li>🎤 Voice messages पाठवता येतात.</li>
              <li>📞 Voice calls करता येतात.</li>
              <li>📹 Video calls करता येतात.</li>
              <li>👥 Groups मध्ये संवाद साधता येतो.</li>
            </ul>

            <div class="lesson-tip">
              💡 <strong>लक्षात ठेवा:</strong> WhatsApp वापरण्यासाठी
              mobile data किंवा Wi-Fi सारख्या internet connection ची गरज असते.
            </div>
          </div>
        `
      }
    },

    {
      title: {
        en: "2. Contacts & New Chat",
        hi: "2. कॉन्टैक्ट और नई चैट",
        mr: "2. कॉन्टॅक्ट आणि नवीन चॅट"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">👤</div>

            <h3>Start a New Chat</h3>

            <ol>
              <li>Open WhatsApp.</li>
              <li>Tap the New Chat button.</li>
              <li>Select a contact.</li>
              <li>Type your message.</li>
              <li>Tap Send.</li>
            </ol>

            <h3>Before Messaging</h3>

            <ul>
              <li>👤 Check that you selected the correct contact.</li>
              <li>🔢 Make sure the phone number is correct.</li>
              <li>⚠️ Be careful when messaging unknown numbers.</li>
            </ul>

            <div class="lesson-tip">
              💡 Always check the person's name before sending personal information.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">👤</div>

            <h3>नई Chat शुरू करें</h3>

            <ol>
              <li>WhatsApp खोलें।</li>
              <li>New Chat button दबाएं।</li>
              <li>Contact चुनें।</li>
              <li>अपना message लिखें।</li>
              <li>Send दबाएं।</li>
            </ol>

            <h3>Message भेजने से पहले</h3>

            <ul>
              <li>👤 सही contact चुना है या नहीं देखें।</li>
              <li>🔢 Phone number सही है या नहीं जांचें।</li>
              <li>⚠️ Unknown numbers से सावधान रहें।</li>
            </ul>

            <div class="lesson-tip">
              💡 Personal information भेजने से पहले व्यक्ति का नाम जरूर जांचें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">👤</div>

            <h3>नवीन Chat सुरू करा</h3>

            <ol>
              <li>WhatsApp उघडा.</li>
              <li>New Chat button दाबा.</li>
              <li>Contact निवडा.</li>
              <li>तुमचा message लिहा.</li>
              <li>Send दाबा.</li>
            </ol>

            <h3>Message पाठवण्यापूर्वी</h3>

            <ul>
              <li>👤 योग्य contact निवडला आहे का ते तपासा.</li>
              <li>🔢 Phone number योग्य आहे का ते तपासा.</li>
              <li>⚠️ Unknown numbers पासून सावध रहा.</li>
            </ul>

            <div class="lesson-tip">
              💡 Personal information पाठवण्यापूर्वी व्यक्तीचे नाव तपासा.
            </div>
          </div>
        `
      }
    },

    {
      title: {
        en: "3. Sending Messages & Voice Notes",
        hi: "3. मैसेज और Voice Note भेजना",
        mr: "3. मेसेज आणि Voice Note पाठवणे"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">⌨️</div>

            <h3>Send a Text Message</h3>

            <ol>
              <li>Open a chat.</li>
              <li>Tap the message box.</li>
              <li>Type your message.</li>
              <li>Tap the Send button.</li>
            </ol>

            <h3>Send a Voice Message</h3>

            <ol>
              <li>Open a chat.</li>
              <li>Press and hold the microphone button.</li>
              <li>Speak clearly.</li>
              <li>Release the button to send.</li>
            </ol>

            <div class="lesson-tip">
              🎤 Speak clearly and avoid sharing sensitive information in voice messages.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">⌨️</div>

            <h3>Text Message भेजें</h3>

            <ol>
              <li>Chat खोलें।</li>
              <li>Message box पर tap करें।</li>
              <li>अपना message लिखें।</li>
              <li>Send button दबाएं।</li>
            </ol>

            <h3>Voice Message भेजें</h3>

            <ol>
              <li>Chat खोलें।</li>
              <li>Microphone button को दबाकर रखें।</li>
              <li>साफ आवाज में बोलें।</li>
              <li>Button छोड़ने पर message भेजा जाएगा।</li>
            </ol>

            <div class="lesson-tip">
              🎤 साफ बोलें और voice message में sensitive information शेयर न करें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">⌨️</div>

            <h3>Text Message पाठवा</h3>

            <ol>
              <li>Chat उघडा.</li>
              <li>Message box वर tap करा.</li>
              <li>तुमचा message लिहा.</li>
              <li>Send button दाबा.</li>
            </ol>

            <h3>Voice Message पाठवा</h3>

            <ol>
              <li>Chat उघडा.</li>
              <li>Microphone button दाबून ठेवा.</li>
              <li>स्पष्ट आवाजात बोला.</li>
              <li>Button सोडल्यावर message पाठवला जाईल.</li>
            </ol>

            <div class="lesson-tip">
              🎤 स्पष्ट बोला आणि voice message मध्ये sensitive information शेअर करू नका.
            </div>
          </div>
        `
      }
    },

    {
      title: {
        en: "4. Photos, Videos & Documents",
        hi: "4. फोटो, वीडियो और Documents",
        mr: "4. फोटो, व्हिडिओ आणि Documents"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">📷</div>

            <h3>Share Photos or Videos</h3>

            <ol>
              <li>Open a chat.</li>
              <li>Tap the attachment or camera option.</li>
              <li>Select a photo or video.</li>
              <li>Check the selected file.</li>
              <li>Tap Send.</li>
            </ol>

            <h3>Share a Document</h3>

            <ol>
              <li>Open the chat.</li>
              <li>Choose the document option.</li>
              <li>Select the required file.</li>
              <li>Check the file name.</li>
              <li>Tap Send.</li>
            </ol>

            <div class="lesson-tip">
              📄 Check the recipient carefully before sending private documents.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">📷</div>

            <h3>Photo या Video शेयर करें</h3>

            <ol>
              <li>Chat खोलें।</li>
              <li>Attachment या camera option दबाएं।</li>
              <li>Photo या video चुनें।</li>
              <li>Selected file को check करें।</li>
              <li>Send दबाएं।</li>
            </ol>

            <h3>Document भेजें</h3>

            <ol>
              <li>Chat खोलें।</li>
              <li>Document option चुनें।</li>
              <li>जरूरी file चुनें।</li>
              <li>File का नाम check करें।</li>
              <li>Send दबाएं।</li>
            </ol>

            <div class="lesson-tip">
              📄 Private document भेजने से पहले recipient को ध्यान से check करें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">📷</div>

            <h3>Photo किंवा Video शेअर करा</h3>

            <ol>
              <li>Chat उघडा.</li>
              <li>Attachment किंवा camera option निवडा.</li>
              <li>Photo किंवा video निवडा.</li>
              <li>Selected file तपासा.</li>
              <li>Send दाबा.</li>
            </ol>

            <h3>Document पाठवा</h3>

            <ol>
              <li>Chat उघडा.</li>
              <li>Document option निवडा.</li>
              <li>आवश्यक file निवडा.</li>
              <li>File चे नाव तपासा.</li>
              <li>Send दाबा.</li>
            </ol>

            <div class="lesson-tip">
              📄 Private document पाठवण्यापूर्वी recipient काळजीपूर्वक तपासा.
            </div>
          </div>
        `
      }
    },

    {
      title: {
        en: "5. Voice & Video Calls",
        hi: "5. Voice और Video Calls",
        mr: "5. Voice आणि Video Calls"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">📞</div>

            <h3>Make a Voice Call</h3>

            <ol>
              <li>Open the person's WhatsApp chat.</li>
              <li>Tap the voice call icon.</li>
              <li>Wait for the person to answer.</li>
              <li>Tap End Call when finished.</li>
            </ol>

            <h3>Make a Video Call</h3>

            <ol>
              <li>Open the contact's chat.</li>
              <li>Tap the video call icon.</li>
              <li>Allow camera or microphone access when needed.</li>
              <li>Tap End Call when finished.</li>
            </ol>

            <div class="lesson-tip">
              📶 Calls need a suitable internet connection.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">📞</div>

            <h3>Voice Call करें</h3>

            <ol>
              <li>व्यक्ति की WhatsApp chat खोलें।</li>
              <li>Voice call icon दबाएं।</li>
              <li>व्यक्ति के answer करने का इंतजार करें।</li>
              <li>बात खत्म होने पर End Call दबाएं।</li>
            </ol>

            <h3>Video Call करें</h3>

            <ol>
              <li>Contact की chat खोलें।</li>
              <li>Video call icon दबाएं।</li>
              <li>जरूरत होने पर camera या microphone permission दें।</li>
              <li>बात खत्म होने पर End Call दबाएं।</li>
            </ol>

            <div class="lesson-tip">
              📶 Calls के लिए सही internet connection जरूरी है।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">📞</div>

            <h3>Voice Call करा</h3>

            <ol>
              <li>व्यक्तीची WhatsApp chat उघडा.</li>
              <li>Voice call icon दाबा.</li>
              <li>समोरची व्यक्ती answer करेपर थांबा.</li>
              <li>बोलणे झाल्यावर End Call दाबा.</li>
            </ol>

            <h3>Video Call करा</h3>

            <ol>
              <li>Contact ची chat उघडा.</li>
              <li>Video call icon दाबा.</li>
              <li>गरज असल्यास camera किंवा microphone permission द्या.</li>
              <li>बोलणे झाल्यावर End Call दाबा.</li>
            </ol>

            <div class="lesson-tip">
              📶 Calls साठी योग्य internet connection आवश्यक आहे.
            </div>
          </div>
        `
      }
    },

    {
      title: {
        en: "6. Groups & Useful Features",
        hi: "6. Groups और उपयोगी Features",
        mr: "6. Groups आणि उपयुक्त Features"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">👥</div>

            <h3>WhatsApp Groups</h3>

            <p>
              Groups allow multiple people to communicate in one chat.
            </p>

            <h3>Group Safety</h3>

            <ul>
              <li>👥 Join only groups you trust.</li>
              <li>🔕 Mute groups when notifications are too frequent.</li>
              <li>🚫 Leave groups you do not need.</li>
              <li>🔗 Do not open suspicious links shared in groups.</li>
              <li>📢 Do not forward information before checking it.</li>
            </ul>

            <h3>Useful Features</h3>

            <ul>
              <li>⭐ Star important messages.</li>
              <li>🔍 Search messages.</li>
              <li>📌 Pin important chats when available.</li>
            </ul>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">👥</div>

            <h3>WhatsApp Groups</h3>

            <p>
              Groups में कई लोग एक ही chat में बातचीत कर सकते हैं।
            </p>

            <h3>Group Safety</h3>

            <ul>
              <li>👥 केवल trusted groups में शामिल हों।</li>
              <li>🔕 बहुत ज्यादा notifications हों तो group mute करें।</li>
              <li>🚫 जरूरत न होने पर group छोड़ दें।</li>
              <li>🔗 Groups में आए suspicious links न खोलें।</li>
              <li>📢 किसी information को check किए बिना forward न करें।</li>
            </ul>

            <h3>Useful Features</h3>

            <ul>
              <li>⭐ Important messages को star करें।</li>
              <li>🔍 Messages search करें।</li>
              <li>📌 जरूरत होने पर important chats pin करें।</li>
            </ul>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">👥</div>

            <h3>WhatsApp Groups</h3>

            <p>
              Groups मध्ये अनेक लोक एकाच chat मध्ये संवाद साधू शकतात.
            </p>

            <h3>Group Safety</h3>

            <ul>
              <li>👥 फक्त trusted groups मध्ये सहभागी व्हा.</li>
              <li>🔕 खूप notifications येत असल्यास group mute करा.</li>
              <li>🚫 गरज नसलेले groups सोडा.</li>
              <li>🔗 Groups मधील suspicious links उघडू नका.</li>
              <li>📢 माहिती तपासल्याशिवाय forward करू नका.</li>
            </ul>

            <h3>Useful Features</h3>

            <ul>
              <li>⭐ Important messages star करा.</li>
              <li>🔍 Messages search करा.</li>
              <li>📌 गरज असल्यास important chats pin करा.</li>
            </ul>
          </div>
        `
      }
    },

    {
      title: {
        en: "7. Privacy, Security & Scams",
        hi: "7. Privacy, Security और Scams",
        mr: "7. Privacy, Security आणि Scams"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">🔒</div>

            <h3>Protect Your WhatsApp Account</h3>

            <ul>
              <li>🔐 Never share your OTP or verification code.</li>
              <li>🔑 Enable two-step verification when available.</li>
              <li>👤 Review privacy settings.</li>
              <li>📱 Use a screen lock on your phone.</li>
              <li>🚫 Never share your account verification code with anyone.</li>
            </ul>

            <h3>Watch for Scams</h3>

            <ul>
              <li>💰 “You won a prize” messages.</li>
              <li>💼 Fake job offers.</li>
              <li>🏦 Fake bank messages.</li>
              <li>🎁 Fake gift or lottery messages.</li>
              <li>🚨 Messages asking for urgent money.</li>
            </ul>

            <div class="lesson-tip">
              🛑 <strong>Stop → Check → Ask.</strong>
              If a message makes you feel rushed, verify it before taking action.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">🔒</div>

            <h3>अपने WhatsApp Account को सुरक्षित रखें</h3>

            <ul>
              <li>🔐 OTP या verification code कभी शेयर न करें।</li>
              <li>🔑 उपलब्ध होने पर two-step verification चालू करें।</li>
              <li>👤 Privacy settings को check करें।</li>
              <li>📱 फोन में screen lock रखें।</li>
              <li>🚫 Account verification code किसी को न दें।</li>
            </ul>

            <h3>Scams से सावधान रहें</h3>

            <ul>
              <li>💰 “आपने prize जीता है” जैसे messages।</li>
              <li>💼 Fake job offers।</li>
              <li>🏦 Fake bank messages।</li>
              <li>🎁 Fake gift या lottery messages।</li>
              <li>🚨 तुरंत पैसे मांगने वाले messages।</li>
            </ul>

            <div class="lesson-tip">
              🛑 <strong>रुकें → जांचें → पूछें।</strong>
              कोई message आपको जल्दी करने के लिए दबाव डाले तो पहले verify करें।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">🔒</div>

            <h3>तुमचे WhatsApp Account सुरक्षित ठेवा</h3>

            <ul>
              <li>🔐 OTP किंवा verification code कधीही शेअर करू नका.</li>
              <li>🔑 उपलब्ध असल्यास two-step verification सुरू करा.</li>
              <li>👤 Privacy settings तपासा.</li>
              <li>📱 फोनमध्ये screen lock ठेवा.</li>
              <li>🚫 Account verification code कोणालाही देऊ नका.</li>
            </ul>

            <h3>Scams पासून सावध रहा</h3>

            <ul>
              <li>💰 “तुम्ही prize जिंकला आहे” असे messages.</li>
              <li>💼 Fake job offers.</li>
              <li>🏦 Fake bank messages.</li>
              <li>🎁 Fake gift किंवा lottery messages.</li>
              <li>🚨 तातडीने पैसे मागणारे messages.</li>
            </ul>

            <div class="lesson-tip">
              🛑 <strong>थांबा → तपासा → विचारा.</strong>
              Message तुम्हाला घाई करण्यास सांगत असल्यास आधी verify करा.
            </div>
          </div>
        `
      }
    },

    {
      title: {
        en: "8. WhatsApp Safety Checklist",
        hi: "8. WhatsApp Safety Checklist",
        mr: "8. WhatsApp Safety Checklist"
      },

      content: {
        en: `
          <div class="lesson-card">
            <div class="lesson-icon">🛡️</div>

            <h3>Before You Finish Module 02</h3>

            <ul>
              <li>💬 I can send a basic WhatsApp message.</li>
              <li>📷 I know how to share photos and videos.</li>
              <li>📄 I understand how to send documents safely.</li>
              <li>📞 I know how voice and video calls work.</li>
              <li>👥 I can use WhatsApp groups safely.</li>
              <li>🔐 I never share OTPs or verification codes.</li>
              <li>🚨 I can identify common suspicious messages.</li>
              <li>🛑 I verify urgent requests before taking action.</li>
            </ul>

            <div class="lesson-tip">
              🎉 <strong>Module 02 Complete!</strong><br>
              You now know the important basics of using WhatsApp safely.
            </div>
          </div>
        `,

        hi: `
          <div class="lesson-card">
            <div class="lesson-icon">🛡️</div>

            <h3>Module 02 खत्म करने से पहले</h3>

            <ul>
              <li>💬 मैं basic WhatsApp message भेज सकता/सकती हूं।</li>
              <li>📷 मुझे photos और videos share करना आता है।</li>
              <li>📄 मुझे documents safely भेजने की जानकारी है।</li>
              <li>📞 मुझे voice और video calls की जानकारी है।</li>
              <li>👥 मैं WhatsApp groups safely use कर सकता/सकती हूं।</li>
              <li>🔐 मैं OTP या verification code शेयर नहीं करता/करती हूं।</li>
              <li>🚨 मैं suspicious messages पहचान सकता/सकती हूं।</li>
              <li>🛑 मैं urgent requests पर action लेने से पहले verify करता/करती हूं।</li>
            </ul>

            <div class="lesson-tip">
              🎉 <strong>Module 02 Complete!</strong><br>
              अब आपको WhatsApp safely इस्तेमाल करने की जरूरी बातें पता हैं।
            </div>
          </div>
        `,

        mr: `
          <div class="lesson-card">
            <div class="lesson-icon">🛡️</div>

            <h3>Module 02 पूर्ण करण्यापूर्वी</h3>

            <ul>
              <li>💬 मला basic WhatsApp message पाठवता येतो.</li>
              <li>📷 मला photos आणि videos share करता येतात.</li>
              <li>📄 मला documents सुरक्षितपणे पाठवण्याची माहिती आहे.</li>
              <li>📞 मला voice आणि video calls ची माहिती आहे.</li>
              <li>👥 मी WhatsApp groups सुरक्षितपणे वापरू शकतो/शकते.</li>
              <li>🔐 मी OTP किंवा verification code शेअर करत नाही.</li>
              <li>🚨 मी suspicious messages ओळखू शकतो/शकते.</li>
              <li>🛑 मी urgent requests वर action घेण्यापूर्वी verify करतो/करते.</li>
            </ul>

            <div class="lesson-tip">
              🎉 <strong>Module 02 Complete!</strong><br>
              आता तुम्हाला WhatsApp सुरक्षितपणे वापरण्याच्या महत्त्वाच्या गोष्टी माहित आहेत.
            </div>
          </div>
        `
      }
    }

  ]
},
    payments: {
    icon: "💳",
    number: "Module 03",

    title: {
      en: "Digital Payments & UPI",
      hi: "डिजिटल पेमेंट और UPI",
      mr: "डिजिटल पेमेंट आणि UPI"
    },

    pages: [
      {
        title: {
          en: "1. Understanding UPI",
          hi: "1. UPI को समझें",
          mr: "1. UPI समजून घ्या"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>What is UPI?</h3>
            <p>UPI (Unified Payments Interface) lets you transfer money between supported bank accounts using an authorised payment app.</p>
            <h3>What can you do?</h3>
            <ul>
              <li>Send money to another person.</li>
              <li>Pay a shop using a QR code.</li>
              <li>Check transaction status.</li>
              <li>View payment history.</li>
            </ul>
            <h3>Real-life example</h3>
            <p>You can pay a shopkeeper digitally instead of using cash.</p>
            <div class="lesson-tip">Never share your UPI PIN, OTP or screen-sharing access with anyone.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>UPI क्या है?</h3>
            <p>UPI की मदद से अधिकृत पेमेंट ऐप द्वारा बैंक खातों के बीच पैसे भेजे जा सकते हैं।</p>
            <h3>UPI से क्या कर सकते हैं?</h3>
            <ul>
              <li>दूसरे व्यक्ति को पैसे भेजना।</li>
              <li>QR कोड से दुकान पर भुगतान करना।</li>
              <li>पेमेंट का स्टेटस देखना।</li>
              <li>पुराने ट्रांजैक्शन देखना।</li>
            </ul>
            <h3>उदाहरण</h3>
            <p>दुकानदार को नकद की जगह डिजिटल पेमेंट कर सकते हैं।</p>
            <div class="lesson-tip">UPI PIN, OTP या स्क्रीन शेयरिंग किसी के साथ साझा न करें।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>UPI म्हणजे काय?</h3>
            <p>अधिकृत पेमेंट ॲपद्वारे बँक खात्यांमध्ये पैसे पाठवण्यासाठी UPI वापरता येते.</p>
            <h3>UPI चा उपयोग</h3>
            <ul>
              <li>दुसऱ्या व्यक्तीला पैसे पाठवणे.</li>
              <li>QR कोडने दुकानात पेमेंट करणे.</li>
              <li>पेमेंटची स्थिती तपासणे.</li>
              <li>जुने व्यवहार पाहणे.</li>
            </ul>
            <h3>उदाहरण</h3>
            <p>दुकानदाराला रोख रकमेऐवजी डिजिटल पेमेंट करता येते.</p>
            <div class="lesson-tip">UPI PIN, OTP किंवा स्क्रीन शेअरिंग कोणाशीही शेअर करू नका.</div>
          </div>`
        }
      },

      {
        title: {
          en: "2. Setting Up a UPI App",
          hi: "2. UPI ऐप सेट करना",
          mr: "2. UPI ॲप सेट करणे"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>Before you start</h3>
            <ol>
              <li>Use a compatible smartphone and your own mobile number linked to your bank account.</li>
              <li>Install a supported payment app from the official app store.</li>
              <li>Open the app and follow its verification instructions.</li>
              <li>Select your bank and follow the official account-linking process.</li>
              <li>Set a UPI PIN only through the authorised app flow, if required.</li>
            </ol>
            <h3>Important</h3>
            <p>Exact steps vary by app and bank. Never give your card PIN, OTP or banking password to someone offering to set it up for you.</p>
            <div class="lesson-tip">Ask your bank or a trusted family member for help if a screen seems unfamiliar.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>शुरू करने से पहले</h3>
            <ol>
              <li>अपना वही मोबाइल नंबर इस्तेमाल करें जो बैंक खाते से जुड़ा है।</li>
              <li>आधिकारिक ऐप स्टोर से समर्थित पेमेंट ऐप इंस्टॉल करें।</li>
              <li>ऐप खोलकर उसके verification निर्देशों का पालन करें।</li>
              <li>अपना बैंक चुनें और आधिकारिक प्रक्रिया से खाता जोड़ें।</li>
              <li>जरूरत होने पर अधिकृत ऐप में UPI PIN सेट करें।</li>
            </ol>
            <h3>महत्वपूर्ण</h3>
            <p>हर ऐप और बैंक की प्रक्रिया अलग हो सकती है। किसी व्यक्ति को OTP, कार्ड PIN या बैंकिंग पासवर्ड न बताएं।</p>
            <div class="lesson-tip">स्क्रीन समझ न आए तो बैंक या भरोसेमंद परिवार के सदस्य की मदद लें।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>सुरुवात करण्यापूर्वी</h3>
            <ol>
              <li>बँक खात्याशी जोडलेला स्वतःचा मोबाइल नंबर वापरा.</li>
              <li>अधिकृत ॲप स्टोअरमधून समर्थित पेमेंट ॲप इंस्टॉल करा.</li>
              <li>ॲप उघडून verification सूचना पाळा.</li>
              <li>बँक निवडून अधिकृत प्रक्रियेद्वारे खाते जोडा.</li>
              <li>गरज असल्यास अधिकृत ॲपमध्ये UPI PIN सेट करा.</li>
            </ol>
            <h3>महत्त्वाचे</h3>
            <p>प्रत्येक ॲप आणि बँकेची प्रक्रिया वेगळी असू शकते. OTP, कार्ड PIN किंवा बँकिंग पासवर्ड कोणालाही सांगू नका.</p>
            <div class="lesson-tip">स्क्रीन समजत नसेल तर बँकेची किंवा विश्वासू कुटुंबीयांची मदत घ्या.</div>
          </div>`
        }
      },

      {
        title: {
          en: "3. Sending Money",
          hi: "3. पैसे भेजना",
          mr: "3. पैसे पाठवणे"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>Steps to send money</h3>
            <ol>
              <li>Open your authorised UPI app.</li>
              <li>Select the send-money option.</li>
              <li>Choose the recipient or enter their verified UPI ID.</li>
              <li>Enter the amount.</li>
              <li>Check the recipient name and amount carefully.</li>
              <li>Confirm and enter your UPI PIN only if you intend to pay.</li>
              <li>Check the result and save the transaction reference.</li>
            </ol>
            <h3>Real-life example</h3>
            <p>Before sending ₹200, confirm the recipient and amount on the payment screen.</p>
            <div class="lesson-tip">UPI payments may be difficult to reverse. Never approve a payment you did not initiate.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>पैसे भेजने के चरण</h3>
            <ol>
              <li>अपना अधिकृत UPI ऐप खोलें।</li>
              <li>Send Money विकल्प चुनें।</li>
              <li>प्राप्तकर्ता चुनें या सत्यापित UPI ID डालें।</li>
              <li>रकम दर्ज करें।</li>
              <li>प्राप्तकर्ता का नाम और रकम जांचें।</li>
              <li>भुगतान करना हो तभी पुष्टि करके UPI PIN डालें।</li>
              <li>नतीजा देखें और ट्रांजैक्शन रेफरेंस सुरक्षित रखें।</li>
            </ol>
            <h3>उदाहरण</h3>
            <p>₹200 भेजने से पहले स्क्रीन पर नाम और रकम की पुष्टि करें।</p>
            <div class="lesson-tip">UPI पेमेंट वापस पाना मुश्किल हो सकता है। खुद शुरू न किया हुआ पेमेंट मंजूर न करें।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>पैसे पाठवण्याच्या पायऱ्या</h3>
            <ol>
              <li>अधिकृत UPI ॲप उघडा.</li>
              <li>Send Money पर्याय निवडा.</li>
              <li>प्राप्तकर्ता निवडा किंवा सत्यापित UPI ID टाका.</li>
              <li>रक्कम टाका.</li>
              <li>प्राप्तकर्त्याचे नाव आणि रक्कम तपासा.</li>
              <li>पेमेंट करायचे असल्यासच पुष्टी करून UPI PIN टाका.</li>
              <li>निकाल तपासा आणि व्यवहाराचा संदर्भ जतन करा.</li>
            </ol>
            <h3>उदाहरण</h3>
            <p>₹200 पाठवण्यापूर्वी नाव आणि रक्कम तपासा.</p>
            <div class="lesson-tip">UPI पेमेंट परत मिळवणे कठीण असू शकते. स्वतः सुरू न केलेले पेमेंट मंजूर करू नका.</div>
          </div>`
        }
      },

      {
        title: {
          en: "4. Receiving Money",
          hi: "4. पैसे प्राप्त करना",
          mr: "4. पैसे प्राप्त करणे"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>How to receive money safely</h3>
            <ol>
              <li>Share your verified UPI ID or use the app's receive option when appropriate.</li>
              <li>Check your payment app or bank account for the actual credit.</li>
              <li>Verify the amount and transaction status.</li>
              <li>Keep the transaction reference if needed.</li>
            </ol>
            <h3>Critical safety rule</h3>
            <p>You do NOT need to enter your UPI PIN to receive money. A QR code used to request payment does not guarantee that money has arrived.</p>
            <div class="lesson-tip">Do not trust a screenshot or SMS alone. Verify the credit inside your app or bank account.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>सुरक्षित तरीके से पैसे पाएं</h3>
            <ol>
              <li>अपनी सत्यापित UPI ID साझा करें या जरूरत के अनुसार ऐप का Receive विकल्प इस्तेमाल करें।</li>
              <li>वास्तविक क्रेडिट के लिए पेमेंट ऐप या बैंक खाता जांचें।</li>
              <li>रकम और ट्रांजैक्शन स्टेटस देखें।</li>
              <li>जरूरत होने पर ट्रांजैक्शन रेफरेंस सुरक्षित रखें।</li>
            </ol>
            <h3>बहुत जरूरी सुरक्षा नियम</h3>
            <p>पैसे प्राप्त करने के लिए UPI PIN डालने की जरूरत नहीं होती। पेमेंट मांगने वाला QR कोड यह साबित नहीं करता कि पैसे आ गए हैं।</p>
            <div class="lesson-tip">सिर्फ स्क्रीनशॉट या SMS पर भरोसा न करें। ऐप या बैंक खाते में क्रेडिट जांचें।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>सुरक्षितपणे पैसे मिळवा</h3>
            <ol>
              <li>तुमची सत्यापित UPI ID शेअर करा किंवा आवश्यकतेनुसार ॲपमधील Receive पर्याय वापरा.</li>
              <li>खात्यात पैसे जमा झाले आहेत का ते ॲप किंवा बँकेत तपासा.</li>
              <li>रक्कम आणि व्यवहाराची स्थिती तपासा.</li>
              <li>गरज असल्यास व्यवहाराचा संदर्भ जतन करा.</li>
            </ol>
            <h3>महत्त्वाचा सुरक्षा नियम</h3>
            <p>पैसे मिळवण्यासाठी UPI PIN टाकण्याची गरज नसते. पैसे मागण्यासाठी वापरलेला QR कोड म्हणजे पैसे जमा झाल्याचा पुरावा नाही.</p>
            <div class="lesson-tip">फक्त स्क्रीनशॉट किंवा SMS वर विश्वास ठेवू नका. ॲप किंवा बँकेत जमा रक्कम तपासा.</div>
          </div>`
        }
      },

      {
        title: {
          en: "5. Paying with a QR Code",
          hi: "5. QR कोड से भुगतान",
          mr: "5. QR कोडने पेमेंट"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>Scan and pay</h3>
            <ol>
              <li>Open your authorised payment app.</li>
              <li>Choose Scan QR.</li>
              <li>Scan the merchant's displayed QR code.</li>
              <li>Enter the amount if it is not already filled in.</li>
              <li>Check the merchant name and amount.</li>
              <li>Enter your UPI PIN only when you intend to make the payment.</li>
              <li>Check the transaction result.</li>
            </ol>
            <div class="lesson-tip">Scan only a QR code you trust. Never enter your UPI PIN just to receive money or claim a prize.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>स्कैन करके भुगतान करें</h3>
            <ol>
              <li>अधिकृत पेमेंट ऐप खोलें।</li>
              <li>Scan QR चुनें।</li>
              <li>दुकानदार का दिखाया हुआ QR कोड स्कैन करें।</li>
              <li>रकम पहले से न हो तो दर्ज करें।</li>
              <li>दुकानदार का नाम और रकम जांचें।</li>
              <li>भुगतान करना हो तभी UPI PIN डालें।</li>
              <li>ट्रांजैक्शन का नतीजा जांचें।</li>
            </ol>
            <div class="lesson-tip">केवल भरोसेमंद QR स्कैन करें। पैसे पाने या इनाम लेने के लिए UPI PIN न डालें।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>स्कॅन करून पेमेंट करा</h3>
            <ol>
              <li>अधिकृत पेमेंट ॲप उघडा.</li>
              <li>Scan QR निवडा.</li>
              <li>दुकानदाराचा QR कोड स्कॅन करा.</li>
              <li>रक्कम आधी भरलेली नसेल तर टाका.</li>
              <li>दुकानदाराचे नाव आणि रक्कम तपासा.</li>
              <li>पेमेंट करायचे असल्यासच UPI PIN टाका.</li>
              <li>व्यवहाराचा निकाल तपासा.</li>
            </ol>
            <div class="lesson-tip">फक्त विश्वासार्ह QR स्कॅन करा. पैसे मिळवण्यासाठी किंवा बक्षीस घेण्यासाठी UPI PIN टाकू नका.</div>
          </div>`
        }
      },

      {
        title: {
          en: "6. Transaction History & Failed Payments",
          hi: "6. ट्रांजैक्शन हिस्ट्री और असफल पेमेंट",
          mr: "6. व्यवहार इतिहास आणि अयशस्वी पेमेंट"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>Check a transaction</h3>
            <ol>
              <li>Open your payment app.</li>
              <li>Go to History or Transactions.</li>
              <li>Select the relevant transaction.</li>
              <li>Check amount, date, recipient and status.</li>
              <li>Save the reference number for a complaint.</li>
            </ol>
            <h3>If a payment fails</h3>
            <p>Do not immediately pay again. Check whether the amount was debited and whether the transaction is pending, failed or successful. Follow the app or bank's official support instructions.</p>
            <div class="lesson-tip">Never share your UPI PIN or OTP with anyone claiming to refund a failed payment.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>ट्रांजैक्शन जांचें</h3>
            <ol>
              <li>पेमेंट ऐप खोलें।</li>
              <li>History या Transactions पर जाएं।</li>
              <li>संबंधित ट्रांजैक्शन चुनें।</li>
              <li>रकम, तारीख, प्राप्तकर्ता और स्टेटस जांचें।</li>
              <li>शिकायत के लिए रेफरेंस नंबर सुरक्षित रखें।</li>
            </ol>
            <h3>पेमेंट फेल हो जाए तो</h3>
            <p>तुरंत दोबारा भुगतान न करें। जांचें कि रकम कटी है या नहीं और ट्रांजैक्शन Pending, Failed या Successful है। ऐप या बैंक के आधिकारिक निर्देशों का पालन करें।</p>
            <div class="lesson-tip">फेल पेमेंट का रिफंड देने के नाम पर मांगने वाले को UPI PIN या OTP न बताएं।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>व्यवहार तपासा</h3>
            <ol>
              <li>पेमेंट ॲप उघडा.</li>
              <li>History किंवा Transactions मध्ये जा.</li>
              <li>संबंधित व्यवहार निवडा.</li>
              <li>रक्कम, तारीख, प्राप्तकर्ता आणि स्थिती तपासा.</li>
              <li>तक्रारीसाठी संदर्भ क्रमांक जतन करा.</li>
            </ol>
            <h3>पेमेंट अयशस्वी झाल्यास</h3>
            <p>लगेच पुन्हा पेमेंट करू नका. पैसे खात्यातून वजा झाले का आणि व्यवहार Pending, Failed की Successful आहे ते तपासा. ॲप किंवा बँकेच्या अधिकृत सूचनांचे पालन करा.</p>
            <div class="lesson-tip">रिफंड देण्याच्या नावाखाली कोणी UPI PIN किंवा OTP मागितल्यास देऊ नका.</div>
          </div>`
        }
      },

      {
        title: {
          en: "7. UPI PIN & Payment Safety",
          hi: "7. UPI PIN और पेमेंट सुरक्षा",
          mr: "7. UPI PIN आणि पेमेंट सुरक्षितता"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>Protect your UPI PIN</h3>
            <ul>
              <li>Keep your PIN secret.</li>
              <li>Cover the screen when entering it in public.</li>
              <li>Check the recipient and amount before authorising payment.</li>
              <li>Never follow instructions from a stranger to approve a collect request.</li>
              <li>Use your bank's official app and support channels.</li>
            </ul>
            <h3>Remember</h3>
            <p>A UPI PIN authorises a payment or other banking action. Enter it only when you understand and intend to approve that action.</p>
            <div class="lesson-tip">If you suspect misuse, contact your bank through its official channel immediately.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>UPI PIN सुरक्षित रखें</h3>
            <ul>
              <li>अपना PIN गुप्त रखें।</li>
              <li>सार्वजनिक जगह पर PIN डालते समय स्क्रीन ढकें।</li>
              <li>पेमेंट मंजूर करने से पहले नाम और रकम जांचें।</li>
              <li>अनजान व्यक्ति के कहने पर Collect Request मंजूर न करें।</li>
              <li>बैंक के आधिकारिक ऐप और सहायता माध्यम इस्तेमाल करें।</li>
            </ul>
            <h3>याद रखें</h3>
            <p>UPI PIN से पेमेंट या अन्य बैंकिंग कार्रवाई मंजूर हो सकती है। इसे तभी डालें जब आपको कार्रवाई समझ में आए और आप उसे करना चाहते हों।</p>
            <div class="lesson-tip">गलत इस्तेमाल का शक हो तो तुरंत बैंक के आधिकारिक माध्यम से संपर्क करें।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>UPI PIN सुरक्षित ठेवा</h3>
            <ul>
              <li>तुमचा PIN गुप्त ठेवा.</li>
              <li>सार्वजनिक ठिकाणी PIN टाकताना स्क्रीन झाका.</li>
              <li>पेमेंट मंजूर करण्यापूर्वी नाव आणि रक्कम तपासा.</li>
              <li>अनोळखी व्यक्तीच्या सांगण्यावरून Collect Request मंजूर करू नका.</li>
              <li>बँकेचे अधिकृत ॲप आणि मदत सेवा वापरा.</li>
            </ul>
            <h3>लक्षात ठेवा</h3>
            <p>UPI PIN मुळे पेमेंट किंवा इतर बँकिंग कृती मंजूर होऊ शकते. कृती समजल्यावर आणि ती करायची असल्यासच PIN टाका.</p>
            <div class="lesson-tip">गैरवापराचा संशय असल्यास बँकेशी अधिकृत माध्यमातून त्वरित संपर्क साधा.</div>
          </div>`
        }
      },

      {
        title: {
          en: "8. UPI Scams & What to Do",
          hi: "8. UPI धोखाधड़ी और क्या करें",
          mr: "8. UPI फसवणूक आणि उपाय"
        },
        content: {
          en: `<div class="lesson-card">
            <h3>Common warning signs</h3>
            <ul>
              <li>A caller asks you to reveal an OTP or UPI PIN.</li>
              <li>Someone asks you to scan a QR code to receive money.</li>
              <li>A stranger asks you to install a screen-sharing app.</li>
              <li>You are pressured to pay an urgent fee or claim a prize.</li>
              <li>A fake customer-care number asks for confidential details.</li>
            </ul>
            <h3>If you suspect fraud</h3>
            <ol>
              <li>Stop the transaction and do not share more information.</li>
              <li>Contact your bank using its official number or app.</li>
              <li>Save messages and transaction references.</li>
              <li>In India, report financial cyber fraud promptly by calling 1930 and using the official cybercrime reporting portal.</li>
            </ol>
            <div class="lesson-tip">Do not feel ashamed to ask for help. Reporting quickly may help limit further loss.</div>
          </div>`,
          hi: `<div class="lesson-card">
            <h3>धोखाधड़ी के संकेत</h3>
            <ul>
              <li>कोई OTP या UPI PIN मांगता है।</li>
              <li>पैसे पाने के लिए QR कोड स्कैन करने को कहता है।</li>
              <li>अनजान व्यक्ति स्क्रीन शेयरिंग ऐप इंस्टॉल करवाता है।</li>
              <li>इनाम या तुरंत फीस के नाम पर दबाव डालता है।</li>
              <li>फर्जी कस्टमर केयर गोपनीय जानकारी मांगता है।</li>
            </ul>
            <h3>धोखाधड़ी का शक हो तो</h3>
            <ol>
              <li>लेन-देन रोकें और आगे जानकारी साझा न करें।</li>
              <li>बैंक के आधिकारिक नंबर या ऐप से संपर्क करें।</li>
              <li>मैसेज और ट्रांजैक्शन रेफरेंस सुरक्षित रखें।</li>
              <li>भारत में वित्तीय साइबर धोखाधड़ी होने पर तुरंत 1930 पर कॉल करें और आधिकारिक साइबर क्राइम पोर्टल पर रिपोर्ट करें।</li>
            </ol>
            <div class="lesson-tip">मदद मांगने में संकोच न करें। जल्दी रिपोर्ट करने से आगे का नुकसान कम करने में मदद मिल सकती है।</div>
          </div>`,
          mr: `<div class="lesson-card">
            <h3>फसवणुकीची लक्षणे</h3>
            <ul>
              <li>कोणी OTP किंवा UPI PIN मागते.</li>
              <li>पैसे मिळवण्यासाठी QR कोड स्कॅन करण्यास सांगते.</li>
              <li>अनोळखी व्यक्ती स्क्रीन शेअरिंग ॲप इंस्टॉल करायला सांगते.</li>
              <li>बक्षीस किंवा तातडीच्या शुल्काच्या नावाखाली दबाव आणते.</li>
              <li>बनावट कस्टमर केअर गोपनीय माहिती मागते.</li>
            </ul>
            <h3>फसवणुकीचा संशय असल्यास</h3>
            <ol>
              <li>व्यवहार थांबवा आणि आणखी माहिती देऊ नका.</li>
              <li>बँकेच्या अधिकृत नंबर किंवा ॲपद्वारे संपर्क साधा.</li>
              <li>मेसेज आणि व्यवहाराचे संदर्भ जतन करा.</li>
              <li>भारतात आर्थिक सायबर फसवणूक झाल्यास त्वरित 1930 वर कॉल करा आणि अधिकृत सायबर क्राइम पोर्टलवर तक्रार करा.</li>
            </ol>
            <div class="lesson-tip">मदत मागायला संकोच करू नका. लवकर तक्रार केल्यास पुढील नुकसान कमी करण्यास मदत होऊ शकते.</div>
          </div>`
        }
      }
    ]
  },

 
internet: {
  icon: "🌐",
  number: "Module 04",
  title: {
    en: "Internet & Google",
    hi: "इंटरनेट और गूगल",
    mr: "इंटरनेट आणि गूगल"
  },
  pages: [
    {
      title: {
        en: "1. Searching on Google",
        hi: "1. गूगल पर सर्च करना",
        mr: "1. गूगलवर शोध घेणे"
      },
      content: {
        en: `
          <h3>🔎 Find Information</h3>
          <p>Google helps you find information, websites, maps and useful services.</p>
          <ol>
            <li>Open Google or your browser.</li>
            <li>Tap the search box.</li>
            <li>Type what you want to find.</li>
            <li>Tap Search and read the results.</li>
          </ol>
          <p><strong>Example:</strong> Search for "weather in Mumbai".</p>
          <p>Check the website before trusting its information.</p>
        `,
        hi: `
          <h3>🔎 जानकारी खोजें</h3>
          <p>Google से आप जानकारी, वेबसाइट, मैप और उपयोगी सेवाएं खोज सकते हैं।</p>
          <ol>
            <li>Google या ब्राउज़र खोलें।</li>
            <li>Search Box पर टैप करें।</li>
            <li>जो खोजना है, वह लिखें।</li>
            <li>Search दबाकर परिणाम पढ़ें।</li>
          </ol>
          <p><strong>उदाहरण:</strong> "Mumbai का मौसम" सर्च करें।</p>
          <p>जानकारी पर भरोसा करने से पहले वेबसाइट जांचें।</p>
        `,
        mr: `
          <h3>🔎 माहिती शोधा</h3>
          <p>Google वर माहिती, वेबसाइट, नकाशे आणि उपयुक्त सेवा शोधता येतात.</p>
          <ol>
            <li>Google किंवा ब्राउझर उघडा.</li>
            <li>Search Box वर टॅप करा.</li>
            <li>हवी असलेली माहिती लिहा.</li>
            <li>Search दाबून निकाल वाचा.</li>
          </ol>
          <p><strong>उदाहरण:</strong> "Mumbai weather" शोधा.</p>
          <p>माहितीवर विश्वास ठेवण्यापूर्वी वेबसाइट तपासा.</p>
        `
      }
    },
    {
      title: {
        en: "2. Understanding Websites",
        hi: "2. वेबसाइट को समझना",
        mr: "2. वेबसाइट समजून घेणे"
      },
      content: {
        en: `
          <h3>🌐 What is a Website?</h3>
          <p>A website is a collection of pages available on the internet.</p>
          <ul>
            <li>Read the website name carefully.</li>
            <li>Prefer official websites for important services.</li>
            <li>Look for spelling mistakes in website addresses.</li>
            <li>Do not enter passwords on suspicious pages.</li>
          </ul>
          <p><strong>Remember:</strong> A familiar logo alone does not prove a website is genuine.</p>
        `,
        hi: `
          <h3>🌐 वेबसाइट क्या है?</h3>
          <p>वेबसाइट इंटरनेट पर उपलब्ध पेजों का समूह होती है।</p>
          <ul>
            <li>वेबसाइट का नाम ध्यान से पढ़ें।</li>
            <li>जरूरी सेवाओं के लिए आधिकारिक वेबसाइट चुनें।</li>
            <li>वेबसाइट के पते में गलत स्पेलिंग जांचें।</li>
            <li>संदिग्ध पेज पर पासवर्ड न डालें।</li>
          </ul>
          <p><strong>याद रखें:</strong> केवल लोगो देखकर वेबसाइट पर भरोसा न करें।</p>
        `,
        mr: `
          <h3>🌐 वेबसाइट म्हणजे काय?</h3>
          <p>वेबसाइट म्हणजे इंटरनेटवरील वेब पानांचा समूह.</p>
          <ul>
            <li>वेबसाइटचे नाव काळजीपूर्वक वाचा.</li>
            <li>महत्त्वाच्या सेवांसाठी अधिकृत वेबसाइट वापरा.</li>
            <li>वेबसाइटच्या पत्त्यातील स्पेलिंग तपासा.</li>
            <li>संशयास्पद पानावर पासवर्ड टाकू नका.</li>
          </ul>
          <p><strong>लक्षात ठेवा:</strong> फक्त लोगो पाहून वेबसाइटवर विश्वास ठेवू नका.</p>
        `
      }
    },
    {
      title: {
        en: "3. Using Google Maps",
        hi: "3. गूगल मैप्स का उपयोग",
        mr: "3. Google Maps वापरणे"
      },
      content: {
        en: `
          <h3>📍 Find a Place</h3>
          <ol>
            <li>Open Google Maps.</li>
            <li>Type a place name or address.</li>
            <li>Choose the correct result.</li>
            <li>Tap Directions to view a route.</li>
          </ol>
          <p>Check the destination carefully before starting your journey.</p>
          <p>Location sharing can reveal where you are. Share it only with people you trust.</p>
        `,
        hi: `
          <h3>📍 जगह खोजें</h3>
          <ol>
            <li>Google Maps खोलें।</li>
            <li>जगह का नाम या पता लिखें।</li>
            <li>सही परिणाम चुनें।</li>
            <li>रास्ता देखने के लिए Directions दबाएं।</li>
          </ol>
          <p>निकलने से पहले सही जगह की जांच करें।</p>
          <p>Location साझा करने से आपकी जगह पता चल सकती है। इसे केवल भरोसेमंद लोगों के साथ साझा करें।</p>
        `,
        mr: `
          <h3>📍 ठिकाण शोधा</h3>
          <ol>
            <li>Google Maps उघडा.</li>
            <li>ठिकाणाचे नाव किंवा पत्ता लिहा.</li>
            <li>योग्य निकाल निवडा.</li>
            <li>मार्ग पाहण्यासाठी Directions दाबा.</li>
          </ol>
          <p>प्रवास सुरू करण्यापूर्वी योग्य ठिकाण तपासा.</p>
          <p>Location शेअर केल्याने तुमचे ठिकाण कळू शकते. ते फक्त विश्वासू व्यक्तींशी शेअर करा.</p>
        `
      }
    },
    {
      title: {
        en: "4. Watching Videos on YouTube",
        hi: "4. YouTube पर वीडियो देखना",
        mr: "4. YouTube वर व्हिडिओ पाहणे"
      },
      content: {
        en: `
          <h3>▶️ Learn with Videos</h3>
          <ol>
            <li>Open the YouTube app.</li>
            <li>Tap Search.</li>
            <li>Type the topic you want to learn.</li>
            <li>Choose a suitable video and tap Play.</li>
          </ol>
          <p>Use Pause to stop a video and the volume buttons to adjust sound.</p>
          <p>Avoid suspicious links in video descriptions and comments.</p>
        `,
        hi: `
          <h3>▶️ वीडियो से सीखें</h3>
          <ol>
            <li>YouTube ऐप खोलें।</li>
            <li>Search पर टैप करें।</li>
            <li>जिस विषय को सीखना है, वह लिखें।</li>
            <li>उपयुक्त वीडियो चुनकर Play दबाएं।</li>
          </ol>
          <p>वीडियो रोकने के लिए Pause और आवाज बदलने के लिए वॉल्यूम बटन इस्तेमाल करें।</p>
          <p>वीडियो के विवरण और कमेंट में संदिग्ध लिंक से बचें।</p>
        `,
        mr: `
          <h3>▶️ व्हिडिओमधून शिका</h3>
          <ol>
            <li>YouTube ॲप उघडा.</li>
            <li>Search वर टॅप करा.</li>
            <li>शिकायचा विषय लिहा.</li>
            <li>योग्य व्हिडिओ निवडून Play दाबा.</li>
          </ol>
          <p>व्हिडिओ थांबवण्यासाठी Pause आणि आवाज बदलण्यासाठी व्हॉल्यूम बटणे वापरा.</p>
          <p>व्हिडिओच्या वर्णनातील आणि कमेंटमधील संशयास्पद लिंक टाळा.</p>
        `
      }
    },
    {
      title: {
        en: "5. Downloading Files Safely",
        hi: "5. सुरक्षित तरीके से फाइल डाउनलोड करना",
        mr: "5. सुरक्षितपणे फाइल डाउनलोड करणे"
      },
      content: {
        en: `
          <h3>📥 Download Carefully</h3>
          <ul>
            <li>Download files only from trusted sources.</li>
            <li>Check the file name before opening it.</li>
            <li>Do not install apps from unknown links.</li>
            <li>Do not open unexpected attachments.</li>
          </ul>
          <p>If a website says your phone has a virus and asks you to install an unknown app, close the page.</p>
        `,
        hi: `
          <h3>📥 सावधानी से डाउनलोड करें</h3>
          <ul>
            <li>फाइल भरोसेमंद स्रोत से ही डाउनलोड करें।</li>
            <li>खोलने से पहले फाइल का नाम जांचें।</li>
            <li>अनजान लिंक से ऐप इंस्टॉल न करें।</li>
            <li>बिना उम्मीद वाले अटैचमेंट न खोलें।</li>
          </ul>
          <p>अगर वेबसाइट फोन में वायरस होने का डर दिखाकर अनजान ऐप इंस्टॉल करने को कहे, तो पेज बंद कर दें।</p>
        `,
        mr: `
          <h3>📥 काळजीपूर्वक डाउनलोड करा</h3>
          <ul>
            <li>फाइल फक्त विश्वासार्ह स्रोतावरून डाउनलोड करा.</li>
            <li>उघडण्यापूर्वी फाइलचे नाव तपासा.</li>
            <li>अनोळखी लिंकवरून ॲप इंस्टॉल करू नका.</li>
            <li>अनपेक्षित अटॅचमेंट उघडू नका.</li>
          </ul>
          <p>वेबसाइट फोनमध्ये व्हायरस असल्याची भीती दाखवून अनोळखी ॲप इंस्टॉल करायला सांगत असेल तर पान बंद करा.</p>
        `
      }
    },
    {
      title: {
        en: "6. Using Browser Tabs",
        hi: "6. ब्राउज़र टैब का उपयोग",
        mr: "6. ब्राउझर टॅब वापरणे"
      },
      content: {
        en: `
          <h3>🗂️ Browse the Internet</h3>
          <ul>
            <li>A browser opens websites.</li>
            <li>A tab lets you keep a webpage open while visiting another.</li>
            <li>Use the plus (+) icon to open a new tab.</li>
            <li>Use the tab switcher to return to another page.</li>
          </ul>
          <p>Close tabs you no longer need, especially on shared phones.</p>
        `,
        hi: `
          <h3>🗂️ इंटरनेट ब्राउज़ करें</h3>
          <ul>
            <li>ब्राउज़र वेबसाइट खोलता है।</li>
            <li>टैब से एक पेज खुला रखकर दूसरा पेज देख सकते हैं।</li>
            <li>नया टैब खोलने के लिए (+) दबाएं।</li>
            <li>दूसरे पेज पर लौटने के लिए टैब स्विचर इस्तेमाल करें।</li>
          </ul>
          <p>जिन टैब की जरूरत नहीं है उन्हें बंद करें, खासकर साझा फोन पर।</p>
        `,
        mr: `
          <h3>🗂️ इंटरनेट ब्राउझ करा</h3>
          <ul>
            <li>ब्राउझर वेबसाइट उघडतो.</li>
            <li>टॅबमुळे एक पान उघडे ठेवून दुसरे पान पाहता येते.</li>
            <li>नवीन टॅबसाठी (+) दाबा.</li>
            <li>दुसऱ्या पानावर जाण्यासाठी टॅब स्विचर वापरा.</li>
          </ul>
          <p>नको असलेले टॅब बंद करा, विशेषतः सामायिक फोनवर.</p>
        `
      }
    },
    {
      title: {
        en: "7. Identifying Useful Information",
        hi: "7. उपयोगी जानकारी पहचानना",
        mr: "7. उपयुक्त माहिती ओळखणे"
      },
      content: {
        en: `
          <h3>✅ Check Before Trusting</h3>
          <ul>
            <li>Check who published the information.</li>
            <li>Look at the date of the information.</li>
            <li>Compare important claims with official sources.</li>
            <li>Do not forward shocking claims without checking them.</li>
          </ul>
          <p>Search results can contain advertisements and inaccurate information.</p>
        `,
        hi: `
          <h3>✅ भरोसा करने से पहले जांचें</h3>
          <ul>
            <li>देखें जानकारी किसने प्रकाशित की है।</li>
            <li>जानकारी की तारीख जांचें।</li>
            <li>जरूरी बातों को आधिकारिक स्रोत से मिलाएं।</li>
            <li>चौंकाने वाले संदेश जांचे बिना आगे न भेजें।</li>
          </ul>
          <p>Search Results में विज्ञापन और गलत जानकारी भी हो सकती है।</p>
        `,
        mr: `
          <h3>✅ विश्वास ठेवण्यापूर्वी तपासा</h3>
          <ul>
            <li>माहिती कोणी प्रकाशित केली ते पाहा.</li>
            <li>माहितीची तारीख तपासा.</li>
            <li>महत्त्वाच्या दाव्यांची अधिकृत स्रोतांशी तुलना करा.</li>
            <li>धक्कादायक संदेश तपासल्याशिवाय पुढे पाठवू नका.</li>
          </ul>
          <p>Search Results मध्ये जाहिराती आणि चुकीची माहितीही असू शकते.</p>
        `
      }
    },
    {
      title: {
        en: "8. Safe Internet Habits",
        hi: "8. इंटरनेट सुरक्षित तरीके से इस्तेमाल करना",
        mr: "8. इंटरनेट सुरक्षितपणे वापरणे"
      },
      content: {
        en: `
          <h3>🛡️ Stay Safe Online</h3>
          <ul>
            <li>Use strong, unique passwords.</li>
            <li>Never share OTPs, passwords or banking PINs.</li>
            <li>Avoid entering personal details on suspicious websites.</li>
            <li>Keep your browser and phone updated.</li>
            <li>Ask a trusted person if something online feels suspicious.</li>
          </ul>
          <p><strong>Remember:</strong> Stop and check before tapping an unfamiliar link.</p>
        `,
        hi: `
          <h3>🛡️ ऑनलाइन सुरक्षित रहें</h3>
          <ul>
            <li>मजबूत और अलग-अलग पासवर्ड इस्तेमाल करें।</li>
            <li>OTP, पासवर्ड या बैंकिंग PIN कभी साझा न करें।</li>
            <li>संदिग्ध वेबसाइट पर निजी जानकारी न डालें।</li>
            <li>ब्राउज़र और फोन अपडेट रखें।</li>
            <li>ऑनलाइन कुछ संदिग्ध लगे तो भरोसेमंद व्यक्ति से पूछें।</li>
          </ul>
          <p><strong>याद रखें:</strong> अनजान लिंक पर टैप करने से पहले रुकें और जांचें।</p>
        `,
        mr: `
          <h3>🛡️ ऑनलाइन सुरक्षित राहा</h3>
          <ul>
            <li>मजबूत आणि वेगळे पासवर्ड वापरा.</li>
            <li>OTP, पासवर्ड किंवा बँकिंग PIN कधीही शेअर करू नका.</li>
            <li>संशयास्पद वेबसाइटवर वैयक्तिक माहिती टाकू नका.</li>
            <li>ब्राउझर आणि फोन अपडेट ठेवा.</li>
            <li>ऑनलाइन काही संशयास्पद वाटल्यास विश्वासू व्यक्तीला विचारा.</li>
          </ul>
          <p><strong>लक्षात ठेवा:</strong> अनोळखी लिंकवर टॅप करण्यापूर्वी थांबा आणि तपासा.</p>
        `
      }
    }
  ]
},


  safety: {
    icon: "🛡️",
    number: "Module 05",
    title: {
      en: "Safety & Scam Protection",
      hi: "सुरक्षा और ऑनलाइन धोखाधड़ी से बचाव",
      mr: "सुरक्षा आणि ऑनलाइन फसवणुकीपासून बचाव"
    },
    pages: [
      {
        title: {
          en: "Protect Your OTP and PIN",
          hi: "OTP और PIN सुरक्षित रखें",
          mr: "OTP आणि PIN सुरक्षित ठेवा"
        },
        content: {
          en: `
            <p>Your OTP and PIN are private. Never share them with anyone over a call, message or chat.</p>
            <ul>
              <li>Never share your ATM PIN, UPI PIN or password.</li>
              <li>Do not tell anyone an OTP received on your phone.</li>
              <li>If someone pressures you to share a code, stop and verify independently.</li>
            </ul>
          `,
          hi: `
            <p>आपका OTP और PIN निजी हैं। इन्हें किसी भी व्यक्ति के साथ कॉल, मैसेज या चैट पर शेयर न करें।</p>
            <ul>
              <li>ATM PIN, UPI PIN या पासवर्ड किसी को न बताएं।</li>
              <li>फोन पर आया OTP किसी के साथ शेयर न करें।</li>
              <li>कोई कोड मांगने के लिए दबाव डाले तो रुकें और खुद जांच करें।</li>
            </ul>
          `,
          mr: `
            <p>तुमचा OTP आणि PIN खाजगी आहेत. ते कोणालाही कॉल, मेसेज किंवा चॅटवर सांगू नका.</p>
            <ul>
              <li>ATM PIN, UPI PIN किंवा पासवर्ड कोणालाही सांगू नका.</li>
              <li>फोनवर आलेला OTP कोणाशीही शेअर करू नका.</li>
              <li>कोणी कोड सांगण्यासाठी दबाव टाकल्यास थांबा आणि स्वतः पडताळणी करा.</li>
            </ul>
          `
        }
      },
      {
        title: {
          en: "Beware of Fake Calls",
          hi: "फर्जी कॉल से सावधान रहें",
          mr: "बनावट कॉलपासून सावध राहा"
        },
        content: {
          en: `
            <p>Scammers may pretend to be bank staff, police officers or customer-care agents.</p>
            <ul>
              <li>Do not trust a caller only because they know your name.</li>
              <li>Never install an app because an unknown caller tells you to.</li>
              <li>Hang up and call the official number yourself.</li>
            </ul>
          `,
          hi: `
            <p>धोखेबाज बैंक कर्मचारी, पुलिस या कस्टमर केयर बनकर कॉल कर सकते हैं।</p>
            <ul>
              <li>सिर्फ आपका नाम जानने से कॉल करने वाला असली नहीं हो जाता।</li>
              <li>अनजान कॉल करने वाले के कहने पर कोई ऐप इंस्टॉल न करें।</li>
              <li>कॉल काटें और आधिकारिक नंबर पर खुद संपर्क करें।</li>
            </ul>
          `,
          mr: `
            <p>फसवणूक करणारे बँक कर्मचारी, पोलीस किंवा कस्टमर केअर असल्याचे भासवू शकतात.</p>
            <ul>
              <li>तुमचे नाव माहीत आहे म्हणून कॉल खरा आहे असे समजू नका.</li>
              <li>अनोळखी व्यक्तीच्या सांगण्यावरून ॲप इन्स्टॉल करू नका.</li>
              <li>कॉल बंद करा आणि अधिकृत क्रमांकावर स्वतः संपर्क साधा.</li>
            </ul>
          `
        }
      },
      {
        title: {
          en: "Recognise WhatsApp Scams",
          hi: "WhatsApp स्कैम पहचानें",
          mr: "WhatsApp वरील फसवणूक ओळखा"
        },
        content: {
          en: `
            <p>Scammers may send urgent messages asking for money or personal information.</p>
            <ul>
              <li>Verify unusual money requests by calling the person directly.</li>
              <li>Never share WhatsApp verification codes.</li>
              <li>Do not forward suspicious messages to other people.</li>
            </ul>
          `,
          hi: `
            <p>धोखेबाज पैसे या निजी जानकारी मांगने वाले जल्दबाजी के मैसेज भेज सकते हैं।</p>
            <ul>
              <li>पैसे मांगने वाले अनजान या असामान्य मैसेज की कॉल करके पुष्टि करें।</li>
              <li>WhatsApp का verification code किसी को न बताएं।</li>
              <li>संदिग्ध मैसेज दूसरे लोगों को फॉरवर्ड न करें।</li>
            </ul>
          `,
          mr: `
            <p>फसवणूक करणारे पैसे किंवा वैयक्तिक माहिती मागणारे तातडीचे मेसेज पाठवू शकतात.</p>
            <ul>
              <li>पैसे मागणाऱ्या अनोळखी किंवा विचित्र मेसेजची फोन करून खात्री करा.</li>
              <li>WhatsApp चा verification code कोणालाही सांगू नका.</li>
              <li>संशयास्पद मेसेज इतरांना फॉरवर्ड करू नका.</li>
            </ul>
          `
        }
      },
      {
        title: {
          en: "Avoid Fake Links",
          hi: "फर्जी लिंक से बचें",
          mr: "बनावट लिंक टाळा"
        },
        content: {
          en: `
            <p>A fake link can open a dangerous website or try to steal your information.</p>
            <ul>
              <li>Do not click links promising free gifts or unexpected prizes.</li>
              <li>Check the website address carefully.</li>
              <li>Never enter bank details on a website you do not trust.</li>
            </ul>
          `,
          hi: `
            <p>फर्जी लिंक खतरनाक वेबसाइट खोल सकती है या आपकी जानकारी चुरा सकती है।</p>
            <ul>
              <li>मुफ्त गिफ्ट या अचानक इनाम देने वाली लिंक पर भरोसा न करें।</li>
              <li>वेबसाइट का पता ध्यान से जांचें।</li>
              <li>अनजान वेबसाइट पर बैंक की जानकारी न भरें।</li>
            </ul>
          `,
          mr: `
            <p>बनावट लिंक धोकादायक वेबसाइट उघडू शकते किंवा तुमची माहिती चोरू शकते.</p>
            <ul>
              <li>मोफत भेटवस्तू किंवा अनपेक्षित बक्षिसांचे आमिष दाखवणाऱ्या लिंकवर विश्वास ठेवू नका.</li>
              <li>वेबसाइटचा पत्ता काळजीपूर्वक तपासा.</li>
              <li>अविश्वासार्ह वेबसाइटवर बँकेची माहिती भरू नका.</li>
            </ul>
          `
        }
      },
      {
        title: {
          en: "Stay Safe with Online Banking",
          hi: "ऑनलाइन बैंकिंग सुरक्षित रखें",
          mr: "ऑनलाइन बँकिंग सुरक्षित ठेवा"
        },
        content: {
          en: `
            <p>Use banking services carefully to protect your money.</p>
            <ul>
              <li>Use your bank's official app or website.</li>
              <li>Avoid banking on public Wi-Fi.</li>
              <li>Check transaction alerts and report unknown transactions immediately.</li>
            </ul>
          `,
          hi: `
            <p>अपने पैसे सुरक्षित रखने के लिए बैंकिंग सेवाओं का सावधानी से इस्तेमाल करें।</p>
            <ul>
              <li>बैंक का आधिकारिक ऐप या वेबसाइट इस्तेमाल करें।</li>
              <li>Public Wi-Fi पर बैंकिंग करने से बचें।</li>
              <li>ट्रांजैक्शन अलर्ट जांचें और अनजान ट्रांजैक्शन की तुरंत शिकायत करें।</li>
            </ul>
          `,
          mr: `
            <p>पैसे सुरक्षित ठेवण्यासाठी बँकिंग सेवा काळजीपूर्वक वापरा.</p>
            <ul>
              <li>बँकेचे अधिकृत ॲप किंवा वेबसाइट वापरा.</li>
              <li>Public Wi-Fi वर बँकिंग करणे टाळा.</li>
              <li>व्यवहाराचे अलर्ट तपासा आणि अनोळखी व्यवहाराची त्वरित तक्रार करा.</li>
            </ul>
          `
        }
      },
      {
        title: {
          en: "Lottery and Prize Scams",
          hi: "लॉटरी और इनाम वाले स्कैम",
          mr: "लॉटरी आणि बक्षिसांची फसवणूक"
        },
        content: {
          en: `
            <p>A message saying you won a prize you never entered for may be a scam.</p>
            <ul>
              <li>Do not pay a fee to claim an unexpected prize.</li>
              <li>Do not share your bank details to receive a supposed reward.</li>
              <li>Verify claims through the organisation's official website.</li>
            </ul>
          `,
          hi: `
            <p>जिस लॉटरी में आपने भाग नहीं लिया, उसका इनाम मिलने का मैसेज धोखाधड़ी हो सकता है।</p>
            <ul>
              <li>अनजान इनाम पाने के लिए पैसे न दें।</li>
              <li>इनाम लेने के नाम पर बैंक की जानकारी शेयर न करें।</li>
              <li>संस्था की आधिकारिक वेबसाइट से जानकारी जांचें।</li>
            </ul>
          `,
          mr: `
            <p>ज्या लॉटरीत तुम्ही भाग घेतला नाही तिचे बक्षीस मिळाल्याचा मेसेज फसवणूक असू शकतो.</p>
            <ul>
              <li>अनपेक्षित बक्षीस मिळवण्यासाठी पैसे भरू नका.</li>
              <li>बक्षीस मिळवण्यासाठी बँकेची माहिती शेअर करू नका.</li>
              <li>संस्थेच्या अधिकृत वेबसाइटवरून माहिती तपासा.</li>
            </ul>
          `
        }
      },
      {
        title: {
          en: "Avoid UPI Payment Fraud",
          hi: "UPI पेमेंट फ्रॉड से बचें",
          mr: "UPI पेमेंट फसवणूक टाळा"
        },
        content: {
          en: `
            <p>You usually do not need to enter your UPI PIN to receive money.</p>
            <ul>
              <li>Enter your UPI PIN only when you intend to authorise a payment.</li>
              <li>Check the recipient's name and amount before paying.</li>
              <li>Never approve a collect request you do not recognise.</li>
            </ul>
          `,
          hi: `
            <p>पैसे प्राप्त करने के लिए आमतौर पर UPI PIN डालने की जरूरत नहीं होती।</p>
            <ul>
              <li>UPI PIN तभी डालें जब आप खुद भुगतान करना चाहते हों।</li>
              <li>भुगतान से पहले प्राप्तकर्ता का नाम और रकम जांचें।</li>
              <li>अनजान collect request को मंजूरी न दें।</li>
            </ul>
          `,
          mr: `
            <p>पैसे स्वीकार करण्यासाठी सामान्यतः UPI PIN टाकण्याची गरज नसते.</p>
            <ul>
              <li>स्वतः पैसे पाठवायचे असतील तेव्हाच UPI PIN टाका.</li>
              <li>पैसे पाठवण्यापूर्वी प्राप्तकर्त्याचे नाव आणि रक्कम तपासा.</li>
              <li>ओळख नसलेली collect request मंजूर करू नका.</li>
            </ul>
          `
        }
      },
      {
        title: {
          en: "What to Do After Fraud",
          hi: "फ्रॉड होने पर क्या करें",
          mr: "फसवणूक झाल्यास काय करावे"
        },
        content: {
          en: `
            <p>If you suspect fraud, act quickly.</p>
            <ul>
              <li>Contact your bank immediately using its official number.</li>
              <li>In India, call the cyber fraud helpline 1930 as soon as possible.</li>
              <li>Report the incident at the official portal: cybercrime.gov.in.</li>
              <li>Save messages and transaction details as evidence.</li>
            </ul>
          `,
          hi: `
            <p>अगर आपको धोखाधड़ी का शक हो, तो जल्दी कदम उठाएं।</p>
            <ul>
              <li>बैंक के आधिकारिक नंबर पर तुरंत संपर्क करें।</li>
              <li>भारत में साइबर वित्तीय धोखाधड़ी के लिए जल्द से जल्द 1930 पर कॉल करें।</li>
              <li>आधिकारिक पोर्टल cybercrime.gov.in पर शिकायत करें।</li>
              <li>सबूत के लिए मैसेज और ट्रांजैक्शन की जानकारी सुरक्षित रखें।</li>
            </ul>
          `,
          mr: `
            <p>फसवणुकीचा संशय आल्यास त्वरित पावले उचला.</p>
            <ul>
              <li>बँकेच्या अधिकृत क्रमांकावर त्वरित संपर्क साधा.</li>
              <li>भारतात सायबर आर्थिक फसवणुकीसाठी शक्य तितक्या लवकर 1930 वर कॉल करा.</li>
              <li>अधिकृत पोर्टल cybercrime.gov.in वर तक्रार करा.</li>
              <li>पुरावा म्हणून मेसेज आणि व्यवहाराची माहिती जतन करा.</li>
            </ul>
          `
        }
      }
    ]
  },

   services: {
    icon: "🏛️",
    number: "Module 06",
    title: {
      en: "Digital Services",
      hi: "डिजिटल सेवाएं",
      mr: "डिजिटल सेवा",
    },
    pages: [
      {
        title: {
          en: "Using Government Services Online",
          hi: "सरकारी सेवाएं ऑनलाइन इस्तेमाल करना",
          mr: "सरकारी सेवा ऑनलाइन वापरणे",
        },
        content: {
          en: `
            <p>You can use official government websites to access many public services.</p>
            <ul>
              <li>Use the official website for the service you need.</li>
              <li>Read the instructions carefully before applying.</li>
              <li>Never trust a website only because it uses a government logo.</li>
            </ul>
          `,
          hi: `
            <p>कई सरकारी सेवाओं के लिए आप आधिकारिक सरकारी वेबसाइट का इस्तेमाल कर सकते हैं।</p>
            <ul>
              <li>जिस सेवा की जरूरत है, उसकी आधिकारिक वेबसाइट खोलें।</li>
              <li>आवेदन करने से पहले निर्देश ध्यान से पढ़ें।</li>
              <li>सिर्फ सरकारी लोगो देखकर किसी वेबसाइट पर भरोसा न करें।</li>
            </ul>
          `,
          mr: `
            <p>अनेक सरकारी सेवा मिळवण्यासाठी अधिकृत सरकारी वेबसाइट वापरता येते.</p>
            <ul>
              <li>आवश्यक सेवेसाठी अधिकृत वेबसाइट उघडा.</li>
              <li>अर्ज करण्यापूर्वी सूचना काळजीपूर्वक वाचा.</li>
              <li>फक्त सरकारी लोगो पाहून वेबसाइटवर विश्वास ठेवू नका.</li>
            </ul>
          `,
        },
      },
      {
        title: {
          en: "Filling Online Forms",
          hi: "ऑनलाइन फॉर्म भरना",
          mr: "ऑनलाइन फॉर्म भरणे",
        },
        content: {
          en: `
            <p>Online forms collect information needed for a service or application.</p>
            <ul>
              <li>Keep the required documents ready.</li>
              <li>Enter your name and details correctly.</li>
              <li>Review everything before pressing Submit.</li>
            </ul>
          `,
          hi: `
            <p>ऑनलाइन फॉर्म किसी सेवा या आवेदन के लिए जरूरी जानकारी लेते हैं।</p>
            <ul>
              <li>जरूरी दस्तावेज पहले से तैयार रखें।</li>
              <li>अपना नाम और दूसरी जानकारी सही भरें।</li>
              <li>Submit दबाने से पहले सारी जानकारी जांचें।</li>
            </ul>
          `,
          mr: `
            <p>ऑनलाइन फॉर्ममध्ये सेवा किंवा अर्जासाठी आवश्यक माहिती भरावी लागते.</p>
            <ul>
              <li>आवश्यक कागदपत्रे तयार ठेवा.</li>
              <li>नाव आणि इतर माहिती अचूक भरा.</li>
              <li>Submit करण्यापूर्वी सर्व माहिती तपासा.</li>
            </ul>
          `,
        },
      },
      {
        title: {
          en: "Uploading Documents",
          hi: "दस्तावेज अपलोड करना",
          mr: "कागदपत्रे अपलोड करणे",
        },
        content: {
          en: `
            <p>Some online applications require digital copies of documents.</p>
            <ul>
              <li>Check the accepted file format and size.</li>
              <li>Select the correct document from your device.</li>
              <li>Upload sensitive documents only to trusted official websites.</li>
            </ul>
          `,
          hi: `
            <p>कुछ ऑनलाइन आवेदनों में दस्तावेजों की डिजिटल कॉपी अपलोड करनी पड़ती है।</p>
            <ul>
              <li>फाइल का सही फॉर्मेट और साइज जांचें।</li>
              <li>अपने फोन या कंप्यूटर से सही दस्तावेज चुनें।</li>
              <li>निजी दस्तावेज केवल भरोसेमंद आधिकारिक वेबसाइट पर अपलोड करें।</li>
            </ul>
          `,
          mr: `
            <p>काही ऑनलाइन अर्जांसाठी कागदपत्रांच्या डिजिटल प्रती अपलोड कराव्या लागतात.</p>
            <ul>
              <li>फाइलचा योग्य फॉरमॅट आणि आकार तपासा.</li>
              <li>फोन किंवा संगणकातून योग्य कागदपत्र निवडा.</li>
              <li>खाजगी कागदपत्रे फक्त विश्वासार्ह अधिकृत वेबसाइटवर अपलोड करा.</li>
            </ul>
          `,
        },
      },
      {
        title: {
          en: "Understanding DigiLocker",
          hi: "DigiLocker को समझना",
          mr: "DigiLocker समजून घेणे",
        },
        content: {
          en: `
            <p>DigiLocker is a digital document service that lets users access eligible digital documents.</p>
            <ul>
              <li>Use the official DigiLocker app or website.</li>
              <li>Follow the identity verification instructions when required.</li>
              <li>Never share your account password or OTP with another person.</li>
            </ul>
          `,
          hi: `
            <p>DigiLocker एक डिजिटल दस्तावेज सेवा है, जहां उपलब्ध डिजिटल दस्तावेज देखे जा सकते हैं।</p>
            <ul>
              <li>आधिकारिक DigiLocker ऐप या वेबसाइट इस्तेमाल करें।</li>
              <li>जरूरत होने पर पहचान सत्यापन के निर्देशों का पालन करें।</li>
              <li>अपने अकाउंट का पासवर्ड या OTP किसी को न बताएं।</li>
            </ul>
          `,
          mr: `
            <p>DigiLocker ही डिजिटल कागदपत्र सेवा आहे. यात उपलब्ध डिजिटल कागदपत्रे पाहता येतात.</p>
            <ul>
              <li>अधिकृत DigiLocker ॲप किंवा वेबसाइट वापरा.</li>
              <li>आवश्यक असल्यास ओळख पडताळणीच्या सूचना पाळा.</li>
              <li>खात्याचा पासवर्ड किंवा OTP कोणालाही सांगू नका.</li>
            </ul>
          `,
        },
      },
      {
        title: {
          en: "Booking Online Appointments",
          hi: "ऑनलाइन अपॉइंटमेंट बुक करना",
          mr: "ऑनलाइन अपॉइंटमेंट घेणे",
        },
        content: {
          en: `
            <p>Some hospitals and public offices allow appointments to be booked online.</p>
            <ul>
              <li>Choose the correct office or service.</li>
              <li>Check the date, time and location before confirming.</li>
              <li>Save the confirmation message or reference number.</li>
            </ul>
          `,
          hi: `
            <p>कुछ अस्पताल और सरकारी कार्यालय ऑनलाइन अपॉइंटमेंट बुक करने की सुविधा देते हैं।</p>
            <ul>
              <li>सही कार्यालय या सेवा चुनें।</li>
              <li>पुष्टि करने से पहले तारीख, समय और जगह जांचें।</li>
              <li>पुष्टि संदेश या रेफरेंस नंबर सुरक्षित रखें।</li>
            </ul>
          `,
          mr: `
            <p>काही रुग्णालये आणि सरकारी कार्यालये ऑनलाइन अपॉइंटमेंटची सुविधा देतात.</p>
            <ul>
              <li>योग्य कार्यालय किंवा सेवा निवडा.</li>
              <li>पुष्टी करण्यापूर्वी तारीख, वेळ आणि ठिकाण तपासा.</li>
              <li>पुष्टीचा मेसेज किंवा संदर्भ क्रमांक जतन करा.</li>
            </ul>
          `,
        },
      },
      {
        title: {
          en: "Registration and Login",
          hi: "रजिस्ट्रेशन और लॉगिन",
          mr: "नोंदणी आणि लॉगिन",
        },
        content: {
          en: `
            <p>Registration creates an account. Login lets you access an existing account.</p>
            <ul>
              <li>Use a strong, unique password.</li>
              <li>Enter OTPs only on the official service you are accessing.</li>
              <li>Log out when using a shared device.</li>
            </ul>
          `,
          hi: `
            <p>Registration से नया अकाउंट बनता है और Login से पुराने अकाउंट में प्रवेश मिलता है।</p>
            <ul>
              <li>मजबूत और अलग पासवर्ड रखें।</li>
              <li>OTP केवल उसी आधिकारिक सेवा पर डालें जिसका इस्तेमाल कर रहे हैं।</li>
              <li>साझा डिवाइस इस्तेमाल करने के बाद लॉग आउट करें।</li>
            </ul>
          `,
          mr: `
            <p>Registration मुळे नवीन खाते तयार होते आणि Login मुळे आधीच्या खात्यात प्रवेश मिळतो.</p>
            <ul>
              <li>मजबूत आणि वेगळा पासवर्ड वापरा.</li>
              <li>OTP फक्त वापरत असलेल्या अधिकृत सेवेतच टाका.</li>
              <li>सामायिक डिव्हाइस वापरल्यानंतर लॉग आउट करा.</li>
            </ul>
          `,
        },
      },
      {
        title: {
          en: "Checking Application Status",
          hi: "आवेदन का स्टेटस चेक करना",
          mr: "अर्जाची स्थिती तपासणे",
        },
        content: {
          en: `
            <p>Many services provide a way to track the status of an application.</p>
            <ul>
              <li>Keep your application or reference number safe.</li>
              <li>Use the official tracking page.</li>
              <li>If there is a delay, contact the official helpdesk.</li>
            </ul>
          `,
          hi: `
            <p>कई सेवाओं में आवेदन की स्थिति देखने की सुविधा होती है।</p>
            <ul>
              <li>अपना आवेदन या रेफरेंस नंबर सुरक्षित रखें।</li>
              <li>आधिकारिक ट्रैकिंग पेज का इस्तेमाल करें।</li>
              <li>देरी होने पर आधिकारिक हेल्पडेस्क से संपर्क करें।</li>
            </ul>
          `,
          mr: `
            <p>अनेक सेवांमध्ये अर्जाची स्थिती तपासण्याची सुविधा असते.</p>
            <ul>
              <li>अर्ज क्रमांक किंवा संदर्भ क्रमांक सुरक्षित ठेवा.</li>
              <li>अधिकृत ट्रॅकिंग पेज वापरा.</li>
              <li>विलंब झाल्यास अधिकृत हेल्पडेस्कशी संपर्क साधा.</li>
            </ul>
          `,
        },
      },
      {
        title: {
          en: "Using Digital Services Safely",
          hi: "डिजिटल सेवाएं सुरक्षित तरीके से इस्तेमाल करना",
          mr: "डिजिटल सेवा सुरक्षितपणे वापरणे",
        },
        content: {
          en: `
            <p>Protect your personal information whenever you use online services.</p>
            <ul>
              <li>Check the website address before entering information.</li>
              <li>Never share passwords, PINs or OTPs with callers.</li>
              <li>Keep a copy of important receipts and confirmations.</li>
              <li>Ask a trusted person for help if you are unsure.</li>
            </ul>
          `,
          hi: `
            <p>ऑनलाइन सेवाओं का इस्तेमाल करते समय अपनी निजी जानकारी सुरक्षित रखें।</p>
            <ul>
              <li>जानकारी भरने से पहले वेबसाइट का पता जांचें।</li>
              <li>कॉल करने वालों को पासवर्ड, PIN या OTP न बताएं।</li>
              <li>जरूरी रसीदों और पुष्टि संदेशों की कॉपी रखें।</li>
              <li>समझ न आए तो किसी भरोसेमंद व्यक्ति की मदद लें।</li>
            </ul>
          `,
          mr: `
            <p>ऑनलाइन सेवा वापरताना तुमची वैयक्तिक माहिती सुरक्षित ठेवा.</p>
            <ul>
              <li>माहिती भरण्यापूर्वी वेबसाइटचा पत्ता तपासा.</li>
              <li>कॉल करणाऱ्यांना पासवर्ड, PIN किंवा OTP सांगू नका.</li>
              <li>महत्त्वाच्या पावत्या आणि पुष्टी संदेशांच्या प्रती ठेवा.</li>
              <li>शंका असल्यास विश्वासू व्यक्तीची मदत घ्या.</li>
            </ul>
          `,
        },
      },
    ],
  },
};


/* =========================================================
   QUIZ DATA
========================================================= */

// Offline chapter summaries in the three additional UI languages.
const offlineChapterTranslations = {
  gu: {
    smartphone: [
      ["તમારો સ્માર્ટફોન ઓળખો", "સ્માર્ટફોનથી કૉલ, સંદેશા, ઇન્ટરનેટ, ફોટા અને ઍપનો ઉપયોગ થાય છે. તેના બટનો, ટચસ્ક્રીન, કૅમેરા અને ચાર્જિંગ પોર્ટ ઓળખો."],
      ["ટચસ્ક્રીન અને હાવભાવ", "એક વાર ટૅપ કરીને ખોલો, સ્વાઇપથી ખસેડો અને સ્ક્રોલથી વધુ જુઓ. બે આંગળીઓથી પિંચ કરીને ઝૂમ કરો."],
      ["સેટિંગ્સ અને પસંદગીઓ", "તેજસ્વિતા, રિંગટોન, Wi-Fi, મોબાઇલ ડેટા અને સૂચનાઓ બદલો. ફોનને સુરક્ષિત રાખવા સ્ક્રીન લૉક રાખો."],
      ["કૉલ અને સંપર્કો", "નંબર ડાયલ કરો અને સંપર્ક સાચવો. અજાણ્યા કૉલરને OTP, PIN કે પાસવર્ડ ક્યારેય ન આપો."],
      ["કૅમેરા, ફોટા અને વીડિયો", "ફોટો લો અને ગેલેરીમાં જુઓ. શેર કરતાં પહેલાં સાચો સંપર્ક પસંદ કરો અને ખાનગી વિગતો દેખાતી નથી તેની ખાતરી કરો."],
      ["ઍપ અને પરવાનગીઓ", "ઍપ અધિકૃત સ્ટોરમાંથી જ ઇન્સ્ટોલ કરો. કૅમેરા, માઇક્રોફોન અને સ્થાનની પરવાનગી ફક્ત જરૂર હોય ત્યારે આપો."],
      ["બૅટરી અને ચાર્જિંગ સુરક્ષા", "યોગ્ય ચાર્જર વાપરો, નુકસાન પામેલા કેબલથી ચાર્જ ન કરો અને ફોનને વધુ ગરમ થવા ન દો."],
      ["સ્માર્ટફોન સુરક્ષા યાદી", "સ્ક્રીન લૉક અને અપડેટ રાખો. અજાણી ઍપ/લિંક ટાળો અને OTP/PIN ગુપ્ત રાખો."]
    ],
    whatsapp: [
      ["WhatsApp ની મૂળભૂત જાણકારી", "WhatsApp માં સંદેશા મોકલો, કૉલ કરો અને ફોટા શેર કરો. મોકલતાં પહેલાં સંપર્કનું નામ અને નંબર તપાસો."],
      ["સંપર્ક અને નવી ચેટ", "નવી ચેટ પહેલાં સાચો સંપર્ક પસંદ કરો. પૈસા કે દસ્તાવેજ મોકલતાં પહેલાં નંબરની પુષ્ટિ કરો."],
      ["સંદેશા અને વૉઇસ નોટ", "સંદેશો લખીને મોકલો અથવા માઇક્રોફોનથી વૉઇસ નોટ રેકોર્ડ કરો. મોકલતાં પહેલાં પ્રાપ્તકર્તા તપાસો."],
      ["ફોટા, વીડિયો અને દસ્તાવેજો", "સાચી ફાઇલ પસંદ કરો. વ્યક્તિગત માહિતી ધરાવતી ફાઇલ ફક્ત વિશ્વાસુ સંપર્કને મોકલો."],
      ["વૉઇસ અને વીડિયો કૉલ", "કૉલ કરનારને ઓળખ્યા પછી વાત કરો. અજાણી વ્યક્તિ સાથે સ્ક્રીન શેર ન કરો અને બેંક ઍપ ન ખોલો."],
      ["ગ્રુપ અને ઉપયોગી સુવિધાઓ", "ગ્રુપમાં સંદેશા અને મીડિયા શેર કરી શકાય છે. અજાણ્યા ગ્રુપમાંથી બહાર નીકળો અને ચકાસ્યા વગર સંદેશો ફોરવર્ડ ન કરો."],
      ["ગોપનીયતા, સુરક્ષા અને છેતરપિંડી", "પ્રોફાઇલ કોણ જોઈ શકે તે સેટ કરો. OTP, PIN, પૈસા કે સ્ક્રીન શેર માગતા સંદેશાથી સાવધાન રહો."],
      ["WhatsApp સુરક્ષા યાદી", "વેરિફિકેશન કોડ ન આપો, અજાણી લિંક ન ખોલો અને શંકાસ્પદ ખાતાને બ્લૉક/રિપોર્ટ કરો."]
    ],
    payments: [
      ["UPI ને સમજો", "UPI બેંક ખાતા વચ્ચે તરત ચુકવણી કરે છે. પૈસા મોકલવા PIN જરૂરી છે; પૈસા મેળવવા PIN જરૂરી નથી."],
      ["UPI ઍપ સેટ કરો", "વિશ્વસનીય સ્ટોરમાંથી ઍપ ઇન્સ્ટોલ કરો અને બેંક સાથે જોડાયેલો નંબર વાપરો. બેંક વિગતો તપાસો."],
      ["પૈસા મોકલો", "UPI ID અથવા નંબર દાખલ કરો. પ્રાપ્તકર્તાનું નામ અને રકમ તપાસ્યા પછી જ PIN દાખલ કરો."],
      ["પૈસા મેળવો", "પૈસા મેળવવા QR સ્કેન કે UPI PIN દાખલ કરવાની જરૂર નથી. અજાણી collect request સ્વીકારશો નહીં."],
      ["QR કોડથી ચુકવણી", "દુકાનનો QR સ્કેન કરીને નામ અને રકમ તપાસો. ખરીદી કરતી વખતે જ PIN દાખલ કરો."],
      ["વ્યવહાર ઇતિહાસ અને નિષ્ફળ ચુકવણી", "ઍપના ઇતિહાસમાં ચુકવણીની સ્થિતિ જુઓ. પેન્ડિંગ ચુકવણી ફરી કરતાં પહેલાં બેંક ખાતું તપાસો."],
      ["UPI PIN અને ચુકવણી સુરક્ષા", "UPI PIN ગુપ્ત રાખો અને ફક્ત પૈસા મોકલતી વખતે દાખલ કરો. બેંક કર્મચારી PIN નહીં માગે."],
      ["UPI છેતરપિંડી પછી શું કરવું", "બેંકને તરત જાણ કરો, 1930 પર કૉલ કરો અને cybercrime.gov.in પર ફરિયાદ નોંધાવો."]
    ],
    internet: [
      ["Google પર શોધો", "મુખ્ય શબ્દો લખો, વેબસાઇટનું નામ તપાસો અને વિશ્વસનીય સ્ત્રોતોની માહિતી સરખાવો."],
      ["વેબસાઇટને સમજો", "વેબ સરનામું તપાસો. સરકારી સેવા માટે અધિકૃત સાઇટ વાપરો; અજાણી સાઇટ પર બેંક વિગતો ન આપો."],
      ["Google Maps વાપરો", "સ્થળનું નામ શોધો અને સરનામું તથા માર્ગ જુઓ. નીકળતાં પહેલાં સમય અને સ્થળની વિગતો તપાસો."],
      ["YouTube પર વીડિયો જુઓ", "વિડિયો શોધીને પસંદ કરો. ભ્રામક દાવા અને અજાણી લિંકથી સાવધાન રહો; વીડિયો માટે OTP/PIN જરૂરી નથી."],
      ["ફાઇલ સુરક્ષિત રીતે ડાઉનલોડ કરો", "ફાઇલ ફક્ત વિશ્વસનીય સાઇટ અથવા અધિકૃત સ્ટોરમાંથી લો. અજાણી ફાઇલ ન ખોલો અને સુરક્ષા અપડેટ કરો."],
      ["બ્રાઉઝર ટૅબ વાપરો", "ટૅબમાં અનેક પાનાં ખોલી શકાય છે. ખાનગી માહિતીવાળી સાઇટ વાપર્યા પછી ટૅબ બંધ કરો."],
      ["ઉપયોગી માહિતી ઓળખો", "લેખક, તારીખ અને સ્ત્રોત તપાસો. આરોગ્ય, પૈસા કે સરકારી માહિતી માટે અધિકૃત સાઇટ પસંદ કરો."],
      ["સુરક્ષિત ઇન્ટરનેટ આદતો", "મજબૂત પાસવર્ડ વાપરો, OTP/PIN ગુપ્ત રાખો, અજાણી લિંક ટાળો અને જાહેર Wi-Fi પર બેંકિંગ ન કરો."]
    ],
    safety: [
      ["OTP અને PIN સુરક્ષિત રાખો", "OTP, UPI PIN અને પાસવર્ડ કોઈને ન આપો—બેંક, પોલીસ કે ગ્રાહક સેવા બનીને માગે તો પણ નહીં."],
      ["નકલી કૉલથી સાવધાન", "ધમકી આપતા કે પૈસા માગતા કૉલને બંધ કરો. સંસ્થાને તેના અધિકૃત નંબરથી સંપર્ક કરો."],
      ["WhatsApp છેતરપિંડી ઓળખો", "ઇનામ, નોકરી, પાર્સલ કે પરિવારની તાકીદની મદદના સંદેશા ચકાસો. જાણીતા નંબર પર ફોન કરીને ખાતરી કરો."],
      ["નકલી લિંક ટાળો", "લિંકનું સરનામું તપાસો. અજાણી સાઇટ પર પાસવર્ડ, OTP કે ચુકવણીની વિગતો દાખલ ન કરો."],
      ["ઓનલાઇન બેંકિંગ સુરક્ષા", "બેંક ઍપ જાતે ખોલો, અધિકૃત સાઇટ વાપરો અને દરેક વ્યવહાર તપાસો. સ્ક્રીન શેરિંગ ઍપ ન ઇન્સ્ટોલ કરો."],
      ["લૉટરી અને ઇનામ છેતરપિંડી", "જે ઇનામ માટે પ્રવેશ કર્યો નથી તે શંકાસ્પદ છે. ઇનામ મેળવવા ફી કે કર ન મોકલો."],
      ["UPI ચુકવણીની છેતરપિંડી ટાળો", "પૈસા મેળવવા PIN જરૂરી નથી. QR પછી નામ તપાસો અને અજાણી collect request ન સ્વીકારો."],
      ["છેતરપિંડી પછી શું કરવું", "બેંકને જાણ કરો, 1930 પર કૉલ કરો, cybercrime.gov.in પર ફરિયાદ કરો અને પુરાવા સાચવો."]
    ],
    services: [
      ["સરકારી સેવાઓ ઓનલાઇન વાપરો", "અધિકૃત વેબસાઇટ અથવા ઍપ વાપરો. સરનામું તપાસો અને અજાણ્યા એજન્ટને OTP ન આપો."],
      ["ઓનલાઇન ફોર્મ भरो", "સાચી વિગતો લખો અને મોકલતાં પહેલાં તપાસો. રસીદ અથવા સંદર્ભ નંબર સાચવો."],
      ["દસ્તાવેજ અપલોડ કરો", "યોગ્ય અને સ્પષ્ટ ફાઇલ પસંદ કરો. સાઇટ અધિકૃત છે તેની ખાતરી કરો અને બિનજરૂરી માહિતી છુપાવો."],
      ["DigiLocker ને સમજો", "DigiLocker માં ડિજિટલ દસ્તાવેજો મેળવી અને સાચવી શકાય છે. અધિકૃત ઍપ વાપરો અને OTP ગુપ્ત રાખો."],
      ["ઓનલાઇન મુલાકાત બુક કરો", "સેવા અને સમય પસંદ કરીને વિગતો તપાસો. પુષ્ટિ સંદેશ સાચવો અને તારીખ/સ્થળ ફરી ચકાસો."],
      ["નોંધણી અને લૉગિન", "અધિકૃત સાઇટ પર નોંધણી કરો અને અનન્ય પાસવર્ડ વાપરો. OTP જાતે દાખલ કરો; પાસવર્ડ શેર ન કરો."],
      ["અરજીની સ્થિતિ તપાસો", "રસીદનો સંદર્ભ નંબર અધિકૃત સાઇટ પર વાપરો. અજાણ્યા કૉલરને OTP ન આપો."],
      ["ડિજિટલ સેવાઓ સુરક્ષિત રીતે વાપરો", "અધિકૃત સાઇટ તપાસો, જાહેર ઉપકરણમાંથી લૉગઆઉટ કરો અને શંકાસ્પદ માંગ મળે તો અટકો."]
    ]
  },
  ta: {
    smartphone: [
      ["உங்கள் திறன்பேசியை அறிக", "அழைப்பு, செய்தி, இணையம், படம், செயலிகளுக்குத் திறன்பேசியைப் பயன்படுத்தலாம். பொத்தான்கள், தொடுதிரை, கேமரா, சார்ஜிங் துளையை அறியுங்கள்."],
      ["தொடுதிரை மற்றும் சைகைகள்", "தட்டித் திறக்கவும், விரலை நகர்த்தவும், மேலே கீழே உருட்டவும். இரண்டு விரல்களால் பெரிதாக்கலாம்."],
      ["அமைப்புகள் மற்றும் விருப்பங்கள்", "திரை ஒளிர்வு, அழைப்பு ஒலி, Wi-Fi, மொபைல் தரவு, அறிவிப்புகளை மாற்றுங்கள். திரைப் பூட்டை வைத்திருங்கள்."],
      ["அழைப்புகள் மற்றும் தொடர்புகள்", "எண்ணை அழைத்து தொடர்பைச் சேமிக்கவும். OTP, PIN, கடவுச்சொல்லை அறியாதவரிடம் கூறாதீர்கள்."],
      ["கேமரா, படங்கள், காணொளிகள்", "படம் எடுத்து தொகுப்பில் பாருங்கள். பகிர்வதற்கு முன் சரியான நபரைத் தேர்ந்தெடுத்து தனிப்பட்ட தகவல் தெரியவில்லை என உறுதிசெய்யுங்கள்."],
      ["செயலிகள் மற்றும் அனுமதிகள்", "அதிகாரப்பூர்வ கடையிலிருந்து மட்டும் செயலிகளை நிறுவுங்கள். கேமரா, ஒலிவாங்கி, இட அனுமதிகளைத் தேவைப்பட்டால் மட்டும் அளியுங்கள்."],
      ["மின்கலம் மற்றும் சார்ஜிங் பாதுகாப்பு", "சரியான சார்ஜரைப் பயன்படுத்துங்கள். சேதமான கம்பியைத் தவிர்த்து திறன்பேசி அதிகம் சூடாக விடாதீர்கள்."],
      ["திறன்பேசி பாதுகாப்புப் பட்டியல்", "திரைப் பூட்டு, புதுப்பிப்புகளைப் பயன்படுத்துங்கள். அறியாத செயலி/இணைப்பைத் தவிர்த்து OTP, PIN-ஐ ரகசியமாக வையுங்கள்."]
    ],
    whatsapp: [
      ["WhatsApp அடிப்படைகள்", "WhatsApp-ல் செய்தி அனுப்பவும், அழைக்கவும், படங்களைப் பகிரவும். அனுப்பும் முன் பெயர், எண்ணைச் சரிபார்க்கவும்."],
      ["தொடர்புகள் மற்றும் புதிய உரையாடல்", "சரியான தொடர்பைத் தேர்ந்தெடுக்கவும். பணம் அல்லது ஆவணம் அனுப்பும் முன் எண்ணை உறுதிப்படுத்துங்கள்."],
      ["செய்தி மற்றும் குரல் குறிப்பு", "செய்தியைத் தட்டச்சு செய்யவும் அல்லது குரல் குறிப்பைப் பதிவு செய்யவும். அனுப்பும் முன் பெறுபவரை மீண்டும் சரிபார்க்கவும்."],
      ["படங்கள், காணொளிகள், ஆவணங்கள்", "சரியான கோப்பைத் தேர்ந்தெடுக்கவும். தனிப்பட்ட விவரமுள்ள கோப்பை நம்பகமானவர்களுக்கு மட்டும் அனுப்புங்கள்."],
      ["குரல் மற்றும் காணொளி அழைப்புகள்", "அழைப்பவரை அறிந்தபின் பேசுங்கள். அறியாதவருடன் திரையைப் பகிரவோ வங்கி செயலியைத் திறக்கவோ வேண்டாம்."],
      ["குழுக்கள் மற்றும் பயனுள்ள அம்சங்கள்", "குழுவில் செய்திகள், படங்களைப் பகிரலாம். அறியாத குழுவிலிருந்து வெளியேறி சரிபார்க்காத செய்தியை அனுப்பாதீர்கள்."],
      ["தனியுரிமை, பாதுகாப்பு, மோசடிகள்", "உங்கள் சுயவிவரத்தை யார் பார்ப்பது என அமைக்கவும். OTP, PIN அல்லது பணம் கேட்கும் செய்திகளில் எச்சரிக்கை."],
      ["WhatsApp பாதுகாப்புப் பட்டியல்", "குறியீட்டைப் பகிர வேண்டாம்; அறியாத இணைப்பைத் திறக்க வேண்டாம்; சந்தேகக் கணக்கைத் தடுத்து புகாரளிக்கவும்."]
    ],
    payments: [
      ["UPI-ஐப் புரிந்துகொள்ளுங்கள்", "UPI வங்கிக் கணக்குகளுக்கு இடையே உடனடிப் பணப்பரிவர்த்தனை செய்கிறது. அனுப்ப PIN தேவை; பெற PIN தேவையில்லை."],
      ["UPI செயலியை அமைத்தல்", "நம்பகமான கடையிலிருந்து செயலியை நிறுவி வங்கியில் இணைந்த எண்ணைப் பயன்படுத்துங்கள். வங்கி விவரங்களைச் சரிபார்க்கவும்."],
      ["பணம் அனுப்புதல்", "UPI ID அல்லது எண்ணை உள்ளிட்டு பெயர், தொகையைச் சரிபார்த்த பிறகே PIN உள்ளிடுங்கள்."],
      ["பணம் பெறுதல்", "பணம் பெற QR ஸ்கேன் செய்யவோ UPI PIN உள்ளிடவோ தேவையில்லை. எதிர்பாராத கோரிக்கையை ஏற்காதீர்கள்."],
      ["QR குறியீட்டில் கட்டணம்", "கடையின் QR குறியீட்டை ஸ்கேன் செய்து பெயர், தொகையைச் சரிபார்க்கவும். வாங்கும்போது மட்டுமே PIN உள்ளிடுங்கள்."],
      ["பரிவர்த்தனை வரலாறு மற்றும் தோல்விக் கட்டணம்", "செயலி வரலாற்றில் நிலையைப் பாருங்கள். மீண்டும் செலுத்தும் முன் வங்கிக் கணக்கைச் சரிபார்க்கவும்."],
      ["UPI PIN மற்றும் கட்டணப் பாதுகாப்பு", "PIN-ஐ ரகசியமாக வைத்து பணம் அனுப்பும்போது மட்டும் உள்ளிடுங்கள். வங்கி ஊழியர் PIN கேட்கமாட்டார்."],
      ["UPI மோசடிக்குப் பிறகு செய்ய வேண்டியது", "வங்கியிடம் தெரிவித்து 1930-ஐ அழைக்கவும்; cybercrime.gov.in-ல் புகாரளிக்கவும்."]
    ],
    internet: [
      ["Google-இல் தேடுங்கள்", "முக்கிய சொற்களை உள்ளிட்டு தளத்தின் பெயரைப் பாருங்கள். நம்பகமான ஆதாரங்களின் தகவலை ஒப்பிடுங்கள்."],
      ["இணையதளங்களைப் புரிந்துகொள்ளுங்கள்", "இணைய முகவரியைச் சரிபார்த்து அரசு சேவைக்கு அதிகாரப்பூர்வ தளத்தைப் பயன்படுத்துங்கள். அறியாத தளத்தில் வங்கி விவரம் தராதீர்கள்."],
      ["Google Maps பயன்படுத்துங்கள்", "இடத்தைத் தேடி முகவரி, வழியைப் பாருங்கள். புறப்படும் முன் நேரத்தையும் விவரங்களையும் சரிபார்க்கவும்."],
      ["YouTube காணொளிகள்", "காணொளியைத் தேடித் தேர்ந்தெடுக்கவும். தவறான கூற்று, அறியாத இணைப்புகளில் எச்சரிக்கை; OTP/PIN தேவையில்லை."],
      ["கோப்புகளைப் பாதுகாப்பாகப் பதிவிறக்குங்கள்", "நம்பகமான தளத்திலிருந்து மட்டும் பதிவிறக்குங்கள். அறியாத கோப்பைத் திறக்காதீர்கள்; பாதுகாப்புப் புதுப்பிப்புகளைச் செய்யுங்கள்."],
      ["உலாவி தாவல்கள்", "பல பக்கங்களைத் தாவல்களில் திறக்கலாம். தனிப்பட்ட தகவல் உள்ள தளத்தைப் பயன்படுத்தியபின் தாவலை மூடுங்கள்."],
      ["பயனுள்ள தகவலை அறிதல்", "எழுதியவர், தேதி, ஆதாரத்தைப் பாருங்கள். உடல்நலம், பணம், அரசு தகவலுக்கு அதிகாரப்பூர்வ தளத்தைத் தேர்ந்தெடுக்கவும்."],
      ["பாதுகாப்பான இணையப் பழக்கங்கள்", "வலுவான கடவுச்சொல் பயன்படுத்தி OTP/PIN-ஐ ரகசியமாக வையுங்கள். அறியாத இணைப்பு, பொது Wi-Fi வங்கி பயன்பாட்டைத் தவிர்க்கவும்."]
    ],
    safety: [
      ["OTP மற்றும் PIN-ஐப் பாதுகாக்கவும்", "OTP, UPI PIN, கடவுச்சொல்லை யாரிடமும் பகிர வேண்டாம்; வங்கி அல்லது காவல்துறை எனக் கூறினாலும் பகிராதீர்கள்."],
      ["போலி அழைப்புகளில் எச்சரிக்கை", "மிரட்டும் அல்லது பணம் கேட்கும் அழைப்பைத் துண்டித்து அதிகாரப்பூர்வ எண்ணில் தொடர்புகொள்ளுங்கள்."],
      ["WhatsApp மோசடிகளை அறிதல்", "பரிசு, வேலை, பார்சல், குடும்ப அவசரச் செய்திகளைச் சரிபார்த்து தெரிந்த எண்ணுக்கு அழையுங்கள்."],
      ["போலி இணைப்புகளைத் தவிர்க்கவும்", "இணைய முகவரியைப் பார்த்த பிறகே திறக்கவும். அறியாத தளத்தில் OTP, கடவுச்சொல், கட்டண விவரம் உள்ளிடாதீர்கள்."],
      ["இணைய வங்கிப் பாதுகாப்பு", "வங்கி செயலியை நீங்களே திறந்து அதிகாரப்பூர்வ தளத்தைப் பயன்படுத்துங்கள். திரைப் பகிர்வு செயலியை நிறுவாதீர்கள்."],
      ["லாட்டரி மற்றும் பரிசு மோசடிகள்", "நீங்கள் பங்கேற்காத போட்டியின் பரிசு சந்தேகமானது. பரிசுக்காகப் பணம் அனுப்பாதீர்கள்."],
      ["UPI கட்டண மோசடியைத் தவிர்க்கவும்", "பணம் பெற PIN தேவையில்லை. QR-க்குப் பின் பெயரைப் பார்த்து அறியாத கோரிக்கையை ஏற்காதீர்கள்."],
      ["மோசடிக்குப் பிறகு செய்ய வேண்டியது", "வங்கியிடம் தெரிவித்து 1930-ஐ அழைக்கவும்; cybercrime.gov.in-ல் புகாரளித்து ஆதாரங்களைச் சேமிக்கவும்."]
    ],
    services: [
      ["அரசு இணையச் சேவைகளைப் பயன்படுத்துங்கள்", "அதிகாரப்பூர்வ தளத்தைப் பயன்படுத்தி முகவரியைச் சரிபார்க்கவும். அறியாதவரிடம் OTP கூறாதீர்கள்."],
      ["இணையப் படிவங்களை நிரப்புதல்", "சரியான விவரங்களை உள்ளிட்டு அனுப்பும் முன் சரிபார்க்கவும். ரசீது அல்லது குறிப்பு எண்ணைச் சேமியுங்கள்."],
      ["ஆவணங்களைப் பதிவேற்றுதல்", "சரியான தெளிவான கோப்பைத் தேர்ந்தெடுக்கவும். தளம் அதிகாரப்பூர்வமானதா உறுதிசெய்து தேவையற்ற தகவலை மறைக்கவும்."],
      ["DigiLocker-ஐப் புரிந்துகொள்ளுங்கள்", "DigiLocker-ல் டிஜிட்டல் ஆவணங்களைப் பெறவும் சேமிக்கவும் முடியும். அதிகாரப்பூர்வ செயலியைப் பயன்படுத்தி OTP-ஐப் பகிராதீர்கள்."],
      ["இணையத்தில் நேரம் முன்பதிவு", "சேவை, நேரத்தைத் தேர்ந்தெடுத்து உறுதிப்படுத்தல் செய்தியைச் சேமியுங்கள். தேதி, இடத்தை மீண்டும் சரிபார்க்கவும்."],
      ["பதிவு மற்றும் உள்நுழைவு", "அதிகாரப்பூர்வ தளத்தில் பதிவு செய்து தனித்துவமான கடவுச்சொல் வையுங்கள். OTP-ஐ நீங்களே உள்ளிடுங்கள்."],
      ["விண்ணப்ப நிலையைச் சரிபார்க்கவும்", "குறிப்பு எண்ணைப் பயன்படுத்தி அதிகாரப்பூர்வ தளத்தில் நிலையைப் பாருங்கள். அழைப்பாளரிடம் OTP கூறாதீர்கள்."],
      ["டிஜிட்டல் சேவைகளைப் பாதுகாப்பாகப் பயன்படுத்துங்கள்", "அதிகாரப்பூர்வ தளத்தைப் பயன்படுத்தி பொது சாதனத்திலிருந்து வெளியேறுங்கள். சந்தேகக் கோரிக்கை வந்தால் நிறுத்துங்கள்."]
    ]
  },
  te: {
    smartphone: [
      ["మీ స్మార్ట్‌ఫోన్‌ను తెలుసుకోండి", "కాల్‌లు, సందేశాలు, ఇంటర్నెట్, ఫోటోలు, యాప్‌లకు స్మార్ట్‌ఫోన్ ఉపయోగపడుతుంది. బటన్లు, టచ్‌స్క్రీన్, కెమెరా, ఛార్జింగ్ పోర్ట్‌ను గుర్తించండి."],
      ["టచ్‌స్క్రీన్ మరియు సంజ్ఞలు", "తాకి తెరవండి, స్వైప్ చేసి కదపండి, పైకి కిందికి జరిపి చూడండి. రెండు వేళ్లతో జూమ్ చేయండి."],
      ["సెట్టింగ్‌లు మరియు వ్యక్తిగతీకరణ", "వెలుతురు, రింగ్‌టోన్, Wi-Fi, మొబైల్ డేటా, నోటిఫికేషన్‌లను మార్చండి. స్క్రీన్ లాక్ ఉంచండి."],
      ["కాల్స్ మరియు పరిచయాలు", "నంబర్‌కు కాల్ చేసి పరిచయాన్ని సేవ్ చేయండి. తెలియని కాలర్‌కు OTP, PIN, పాస్‌వర్డ్ చెప్పకండి."],
      ["కెమెరా, ఫోటోలు, వీడియోలు", "ఫోటో తీసి గ్యాలరీలో చూడండి. పంచుకునే ముందు సరైన వ్యక్తిని ఎంచుకుని వ్యక్తిగత సమాచారం లేదని చూడండి."],
      ["యాప్‌లు మరియు అనుమతులు", "అధికారిక స్టోర్ నుంచే యాప్‌లు ఇన్‌స్టాల్ చేయండి. కెమెరా, మైక్రోఫోన్, స్థాన అనుమతులను అవసరమైనప్పుడే ఇవ్వండి."],
      ["బ్యాటరీ మరియు ఛార్జింగ్ భద్రత", "సరైన ఛార్జర్ వాడండి. దెబ్బతిన్న కేబుల్ వాడకండి, ఫోన్ ఎక్కువ వేడెక్కనివ్వకండి."],
      ["స్మార్ట్‌ఫోన్ భద్రత జాబితా", "స్క్రీన్ లాక్, అప్‌డేట్‌లు వాడండి. తెలియని యాప్‌లు, లింకులను తప్పించి OTP, PIN‌ను రహస్యంగా ఉంచండి."]
    ],
    whatsapp: [
      ["WhatsApp ప్రాథమికాలు", "WhatsApp‌లో సందేశాలు పంపండి, కాల్స్ చేయండి, ఫోటోలు పంచుకోండి. పంపే ముందు పేరు, నంబర్ చూడండి."],
      ["పరిచయాలు మరియు కొత్త చాట్", "సరైన పరిచయాన్ని ఎంచుకోండి. డబ్బు లేదా పత్రం పంపేముందు నంబర్‌ను నిర్ధారించండి."],
      ["సందేశాలు మరియు వాయిస్ నోట్లు", "సందేశం టైప్ చేయండి లేదా వాయిస్ నోట్ రికార్డ్ చేయండి. పంపే ముందు గ్రహీతను తనిఖీ చేయండి."],
      ["ఫోటోలు, వీడియోలు, పత్రాలు", "సరైన ఫైల్‌ను ఎంచుకోండి. వ్యక్తిగత వివరాలున్న ఫైల్‌ను నమ్మకమైన వారికి మాత్రమే పంపండి."],
      ["వాయిస్ మరియు వీడియో కాల్స్", "కాలర్‌ను గుర్తించిన తర్వాత మాట్లాడండి. తెలియని వారితో స్క్రీన్ పంచుకోవద్దు లేదా బ్యాంక్ యాప్ తెరవకండి."],
      ["గ్రూపులు మరియు ఉపయోగకరమైన సౌకర్యాలు", "గ్రూపులో సందేశాలు, మీడియా పంచుకోవచ్చు. తెలియని గ్రూప్ నుంచి బయటకు వచ్చి తనిఖీ చేయని సమాచారాన్ని పంపకండి."],
      ["గోప్యత, భద్రత మరియు మోసాలు", "మీ ప్రొఫైల్‌ను ఎవరు చూడాలో ఎంచుకోండి. OTP, PIN, డబ్బు అడిగే సందేశాల పట్ల జాగ్రత్త."],
      ["WhatsApp భద్రత జాబితా", "ధృవీకరణ కోడ్ ఇవ్వకండి, తెలియని లింక్ తెరవకండి, అనుమానాస్పద ఖాతాను బ్లాక్ చేసి నివేదించండి."]
    ],
    payments: [
      ["UPIని అర్థం చేసుకోండి", "UPI బ్యాంకు ఖాతాల మధ్య వెంటనే చెల్లింపు చేస్తుంది. పంపడానికి PIN కావాలి; పొందడానికి PIN అవసరం లేదు."],
      ["UPI యాప్‌ను సెటప్ చేయండి", "నమ్మకమైన స్టోర్ నుంచి యాప్ ఇన్‌స్టాల్ చేసి బ్యాంకుకు అనుసంధానమైన నంబర్ వాడండి. బ్యాంకు వివరాలు తనిఖీ చేయండి."],
      ["డబ్బు పంపండి", "UPI ID లేదా నంబర్ నమోదు చేసి పేరు, మొత్తాన్ని తనిఖీ చేసిన తర్వాతే PIN నమోదు చేయండి."],
      ["డబ్బు పొందండి", "డబ్బు పొందడానికి QR స్కాన్ లేదా UPI PIN అవసరం లేదు. అనుకోని అభ్యర్థనను అంగీకరించకండి."],
      ["QR కోడ్‌తో చెల్లించండి", "దుకాణం QR కోడ్ స్కాన్ చేసి పేరు, మొత్తాన్ని చూడండి. కొనుగోలు చేస్తున్నప్పుడు మాత్రమే PIN నమోదు చేయండి."],
      ["లావాదేవీ చరిత్ర, విఫల చెల్లింపులు", "యాప్ చరిత్రలో స్థితిని చూడండి. మళ్లీ చెల్లించే ముందు బ్యాంకు ఖాతాలో డబ్బు తగ్గిందా తనిఖీ చేయండి."],
      ["UPI PIN మరియు చెల్లింపు భద్రత", "PIN‌ను రహస్యంగా ఉంచి డబ్బు పంపేటప్పుడు మాత్రమే నమోదు చేయండి. బ్యాంకు ఉద్యోగి PIN అడగరు."],
      ["UPI మోసం జరిగితే చేయాల్సింది", "వెంటనే బ్యాంకుకు చెప్పి 1930కు కాల్ చేయండి; cybercrime.gov.inలో ఫిర్యాదు చేయండి."]
    ],
    internet: [
      ["Googleలో వెతకడం", "ముఖ్య పదాలను టైప్ చేసి వెబ్‌సైట్ పేరును తనిఖీ చేయండి. నమ్మకమైన వనరులతో సమాచారాన్ని పోల్చండి."],
      ["వెబ్‌సైట్‌లను అర్థం చేసుకోండి", "వెబ్ చిరునామాను తనిఖీ చేయండి. ప్రభుత్వ సేవకు అధికారిక సైట్ వాడి తెలియని సైట్‌లో బ్యాంకు వివరాలు ఇవ్వకండి."],
      ["Google Maps వాడండి", "ప్రదేశం వెతికి చిరునామా, మార్గం చూడండి. బయలుదేరే ముందు సమయం, వివరాలు తనిఖీ చేయండి."],
      ["YouTube వీడియోలు చూడండి", "వీడియోను వెతికి ఎంచుకోండి. తప్పుదారి పట్టించే మాటలు, తెలియని లింకుల పట్ల జాగ్రత్త; OTP/PIN అవసరం లేదు."],
      ["ఫైళ్లను సురక్షితంగా డౌన్‌లోడ్ చేయండి", "నమ్మకమైన సైట్ లేదా అధికారిక స్టోర్ నుంచే పొందండి. తెలియని ఫైల్ తెరవకండి, భద్రతా అప్‌డేట్ చేయండి."],
      ["బ్రౌజర్ ట్యాబ్‌లు", "అనేక పేజీలను ట్యాబ్‌లలో తెరవవచ్చు. వ్యక్తిగత సమాచారం ఉన్న సైట్ వాడిన తర్వాత ట్యాబ్ మూసేయండి."],
      ["ఉపయోగకరమైన సమాచారాన్ని గుర్తించండి", "రచయిత, తేదీ, మూలాన్ని తనిఖీ చేయండి. ఆరోగ్యం, డబ్బు, ప్రభుత్వ సమాచారం కోసం అధికారిక సైట్ ఎంచుకోండి."],
      ["సురక్షిత ఇంటర్నెట్ అలవాట్లు", "బలమైన పాస్‌వర్డ్ వాడి OTP/PIN రహస్యంగా ఉంచండి. తెలియని లింకులు, పబ్లిక్ Wi-Fi బ్యాంకింగ్‌ను నివారించండి."]
    ],
    safety: [
      ["OTP మరియు PINను రక్షించండి", "OTP, UPI PIN, పాస్‌వర్డ్‌ను ఎవరితోనూ పంచుకోకండి; బ్యాంకు లేదా పోలీసులమని చెప్పినా ఇవ్వకండి."],
      ["నకిలీ కాల్స్ పట్ల జాగ్రత్త", "బెదిరించే లేదా డబ్బు అడిగే కాల్‌ను కట్ చేసి అధికారిక నంబర్‌కు సంప్రదించండి."],
      ["WhatsApp మోసాలను గుర్తించండి", "బహుమతి, ఉద్యోగం, పార్సిల్, కుటుంబ అత్యవసర సందేశాలను తనిఖీ చేసి తెలిసిన నంబర్‌కు కాల్ చేయండి."],
      ["నకిలీ లింకులను నివారించండి", "లింక్ చిరునామా చూసి తెరవండి. తెలియని సైట్‌లో పాస్‌వర్డ్, OTP, చెల్లింపు వివరాలు ఇవ్వకండి."],
      ["ఆన్‌లైన్ బ్యాంకింగ్ భద్రత", "బ్యాంకు యాప్‌ను మీరే తెరిచి అధికారిక సైట్ వాడండి. స్క్రీన్ షేరింగ్ యాప్ ఇన్‌స్టాల్ చేయకండి."],
      ["లాటరీ, బహుమతి మోసాలు", "మీరు పాల్గొనని పోటీ బహుమతి అనుమానాస్పదం. బహుమతి కోసం ఫీజు లేదా పన్ను పంపకండి."],
      ["UPI చెల్లింపు మోసాన్ని నివారించండి", "డబ్బు పొందడానికి PIN అవసరం లేదు. QR తర్వాత పేరు చూడండి; తెలియని అభ్యర్థనను అంగీకరించకండి."],
      ["మోసం తర్వాత చేయాల్సింది", "బ్యాంకుకు చెప్పి 1930కు కాల్ చేయండి, cybercrime.gov.inలో ఫిర్యాదు చేసి ఆధారాలు భద్రపరచండి."]
    ],
    services: [
      ["ప్రభుత్వ ఆన్‌లైన్ సేవలు", "అధికారిక వెబ్‌సైట్ లేదా యాప్ వాడి చిరునామా తనిఖీ చేయండి. తెలియని వ్యక్తికి OTP చెప్పకండి."],
      ["ఆన్‌లైన్ ఫారమ్ నింపండి", "సరైన వివరాలు నమోదు చేసి పంపేముందు తనిఖీ చేయండి. రసీదు లేదా సూచన సంఖ్యను దాచండి."],
      ["పత్రాలను అప్‌లోడ్ చేయండి", "సరైన స్పష్టమైన ఫైల్ ఎంచుకోండి. సైట్ అధికారికమని నిర్ధారించి అవసరం లేని వివరాలను దాచండి."],
      ["DigiLockerను అర్థం చేసుకోండి", "DigiLockerలో డిజిటల్ పత్రాలు పొందవచ్చు, దాచవచ్చు. అధికారిక యాప్ వాడి OTP పంచుకోకండి."],
      ["ఆన్‌లైన్ అపాయింట్‌మెంట్ బుక్ చేయండి", "సేవ, సమయాన్ని ఎంచుకుని వివరాలను తనిఖీ చేయండి. నిర్ధారణ సందేశాన్ని దాచుకుని తేదీ, ప్రదేశం చూడండి."],
      ["నమోదు మరియు లాగిన్", "అధికారిక సైట్‌లో నమోదు చేసి ప్రత్యేక పాస్‌వర్డ్ వాడండి. OTPను మీరే నమోదు చేయండి."],
      ["దరఖాస్తు స్థితిని తనిఖీ చేయండి", "రసీదులోని సూచన సంఖ్యతో అధికారిక సైట్‌లో స్థితి చూడండి. కాలర్‌కు OTP చెప్పకండి."],
      ["డిజిటల్ సేవలను సురక్షితంగా వాడండి", "అధికారిక సైట్ తనిఖీ చేసి పబ్లిక్ పరికరం నుంచి లాగ్‌అవుట్ చేయండి. అనుమానాస్పద అభ్యర్థన వస్తే ఆపండి."]
    ]
  }
};

for (const [language, modules] of Object.entries(offlineChapterTranslations)) {
  for (const [moduleKey, pages] of Object.entries(modules)) {
    const lessonModule = lessons[moduleKey];
    if (!lessonModule || lessonModule.pages.length !== pages.length) continue;
    lessonModule.title[language] = {
      smartphone: "Smartphone Basics", whatsapp: "WhatsApp", payments: "Digital Payments & UPI",
      internet: "Internet & Google", safety: "Safety & Scam Protection", services: "Digital Services"
    }[moduleKey];
    lessonModule.pages.forEach((page, index) => {
      const [title, summary] = pages[index];
      page.title[language] = title;
      page.content[language] = `<div class="lesson-card"><h3>${title}</h3><p>${summary}</p></div>`;
    });
  }
}

function getLessonContentLanguage(language = state.language) {
  if (["en", "hi", "mr"].includes(language)) return language;
  return offlineChapterTranslations[language] ? language : "en";
}

const quizQuestions = [
  {
    module: "smartphone",

    question: {
      en: "Which button is mainly used to turn a smartphone on or off?",
      hi: "स्मार्टफोन को चालू या बंद करने के लिए मुख्य रूप से कौन सा बटन इस्तेमाल होता है?",
      mr: "स्मार्टफोन सुरू किंवा बंद करण्यासाठी मुख्यतः कोणते बटण वापरले जाते?"
    },

    options: {
      en: ["Volume button", "Power button", "Camera button", "Home button"],
      hi: ["Volume button", "Power button", "Camera button", "Home button"],
      mr: ["Volume button", "Power button", "Camera button", "Home button"]
    },

    answer: 1
  },

  {
    module: "smartphone",

    question: {
      en: "What does a swipe mean?",
      hi: "Swipe का क्या मतलब है?",
      mr: "Swipe म्हणजे काय?"
    },

    options: {
      en: [
        "Touching the screen once",
        "Moving your finger across the screen",
        "Turning the phone off",
        "Charging the phone"
      ],

      hi: [
        "स्क्रीन को एक बार छूना",
        "स्क्रीन पर उंगली को चलाना",
        "फोन बंद करना",
        "फोन चार्ज करना"
      ],

      mr: [
        "स्क्रीनला एकदा स्पर्श करणे",
        "स्क्रीनवर बोट फिरवणे",
        "फोन बंद करणे",
        "फोन चार्ज करणे"
      ]
    },

    answer: 1
  },

  {
    module: "smartphone",

    question: {
      en: "Where should you preferably install apps from?",
      hi: "Apps को मुख्य रूप से कहां से install करना चाहिए?",
      mr: "Apps शक्यतो कुठून install करावेत?"
    },

    options: {
      en: [
        "Unknown links",
        "Random websites",
        "Official app store",
        "Unknown APK files"
      ],

      hi: [
        "Unknown links",
        "Random websites",
        "Official app store",
        "Unknown APK files"
      ],

      mr: [
        "Unknown links",
        "Random websites",
        "Official app store",
        "Unknown APK files"
      ]
    },

    answer: 2
  },

  {
    module: "smartphone",

    question: {
      en: "What should you do if your phone becomes unusually hot while charging?",
      hi: "Charging के दौरान फोन बहुत ज्यादा गर्म हो जाए तो क्या करना चाहिए?",
      mr: "Charging करताना फोन खूप गरम झाल्यास काय करावे?"
    },

    options: {
      en: [
        "Cover the phone",
        "Keep charging it",
        "Unplug it and get it checked",
        "Put it in water"
      ],

      hi: [
        "फोन को ढक दें",
        "Charging जारी रखें",
        "Unplug करें और जांच करवाएं",
        "फोन को पानी में रखें"
      ],

      mr: [
        "फोन झाकून ठेवा",
        "Charging सुरू ठेवा",
        "Unplug करा आणि तपासून घ्या",
        "फोन पाण्यात ठेवा"
      ]
    },

    answer: 2
  },

  {
    module: "smartphone",

    question: {
      en: "Which is a good smartphone safety practice?",
      hi: "इनमें से कौन सी अच्छी smartphone safety practice है?",
      mr: "यापैकी कोणती चांगली smartphone safety practice आहे?"
    },

    options: {
      en: [
        "Share your PIN with everyone",
        "Install every APK you receive",
        "Use a screen lock",
        "Click every unknown link"
      ],

      hi: [
        "अपना PIN सबको बताना",
        "हर APK install करना",
        "Screen lock इस्तेमाल करना",
        "हर unknown link पर click करना"
      ],

      mr: [
        "तुमचा PIN सर्वांना सांगणे",
        "प्रत्येक APK install करणे",
        "Screen lock वापरणे",
        "प्रत्येक unknown link वर click करणे"
      ]
    },

    answer: 2
  },

  {
    question: {
      en: "Before making a UPI payment, what should you check?",
      hi: "UPI Payment करने से पहले क्या जांचना चाहिए?",
      mr: "UPI Payment करण्यापूर्वी काय तपासावे?"
    },
    options: {
      en: [
        "Receiver name",
        "Phone wallpaper",
        "Battery percentage",
        "Phone colour"
      ],
      hi: [
        "Receiver का नाम",
        "Phone Wallpaper",
        "Battery Percentage",
        "Phone का रंग"
      ],
      mr: [
        "Receiver चे नाव",
        "Phone Wallpaper",
        "Battery Percentage",
        "Phone चा रंग"
      ]
    },
    answer: 0
  },

  {
    question: {
      en: "What should you do with a suspicious link?",
      hi: "संदिग्ध Link के साथ क्या करना चाहिए?",
      mr: "संशयास्पद Link चे काय करावे?"
    },
    options: {
      en: [
        "Click immediately",
        "Verify it first",
        "Share your password",
        "Send it to everyone"
      ],
      hi: [
        "तुरंत Click करें",
        "पहले Verify करें",
        "Password भेजें",
        "सबको भेजें"
      ],
      mr: [
        "लगेच Click करा",
        "आधी Verify करा",
        "Password पाठवा",
        "सर्वांना पाठवा"
      ]
    },
    answer: 1
  },
  {
  module: "whatsapp",

  question: {
    en: "Someone on WhatsApp asks for your OTP to verify your account. What should you do?",
    hi: "WhatsApp पर कोई व्यक्ति आपके account को verify करने के लिए OTP मांगता है। आपको क्या करना चाहिए?",
    mr: "WhatsApp वर कोणीतरी तुमचे account verify करण्यासाठी OTP मागतो. तुम्ही काय करावे?"
  },

  options: {
    en: [
      "Share the OTP immediately",
      "Send the OTP only if they sound trustworthy",
      "Do not share the OTP and verify the request",
      "Forward the OTP to a family group"
    ],

    hi: [
      "OTP तुरंत शेयर करें",
      "अगर व्यक्ति भरोसेमंद लगे तो OTP दें",
      "OTP शेयर न करें और request को verify करें",
      "OTP family group में भेजें"
    ],

    mr: [
      "OTP लगेच शेअर करा",
      "व्यक्ती विश्वासार्ह वाटल्यास OTP द्या",
      "OTP शेअर करू नका आणि request verify करा",
      "OTP family group मध्ये पाठवा"
    ]
  },

  answer: 2
},

{
  module: "whatsapp",

  question: {
    en: "You receive a WhatsApp message saying you won a lottery and must click a link immediately. What is the safest action?",
    hi: "WhatsApp पर आपको message मिलता है कि आपने lottery जीती है और तुरंत link पर click करना है। सबसे सुरक्षित क्या है?",
    mr: "WhatsApp वर तुम्हाला lottery जिंकल्याचा message येतो आणि लगेच link वर click करण्यास सांगितले जाते. सर्वात सुरक्षित कृती कोणती?"
  },

  options: {
    en: [
      "Click the link immediately",
      "Forward it to friends",
      "Verify the message and avoid suspicious links",
      "Enter your bank details"
    ],

    hi: [
      "तुरंत link पर click करें",
      "Friends को forward करें",
      "Message verify करें और suspicious links से बचें",
      "Bank details डालें"
    ],

    mr: [
      "लगेच link वर click करा",
      "Friends ला forward करा",
      "Message verify करा आणि suspicious links टाळा",
      "Bank details टाका"
    ]
  },

  answer: 2
},

{
  module: "whatsapp",

  question: {
    en: "You want to send a private document to your brother, but two contacts have similar names. What should you do first?",
    hi: "आपको अपने भाई को private document भेजना है, लेकिन दो contacts के नाम एक जैसे हैं। सबसे पहले क्या करना चाहिए?",
    mr: "तुम्हाला भावाला private document पाठवायचा आहे, पण दोन contacts ची नावे सारखी आहेत. प्रथम काय करावे?"
  },

  options: {
    en: [
      "Send it to either contact",
      "Check the contact details before sending",
      "Send it to the group",
      "Post it as a status"
    ],

    hi: [
      "किसी भी contact को भेज दें",
      "भेजने से पहले contact details check करें",
      "Group में भेज दें",
      "Status पर डाल दें"
    ],

    mr: [
      "कोणत्याही contact ला पाठवा",
      "पाठवण्यापूर्वी contact details तपासा",
      "Group मध्ये पाठवा",
      "Status वर टाका"
    ]
  },

  answer: 1
},

{
  module: "whatsapp",

  question: {
    en: "A friend sends you a message asking for money urgently because of an emergency. What should you do?",
    hi: "एक दोस्त WhatsApp पर emergency बताकर तुरंत पैसे मांगता है। आपको क्या करना चाहिए?",
    mr: "एक मित्र WhatsApp वर emergency सांगून तातडीने पैसे मागतो. तुम्ही काय करावे?"
  },

  options: {
    en: [
      "Send money immediately",
      "Verify the person's identity through another method",
      "Share your OTP",
      "Send your bank password"
    ],

    hi: [
      "तुरंत पैसे भेज दें",
      "दूसरे माध्यम से व्यक्ति की पहचान verify करें",
      "OTP शेयर करें",
      "Bank password भेजें"
    ],

    mr: [
      "लगेच पैसे पाठवा",
      "दुसऱ्या माध्यमातून व्यक्तीची ओळख verify करा",
      "OTP शेअर करा",
      "Bank password पाठवा"
    ]
  },

  answer: 1
},

{
  module: "whatsapp",

  question: {
    en: "You accidentally receive a suspicious APK file on WhatsApp. What should you do?",
    hi: "आपको WhatsApp पर गलती से एक suspicious APK file मिलती है। आपको क्या करना चाहिए?",
    mr: "तुम्हाला WhatsApp वर एक suspicious APK file मिळते. तुम्ही काय करावे?"
  },

  options: {
    en: [
      "Install it immediately",
      "Forward it to others",
      "Do not install it and delete/report it if necessary",
      "Open it to see what it contains"
    ],

    hi: [
      "तुरंत install करें",
      "दूसरों को forward करें",
      "Install न करें और जरूरत हो तो delete/report करें",
      "अंदर क्या है देखने के लिए open करें"
    ],

    mr: [
      "लगेच install करा",
      "इतरांना forward करा",
      "Install करू नका आणि गरज असल्यास delete/report करा",
      "त्यात काय आहे ते पाहण्यासाठी open करा"
    ]
  },

  answer: 2
},

{
  module: "whatsapp",

  question: {
    en: "You are added to a group where unknown people repeatedly send suspicious links. What is the safest choice?",
    hi: "आपको एक ऐसे group में add किया गया है जहां unknown लोग बार-बार suspicious links भेजते हैं। सबसे सुरक्षित विकल्प क्या है?",
    mr: "तुम्हाला अशा group मध्ये add केले आहे जिथे unknown लोक वारंवार suspicious links पाठवतात. सर्वात सुरक्षित पर्याय कोणता?"
  },

  options: {
    en: [
      "Open every link",
      "Share your personal details",
      "Avoid the links and leave/report the group if necessary",
      "Send money to the group admin"
    ],

    hi: [
      "हर link खोलें",
      "अपनी personal details शेयर करें",
      "Links से बचें और जरूरत हो तो group leave/report करें",
      "Group admin को पैसे भेजें"
    ],

    mr: [
      "प्रत्येक link उघडा",
      "तुमची personal details शेअर करा",
      "Links टाळा आणि गरज असल्यास group leave/report करा",
      "Group admin ला पैसे पाठवा"
    ]
  },

  answer: 2
},

{
  module: "whatsapp",

  question: {
    en: "During a WhatsApp video call, an unknown person asks you to share your screen and open your banking app. What should you do?",
    hi: "WhatsApp video call में कोई unknown व्यक्ति आपको screen share करके banking app खोलने को कहता है। आपको क्या करना चाहिए?",
    mr: "WhatsApp video call मध्ये unknown व्यक्ती तुम्हाला screen share करून banking app उघडण्यास सांगते. तुम्ही काय करावे?"
  },

  options: {
    en: [
      "Do it immediately",
      "Share only the banking screen",
      "Refuse and end the call",
      "Share your PIN"
    ],

    hi: [
      "तुरंत करें",
      "सिर्फ banking screen share करें",
      "मना करें और call बंद करें",
      "अपना PIN बताएं"
    ],

    mr: [
      "लगेच करा",
      "फक्त banking screen share करा",
      "नकार द्या आणि call बंद करा",
      "तुमचा PIN सांगा"
    ]
  },

  answer: 2
},

{
  module: "whatsapp",

  question: {
    en: "You receive a message saying your WhatsApp account will be closed unless you click a link. What should you do?",
    hi: "आपको message मिलता है कि link पर click नहीं किया तो आपका WhatsApp account बंद हो जाएगा। आपको क्या करना चाहिए?",
    mr: "तुम्हाला message येतो की link वर click केले नाही तर तुमचे WhatsApp account बंद होईल. तुम्ही काय करावे?"
  },

  options: {
    en: [
      "Click immediately",
      "Share the message with everyone",
      "Do not click and verify through official WhatsApp settings/help",
      "Send your verification code"
    ],

    hi: [
      "तुरंत click करें",
      "सबको message forward करें",
      "Click न करें और official WhatsApp settings/help से verify करें",
      "Verification code भेजें"
    ],

    mr: [
      "लगेच click करा",
      "सर्वांना message forward करा",
      "Click करू नका आणि official WhatsApp settings/help मधून verify करा",
      "Verification code पाठवा"
    ]
  },

  answer: 2
},

{
  module: "whatsapp",

  question: {
    en: "You want only trusted people to see your WhatsApp profile information. What should you do?",
    hi: "आप चाहते हैं कि केवल trusted लोग आपकी WhatsApp profile information देखें। आपको क्या करना चाहिए?",
    mr: "तुमची WhatsApp profile information फक्त trusted लोकांनी पाहावी असे तुम्हाला वाटते. तुम्ही काय करावे?"
  },

  options: {
    en: [
      "Share it publicly",
      "Review and adjust privacy settings",
      "Send your profile information to everyone",
      "Disable your phone lock"
    ],

    hi: [
      "उसे public रखें",
      "Privacy settings को review और adjust करें",
      "सबको profile information भेजें",
      "Phone lock बंद करें"
    ],

    mr: [
      "ती public ठेवा",
      "Privacy settings review आणि adjust करा",
      "सर्वांना profile information पाठवा",
      "Phone lock बंद करा"
    ]
  },

  answer: 1
},

{
  module: "whatsapp",

  question: {
    en: "Someone sends you a forwarded message claiming that a medicine can cure every disease. What should you do before forwarding it?",
    hi: "कोई आपको forwarded message भेजता है जिसमें दावा है कि एक medicine हर बीमारी ठीक कर सकती है। Forward करने से पहले क्या करना चाहिए?",
    mr: "कोणी तुम्हाला forwarded message पाठवतो ज्यात एक medicine प्रत्येक आजार बरा करू शकते असा दावा आहे. Forward करण्यापूर्वी काय करावे?"
  },

  options: {
    en: [
      "Forward it immediately",
      "Check the information using a reliable source",
      "Add more claims to it",
      "Send it to every group"
    ],

    hi: [
      "तुरंत forward करें",
      "Reliable source से information check करें",
      "उसमें और claims जोड़ें",
      "हर group में भेजें"
    ],

    mr: [
      "लगेच forward करा",
      "Reliable source मधून information तपासा",
      "त्यात आणखी claims जोडा",
      "प्रत्येक group मध्ये पाठवा"
    ]
  },

  answer: 1
},
  {
    module: "payments",
    question: {
      en: "What should you check before sending UPI money?",
      hi: "UPI से पैसे भेजने से पहले क्या जांचें?",
      mr: "UPI ने पैसे पाठवण्यापूर्वी काय तपासावे?"
    },
    options: {
      en: ["Receiver name and amount", "Wallpaper", "Battery colour", "Phone model"],
      hi: ["प्राप्तकर्ता का नाम और रकम", "वॉलपेपर", "बैटरी का रंग", "फोन का मॉडल"],
      mr: ["प्राप्तकर्त्याचे नाव आणि रक्कम", "वॉलपेपर", "बॅटरीचा रंग", "फोनचे मॉडेल"]
    },
    answer: 0
  },
  {
    module: "payments",
    question: {
      en: "Does receiving money require entering your UPI PIN?",
      hi: "पैसे प्राप्त करने के लिए UPI PIN डालना जरूरी है?",
      mr: "पैसे मिळवण्यासाठी UPI PIN टाकणे आवश्यक आहे का?"
    },
    options: {
      en: ["Yes, always", "No", "Only at night", "Only for small amounts"],
      hi: ["हां, हमेशा", "नहीं", "केवल रात में", "केवल छोटी रकम के लिए"],
      mr: ["हो, नेहमी", "नाही", "फक्त रात्री", "फक्त कमी रकमेसाठी"]
    },
    answer: 1
  },
  {
    module: "payments",
    question: {
      en: "A stranger asks for your UPI PIN to give you a refund. What should you do?",
      hi: "रिफंड देने के लिए अनजान व्यक्ति UPI PIN मांगे तो क्या करें?",
      mr: "रिफंड देण्यासाठी अनोळखी व्यक्ती UPI PIN मागत असेल तर काय कराल?"
    },
    options: {
      en: ["Share it", "Refuse and contact official support", "Send an OTP too", "Install their app"],
      hi: ["PIN बता दें", "मना करें और आधिकारिक सहायता लें", "OTP भी भेजें", "उनका ऐप इंस्टॉल करें"],
      mr: ["PIN सांगा", "नकार द्या आणि अधिकृत मदत घ्या", "OTP सुद्धा द्या", "त्यांचे ॲप इंस्टॉल करा"]
    },
    answer: 1
  },
  {
    module: "payments",
    question: {
      en: "What should you do before paying a shop by QR code?",
      hi: "QR कोड से दुकान पर भुगतान करने से पहले क्या करें?",
      mr: "QR कोडने दुकानात पेमेंट करण्यापूर्वी काय करावे?"
    },
    options: {
      en: ["Check merchant name and amount", "Enter PIN immediately", "Trust every QR", "Ignore the amount"],
      hi: ["दुकानदार का नाम और रकम जांचें", "तुरंत PIN डालें", "हर QR पर भरोसा करें", "रकम न देखें"],
      mr: ["दुकानदाराचे नाव आणि रक्कम तपासा", "लगेच PIN टाका", "प्रत्येक QR वर विश्वास ठेवा", "रक्कम दुर्लक्षित करा"]
    },
    answer: 0
  },
  {
    module: "payments",
    question: {
      en: "A payment shows pending. What is the safest first step?",
      hi: "पेमेंट Pending दिखे तो सबसे पहले क्या करें?",
      mr: "पेमेंट Pending दिसल्यास प्रथम काय करावे?"
    },
    options: {
      en: ["Pay again immediately", "Check status and bank account", "Share your PIN", "Delete the app"],
      hi: ["तुरंत फिर से भुगतान करें", "स्टेटस और बैंक खाता जांचें", "PIN साझा करें", "ऐप हटाएं"],
      mr: ["लगेच पुन्हा पेमेंट करा", "स्थिती आणि बँक खाते तपासा", "PIN शेअर करा", "ॲप हटवा"]
    },
    answer: 1
  },
  {
    module: "payments",
    question: {
      en: "Where should you install a payment app from?",
      hi: "पेमेंट ऐप कहां से इंस्टॉल करना चाहिए?",
      mr: "पेमेंट ॲप कुठून इंस्टॉल करावे?"
    },
    options: {
      en: ["Unknown link", "Official app store", "Message attachment", "Random website"],
      hi: ["अनजान लिंक", "आधिकारिक ऐप स्टोर", "मैसेज अटैचमेंट", "कोई भी वेबसाइट"],
      mr: ["अनोळखी लिंक", "अधिकृत ॲप स्टोअर", "मेसेज अटॅचमेंट", "कोणतीही वेबसाइट"]
    },
    answer: 1
  },
  {
    module: "payments",
    question: {
      en: "Someone sends a collect request you did not expect. What should you do?",
      hi: "अनजान Collect Request आए तो क्या करें?",
      mr: "अनपेक्षित Collect Request आल्यास काय करावे?"
    },
    options: {
      en: ["Approve it", "Check carefully and decline if unsure", "Share your OTP", "Approve to receive money"],
      hi: ["मंजूर करें", "जांचें और संदेह हो तो मना करें", "OTP साझा करें", "पैसे पाने के लिए मंजूर करें"],
      mr: ["मंजूर करा", "तपासा आणि शंका असल्यास नकार द्या", "OTP शेअर करा", "पैसे मिळवण्यासाठी मंजूर करा"]
    },
    answer: 1
  },
  {
    module: "payments",
    question: {
      en: "What should you keep after a successful payment?",
      hi: "सफल पेमेंट के बाद क्या सुरक्षित रखना उपयोगी है?",
      mr: "यशस्वी पेमेंटनंतर काय जतन करणे उपयोगी आहे?"
    },
    options: {
      en: ["Transaction reference", "UPI PIN on paper", "OTP message to share", "Bank password in chat"],
      hi: ["ट्रांजैक्शन रेफरेंस", "कागज पर UPI PIN", "साझा करने के लिए OTP", "चैट में बैंक पासवर्ड"],
      mr: ["व्यवहाराचा संदर्भ क्रमांक", "कागदावर UPI PIN", "शेअर करण्यासाठी OTP", "चॅटमध्ये बँक पासवर्ड"]
    },
    answer: 0
  },
  {
    module: "payments",
    question: {
      en: "You suspect UPI fraud in India. What should you do?",
      hi: "भारत में UPI धोखाधड़ी का शक हो तो क्या करें?",
      mr: "भारतात UPI फसवणुकीचा संशय असल्यास काय करावे?"
    },
    options: {
      en: ["Wait several days", "Contact your bank and call 1930 promptly", "Delete all messages", "Send more money"],
      hi: ["कई दिन इंतजार करें", "बैंक से संपर्क करें और तुरंत 1930 पर कॉल करें", "सभी मैसेज हटाएं", "और पैसे भेजें"],
      mr: ["काही दिवस थांबा", "बँकेशी संपर्क करा आणि त्वरित 1930 वर कॉल करा", "सर्व मेसेज हटवा", "आणखी पैसे पाठवा"]
    },
    answer: 1
  },
  {
    module: "payments",
    question: {
      en: "A caller asks you to install a screen-sharing app to fix a payment. What should you do?",
      hi: "पेमेंट ठीक करने के लिए कॉलर स्क्रीन-शेयरिंग ऐप इंस्टॉल करने को कहे तो क्या करें?",
      mr: "पेमेंट दुरुस्त करण्यासाठी कॉलर स्क्रीन-शेअरिंग ॲप इंस्टॉल करायला सांगत असेल तर काय कराल?"
    },
    options: {
      en: ["Install it and open banking", "Refuse and contact official support", "Share your PIN", "Follow every instruction"],
      hi: ["इंस्टॉल करके बैंकिंग खोलें", "मना करें और आधिकारिक सहायता लें", "PIN बताएं", "हर निर्देश मानें"],
      mr: ["इंस्टॉल करून बँकिंग उघडा", "नकार द्या आणि अधिकृत मदत घ्या", "PIN सांगा", "प्रत्येक सूचना पाळा"]
    },
    answer: 1
  },
    // MODULE 04: INTERNET & GOOGLE QUIZ

  {
    module: "internet",
    question: {
      en: "Which app can help you search for information on the internet?",
      hi: "इंटरनेट पर जानकारी खोजने के लिए कौन-सा ऐप मदद करता है?",
      mr: "इंटरनेटवर माहिती शोधण्यासाठी कोणते ॲप मदत करते?"
    },
    options: {
      en: ["Calculator", "Google", "Camera", "Clock"],
      hi: ["कैलकुलेटर", "गूगल", "कैमरा", "घड़ी"],
      mr: ["कॅल्क्युलेटर", "गूगल", "कॅमेरा", "घड्याळ"]
    },
    answer: 1
  },
  {
    module: "internet",
    question: {
      en: "What should you type into Google to find information?",
      hi: "जानकारी खोजने के लिए Google में क्या लिखना चाहिए?",
      mr: "माहिती शोधण्यासाठी Google मध्ये काय लिहावे?"
    },
    options: {
      en: ["Clear search words", "Your ATM PIN", "Your password", "Your OTP"],
      hi: ["साफ शब्द", "ATM PIN", "पासवर्ड", "OTP"],
      mr: ["स्पष्ट शब्द", "ATM PIN", "पासवर्ड", "OTP"]
    },
    answer: 0
  },
  {
    module: "internet",
    question: {
      en: "Which app can help you find directions to a place?",
      hi: "किस ऐप से आप किसी जगह का रास्ता खोज सकते हैं?",
      mr: "एखाद्या ठिकाणाचा रस्ता शोधण्यासाठी कोणते ॲप वापराल?"
    },
    options: {
      en: ["Google Maps", "Calculator", "Notes", "Gallery"],
      hi: ["Google Maps", "कैलकुलेटर", "नोट्स", "गैलरी"],
      mr: ["Google Maps", "कॅल्क्युलेटर", "नोट्स", "गॅलरी"]
    },
    answer: 0
  },
  {
    module: "internet",
    question: {
      en: "What should you check before trusting a website?",
      hi: "किसी वेबसाइट पर भरोसा करने से पहले क्या जांचना चाहिए?",
      mr: "वेबसाइटवर विश्वास ठेवण्यापूर्वी काय तपासावे?"
    },
    options: {
      en: ["Its reliability and address", "Its background colour", "Its font size", "Nothing"],
      hi: ["उसकी विश्वसनीयता और पता", "उसका रंग", "फॉन्ट का आकार", "कुछ नहीं"],
      mr: ["तिची विश्वासार्हता आणि पत्ता", "तिचा रंग", "फॉन्टचा आकार", "काहीच नाही"]
    },
    answer: 0
  },
  {
    module: "internet",
    question: {
      en: "Which platform is commonly used to watch online videos?",
      hi: "ऑनलाइन वीडियो देखने के लिए आमतौर पर कौन-सा प्लेटफॉर्म इस्तेमाल होता है?",
      mr: "ऑनलाइन व्हिडिओ पाहण्यासाठी सामान्यतः कोणते प्लॅटफॉर्म वापरतात?"
    },
    options: {
      en: ["YouTube", "Calculator", "Contacts", "Calendar"],
      hi: ["YouTube", "कैलकुलेटर", "कॉन्टैक्ट्स", "कैलेंडर"],
      mr: ["YouTube", "कॅल्क्युलेटर", "कॉन्टॅक्ट्स", "कॅलेंडर"]
    },
    answer: 0
  },
  {
    module: "internet",
    question: {
      en: "What should you do before downloading a file?",
      hi: "कोई फाइल डाउनलोड करने से पहले क्या करना चाहिए?",
      mr: "फाइल डाउनलोड करण्यापूर्वी काय करावे?"
    },
    options: {
      en: [
        "Check that the source is trustworthy",
        "Click every advertisement",
        "Share your OTP",
        "Disable all security"
      ],
      hi: [
        "स्रोत भरोसेमंद है या नहीं जांचें",
        "हर विज्ञापन पर क्लिक करें",
        "OTP शेयर करें",
        "सारी सुरक्षा बंद करें"
      ],
      mr: [
        "स्रोत विश्वासार्ह आहे का ते तपासा",
        "प्रत्येक जाहिरातीवर क्लिक करा",
        "OTP शेअर करा",
        "सर्व सुरक्षा बंद करा"
      ]
    },
    answer: 0
  },
  {
    module: "internet",
    question: {
      en: "Why do browsers use tabs?",
      hi: "ब्राउज़र में Tabs का उपयोग क्यों होता है?",
      mr: "ब्राउझरमध्ये Tabs कशासाठी वापरतात?"
    },
    options: {
      en: [
        "To open multiple pages in one browser",
        "To charge the phone",
        "To make phone calls",
        "To increase screen brightness"
      ],
      hi: [
        "एक ब्राउज़र में कई पेज खोलने के लिए",
        "फोन चार्ज करने के लिए",
        "फोन कॉल करने के लिए",
        "स्क्रीन की रोशनी बढ़ाने के लिए"
      ],
      mr: [
        "एका ब्राउझरमध्ये अनेक पाने उघडण्यासाठी",
        "फोन चार्ज करण्यासाठी",
        "फोन कॉल करण्यासाठी",
        "स्क्रीनची चमक वाढवण्यासाठी"
      ]
    },
    answer: 0
  },
  {
    module: "internet",
    question: {
      en: "You see two websites with different information. What should you do?",
      hi: "दो वेबसाइट पर अलग-अलग जानकारी है। आपको क्या करना चाहिए?",
      mr: "दोन वेबसाइटवर वेगवेगळी माहिती आहे. तुम्ही काय करावे?"
    },
    options: {
      en: [
        "Verify using trusted sources",
        "Believe the first result automatically",
        "Share both without checking",
        "Enter your bank PIN"
      ],
      hi: [
        "भरोसेमंद स्रोतों से जांचें",
        "पहले परिणाम पर तुरंत भरोसा करें",
        "बिना जांचे दोनों शेयर करें",
        "बैंक PIN डालें"
      ],
      mr: [
        "विश्वासार्ह स्रोतांमधून पडताळणी करा",
        "पहिल्या निकालावर लगेच विश्वास ठेवा",
        "तपासणी न करता दोन्ही शेअर करा",
        "बँक PIN टाका"
      ]
    },
    answer: 0
  },
  {
    module: "internet",
    question: {
      en: "A website asks for your bank OTP to show search results. What should you do?",
      hi: "एक वेबसाइट Search Results दिखाने के लिए बैंक OTP मांगती है। क्या करेंगे?",
      mr: "एक वेबसाइट Search Results दाखवण्यासाठी बँकेचा OTP मागते. तुम्ही काय कराल?"
    },
    options: {
      en: [
        "Enter the OTP",
        "Share it with a friend",
        "Do not share it and leave the website",
        "Send your ATM PIN too"
      ],
      hi: [
        "OTP डाल दें",
        "दोस्त को भेज दें",
        "OTP न दें और वेबसाइट छोड़ दें",
        "ATM PIN भी भेज दें"
      ],
      mr: [
        "OTP टाका",
        "मित्राला पाठवा",
        "OTP देऊ नका आणि वेबसाइट बंद करा",
        "ATM PIN सुद्धा पाठवा"
      ]
    },
    answer: 2
  },
  {
    module: "internet",
    question: {
      en: "What is a safe internet habit?",
      hi: "इंटरनेट इस्तेमाल करने की सुरक्षित आदत कौन-सी है?",
      mr: "इंटरनेट वापरण्याची सुरक्षित सवय कोणती?"
    },
    options: {
      en: [
        "Click unknown links",
        "Share passwords online",
        "Trust every pop-up",
        "Avoid suspicious links and advertisements"
      ],
      hi: [
        "अनजान लिंक पर क्लिक करना",
        "ऑनलाइन पासवर्ड शेयर करना",
        "हर पॉप-अप पर भरोसा करना",
        "संदिग्ध लिंक और विज्ञापनों से बचना"
      ],
      mr: [
        "अनोळखी लिंकवर क्लिक करणे",
        "ऑनलाइन पासवर्ड शेअर करणे",
        "प्रत्येक पॉप-अपवर विश्वास ठेवणे",
        "संशयास्पद लिंक आणि जाहिराती टाळणे"
      ]
    },
    answer: 3
  },
    // MODULE 05: SAFETY & SCAM PROTECTION QUIZ

  {
    module: "safety",
    question: {
      en: "Should you share your OTP with a caller?",
      hi: "क्या आपको कॉल करने वाले को OTP बताना चाहिए?",
      mr: "कॉल करणाऱ्या व्यक्तीला OTP सांगावा का?"
    },
    options: {
      en: ["Yes", "No", "Only at night", "Only with strangers"],
      hi: ["हाँ", "नहीं", "सिर्फ रात में", "सिर्फ अनजान लोगों को"],
      mr: ["हो", "नाही", "फक्त रात्री", "फक्त अनोळखी व्यक्तींना"]
    },
    answer: 1
  },
  {
    module: "safety",
    question: {
      en: "A caller claims to be from your bank and asks for your PIN. What should you do?",
      hi: "बैंक का कर्मचारी बताकर कोई PIN मांगे तो क्या करें?",
      mr: "बँकेचा कर्मचारी असल्याचे सांगून कोणी PIN मागितल्यास काय करावे?"
    },
    options: {
      en: ["Tell them the PIN", "Hang up and contact the bank officially", "Send a message", "Install their app"],
      hi: ["PIN बता दें", "कॉल काटकर बैंक से आधिकारिक नंबर पर संपर्क करें", "मैसेज भेजें", "उनका ऐप इंस्टॉल करें"],
      mr: ["PIN सांगा", "कॉल बंद करून बँकेशी अधिकृत क्रमांकावर संपर्क साधा", "मेसेज पाठवा", "त्यांचे ॲप इन्स्टॉल करा"]
    },
    answer: 1
  },
  {
    module: "safety",
    question: {
      en: "A WhatsApp message from an unknown number asks for money urgently. What is safest?",
      hi: "अनजान WhatsApp नंबर तुरंत पैसे मांगता है। सबसे सुरक्षित कदम क्या है?",
      mr: "अनोळखी WhatsApp नंबर तातडीने पैसे मागतो. सर्वात सुरक्षित कृती कोणती?"
    },
    options: {
      en: ["Send money immediately", "Verify by calling the person through a known number", "Share your OTP", "Forward the message"],
      hi: ["तुरंत पैसे भेजें", "पहचाने हुए नंबर पर कॉल करके पुष्टि करें", "OTP शेयर करें", "मैसेज फॉरवर्ड करें"],
      mr: ["ताबडतोब पैसे पाठवा", "ओळखीच्या क्रमांकावर फोन करून खात्री करा", "OTP शेअर करा", "मेसेज फॉरवर्ड करा"]
    },
    answer: 1
  },
  {
    module: "safety",
    question: {
      en: "What should you do with a suspicious prize link?",
      hi: "संदिग्ध इनाम वाली लिंक के साथ क्या करना चाहिए?",
      mr: "संशयास्पद बक्षिसाच्या लिंकबाबत काय करावे?"
    },
    options: {
      en: ["Click it", "Enter bank details", "Avoid clicking and verify independently", "Share it with everyone"],
      hi: ["क्लिक करें", "बैंक की जानकारी भरें", "क्लिक न करें और खुद जांचें", "सबको भेजें"],
      mr: ["क्लिक करा", "बँकेची माहिती भरा", "क्लिक करू नका आणि स्वतः पडताळणी करा", "सर्वांना पाठवा"]
    },
    answer: 2
  },
  {
    module: "safety",
    question: {
      en: "Which is the safest way to access online banking?",
      hi: "ऑनलाइन बैंकिंग इस्तेमाल करने का सुरक्षित तरीका कौन-सा है?",
      mr: "ऑनलाइन बँकिंग वापरण्याचा सुरक्षित मार्ग कोणता?"
    },
    options: {
      en: ["A link from a stranger", "The official bank app or website", "A random pop-up", "A forwarded message"],
      hi: ["अनजान व्यक्ति की लिंक", "बैंक का आधिकारिक ऐप या वेबसाइट", "कोई पॉप-अप", "फॉरवर्ड किया मैसेज"],
      mr: ["अनोळखी व्यक्तीची लिंक", "बँकेचे अधिकृत ॲप किंवा वेबसाइट", "कोणताही पॉप-अप", "फॉरवर्ड केलेला मेसेज"]
    },
    answer: 1
  },
  {
    module: "safety",
    question: {
      en: "A message says you won a lottery you never entered and asks for a fee. What should you do?",
      hi: "बिना लॉटरी खेले इनाम का मैसेज आए और फीस मांगे तो क्या करें?",
      mr: "लॉटरीत भाग न घेता बक्षीस मिळाल्याचा मेसेज येऊन फी मागितल्यास काय करावे?"
    },
    options: {
      en: ["Pay the fee", "Share your bank details", "Ignore it and verify through official sources", "Send your PIN"],
      hi: ["फीस दें", "बैंक की जानकारी दें", "मैसेज पर भरोसा न करें और आधिकारिक स्रोत से जांचें", "PIN भेजें"],
      mr: ["फी भरा", "बँकेची माहिती द्या", "मेसेजवर विश्वास ठेवू नका आणि अधिकृत स्रोतावर तपासा", "PIN पाठवा"]
    },
    answer: 2
  },
  {
    module: "safety",
    question: {
      en: "When should you enter your UPI PIN?",
      hi: "UPI PIN कब डालना चाहिए?",
      mr: "UPI PIN कधी टाकावा?"
    },
    options: {
      en: ["Whenever someone asks", "To receive any money", "Only when authorising a payment you intend to make", "To claim a prize"],
      hi: ["जब कोई मांगे", "पैसे प्राप्त करने के लिए", "सिर्फ अपनी ओर से किए जाने वाले भुगतान को मंजूरी देने के लिए", "इनाम लेने के लिए"],
      mr: ["कोणी मागितल्यावर", "पैसे स्वीकारण्यासाठी", "स्वतः करायच्या पेमेंटला मंजुरी देतानाच", "बक्षीस मिळवण्यासाठी"]
    },
    answer: 2
  },
  {
    module: "safety",
    question: {
      en: "What should you do if you notice an unknown bank transaction?",
      hi: "बैंक खाते में अनजान ट्रांजैक्शन दिखे तो क्या करें?",
      mr: "बँक खात्यात अनोळखी व्यवहार दिसल्यास काय करावे?"
    },
    options: {
      en: ["Ignore it", "Report it to your bank immediately", "Share your PIN online", "Wait several months"],
      hi: ["अनदेखा करें", "तुरंत बैंक को रिपोर्ट करें", "PIN ऑनलाइन शेयर करें", "कई महीने इंतजार करें"],
      mr: ["दुर्लक्ष करा", "बँकेला त्वरित कळवा", "PIN ऑनलाइन शेअर करा", "काही महिने थांबा"]
    },
    answer: 1
  },
  {
    module: "safety",
    question: {
      en: "Which number can you call in India to report cyber financial fraud?",
      hi: "भारत में साइबर वित्तीय धोखाधड़ी की रिपोर्ट के लिए किस नंबर पर कॉल कर सकते हैं?",
      mr: "भारतात सायबर आर्थिक फसवणुकीची तक्रार करण्यासाठी कोणत्या क्रमांकावर कॉल करू शकता?"
    },
    options: {
      en: ["1000", "1930", "5555", "121"],
      hi: ["1000", "1930", "5555", "121"],
      mr: ["1000", "1930", "5555", "121"]
    },
    answer: 1
  },
  {
    module: "safety",
    question: {
      en: "What should you do if you suspect you have been scammed?",
      hi: "अगर आपको लगे कि आपके साथ ऑनलाइन फ्रॉड हुआ है तो क्या करें?",
      mr: "आपली ऑनलाइन फसवणूक झाल्याचा संशय असल्यास काय करावे?"
    },
    options: {
      en: ["Delete all evidence", "Wait and do nothing", "Contact your bank, call 1930 promptly and report it", "Send more money"],
      hi: ["सारे सबूत मिटा दें", "कुछ न करें", "बैंक से संपर्क करें, जल्द 1930 पर कॉल करें और शिकायत करें", "और पैसे भेजें"],
      mr: ["सर्व पुरावे हटवा", "काहीही करू नका", "बँकेशी संपर्क साधा, लवकर 1930 वर कॉल करा आणि तक्रार करा", "अधिक पैसे पाठवा"]
    },
    answer: 2
  },
    // MODULE 06: DIGITAL SERVICES QUIZ

  {
    module: "services",
    question: {
      en: "Where should you access a government service online?",
      hi: "सरकारी सेवा ऑनलाइन कहाँ से इस्तेमाल करनी चाहिए?",
      mr: "सरकारी सेवा ऑनलाइन कुठून वापरावी?"
    },
    options: {
      en: ["An official website", "A random link", "An unknown message", "Any pop-up"],
      hi: ["आधिकारिक वेबसाइट", "अनजान लिंक", "अनजान मैसेज", "कोई भी पॉप-अप"],
      mr: ["अधिकृत वेबसाइट", "अनोळखी लिंक", "अनोळखी मेसेज", "कोणताही पॉप-अप"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "What should you do before submitting an online form?",
      hi: "ऑनलाइन फॉर्म जमा करने से पहले क्या करना चाहिए?",
      mr: "ऑनलाइन फॉर्म सबमिट करण्यापूर्वी काय करावे?"
    },
    options: {
      en: ["Check the entered details", "Leave fields incorrect", "Share your password", "Close the device"],
      hi: ["भरी हुई जानकारी जांचें", "गलत जानकारी रहने दें", "पासवर्ड शेयर करें", "डिवाइस बंद करें"],
      mr: ["भरलेली माहिती तपासा", "चुकीची माहिती तशीच ठेवा", "पासवर्ड शेअर करा", "डिव्हाइस बंद करा"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "What should you check before uploading a document?",
      hi: "दस्तावेज अपलोड करने से पहले क्या जांचना चाहिए?",
      mr: "कागदपत्र अपलोड करण्यापूर्वी काय तपासावे?"
    },
    options: {
      en: ["File format and size", "Phone wallpaper", "Ringtone", "Screen brightness"],
      hi: ["फाइल का फॉर्मेट और साइज", "फोन का वॉलपेपर", "रिंगटोन", "स्क्रीन की रोशनी"],
      mr: ["फाइलचा फॉरमॅट आणि आकार", "फोनचा वॉलपेपर", "रिंगटोन", "स्क्रीनची चमक"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "What is DigiLocker used for?",
      hi: "DigiLocker का इस्तेमाल किस लिए होता है?",
      mr: "DigiLocker कशासाठी वापरले जाते?"
    },
    options: {
      en: ["Accessing eligible digital documents", "Making phone calls", "Playing music only", "Increasing battery life"],
      hi: ["उपलब्ध डिजिटल दस्तावेज देखने के लिए", "फोन कॉल करने के लिए", "सिर्फ संगीत चलाने के लिए", "बैटरी बढ़ाने के लिए"],
      mr: ["उपलब्ध डिजिटल कागदपत्रे पाहण्यासाठी", "फोन कॉल करण्यासाठी", "फक्त संगीत ऐकण्यासाठी", "बॅटरी वाढवण्यासाठी"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "What should you verify before confirming an appointment?",
      hi: "अपॉइंटमेंट कन्फर्म करने से पहले क्या जांचना चाहिए?",
      mr: "अपॉइंटमेंट निश्चित करण्यापूर्वी काय तपासावे?"
    },
    options: {
      en: ["Date, time and location", "Phone wallpaper", "Ringtone", "Nothing"],
      hi: ["तारीख, समय और जगह", "फोन का वॉलपेपर", "रिंगटोन", "कुछ नहीं"],
      mr: ["तारीख, वेळ आणि ठिकाण", "फोनचा वॉलपेपर", "रिंगटोन", "काहीच नाही"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "What makes a strong password?",
      hi: "मजबूत पासवर्ड कैसा होता है?",
      mr: "मजबूत पासवर्ड कसा असतो?"
    },
    options: {
      en: ["A unique, hard-to-guess password", "Your name only", "123456", "The word password"],
      hi: ["अलग और आसानी से न पहचाना जा सके ऐसा पासवर्ड", "सिर्फ आपका नाम", "123456", "password शब्द"],
      mr: ["वेगळा आणि सहज ओळखता न येणारा पासवर्ड", "फक्त तुमचे नाव", "123456", "password हा शब्द"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "What information helps you track an application?",
      hi: "आवेदन ट्रैक करने के लिए कौन-सी जानकारी मदद करती है?",
      mr: "अर्जाचा मागोवा घेण्यासाठी कोणती माहिती मदत करते?"
    },
    options: {
      en: ["Application or reference number", "Phone wallpaper", "Ringtone", "Screen colour"],
      hi: ["आवेदन या रेफरेंस नंबर", "फोन का वॉलपेपर", "रिंगटोन", "स्क्रीन का रंग"],
      mr: ["अर्ज किंवा संदर्भ क्रमांक", "फोनचा वॉलपेपर", "रिंगटोन", "स्क्रीनचा रंग"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "You are using someone else's phone to access a service. What should you do afterwards?",
      hi: "किसी दूसरे के फोन पर सेवा इस्तेमाल करने के बाद क्या करना चाहिए?",
      mr: "दुसऱ्याचा फोन वापरून सेवा घेतल्यानंतर काय करावे?"
    },
    options: {
      en: ["Log out of your account", "Save your password on it", "Share your OTP", "Leave the account open"],
      hi: ["अपने अकाउंट से लॉग आउट करें", "पासवर्ड सेव करें", "OTP शेयर करें", "अकाउंट खुला छोड़ दें"],
      mr: ["खात्यातून लॉग आउट करा", "पासवर्ड सेव्ह करा", "OTP शेअर करा", "खाते उघडे ठेवा"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "Where should you check your application status?",
      hi: "आवेदन का स्टेटस कहाँ चेक करना चाहिए?",
      mr: "अर्जाची स्थिती कुठे तपासावी?"
    },
    options: {
      en: ["The official tracking page", "An unknown link", "A random social media post", "An unsolicited message"],
      hi: ["आधिकारिक ट्रैकिंग पेज", "अनजान लिंक", "सोशल मीडिया की कोई भी पोस्ट", "अनचाहा मैसेज"],
      mr: ["अधिकृत ट्रॅकिंग पेज", "अनोळखी लिंक", "सोशल मीडियावरील कोणतीही पोस्ट", "अनपेक्षित मेसेज"]
    },
    answer: 0
  },
  {
    module: "services",
    question: {
      en: "What should you do if an online service asks for sensitive information on an untrusted website?",
      hi: "अनजान वेबसाइट निजी जानकारी मांगे तो क्या करना चाहिए?",
      mr: "अविश्वासार्ह वेबसाइट वैयक्तिक माहिती मागत असल्यास काय करावे?"
    },
    options: {
      en: ["Enter everything", "Share your OTP", "Stop and verify the website", "Send your PIN"],
      hi: ["सारी जानकारी भर दें", "OTP शेयर करें", "रुकें और वेबसाइट की जांच करें", "PIN भेजें"],
      mr: ["सर्व माहिती भरा", "OTP शेअर करा", "थांबा आणि वेबसाइट तपासा", "PIN पाठवा"]
    },
    answer: 2
  },
  
];


/* =========================================================
   SCAM PRACTICE DATA
========================================================= */

const scamQuestions = [
  
  {
    message: {
      en: "A caller says your bank account will be blocked today unless you share your OTP.",
      hi: "एक कॉलर कहता है कि OTP नहीं देने पर आज आपका बैंक अकाउंट बंद हो जाएगा।",
      mr: "एक कॉल करणारी व्यक्ती सांगते की OTP न दिल्यास आज तुमचे बँक खाते बंद होईल."
    },
    answer: "scam"
  },
  {
    message: {
      en: "You receive a courier message asking you to pay ₹5 to release a parcel through an unknown link.",
      hi: "आपको पार्सल छुड़ाने के लिए अनजान लिंक पर ₹5 देने का मैसेज आता है।",
      mr: "पार्सल मिळवण्यासाठी अनोळखी लिंकवर ₹5 भरण्याचा मेसेज येतो."
    },
    answer: "scam"
  },
  {
    message: {
      en: "Someone claiming to be police threatens digital arrest and demands money over a video call.",
      hi: "पुलिस बनकर कोई वीडियो कॉल पर डिजिटल अरेस्ट की धमकी देकर पैसे माँगता है।",
      mr: "पोलीस असल्याचे सांगून कोणीतरी व्हिडिओ कॉलवर डिजिटल अटकेची धमकी देऊन पैसे मागते."
    },
    answer: "scam"
  },
  {
    message: {
      en: "A stranger offers you a work-from-home job but asks you to pay a registration fee first.",
      hi: "कोई अनजान व्यक्ति घर से काम की नौकरी देने के लिए पहले रजिस्ट्रेशन फीस माँगता है।",
      mr: "एक अनोळखी व्यक्ती घरून काम देण्यासाठी आधी नोंदणी शुल्क मागते."
    },
    answer: "scam"
  },
  {
    message: {
      en: "A caller asks you to install a screen-sharing app to help fix your banking problem.",
      hi: "एक कॉलर बैंक की समस्या ठीक करने के नाम पर आपको स्क्रीन-शेयरिंग ऐप इंस्टॉल करने को कहता है।",
      mr: "बँकेची समस्या सोडवण्याच्या नावाखाली एक व्यक्ती तुम्हाला स्क्रीन-शेअरिंग ॲप इन्स्टॉल करायला सांगते."
    },
    answer: "scam"
  },
  {
    message: {
      en: "A message says your electricity will be disconnected tonight and asks you to open an unfamiliar payment link.",
      hi: "मैसेज आता है कि आज रात बिजली कट जाएगी और भुगतान के लिए अनजान लिंक खोलने को कहता है।",
      mr: "आज रात्री वीज कापली जाईल असा मेसेज येतो आणि पैसे भरण्यासाठी अनोळखी लिंक उघडायला सांगितले जाते."
    },
    answer: "scam"
  },
  {
    message: {
      en: "A person promises guaranteed high investment returns and pressures you to transfer money immediately.",
      hi: "कोई व्यक्ति निवेश पर पक्के बड़े मुनाफे का वादा करके तुरंत पैसे भेजने का दबाव डालता है।",
      mr: "एक व्यक्ती गुंतवणुकीवर हमखास मोठा नफा देण्याचे आश्वासन देऊन लगेच पैसे पाठवण्याचा दबाव टाकते."
    },
    answer: "scam"
  },
  {
    message: {
      en: "Your relative calls from their usual number and asks you to meet them at a familiar place.",
      hi: "आपका रिश्तेदार अपने पुराने नंबर से कॉल करके आपको एक परिचित जगह पर मिलने को कहता है।",
      mr: "तुमचे नातेवाईक त्यांच्या नेहमीच्या नंबरवरून फोन करून परिचित ठिकाणी भेटायला सांगतात."
    },
    answer: "safe"
  },
  {
    message: {
      en: "A stranger says money will arrive in your account if you scan a QR code and enter your UPI PIN.",
      hi: "एक अनजान व्यक्ति कहता है कि QR कोड स्कैन करके UPI PIN डालने पर आपके खाते में पैसे आएँगे।",
      mr: "एक अनोळखी व्यक्ती सांगते की QR कोड स्कॅन करून UPI PIN टाकल्यास तुमच्या खात्यात पैसे येतील."
    },
    answer: "scam"
  },
  {
    message: {
      en: "You open your bank app directly and check a transaction without sharing your OTP or PIN.",
      hi: "आप सीधे अपने बैंक ऐप में जाकर लेन-देन देखते हैं और OTP या PIN किसी को नहीं बताते।",
      mr: "तुम्ही थेट बँकेचे ॲप उघडून व्यवहार तपासता आणि OTP किंवा PIN कोणालाही सांगत नाही."
    },
    answer: "safe"
  },
  {
    message: {
      en: "A caller says they are customer care and asks you to tell them your UPI PIN to receive a refund.",
      hi: "कस्टमर केयर बनकर कोई व्यक्ति रिफंड दिलाने के लिए आपका UPI PIN माँगता है।",
      mr: "कस्टमर केअर असल्याचे सांगून रिफंड देण्यासाठी कोणीतरी तुमचा UPI PIN मागते."
    },
    answer: "scam"
  },
  {
    message: {
      en: "A buyer says they will pay you for an item and sends a screenshot. You verify the money in your bank app before handing it over.",
      hi: "एक खरीदार पैसे भेजने का स्क्रीनशॉट देता है। सामान देने से पहले आप बैंक ऐप में पैसे आने की पुष्टि करते हैं।",
      mr: "एक खरेदीदार पैसे पाठवल्याचा स्क्रीनशॉट दाखवतो. वस्तू देण्यापूर्वी तुम्ही बँक ॲपमध्ये पैसे जमा झाल्याची खात्री करता."
    },
    answer: "safe"
  },
  {
    message: {
      en: "Someone claiming to be your family member urgently asks for money from a new number. You verify by calling their known number first.",
      hi: "परिवार का सदस्य बनकर कोई नए नंबर से तुरंत पैसे माँगता है। आप पैसे भेजने से पहले उसके पुराने नंबर पर कॉल करके पुष्टि करते हैं।",
      mr: "कुटुंबातील व्यक्ती असल्याचे सांगून नवीन नंबरवरून तातडीने पैसे मागितले जातात. तुम्ही पैसे पाठवण्यापूर्वी तिच्या जुन्या नंबरवर फोन करून खात्री करता."
    },
    answer: "safe"
  },
  {
    message: {
      en: "A website promises a large loan instantly but demands an advance processing fee through a personal UPI ID.",
      hi: "एक वेबसाइट तुरंत बड़ा लोन देने का वादा करती है, लेकिन पहले किसी निजी UPI ID पर फीस माँगती है।",
      mr: "एक वेबसाइट लगेच मोठे कर्ज देण्याचे आश्वासन देते, पण आधी वैयक्तिक UPI ID वर शुल्क मागते."
    },
    answer: "scam"
  },
  {
    message: {
      en: "You receive an unexpected WhatsApp link asking you to enter your password to restore your account. You do not open it.",
      hi: "WhatsApp अकाउंट वापस पाने के लिए पासवर्ड डालने वाला अनजान लिंक आता है। आप उसे नहीं खोलते।",
      mr: "WhatsApp खाते पुन्हा सुरू करण्यासाठी पासवर्ड टाकायला सांगणारी अनोळखी लिंक येते. तुम्ही ती उघडत नाही."
    },
    answer: "safe"
  }

];

// Bundled translations keep scam-safety practice available without a network request.
const offlineScamTranslations = {
  gu: [
    "કોલ કરનાર કહે છે કે તમે OTP ન આપો તો આજે તમારું બેંક ખાતું બંધ થઈ જશે.",
    "પાર્સલ છોડાવવા અજાણી લિંક દ્વારા ₹5 ચૂકવવાનો કુરિયર સંદેશ મળે છે.",
    "પોલીસ હોવાનો દાવો કરનાર વ્યક્તિ વિડિયો કૉલ પર ડિજિટલ ધરપકડની ધમકી આપી પૈસા માગે છે.",
    "અજાણી વ્યક્તિ ઘરેથી કામની નોકરી આપવાનું કહે છે, પરંતુ પહેલાં નોંધણી ફી માગે છે.",
    "બેંકની સમસ્યા ઉકેલવાના બહાને કોલ કરનાર સ્ક્રીન શેર કરવાની ઍપ ઇન્સ્ટોલ કરવાનું કહે છે.",
    "સંદેશ કહે છે કે આજે રાત્રે વીજળી કપાઈ જશે અને અજાણી ચુકવણી લિંક ખોલવાનું કહે છે.",
    "વ્યક્તિ રોકાણ પર ખાતરીપૂર્વક મોટો નફો આપવાનું વચન આપે છે અને તરત પૈસા મોકલવાનું દબાણ કરે છે.",
    "તમારા સગા તેમના ઓળખીતા નંબર પરથી ફોન કરીને ઓળખીતા સ્થળે મળવાનું કહે છે.",
    "અજાણી વ્યક્તિ કહે છે કે QR કોડ સ્કેન કરીને UPI PIN નાખશો તો ખાતામાં પૈસા આવશે.",
    "તમે બેંક ઍપ જાતે ખોલીને OTP કે PIN આપ્યા વિના વ્યવહાર તપાસો છો.",
    "કોલ કરનાર ગ્રાહક સેવા હોવાનું કહી રિફંડ મેળવવા તમારો UPI PIN માગે છે.",
    "ખરીદનાર વસ્તુના બદલામાં પૈસા ચૂકવવાનો સંદેશ અને સ્ક્રીનશૉટ મોકલે છે. વસ્તુ આપતા પહેલાં તમે બેંક ઍપમાં પૈસા આવ્યા છે કે નહીં તે તપાસો છો.",
    "કુટુંબનો સભ્ય હોવાનો દાવો કરનાર નવા નંબરથી તાત્કાલિક પૈસા માગે છે. તમે પહેલા તેના જાણીતા નંબર પર ફોન કરીને ખાતરી કરો છો.",
    "વેબસાઇટ તરત મોટું ધિરાણ આપવાનું વચન આપે છે, પરંતુ વ્યક્તિગત UPI ID પર અગાઉથી પ્રક્રિયા ફી માગે છે.",
    "ખાતું પાછું મેળવવા પાસવર્ડ દાખલ કરવાનું કહેતી અજાણી WhatsApp લિંક મળે છે. તમે તે ખોલતા નથી."
  ],
  ta: [
    "OTP-ஐப் பகிராவிட்டால் இன்று உங்கள் வங்கிக் கணக்கு முடக்கப்படும் என்று அழைப்பவர் கூறுகிறார்.",
    "பார்சலை விடுவிக்கத் தெரியாத இணைப்பில் ₹5 செலுத்துமாறு கூரியர் செய்தி வருகிறது.",
    "காவல்துறை எனக் கூறும் ஒருவர் வீடியோ அழைப்பில் டிஜிட்டல் கைது செய்வதாக மிரட்டி பணம் கேட்கிறார்.",
    "வீட்டிலிருந்து வேலை தருவதாக அறிமுகமில்லாதவர் கூறி, முதலில் பதிவு கட்டணம் செலுத்தச் சொல்கிறார்.",
    "வங்கி சிக்கலைச் சரிசெய்ய திரையைப் பகிரும் செயலியை நிறுவுமாறு அழைப்பவர் கேட்கிறார்.",
    "இன்று இரவு மின்சாரம் துண்டிக்கப்படும் என்றும் தெரியாத கட்டண இணைப்பைத் திறக்கவும் என்றும் செய்தி வருகிறது.",
    "முதலீட்டில் உறுதியான பெரிய லாபம் தருவதாக ஒருவர் கூறி உடனே பணம் அனுப்ப அழுத்தம் தருகிறார்.",
    "உங்கள் உறவினர் வழக்கமான எண்ணிலிருந்து அழைத்து பழக்கமான இடத்தில் சந்திக்கச் சொல்கிறார்.",
    "QR குறியீட்டை ஸ்கேன் செய்து UPI PIN உள்ளிட்டால் பணம் வரும் என்று அறிமுகமில்லாதவர் கூறுகிறார்.",
    "நீங்கள் வங்கி செயலியை நேரடியாகத் திறந்து OTP அல்லது PIN பகிராமல் பரிவர்த்தனையைச் சரிபார்க்கிறீர்கள்.",
    "பணத்தைத் திரும்பப் பெற உங்கள் UPI PIN-ஐச் சொல்லுமாறு வாடிக்கையாளர் சேவை என அழைப்பவர் கேட்கிறார்.",
    "ஒரு பொருளுக்குப் பணம் தருவதாக வாங்குபவர் செய்தியும் திரைப்பிடிப்பும் அனுப்புகிறார். பொருளை ஒப்படைக்கும் முன் வங்கி செயலியில் பணம் வந்ததா எனச் சரிபார்க்கிறீர்கள்.",
    "குடும்பத்தினர் எனக் கூறி புதிய எண்ணிலிருந்து அவசரமாகப் பணம் கேட்கிறார். முதலில் தெரிந்த எண்ணுக்கு அழைத்து உறுதிப்படுத்துகிறீர்கள்.",
    "உடனடியாகப் பெரிய கடன் தருவதாக இணையதளம் கூறி, தனிப்பட்ட UPI ID-க்கு முன்பணச் செயலாக்கக் கட்டணம் கேட்கிறது.",
    "கணக்கை மீட்டெடுக்க கடவுச்சொல்லை உள்ளிடச் சொல்லும் எதிர்பாராத WhatsApp இணைப்பு வருகிறது. அதைத் திறப்பதில்லை."
  ],
  te: [
    "OTP పంచుకోకపోతే ఈరోజే మీ బ్యాంక్ ఖాతా నిలిపివేస్తామని కాల్ చేసిన వ్యక్తి చెబుతున్నారు.",
    "పార్సిల్ విడుదలకు తెలియని లింక్ ద్వారా ₹5 చెల్లించమని కొరియర్ సందేశం వస్తుంది.",
    "పోలీసులమని చెప్పే వ్యక్తి వీడియో కాల్‌లో డిజిటల్ అరెస్ట్ చేస్తామని బెదిరించి డబ్బు అడుగుతున్నారు.",
    "ఇంటి నుంచే పని ఇస్తామని అపరిచితుడు చెప్పి ముందుగా రిజిస్ట్రేషన్ ఫీజు చెల్లించమంటున్నారు.",
    "బ్యాంకు సమస్యను పరిష్కరించడానికి స్క్రీన్ షేరింగ్ యాప్ ఇన్‌స్టాల్ చేయమని కాల్ చేసిన వ్యక్తి అడుగుతున్నారు.",
    "ఈ రాత్రి విద్యుత్ నిలిపివేస్తామని, తెలియని చెల్లింపు లింక్ తెరవాలని సందేశం చెబుతోంది.",
    "పెట్టుబడిపై ఖచ్చితమైన అధిక లాభాలు ఇస్తామని ఒకరు హామీ ఇచ్చి వెంటనే డబ్బు పంపమని ఒత్తిడి చేస్తున్నారు.",
    "మీ బంధువు తన సాధారణ నంబర్ నుంచి కాల్ చేసి తెలిసిన ప్రదేశంలో కలవమంటున్నారు.",
    "QR కోడ్ స్కాన్ చేసి UPI PIN నమోదు చేస్తే ఖాతాలో డబ్బు వస్తుందని అపరిచితుడు చెబుతున్నారు.",
    "మీరు బ్యాంక్ యాప్‌ను నేరుగా తెరిచి OTP లేదా PIN పంచుకోకుండా లావాదేవీని తనిఖీ చేస్తున్నారు.",
    "వాపసు పొందడానికి మీ UPI PIN చెప్పమని కస్టమర్ కేర్ అని చెప్పే కాలర్ అడుగుతున్నారు.",
    "వస్తువుకు డబ్బు చెల్లిస్తానని కొనుగోలుదారు సందేశం, స్క్రీన్‌షాట్ పంపుతున్నారు. వస్తువు ఇచ్చే ముందు బ్యాంక్ యాప్‌లో డబ్బు వచ్చిందో తనిఖీ చేస్తున్నారు.",
    "కుటుంబ సభ్యుడినని కొత్త నంబర్ నుంచి అత్యవసరంగా డబ్బు అడుగుతున్నారు. ముందుగా తెలిసిన నంబర్‌కు కాల్ చేసి నిర్ధారిస్తున్నారు.",
    "వెబ్‌సైట్ వెంటనే పెద్ద రుణం ఇస్తామని చెప్పి వ్యక్తిగత UPI IDకి ముందస్తు ప్రాసెసింగ్ ఫీజు అడుగుతోంది.",
    "ఖాతాను పునరుద్ధరించడానికి పాస్‌వర్డ్ నమోదు చేయమనే అనుకోని WhatsApp లింక్ వస్తుంది. మీరు దాన్ని తెరవరు."
  ]
};
scamQuestions.forEach((question, index) => {
  question.message.gu = offlineScamTranslations.gu[index];
  question.message.ta = offlineScamTranslations.ta[index];
  question.message.te = offlineScamTranslations.te[index];
});


/* =========================================================
   APP STATE
========================================================= */

const state = {
  language: localStorage.getItem("seniorSaathiLanguage") || "en",
  userAge: Number(localStorage.getItem("seniorSaathiUserAge")) || null,

  userName:
    localStorage.getItem("seniorSaathiUserName") || "",

  completedLessons:
    JSON.parse(
      localStorage.getItem("seniorSaathiCompleted") || "[]"
    ),

  currentModule: null,

  currentPage: 0,

  guestMode: false,

  userId: null,

  quizHistory: JSON.parse(localStorage.getItem("seniorSaathiQuizScores") || "[]"),

  quizIndex: 0,

  quizScore: 0,

  quizAnswers: [],

  scamIndex: 0,
scamScore: 0
};

const remoteTranslationLanguages = new Set();
const builtInLanguages = new Set(["en", "hi", "mr", "gu", "ta", "te"]);
let originalTranslationTextNodes = new WeakMap();
let originalTranslationAttributes = new WeakMap();
let pendingTranslationNodes = new WeakMap();
let trackedTranslationTextNodes = new Set();
let trackedTranslationAttributeNodes = new Set();
let remoteTranslationObserver = null;
let remoteTranslationTimer = null;
let remoteTranslationGeneration = 0;
let remoteTranslationWorkerRunning = false;
let remoteTranslationRescanRequested = false;
let remoteTranslationCache = {};

try {
  remoteTranslationCache = JSON.parse(
    localStorage.getItem("seniorSaathiRemoteTranslations") || "{}"
  );
} catch (error) {
  console.warn("Could not read the saved translation cache:", error);
}

function getContentLanguage(language = state.language) {
  return ["en", "hi", "mr"].includes(language) ? language : "en";
}

const nearbyTranslations = {
  en: {
    card: "Nearby Centres", cardDesc: "Find learning and support places near you",
    section: "📍 Nearby", title: "Nearby Centres",
    intro: "Search OpenStreetMap for nearby centres and support places for older adults.",
    back: "← Back to dashboard", location: "City, area, or locality",
    placeholder: "For example: Pune, Kothrud", search: "Search area",
    radius: "Search radius", current: "Use my current location",
    privacy: "Only places identified as senior-focused on the map are shown. Contact a centre to confirm its services; listings may be incomplete and are not verified.",
    retry: "Retry search", searching: "Searching map listings…",
    geocoding: "Finding that area…", locating: "Getting your location…", noArea: "We couldn't find that area. Try a city or locality name.",
    noResults: "No senior-focused places were found on the map in this area. Try a larger radius or another area; listings may be incomplete.",
    resultCount: n => `${n} senior-focused map listing${n === 1 ? "" : "s"} found. Services are not verified.`,
    emptySearch: "Enter a city, area, or locality first.",
    geoDenied: "Location permission was denied. Allow location access in your browser, or search by area instead.",
    geoUnavailable: "Your location is unavailable right now. Search by area or try again later.",
    geoTimeout: "Location request took too long. Please try again.",
    geoUnsupported: "This browser cannot provide your location. Search by area instead.",
    apiBusy: "The map service is busy. Please wait 30 seconds before retrying.",
    apiError: "The map search could not be completed. Check your internet connection and retry.",
    photonError: "The area search service could not be reached. Check your internet connection and retry.",
    address: "Address details", distance: "Distance from searched area",
    distanceCurrent: "Distance from your location", phone: "Phone", website: "Website", map: "Open map",
    noAddress: "No address details are listed.", waiting: "Waiting briefly before the next map request…"
  },
  hi: {
    card: "आस-पास के केंद्र", cardDesc: "पास के सीखने और सहायता केंद्र खोजें",
    section: "📍 आस-पास", title: "आस-पास के केंद्र",
    intro: "OpenStreetMap पर वरिष्ठ नागरिकों के लिए पास के केंद्र और सहायता स्थल खोजें।",
    back: "← डैशबोर्ड पर लौटें", location: "शहर, इलाका या मोहल्ला",
    placeholder: "उदाहरण: पुणे, कोथरुड", search: "इलाका खोजें",
    radius: "खोज का दायरा", current: "मेरी वर्तमान लोकेशन इस्तेमाल करें",
    privacy: "नक्शे पर वरिष्ठ नागरिकों के लिए पहचाने गए स्थान ही दिखेंगे। सेवाओं की पुष्टि केंद्र से करें; जानकारी अधूरी और असत्यापित हो सकती है।",
    retry: "फिर से खोजें", searching: "नक्शे की जगहें खोजी जा रही हैं…",
    geocoding: "इलाका खोजा जा रहा है…", locating: "आपकी लोकेशन ली जा रही है…", noArea: "यह इलाका नहीं मिला। शहर या मोहल्ले का नाम आज़माएँ।",
    noResults: "इस इलाके में नक्शे पर वरिष्ठ नागरिकों के लिए कोई जगह नहीं मिली। बड़ा दायरा या दूसरा इलाका आज़माएँ; जानकारी अधूरी हो सकती है।",
    resultCount: n => `नक्शे पर वरिष्ठ नागरिकों के लिए ${n} जगह मिली। सेवाओं की पुष्टि नहीं हुई है।`,
    emptySearch: "पहले शहर, इलाके या मोहल्ले का नाम लिखें।",
    geoDenied: "लोकेशन की अनुमति नहीं मिली। ब्राउज़र में अनुमति दें या इलाके से खोजें।",
    geoUnavailable: "अभी आपकी लोकेशन नहीं मिल सकी। इलाके से खोजें या बाद में फिर कोशिश करें।",
    geoTimeout: "लोकेशन पाने में समय लगा। फिर कोशिश करें।",
    geoUnsupported: "यह ब्राउज़र लोकेशन नहीं बता सकता। इलाके से खोजें।",
    apiBusy: "नक्शा सेवा व्यस्त है। फिर कोशिश करने से पहले 30 सेकंड रुकें।",
    apiError: "नक्शे की खोज पूरी नहीं हुई। इंटरनेट जाँचें और फिर कोशिश करें।",
    photonError: "इलाका खोज सेवा से संपर्क नहीं हो सका। इंटरनेट जाँचें और फिर कोशिश करें।",
    address: "पते की जानकारी", distance: "खोजे गए इलाके से दूरी",
    distanceCurrent: "आपकी लोकेशन से दूरी", phone: "फोन", website: "वेबसाइट", map: "नक्शा खोलें",
    noAddress: "पते की जानकारी उपलब्ध नहीं है।", waiting: "अगली नक्शा खोज से पहले थोड़ा इंतज़ार…"
  },
  mr: {
    card: "जवळची केंद्रे", cardDesc: "जवळची शिक्षण व मदत केंद्रे शोधा",
    section: "📍 जवळपास", title: "जवळची केंद्रे",
    intro: "OpenStreetMap वर ज्येष्ठ नागरिकांसाठी जवळची केंद्रे आणि मदतीची ठिकाणे शोधा.",
    back: "← डॅशबोर्डवर परत", location: "शहर, परिसर किंवा वस्ती",
    placeholder: "उदाहरण: पुणे, कोथरूड", search: "परिसर शोधा",
    radius: "शोधाचे अंतर", current: "माझे सध्याचे स्थान वापरा",
    privacy: "नकाशावर ज्येष्ठ नागरिकांसाठी असल्याचे नमूद केलेली ठिकाणेच दिसतील. सेवा केंद्राशी तपासा; माहिती अपूर्ण किंवा असत्यापित असू शकते.",
    retry: "पुन्हा शोधा", searching: "नकाशावरील ठिकाणे शोधत आहे…",
    geocoding: "परिसर शोधत आहे…", locating: "तुमचे स्थान घेत आहे…", noArea: "हा परिसर सापडला नाही. शहर किंवा वस्तीचे नाव वापरून पाहा.",
    noResults: "या परिसरात नकाशावर ज्येष्ठ नागरिकांसाठी ठिकाण सापडले नाही. अधिक अंतर किंवा दुसरा परिसर शोधा; माहिती अपूर्ण असू शकते.",
    resultCount: n => `ज्येष्ठ नागरिकांसाठी ${n} ठिकाणे नकाशावर सापडली. सेवा तपासलेल्या नाहीत.`,
    emptySearch: "आधी शहर, परिसर किंवा वस्तीचे नाव लिहा.",
    geoDenied: "स्थान वापरण्याची परवानगी नाकारली. ब्राउझरमध्ये परवानगी द्या किंवा परिसर शोधा.",
    geoUnavailable: "आत्ता तुमचे स्थान मिळू शकले नाही. परिसर शोधा किंवा नंतर पुन्हा प्रयत्न करा.",
    geoTimeout: "स्थान मिळण्यास वेळ लागला. पुन्हा प्रयत्न करा.",
    geoUnsupported: "हा ब्राउझर स्थान देऊ शकत नाही. परिसर शोधा.",
    apiBusy: "नकाशा सेवा व्यस्त आहे. पुन्हा प्रयत्न करण्यापूर्वी 30 सेकंद थांबा.",
    apiError: "नकाशावरील शोध पूर्ण झाला नाही. इंटरनेट तपासून पुन्हा प्रयत्न करा.",
    photonError: "परिसर शोध सेवेशी संपर्क झाला नाही. इंटरनेट तपासून पुन्हा प्रयत्न करा.",
    address: "पत्त्याची माहिती", distance: "शोधलेल्या परिसरापासून अंतर",
    distanceCurrent: "तुमच्या स्थानापासून अंतर", phone: "फोन", website: "संकेतस्थळ", map: "नकाशा उघडा",
    noAddress: "पत्त्याची माहिती उपलब्ध नाही.", waiting: "पुढील नकाशा शोधापूर्वी थोडे थांबा…"
  },
  gu: {
    card: "નજીકનાં કેન્દ્રો", cardDesc: "નજીકનાં શિક્ષણ અને સહાય કેન્દ્રો શોધો", section: "📍 નજીકમાં", title: "નજીકનાં કેન્દ્રો",
    intro: "નકશા પર વરિષ્ઠ નાગરિકો માટે નજીકનાં કેન્દ્રો અને સહાયનાં સ્થળો શોધો.", back: "← ડેશબોર્ડ પર પાછા જાઓ", location: "શહેર, વિસ્તાર અથવા મહોલ્લો",
    placeholder: "ઉદાહરણ: અમદાવાદ, મણિનગર", search: "વિસ્તાર શોધો", radius: "શોધનું અંતર", current: "મારું વર્તમાન સ્થાન વાપરો",
    privacy: "નકશા પર વરિષ્ઠ નાગરિકો માટેનાં સ્થળો જ દેખાશે. સેવાઓની પુષ્ટિ કેન્દ્ર સાથે કરો; માહિતી અધૂરી કે અચકાસેલી હોઈ શકે છે.", retry: "ફરી શોધો", searching: "નકશાનાં સ્થળો શોધાઈ રહ્યાં છે…",
    geocoding: "વિસ્તાર શોધાઈ રહ્યો છે…", locating: "તમારું સ્થાન મેળવી રહ્યાં છીએ…", noArea: "આ વિસ્તાર મળ્યો નથી. શહેર અથવા મહોલ્લાનું નામ અજમાવો.",
    noResults: "આ વિસ્તારમાં વરિષ્ઠ નાગરિકો માટેનું સ્થળ નકશા પર મળ્યું નથી. વધુ અંતર અથવા બીજો વિસ્તાર અજમાવો; માહિતી અધૂરી હોઈ શકે છે.", resultCount: n => `નકશા પર વરિષ્ઠ નાગરિકો માટેનાં ${n} સ્થળ મળ્યાં. સેવાઓ ચકાસેલી નથી.`,
    emptySearch: "પહેલાં શહેર, વિસ્તાર અથવા મહોલ્લો લખો.", geoDenied: "સ્થાનની પરવાનગી ન મળી. બ્રાઉઝરમાં પરવાનગી આપો અથવા વિસ્તાર શોધો.",
    geoUnavailable: "હમણાં તમારું સ્થાન મળ્યું નથી. વિસ્તાર શોધો અથવા પછી ફરી પ્રયાસ કરો.", geoTimeout: "સ્થાન મેળવવામાં વધુ સમય લાગ્યો. ફરી પ્રયાસ કરો.",
    geoUnsupported: "આ બ્રાઉઝર સ્થાન આપી શકતું નથી. વિસ્તાર શોધો.", apiBusy: "નકશા સેવા વ્યસ્ત છે. 30 સેકન્ડ પછી ફરી પ્રયાસ કરો.",
    apiError: "નકશાની શોધ થઈ શકી નથી. ઇન્ટરનેટ તપાસો અને ફરી પ્રયાસ કરો.", photonError: "વિસ્તાર શોધ સેવા મળી નથી. ઇન્ટરનેટ તપાસો અને ફરી પ્રયાસ કરો.",
    address: "સરનામાની વિગતો", distance: "શોધેલા વિસ્તારથી અંતર", distanceCurrent: "તમારા સ્થાનથી અંતર", phone: "ફોન", website: "વેબસાઇટ", map: "નકશો ખોલો",
    noAddress: "સરનામાની વિગતો ઉપલબ્ધ નથી.", waiting: "આગલી નકશા વિનંતી પહેલાં થોડી રાહ જુઓ…"
  },
  ta: {
    card: "அருகிலுள்ள மையங்கள்", cardDesc: "அருகிலுள்ள கற்றல் மற்றும் உதவி மையங்களைக் கண்டறியுங்கள்", section: "📍 அருகில்", title: "அருகிலுள்ள மையங்கள்",
    intro: "முதியோருக்கான அருகிலுள்ள மையங்கள் மற்றும் உதவி இடங்களை OpenStreetMap-ல் தேடுங்கள்.", back: "← முகப்புப் பலகைக்குத் திரும்பு", location: "நகரம், பகுதி அல்லது வட்டாரம்",
    placeholder: "எடுத்துக்காட்டு: சென்னை, அடையாறு", search: "பகுதியைத் தேடு", radius: "தேடல் தூரம்", current: "எனது தற்போதைய இடத்தைப் பயன்படுத்து",
    privacy: "முதியோருக்கானவை என வரைபடத்தில் குறிக்கப்பட்ட இடங்கள் மட்டுமே காட்டப்படும். சேவைகளை மையத்திடம் உறுதிசெய்யவும்; தகவல் முழுமையற்றதாக இருக்கலாம்.", retry: "மீண்டும் தேடு", searching: "வரைபட இடங்களைத் தேடுகிறது…",
    geocoding: "பகுதியைக் கண்டறிகிறது…", locating: "உங்கள் இடத்தைப் பெறுகிறது…", noArea: "இந்தப் பகுதி கிடைக்கவில்லை. நகரம் அல்லது வட்டாரப் பெயரை முயற்சிக்கவும்.",
    noResults: "இந்தப் பகுதியில் முதியோருக்கான இடங்கள் வரைபடத்தில் கிடைக்கவில்லை. அதிக தூரம் அல்லது வேறு பகுதியை முயற்சிக்கவும்; தகவல் முழுமையற்றிருக்கலாம்.", resultCount: n => `முதியோருக்கான ${n} இடங்கள் வரைபடத்தில் கிடைத்தன; சேவைகள் உறுதிப்படுத்தப்படவில்லை.`,
    emptySearch: "முதலில் நகரம், பகுதி அல்லது வட்டாரத்தை உள்ளிடுங்கள்.", geoDenied: "இட அனுமதி மறுக்கப்பட்டது. உலாவியில் அனுமதி அளிக்கவும் அல்லது பகுதியைத் தேடவும்.",
    geoUnavailable: "தற்போது உங்கள் இடம் கிடைக்கவில்லை. பகுதியைத் தேடவும் அல்லது பின்னர் முயற்சிக்கவும்.", geoTimeout: "இடத்தைப் பெற அதிக நேரம் ஆனது. மீண்டும் முயற்சிக்கவும்.",
    geoUnsupported: "இந்த உலாவி இடத்தை வழங்காது. பகுதியைத் தேடவும்.", apiBusy: "வரைபடச் சேவை பிஸியாக உள்ளது. 30 விநாடிகள் கழித்து முயற்சிக்கவும்.",
    apiError: "வரைபடத் தேடலை முடிக்க முடியவில்லை. இணையத்தைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.", photonError: "பகுதி தேடல் சேவையை அணுக முடியவில்லை. இணையத்தைச் சரிபார்க்கவும்.",
    address: "முகவரி விவரங்கள்", distance: "தேடிய பகுதியிலிருந்து தூரம்", distanceCurrent: "உங்கள் இடத்திலிருந்து தூரம்", phone: "தொலைபேசி", website: "இணையதளம்", map: "வரைபடத்தைத் திற",
    noAddress: "முகவரி விவரங்கள் இல்லை.", waiting: "அடுத்த வரைபடக் கோரிக்கைக்கு முன் சிறிது காத்திருக்கவும்…"
  },
  te: {
    card: "దగ్గరలోని కేంద్రాలు", cardDesc: "దగ్గరలోని విద్య, సహాయ కేంద్రాలను కనుగొనండి", section: "📍 దగ్గరలో", title: "దగ్గరలోని కేంద్రాలు",
    intro: "వృద్ధుల కోసం దగ్గరలోని కేంద్రాలు, సహాయ ప్రదేశాలను OpenStreetMapలో వెతకండి.", back: "← డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్ళండి", location: "నగరం, ప్రాంతం లేదా కాలనీ",
    placeholder: "ఉదాహరణ: హైదరాబాద్, అమీర్‌పేట్", search: "ప్రాంతాన్ని వెతకండి", radius: "వెతుకులాట పరిధి", current: "నా ప్రస్తుత స్థానాన్ని ఉపయోగించండి",
    privacy: "మ్యాప్‌లో వృద్ధుల కోసం గుర్తించిన ప్రదేశాలనే చూపిస్తాం. సేవలను కేంద్రంతో నిర్ధారించండి; వివరాలు అసంపూర్ణంగా ఉండవచ్చు.", retry: "మళ్లీ వెతకండి", searching: "మ్యాప్ ప్రదేశాలను వెతుకుతోంది…",
    geocoding: "ఆ ప్రాంతాన్ని కనుగొంటోంది…", locating: "మీ స్థానాన్ని పొందుతోంది…", noArea: "ఈ ప్రాంతం దొరకలేదు. నగరం లేదా కాలనీ పేరును ప్రయత్నించండి.",
    noResults: "ఈ ప్రాంతంలో వృద్ధుల కోసం ప్రదేశాలు మ్యాప్‌లో కనిపించలేదు. పెద్ద పరిధి లేదా వేరే ప్రాంతాన్ని ప్రయత్నించండి; సమాచారం అసంపూర్ణంగా ఉండవచ్చు.", resultCount: n => `వృద్ధుల కోసం ${n} ప్రదేశాలు మ్యాప్‌లో కనిపించాయి; సేవలు ధృవీకరించబడలేదు.`,
    emptySearch: "ముందుగా నగరం, ప్రాంతం లేదా కాలనీని నమోదు చేయండి.", geoDenied: "స్థాన అనుమతి నిరాకరించబడింది. బ్రౌజర్‌లో అనుమతించండి లేదా ప్రాంతాన్ని వెతకండి.",
    geoUnavailable: "ప్రస్తుతం మీ స్థానం అందుబాటులో లేదు. ప్రాంతాన్ని వెతకండి లేదా తర్వాత ప్రయత్నించండి.", geoTimeout: "స్థానాన్ని పొందడానికి ఎక్కువ సమయం పట్టింది. మళ్లీ ప్రయత్నించండి.",
    geoUnsupported: "ఈ బ్రౌజర్ స్థానాన్ని ఇవ్వలదు. ప్రాంతాన్ని వెతకండి.", apiBusy: "మ్యాప్ సేవ బిజీగా ఉంది. 30 సెకన్ల తర్వాత మళ్లీ ప్రయత్నించండి.",
    apiError: "మ్యాప్ శోధన పూర్తి కాలేదు. ఇంటర్నెట్‌ను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.", photonError: "ప్రాంత శోధన సేవను చేరుకోలేకపోయాం. ఇంటర్నెట్‌ను తనిఖీ చేయండి.",
    address: "చిరునామా వివరాలు", distance: "వెతికిన ప్రాంతం నుండి దూరం", distanceCurrent: "మీ స్థానం నుండి దూరం", phone: "ఫోన్", website: "వెబ్‌సైట్", map: "మ్యాప్ తెరవండి",
    noAddress: "చిరునామా వివరాలు లేవు.", waiting: "తదుపరి మ్యాప్ అభ్యర్థనకు ముందు కాసేపు వేచి ఉండండి…"
  }
};

let nearbyLastSearch = null;
let nearbySearchInProgress = false;
let nearbyLastOverpassRequestAt = 0;
let nearbyOverpassBlockedUntil = 0;


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", initializeApp);


/* =========================================================
   INITIALIZE APP
========================================================= */

function initializeApp() {

  setupLoader();

  setupTheme();

  setupLanguage();

  setupName();

  setupModules();

  setupLessonControls();

  setupQuiz();

  setupScamSimulator();

  setupVoice();

  setupNearbyCentres();

  setupFeedback();

  updateDashboard();

  setTimeout(() => {

    const loader = document.getElementById("appLoader");
    const app = document.getElementById("app");

    if (loader) {
      loader.classList.add("hidden");
    }

    if (app) {
      app.classList.remove("hidden");
    }

  }, 700);
}

function setupFeedback() {
  const form = document.getElementById("feedbackForm");
  if (!form) return;

  const modal = document.getElementById("feedbackModal");
  const openButton = document.getElementById("openFeedbackButton");
  const closeButton = document.getElementById("closeFeedbackButton");
  const closeModal = () => {
    modal?.classList.add("hidden");
    openButton?.focus();
  };

  openButton?.addEventListener("click", () => {
    modal?.classList.remove("hidden");
    closeButton?.focus();
  });
  closeButton?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const client = window.seniorSaathiSupabase;
    const status = document.getElementById("feedbackStatus");
    const submitButton = document.getElementById("feedbackSubmit");
    const rating = Number(form.querySelector('input[name="feedbackRating"]:checked')?.value);
    const message = document.getElementById("feedbackMessage")?.value.trim() || "";
    const labels = {
      en: { saving: "Saving…", thanks: "Thank you! Your feedback was saved.", error: "Feedback could not be saved to the database. Please try again." },
      hi: { saving: "सेव हो रहा है…", thanks: "धन्यवाद! आपकी राय सेव हो गई है।", error: "राय डेटाबेस में सेव नहीं हो सकी। फिर से कोशिश करें।" },
      mr: { saving: "जतन होत आहे…", thanks: "धन्यवाद! तुमचा अभिप्राय जतन झाला.", error: "अभिप्राय डेटाबेसमध्ये जतन झाला नाही. पुन्हा प्रयत्न करा." }
    };
    const text = labels[state.language] || labels.en;

    if (!client || !state.userId) {
      if (status) status.textContent = text.error;
      return;
    }

    if (!rating || !message) return;

    if (submitButton) submitButton.disabled = true;
    if (status) status.textContent = text.saving;

    try {
      const { error } = await client.from("user_feedback").insert({
        user_id: state.userId,
        learner_name: state.userName || null,
        rating,
        message
      });
      if (error) throw error;

      form.reset();
      if (status) status.textContent = text.thanks;
      showToast(text.thanks, 3500);
    } catch (error) {
      console.error("Could not save feedback:", error);
      if (status) status.textContent = `${text.error} ${error?.message || ""}`.trim();
      showToast(text.error, 7000);
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}


/* =========================================================
   LOADER
========================================================= */

function setupLoader() {

  const loader = document.getElementById("appLoader");

  if (!loader) return;

  loader.setAttribute("aria-label", "Loading Senior Saathi");
}


/* =========================================================
   LANGUAGE
========================================================= */

function setupLanguage() {

  const button =
    document.getElementById("languageButton");

  const modal =
    document.getElementById("languageModal");

  const close =
    document.getElementById("closeLanguage");

  if (button && modal) {

    button.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

  }

  if (close && modal) {

    close.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

  }

  document
    .querySelectorAll("[data-language]")
    .forEach((languageButton) => {

      languageButton.addEventListener("click", () => {

        const language =
          languageButton.dataset.language;

        changeLanguage(language);

        if (modal && builtInLanguages.has(language)) {
          modal.classList.add("hidden");
        }

      });

    });

  applyLanguage();
}


function changeLanguage(language) {

  if (![...builtInLanguages, ...remoteTranslationLanguages].includes(language)) {
    language = "en";
  }

  state.language = language;

  localStorage.setItem(
    "seniorSaathiLanguage",
    language
  );

  applyLanguage();
}

function rememberTranslationNode(node) {
  if (!originalTranslationTextNodes.has(node)) {
    originalTranslationTextNodes.set(node, node.nodeValue);
    trackedTranslationTextNodes.add(node);
  }
  return originalTranslationTextNodes.get(node);
}

function rememberTranslationAttribute(element, attribute) {
  let values = originalTranslationAttributes.get(element);
  if (!values) {
    values = new Map();
    originalTranslationAttributes.set(element, values);
  }
  if (!values.has(attribute)) {
    values.set(attribute, element.getAttribute(attribute));
    trackedTranslationAttributeNodes.add(element);
  }
  return values.get(attribute);
}

function restoreRemoteTranslations() {
  trackedTranslationTextNodes.forEach((node) => {
    if (node.isConnected && originalTranslationTextNodes.has(node)) {
      node.nodeValue = originalTranslationTextNodes.get(node);
    }
  });
  trackedTranslationAttributeNodes.forEach((element) => {
    if (!element.isConnected) return;
    const values = originalTranslationAttributes.get(element);
    values?.forEach((value, attribute) => element.setAttribute(attribute, value));
  });
  trackedTranslationTextNodes.clear();
  trackedTranslationAttributeNodes.clear();
  originalTranslationTextNodes = new WeakMap();
  originalTranslationAttributes = new WeakMap();
  pendingTranslationNodes = new WeakMap();
}

function scheduleRemoteTranslation() {
  clearTimeout(remoteTranslationTimer);
  remoteTranslationTimer = setTimeout(() => {
    if (remoteTranslationWorkerRunning) {
      remoteTranslationRescanRequested = true;
      return;
    }
    translateRemoteDom();
  }, 180);
}

function updateRemoteTranslationStatus(language, statusKey) {
  const messages = {
    gu: {
      loading: "એપનું ભાષાંતર થઈ રહ્યું છે…",
      ready: "ભાષાંતર તૈયાર છે.",
      error: "ઓનલાઇન ભાષાંતર ઉપલબ્ધ નથી. Supabase function અને Google Translate API key સેટ કરો."
    },
    bn: {
      loading: "অ্যাপ অনুবাদ করা হচ্ছে…",
      ready: "অনুবাদ প্রস্তুত।",
      error: "অনলাইন অনুবাদ পাওয়া যাচ্ছে না। Supabase function ও Google Translate API key সেট করুন।"
    },
    ta: {
      loading: "செயலி மொழிபெயர்க்கப்படுகிறது…",
      ready: "மொழிபெயர்ப்பு தயார்.",
      error: "ஆன்லைன் மொழிபெயர்ப்பு கிடைக்கவில்லை. Supabase function மற்றும் Google Translate API key அமைக்கவும்."
    },
    te: {
      loading: "యాప్ అనువదించబడుతోంది…",
      ready: "అనువాదం సిద్ధంగా ఉంది.",
      error: "ఆన్‌లైన్ అనువాదం అందుబాటులో లేదు. Supabase function, Google Translate API key సెట్ చేయండి."
    }
  };
  const status = document.getElementById("languageTranslationStatus");
  if (!status) return;
  status.textContent = messages[language]?.[statusKey] || "";
  status.classList.toggle("hidden", !statusKey);
  if (statusKey === "ready") {
    setTimeout(() => {
      if (state.language === language) {
        document.getElementById("languageModal")?.classList.add("hidden");
      }
    }, 450);
  }
}

function applyRemoteTranslations(language) {
  remoteTranslationGeneration++;
  pendingTranslationNodes = new WeakMap();
  if (!remoteTranslationLanguages.has(language)) {
    document.getElementById("languageTranslationStatus")?.classList.add("hidden");
    restoreRemoteTranslations();
    return;
  }

  updateRemoteTranslationStatus(language, "loading");

  if (!remoteTranslationObserver) {
    remoteTranslationObserver = new MutationObserver(scheduleRemoteTranslation);
    remoteTranslationObserver.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["placeholder", "aria-label", "title"]
    });
  }
  scheduleRemoteTranslation();
}

async function translateRemoteDom() {
  if (remoteTranslationWorkerRunning) {
    remoteTranslationRescanRequested = true;
    return;
  }
  remoteTranslationWorkerRunning = true;
  try {
    await translateRemoteDomNow();
  } finally {
    remoteTranslationWorkerRunning = false;
    if (remoteTranslationRescanRequested) {
      remoteTranslationRescanRequested = false;
      scheduleRemoteTranslation();
    }
  }
}

async function translateRemoteDomNow() {
  const target = state.language;
  if (!remoteTranslationLanguages.has(target)) return;
  const generation = remoteTranslationGeneration;
  const client = window.seniorSaathiSupabase;
  if (!client || !state.userId) {
    console.error("Online translation needs the Supabase translate-app function.");
    updateRemoteTranslationStatus(target, "error");
    return;
  }

  const jobs = [];
  const seenCacheKeys = new Set();
  const learnerName = String(state.userName || "").trim();
  const nameToken = "SENIORSAATHIUSERTOKEN";
  const isExcluded = (element) => Boolean(element?.closest(
    "script,style,noscript,textarea,input,select,option,code,pre,[contenteditable='true'],[data-no-translate],.notranslate"
  ));

  const addJob = (node, original, kind, attribute = null) => {
    const trimmed = original.trim();
    if (!trimmed || trimmed.length < 2) return;

    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    const text = trimmed.replaceAll(learnerName || "\u0000", nameToken);
    const cacheKey = `${target}\u001f${text}`;
    let pending = pendingTranslationNodes.get(node);
    if (!pending) {
      pending = new Set();
      pendingTranslationNodes.set(node, pending);
    }

    const setValue = (translated) => {
      const safeTranslation = translated.replaceAll(nameToken, learnerName);
      const value = `${leading}${safeTranslation}${trailing}`;
      if (kind === "text") {
        if (node.nodeValue !== value) node.nodeValue = value;
      } else if (node.getAttribute(attribute) !== value) {
        node.setAttribute(attribute, value);
      }
    };

    if (remoteTranslationCache[cacheKey]) {
      setValue(remoteTranslationCache[cacheKey]);
      return;
    }
    if (pending.has(cacheKey) || seenCacheKeys.has(cacheKey)) return;

    pending.add(cacheKey);
    seenCacheKeys.add(cacheKey);
    jobs.push({ node, kind, attribute, cacheKey, text, setValue });
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (isExcluded(node.parentElement)) continue;
    const original = rememberTranslationNode(node);
    addJob(node, original, "text");
  }

  document.body.querySelectorAll("[placeholder], [aria-label], [title]").forEach((element) => {
    if (isExcluded(element)) return;
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const original = rememberTranslationAttribute(element, attribute);
      addJob(element, original, "attribute", attribute);
    });
  });

  let failed = false;
  for (let offset = 0; offset < jobs.length; offset += 40) {
    if (generation !== remoteTranslationGeneration || state.language !== target) break;
    const batch = jobs.slice(offset, offset + 40);
    try {
      const { data, error } = await client.functions.invoke("translate-app", {
        body: { target, texts: batch.map((job) => job.text) }
      });
      if (error) throw error;
      if (!Array.isArray(data?.translations) || data.translations.length !== batch.length) {
        throw new Error("Translation service returned an unexpected result.");
      }

      batch.forEach((job, index) => {
        const translated = data.translations[index];
        remoteTranslationCache[job.cacheKey] = translated;
        const pending = pendingTranslationNodes.get(job.node);
        pending?.delete(job.cacheKey);
        if (generation === remoteTranslationGeneration && state.language === target && job.node.isConnected) {
          job.setValue(translated);
        }
      });
      try {
        localStorage.setItem("seniorSaathiRemoteTranslations", JSON.stringify(remoteTranslationCache));
      } catch (storageError) {
        console.warn("Could not cache translations locally:", storageError);
      }
      if (generation === remoteTranslationGeneration) scheduleRemoteTranslation();
    } catch (error) {
      failed = true;
      jobs.slice(offset).forEach((job) => pendingTranslationNodes.get(job.node)?.delete(job.cacheKey));
      console.error("Online translation failed:", error);
      if (generation === remoteTranslationGeneration && state.language === target) {
        updateRemoteTranslationStatus(target, "error");
      }
      break;
    }
  }

  if (generation === remoteTranslationGeneration && state.language === target) {
    updateRemoteTranslationStatus(target, failed ? "error" : "ready");
  }
}


function applyLanguage() {
  const lang = state.language;
  document.documentElement.lang = lang;

  if (builtInLanguages.has(lang)) {
    restoreRemoteTranslations();
  }

  const translations = {
    en: {
      brandSubtitle: "Digital Learning Companion",
      welcomeTitle: state.userName
        ? `Hello ${state.userName}! Welcome back`
        : "Hello! Welcome to Senior Saathi",
      welcomeDescription: "Learn smartphones, digital payments, internet and online safety step by step.",
      nameLabel: "What should we call you?",
      namePlaceholder: "Enter your name",
      continue: "Continue →",
      dashboardTitle: "Digital Learning Modules",
      dashboardDescription: "Choose a topic and learn at your own pace.",
      progressLabel: "Your Progress",
      module: "Module",
      start: "Start Learning →",
      quickAccess: "⚡ Quick Access",
      practice: "Practice & Safety",
      quiz: "Practice Quiz",
      quizDesc: "Test your knowledge",
      scam: "Scam Practice",
      scamDesc: "Learn to identify scams",
      voice: "Voice Help",
      voiceDesc: "Listen and learn",
      safety: "Digital Safety Tip",
      safetyMessage: "Never share your OTP, UPI PIN or password with anyone.",
      certificate: "Certificate of Completion",
      certificateStatus: "Complete all 6 modules to unlock your certificate.",
      certificateButton: "🎓 Get My Certificate",
      feedbackTitle: "Share your feedback",
      feedbackButton: "💬 Feedback",
      feedbackDescription: "Tell us what worked or how we can improve.",
      feedbackRating: "Your rating",
      feedbackMessage: "Your comments",
      feedbackPlaceholder: "Write your feedback here",
      feedbackPrivacy: "Please do not include passwords, OTPs, or payment details.",
      feedbackSubmit: "Send feedback"
    },

    hi: {
      brandSubtitle: "आपका डिजिटल सीखने का साथी",
      welcomeTitle: state.userName
        ? `नमस्ते ${state.userName}! फिर से स्वागत है`
        : "नमस्ते! Senior Saathi में आपका स्वागत है",
      welcomeDescription: "स्मार्टफोन, डिजिटल पेमेंट, इंटरनेट और ऑनलाइन सुरक्षा आसान तरीके से सीखें।",
      nameLabel: "हम आपको किस नाम से बुलाएँ?",
      namePlaceholder: "अपना नाम लिखें",
      continue: "आगे बढ़ें →",
      dashboardTitle: "डिजिटल सीखने के मॉड्यूल",
      dashboardDescription: "कोई विषय चुनें और अपनी गति से सीखें।",
      progressLabel: "आपकी प्रगति",
      module: "मॉड्यूल",
      start: "सीखना शुरू करें →",
      quickAccess: "⚡ तुरंत पहुँचें",
      practice: "अभ्यास और सुरक्षा",
      quiz: "अभ्यास क्विज़",
      quizDesc: "अपनी जानकारी जाँचें",
      scam: "धोखाधड़ी का अभ्यास",
      scamDesc: "धोखाधड़ी पहचानना सीखें",
      voice: "आवाज़ से सहायता",
      voiceDesc: "सुनें और सीखें",
      safety: "डिजिटल सुरक्षा सुझाव",
      safetyMessage: "अपना OTP, UPI PIN या पासवर्ड किसी को न बताएँ।",
      certificate: "कोर्स पूरा करने का प्रमाणपत्र",
      certificateStatus: "प्रमाणपत्र पाने के लिए सभी 6 मॉड्यूल पूरे करें।",
      certificateButton: "🎓 मेरा प्रमाणपत्र पाएँ",
      feedbackTitle: "अपनी राय दें",
      feedbackButton: "💬 राय दें",
      feedbackDescription: "बताएँ कि क्या अच्छा लगा या हम क्या सुधार सकते हैं।",
      feedbackRating: "आपकी रेटिंग",
      feedbackMessage: "आपकी टिप्पणी",
      feedbackPlaceholder: "अपनी राय यहाँ लिखें",
      feedbackPrivacy: "पासवर्ड, OTP या पेमेंट की जानकारी न लिखें।",
      feedbackSubmit: "राय भेजें"
    },

    mr: {
      brandSubtitle: "तुमचा डिजिटल शिकण्याचा साथी",
      welcomeTitle: state.userName
        ? `नमस्कार ${state.userName}! पुन्हा स्वागत आहे`
        : "नमस्कार! Senior Saathi मध्ये तुमचे स्वागत आहे",
      welcomeDescription: "स्मार्टफोन, डिजिटल पेमेंट, इंटरनेट आणि ऑनलाइन सुरक्षितता सोप्या पद्धतीने शिका.",
      nameLabel: "तुम्हाला कोणत्या नावाने बोलवायचे?",
      namePlaceholder: "तुमचे नाव लिहा",
      continue: "पुढे जा →",
      dashboardTitle: "डिजिटल शिक्षण मॉड्यूल",
      dashboardDescription: "विषय निवडा आणि तुमच्या गतीने शिका.",
      progressLabel: "तुमची प्रगती",
      module: "मॉड्यूल",
      start: "शिकायला सुरुवात करा →",
      quickAccess: "⚡ झटपट प्रवेश",
      practice: "सराव आणि सुरक्षितता",
      quiz: "सराव प्रश्नमंजुषा",
      quizDesc: "तुमचे ज्ञान तपासा",
      scam: "फसवणूक ओळखण्याचा सराव",
      scamDesc: "फसवणूक ओळखायला शिका",
      voice: "आवाजाद्वारे मदत",
      voiceDesc: "ऐका आणि शिका",
      safety: "डिजिटल सुरक्षितता सूचना",
      safetyMessage: "तुमचा OTP, UPI PIN किंवा पासवर्ड कोणालाही सांगू नका.",
      certificate: "अभ्यासक्रम पूर्ण केल्याचे प्रमाणपत्र",
      certificateStatus: "प्रमाणपत्र मिळवण्यासाठी सर्व 6 मॉड्यूल पूर्ण करा.",
      certificateButton: "🎓 माझे प्रमाणपत्र मिळवा",
      feedbackTitle: "तुमचा अभिप्राय द्या",
      feedbackButton: "💬 अभिप्राय",
      feedbackDescription: "काय चांगले वाटले किंवा काय सुधारता येईल ते सांगा.",
      feedbackRating: "तुमचे रेटिंग",
      feedbackMessage: "तुमची टिप्पणी",
      feedbackPlaceholder: "तुमचा अभिप्राय येथे लिहा",
      feedbackPrivacy: "पासवर्ड, OTP किंवा पेमेंटची माहिती लिहू नका.",
      feedbackSubmit: "अभिप्राय पाठवा"
    },
    gu: {
      brandSubtitle: "તમારો ડિજિટલ શીખવાનો સાથી", welcomeTitle: state.userName ? `નમસ્તે ${state.userName}! ફરી સ્વાગત છે` : "નમસ્તે! Senior Saathi માં તમારું સ્વાગત છે",
      welcomeDescription: "સ્માર્ટફોન, ડિજિટલ પેમેન્ટ, ઇન્ટરનેટ અને ઑનલાઇન સુરક્ષા સરળ રીતે શીખો.", nameLabel: "અમે તમને કયા નામથી બોલાવીએ?", namePlaceholder: "તમારું નામ લખો",
      continue: "આગળ વધો →", dashboardTitle: "ડિજિટલ શિક્ષણના મોડ્યુલ", dashboardDescription: "વિષય પસંદ કરો અને તમારી ગતિએ શીખો.", progressLabel: "તમારી પ્રગતિ", module: "મોડ્યુલ", start: "શીખવાનું શરૂ કરો →",
      quickAccess: "⚡ ઝડપી પહોંચ", practice: "અભ્યાસ અને સુરક્ષા", quiz: "અભ્યાસ ક્વિઝ", quizDesc: "તમારી જાણકારી ચકાસો", scam: "છેતરપિંડીનો અભ્યાસ", scamDesc: "છેતરપિંડી ઓળખતા શીખો",
      voice: "અવાજથી મદદ", voiceDesc: "સાંભળો અને શીખો", safety: "ડિજિટલ સુરક્ષા સૂચન", safetyMessage: "તમારો OTP, UPI PIN અથવા પાસવર્ડ કોઈને ન આપો.", certificate: "અભ્યાસ પૂર્ણ થયાનું પ્રમાણપત્ર",
      certificateStatus: "પ્રમાણપત્ર મેળવવા માટે બધા 6 મોડ્યુલ પૂર્ણ કરો.", certificateButton: "🎓 મારું પ્રમાણપત્ર મેળવો", feedbackTitle: "તમારો અભિપ્રાય આપો", feedbackButton: "💬 અભિપ્રાય",
      feedbackDescription: "શું સારું લાગ્યું અથવા શું સુધારી શકાય તે જણાવો.", feedbackRating: "તમારું રેટિંગ", feedbackMessage: "તમારી ટિપ્પણી", feedbackPlaceholder: "તમારો અભિપ્રાય અહીં લખો",
      feedbackPrivacy: "પાસવર્ડ, OTP અથવા ચુકવણીની વિગતો લખશો નહીં.", feedbackSubmit: "અભિપ્રાય મોકલો"
    },
    ta: {
      brandSubtitle: "உங்கள் டிஜிட்டல் கற்றல் துணை", welcomeTitle: state.userName ? `வணக்கம் ${state.userName}! மீண்டும் வரவேற்கிறோம்` : "வணக்கம்! Senior Saathi-க்கு வரவேற்கிறோம்",
      welcomeDescription: "திறன்பேசி, டிஜிட்டல் பணப்பரிவர்த்தனை, இணையம் மற்றும் இணையப் பாதுகாப்பை எளிதாகக் கற்றுக்கொள்ளுங்கள்.", nameLabel: "உங்களை எந்தப் பெயரில் அழைக்கலாம்?", namePlaceholder: "உங்கள் பெயரை உள்ளிடுங்கள்",
      continue: "தொடரவும் →", dashboardTitle: "டிஜிட்டல் கற்றல் பாடங்கள்", dashboardDescription: "ஒரு தலைப்பைத் தேர்ந்தெடுத்து உங்கள் வேகத்தில் கற்றுக்கொள்ளுங்கள்.", progressLabel: "உங்கள் முன்னேற்றம்", module: "பாடம்", start: "கற்றலைத் தொடங்கு →",
      quickAccess: "⚡ விரைவு அணுகல்", practice: "பயிற்சி மற்றும் பாதுகாப்பு", quiz: "பயிற்சி வினாடி வினா", quizDesc: "உங்கள் அறிவைச் சோதிக்கவும்", scam: "மோசடி பயிற்சி", scamDesc: "மோசடிகளை அடையாளம் காணக் கற்றுக்கொள்ளுங்கள்",
      voice: "குரல் உதவி", voiceDesc: "கேட்டு கற்றுக்கொள்ளுங்கள்", safety: "டிஜிட்டல் பாதுகாப்பு குறிப்பு", safetyMessage: "உங்கள் OTP, UPI PIN அல்லது கடவுச்சொல்லை யாரிடமும் பகிர வேண்டாம்.", certificate: "பாடநிறைவு சான்றிதழ்",
      certificateStatus: "சான்றிதழைப் பெற 6 பாடங்களையும் முடிக்கவும்.", certificateButton: "🎓 எனது சான்றிதழைப் பெறுங்கள்", feedbackTitle: "உங்கள் கருத்தைப் பகிருங்கள்", feedbackButton: "💬 கருத்து",
      feedbackDescription: "எது நன்றாக இருந்தது அல்லது எதை மேம்படுத்தலாம் என்று கூறுங்கள்.", feedbackRating: "உங்கள் மதிப்பீடு", feedbackMessage: "உங்கள் கருத்துகள்", feedbackPlaceholder: "உங்கள் கருத்தை இங்கே எழுதுங்கள்",
      feedbackPrivacy: "கடவுச்சொல், OTP அல்லது கட்டண விவரங்களைச் சேர்க்க வேண்டாம்.", feedbackSubmit: "கருத்தை அனுப்பு"
    },
    te: {
      brandSubtitle: "మీ డిజిటల్ అభ్యాస సహచరుడు", welcomeTitle: state.userName ? `నమస్కారం ${state.userName}! తిరిగి స్వాగతం` : "నమస్కారం! Senior Saathi కు స్వాగతం",
      welcomeDescription: "స్మార్ట్‌ఫోన్, డిజిటల్ చెల్లింపులు, ఇంటర్నెట్, ఆన్‌లైన్ భద్రతను సులభంగా నేర్చుకోండి.", nameLabel: "మిమ్మల్ని ఏ పేరుతో పిలవాలి?", namePlaceholder: "మీ పేరు నమోదు చేయండి",
      continue: "కొనసాగించండి →", dashboardTitle: "డిజిటల్ అభ్యాస పాఠాలు", dashboardDescription: "ఒక అంశాన్ని ఎంచుకుని మీ వేగంతో నేర్చుకోండి.", progressLabel: "మీ పురోగతి", module: "పాఠం", start: "అభ్యాసం ప్రారంభించండి →",
      quickAccess: "⚡ త్వరిత ప్రవేశం", practice: "అభ్యాసం మరియు భద్రత", quiz: "అభ్యాస క్విజ్", quizDesc: "మీ జ్ఞానాన్ని పరీక్షించుకోండి", scam: "మోసం గుర్తింపు అభ్యాసం", scamDesc: "మోసాలను గుర్తించడం నేర్చుకోండి",
      voice: "వాయిస్ సహాయం", voiceDesc: "విని నేర్చుకోండి", safety: "డిజిటల్ భద్రత సూచన", safetyMessage: "మీ OTP, UPI PIN లేదా పాస్‌వర్డ్‌ను ఎవరితోనూ పంచుకోకండి.", certificate: "కోర్సు పూర్తిచేసిన ధృవపత్రం",
      certificateStatus: "ధృవపత్రం పొందడానికి మొత్తం 6 పాఠాలను పూర్తి చేయండి.", certificateButton: "🎓 నా ధృవపత్రాన్ని పొందండి", feedbackTitle: "మీ అభిప్రాయాన్ని పంచుకోండి", feedbackButton: "💬 అభిప్రాయం",
      feedbackDescription: "ఏది బాగుంది లేదా ఏమి మెరుగుపరచాలో చెప్పండి.", feedbackRating: "మీ రేటింగ్", feedbackMessage: "మీ వ్యాఖ్యలు", feedbackPlaceholder: "మీ అభిప్రాయాన్ని ఇక్కడ రాయండి",
      feedbackPrivacy: "పాస్‌వర్డ్‌లు, OTPలు లేదా చెల్లింపు వివరాలు రాయకండి.", feedbackSubmit: "అభిప్రాయాన్ని పంపండి"
    }
  };

  const t = translations[lang] || translations.en;

  const putText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  putText("currentLanguage", ({
    en: "English", hi: "हिंदी", mr: "मराठी", gu: "ગુજરાતી", ta: "தமிழ்", te: "తెలుగు"
  })[lang] || "English");

  putText("brandSubtitle", t.brandSubtitle);
  putText("welcomeTitle", t.welcomeTitle);
  putText("dashboardWelcomeTitle", t.welcomeTitle);
  putText("welcomeDescription", t.welcomeDescription);
  putText("nameLabel", t.nameLabel);
  putText("saveNameButton", t.continue);
  putText("dashboardTitle", t.dashboardTitle);
  putText("dashboardDescription", t.dashboardDescription);
  putText("progressLabel", t.progressLabel);
  putText("safetyTipText", t.safetyMessage);
  putText("certificateStatus", t.certificateStatus);
  putText("certificateButton", t.certificateButton);
  putText("feedbackTitle", t.feedbackTitle);
  putText("openFeedbackButton", t.feedbackButton);
  putText("feedbackDescription", t.feedbackDescription);
  putText("feedbackRatingLabel", t.feedbackRating);
  putText("feedbackMessageLabel", t.feedbackMessage);
  putText("feedbackPrivacy", t.feedbackPrivacy);
  putText("feedbackSubmit", t.feedbackSubmit);

  const feedbackInput = document.getElementById("feedbackMessage");
  if (feedbackInput) feedbackInput.placeholder = t.feedbackPlaceholder;

  const nameInput = document.getElementById("userName");
  if (nameInput) nameInput.placeholder = t.namePlaceholder;

  const moduleNames = {
    en: [
      ["Smartphone Basics", "Learn basic phone controls, settings and useful features."],
      ["WhatsApp", "Learn messaging, photos, calls and privacy settings."],
      ["Digital Payments", "Learn UPI, QR payments and payment safety."],
      ["Internet & Google", "Learn searching, websites, videos and online services."],
      ["Cyber Safety", "Learn about scams, OTP safety, passwords and suspicious links."],
      ["Digital Services", "Learn about government, travel and everyday digital services."]
    ],
    hi: [
      ["स्मार्टफोन की जानकारी", "फोन के बटन, सेटिंग्स और उपयोगी सुविधाएँ सीखें।"],
      ["व्हाट्सऐप", "मैसेज, फोटो, कॉल और गोपनीयता सेटिंग्स सीखें।"],
      ["डिजिटल भुगतान", "UPI, QR भुगतान और सुरक्षित भुगतान करना सीखें।"],
      ["इंटरनेट और Google", "खोज, वेबसाइट, वीडियो और ऑनलाइन सेवाएँ सीखें।"],
      ["साइबर सुरक्षा", "धोखाधड़ी, OTP, पासवर्ड और संदिग्ध लिंक के बारे में सीखें।"],
      ["डिजिटल सेवाएँ", "सरकारी, यात्रा और रोज़मर्रा की डिजिटल सेवाएँ सीखें।"]
    ],
    mr: [
      ["स्मार्टफोनची माहिती", "फोनची बटणे, सेटिंग्ज आणि उपयुक्त सुविधा शिका."],
      ["व्हॉट्सॲप", "मेसेज, फोटो, कॉल आणि गोपनीयता सेटिंग्ज शिका."],
      ["डिजिटल पेमेंट", "UPI, QR पेमेंट आणि सुरक्षित पेमेंट करायला शिका."],
      ["इंटरनेट आणि Google", "शोध, वेबसाइट, व्हिडिओ आणि ऑनलाइन सेवा शिका."],
      ["सायबर सुरक्षितता", "फसवणूक, OTP, पासवर्ड आणि संशयास्पद लिंक्सबद्दल शिका."],
      ["डिजिटल सेवा", "सरकारी, प्रवास आणि दैनंदिन डिजिटल सेवा शिका."]
    ],
    gu: [
      ["સ્માર્ટફોનની મૂળભૂત જાણકારી", "ફોનના બટનો, સેટિંગ્સ અને ઉપયોગી સુવિધાઓ શીખો."], ["વોટ્સએપ", "સંદેશા, ફોટા, કૉલ અને ગોપનીયતા સેટિંગ્સ શીખો."],
      ["ડિજિટલ પેમેન્ટ", "UPI, QR પેમેન્ટ અને સુરક્ષિત ચુકવણી શીખો."], ["ઇન્ટરનેટ અને Google", "શોધ, વેબસાઇટ, વીડિયો અને ઑનલાઇન સેવાઓ શીખો."],
      ["સાયબર સુરક્ષા", "છેતરપિંડી, OTP, પાસવર્ડ અને શંકાસ્પદ લિંક્સ વિશે શીખો."], ["ડિજિટલ સેવાઓ", "સરકારી, મુસાફરી અને રોજિંદી ડિજિટલ સેવાઓ શીખો."]
    ],
    ta: [
      ["திறன்பேசி அடிப்படைகள்", "தொலைபேசி கட்டுப்பாடுகள், அமைப்புகள் மற்றும் பயனுள்ள அம்சங்களைக் கற்றுக்கொள்ளுங்கள்."], ["வாட்ஸ்அப்", "செய்திகள், புகைப்படங்கள், அழைப்புகள் மற்றும் தனியுரிமை அமைப்புகளைக் கற்றுக்கொள்ளுங்கள்."],
      ["டிஜிட்டல் பணப்பரிவர்த்தனை", "UPI, QR பணப்பரிவர்த்தனை மற்றும் பாதுகாப்பான கட்டணங்களைக் கற்றுக்கொள்ளுங்கள்."], ["இணையம் மற்றும் Google", "தேடல், இணையதளங்கள், காணொளிகள் மற்றும் இணையச் சேவைகளைக் கற்றுக்கொள்ளுங்கள்."],
      ["இணையப் பாதுகாப்பு", "மோசடிகள், OTP, கடவுச்சொற்கள் மற்றும் சந்தேக இணைப்புகள் பற்றி கற்றுக்கொள்ளுங்கள்."], ["டிஜிட்டல் சேவைகள்", "அரசு, பயணம் மற்றும் அன்றாட டிஜிட்டல் சேவைகளைக் கற்றுக்கொள்ளுங்கள்."]
    ],
    te: [
      ["స్మార్ట్‌ఫోన్ ప్రాథమికాలు", "ఫోన్ నియంత్రణలు, సెట్టింగ్‌లు, ఉపయోగకరమైన సౌకర్యాలను నేర్చుకోండి."], ["వాట్సాప్", "సందేశాలు, ఫోటోలు, కాల్స్, గోప్యత సెట్టింగ్‌లను నేర్చుకోండి."],
      ["డిజిటల్ చెల్లింపులు", "UPI, QR చెల్లింపులు, సురక్షిత చెల్లింపులను నేర్చుకోండి."], ["ఇంటర్నెట్ మరియు Google", "వెతకడం, వెబ్‌సైట్‌లు, వీడియోలు, ఆన్‌లైన్ సేవలను నేర్చుకోండి."],
      ["సైబర్ భద్రత", "మోసాలు, OTP, పాస్‌వర్డ్‌లు, అనుమానాస్పద లింకుల గురించి నేర్చుకోండి."], ["డిజిటల్ సేవలు", "ప్రభుత్వ, ప్రయాణ, రోజువారీ డిజిటల్ సేవలను నేర్చుకోండి."]
    ]
  };

  document.querySelectorAll(".module-card").forEach((card, index) => {
    const title = card.querySelector(".module-content h3");
    const description = card.querySelector(".module-content p");
    const number = card.querySelector(".module-number");
    const button = card.querySelector(".module-button");
    const details = moduleNames[lang] || moduleNames.en;

    if (details[index]) {
      if (title) title.textContent = details[index][0];
      if (description) description.textContent = details[index][1];
    }

    if (number) {
      number.textContent =
        `${t.module} ${String(index + 1).padStart(2, "0")}`;
    }

    if (button) button.textContent = t.start;
  });

  const labels = document.querySelectorAll(".section-label");
  if (labels[0]) labels[0].textContent =
    ({ hi: "📚 सीखें", mr: "📚 शिका", gu: "📚 શીખો", ta: "📚 கற்றல்", te: "📚 నేర్చుకోండి" })[lang] || "📚 Learn";

  if (labels[1]) labels[1].textContent = t.quickAccess;

  const quickHeading = document.querySelector(".quick-section .section-heading h2");
  if (quickHeading) quickHeading.textContent = t.practice;

  const quickCards = document.querySelectorAll("#quizButton, #scamButton, #voiceButton");
  const quickText = [
    [t.quiz, t.quizDesc],
    [t.scam, t.scamDesc],
    [t.voice, t.voiceDesc]
  ];

  quickCards.forEach((card, index) => {
    const title = card.querySelector("strong");
    const description = card.querySelector("small");

    if (quickText[index]) {
      if (title) title.textContent = quickText[index][0];
      if (description) description.textContent = quickText[index][1];
    }
  });

  const safetyLabel = document.querySelector(".safety-tip > div:last-child > span");
  if (safetyLabel) safetyLabel.textContent = t.safety;

  const carouselTranslations = {
    en: [
      ["Smartphone Basics", "Learn your smartphone step by step."],
      ["Safe UPI Payments", "Learn safe digital payments."],
      ["Cyber Safety", "Never share your OTP or UPI PIN."],
      ["WhatsApp", "Messages, calls, photos and privacy."],
      ["Internet & Google", "Search online safely and confidently."],
      ["Check Links", "Think before opening unknown links."],
      ["Learn at Your Pace", "Learn comfortably with Senior Saathi."]
    ],
    hi: [
      ["स्मार्टफोन की जानकारी", "अपने फोन को धीरे-धीरे सीखें।"],
      ["सुरक्षित UPI भुगतान", "डिजिटल भुगतान सुरक्षित तरीके से करें।"],
      ["साइबर सुरक्षा", "अपना OTP या UPI PIN कभी साझा न करें।"],
      ["WhatsApp", "मैसेज, कॉल, फोटो और गोपनीयता।"],
      ["इंटरनेट और Google", "इंटरनेट पर सुरक्षित तरीके से खोजें।"],
      ["लिंक जाँचें", "अनजान लिंक खोलने से पहले सोचें।"],
      ["अपनी गति से सीखें", "Senior Saathi के साथ आराम से सीखें।"]
    ],
    mr: [
      ["स्मार्टफोनची माहिती", "तुमचा फोन हळूहळू शिकून घ्या."],
      ["सुरक्षित UPI पेमेंट", "डिजिटल पेमेंट सुरक्षितपणे करा."],
      ["सायबर सुरक्षितता", "तुमचा OTP किंवा UPI PIN कधीही शेअर करू नका."],
      ["WhatsApp", "मेसेज, कॉल, फोटो आणि गोपनीयता."],
      ["इंटरनेट आणि Google", "इंटरनेटवर सुरक्षितपणे शोधा."],
      ["लिंक तपासा", "अनोळखी लिंक उघडण्यापूर्वी विचार करा."],
      ["तुमच्या गतीने शिका", "Senior Saathi सोबत सहजपणे शिका."]
    ],
    gu: [
      ["સ્માર્ટફોનની મૂળભૂત જાણકારી", "તમારો ફોન ધીમે ધીમે શીખો."],
      ["સુરક્ષિત UPI ચુકવણી", "ડિજિટલ ચુકવણી સુરક્ષિત રીતે કરો."],
      ["સાયબર સુરક્ષા", "OTP અથવા UPI PIN ક્યારેય શેર ન કરો."],
      ["WhatsApp", "સંદેશા, કૉલ, ફોટા અને ગોપનીયતા."],
      ["ઇન્ટરનેટ અને Google", "ઇન્ટરનેટ પર સુરક્ષિત રીતે શોધો."],
      ["લિંક તપાસો", "અજાણી લિંક ખોલતાં પહેલાં વિચારો."],
      ["તમારી ગતિએ શીખો", "Senior Saathi સાથે સરળતાથી શીખો."]
    ],
    ta: [
      ["திறன்பேசி அடிப்படைகள்", "உங்கள் திறன்பேசியை படிப்படியாகக் கற்றுக்கொள்ளுங்கள்."],
      ["பாதுகாப்பான UPI கட்டணம்", "டிஜிட்டல் கட்டணங்களைப் பாதுகாப்பாகச் செய்யுங்கள்."],
      ["இணையப் பாதுகாப்பு", "OTP அல்லது UPI PIN-ஐப் பகிர வேண்டாம்."],
      ["WhatsApp", "செய்திகள், அழைப்புகள், படங்கள், தனியுரிமை."],
      ["இணையம் மற்றும் Google", "இணையத்தில் பாதுகாப்பாகத் தேடுங்கள்."],
      ["இணைப்பைச் சரிபார்க்கவும்", "அறியாத இணைப்பைத் திறப்பதற்கு முன் சிந்தியுங்கள்."],
      ["உங்கள் வேகத்தில் கற்றுக்கொள்ளுங்கள்", "Senior Saathi-யுடன் எளிதாகக் கற்றுக்கொள்ளுங்கள்."]
    ],
    te: [
      ["స్మార్ట్‌ఫోన్ ప్రాథమికాలు", "మీ ఫోన్‌ను ఒక్కో దశగా నేర్చుకోండి."],
      ["సురక్షిత UPI చెల్లింపులు", "డిజిటల్ చెల్లింపులను సురక్షితంగా చేయండి."],
      ["సైబర్ భద్రత", "OTP లేదా UPI PIN‌ను ఎప్పుడూ పంచుకోకండి."],
      ["WhatsApp", "సందేశాలు, కాల్స్, ఫోటోలు, గోప్యత."],
      ["ఇంటర్నెట్ మరియు Google", "ఇంటర్నెట్‌లో సురక్షితంగా వెతకండి."],
      ["లింక్‌లను తనిఖీ చేయండి", "తెలియని లింక్ తెరవడానికి ముందు ఆలోచించండి."],
      ["మీ వేగంతో నేర్చుకోండి", "Senior Saathiతో సౌకర్యంగా నేర్చుకోండి."]
    ]
  };
  const localizedSlides = carouselTranslations[lang] || carouselTranslations.en;
  if (localizedSlides) {
    document.querySelectorAll("#carouselTrack .learning-slide").forEach((slide, index) => {
      const [title, description] = localizedSlides[index] || [];
      if (title) slide.querySelector("h3")?.replaceChildren(document.createTextNode(title));
      if (description) slide.querySelector("p")?.replaceChildren(document.createTextNode(description));
    });
  }

  const certificateHeading = document.querySelector("#certificateSection h2");
  if (certificateHeading) certificateHeading.textContent = t.certificate;

  updateNearbyCentresLanguage();

  updateDashboard();

  if (state.currentModule && !document.getElementById("lessonModal")?.classList.contains("hidden")) {
    renderLesson();
  }
  if (
    state.activeQuizQuestions?.length &&
    !document.getElementById("quizModal")?.classList.contains("hidden")
  ) {
    if (state.quizIndex < state.activeQuizQuestions.length) renderQuizQuestion();
    else showQuizResult(false);
  }
  if (!document.getElementById("scamModal")?.classList.contains("hidden")) {
    if (state.scamIndex < scamQuestions.length) renderScamQuestion();
    else showScamComplete();
  }

  applyRemoteTranslations(lang);
}

function updateNearbyCentresLanguage() {
  const t = nearbyTranslations[state.language] || nearbyTranslations.en;
  const texts = {
    nearbyCardTitle: t.card,
    nearbyCardDescription: t.cardDesc,
    nearbySectionLabel: t.section,
    nearbyCentresHeading: t.title,
    nearbyIntro: t.intro,
    nearbyBackButton: t.back,
    nearbyLocationLabel: t.location,
    nearbySearchButton: t.search,
    nearbyRadiusLabel: t.radius,
    nearbyUseLocationButton: t.current,
    nearbyPrivacyNote: t.privacy,
    nearbyRetryButton: t.retry
  };
  Object.entries(texts).forEach(([id, value]) => setText(id, value));
  const input = document.getElementById("nearbyLocationInput");
  if (input) input.placeholder = t.placeholder;
}

function setupNearbyCentres() {
  const button = document.getElementById("nearbyCentresButton");
  const back = document.getElementById("nearbyBackButton");
  const search = document.getElementById("nearbySearchButton");
  const locate = document.getElementById("nearbyUseLocationButton");
  const retry = document.getElementById("nearbyRetryButton");
  const input = document.getElementById("nearbyLocationInput");
  button?.addEventListener("click", showNearbyCentres);
  back?.addEventListener("click", hideNearbyCentres);
  search?.addEventListener("click", () => searchNearbyCentres("area"));
  locate?.addEventListener("click", searchNearbyCentres.bind(null, "current"));
  retry?.addEventListener("click", () => searchNearbyCentres("retry"));
  input?.addEventListener("keydown", event => {
    if (event.key === "Enter") searchNearbyCentres("area");
  });
}

function showNearbyCentres() {
  ["dashboard", "quickAccessSection", "safetyTipSection", "certificateSection"]
    .forEach(id => document.getElementById(id)?.classList.add("hidden"));
  document.getElementById("nearbyCentresSection")?.classList.remove("hidden");
  document.getElementById("nearbyCentresSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("nearbyLocationInput")?.focus({ preventScroll: true });
}

function hideNearbyCentres() {
  document.getElementById("nearbyCentresSection")?.classList.add("hidden");
  ["dashboard", "quickAccessSection", "safetyTipSection", "certificateSection"]
    .forEach(id => document.getElementById(id)?.classList.remove("hidden"));
  document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setNearbyStatus(message, kind = "info") {
  const status = document.getElementById("nearbyStatus");
  if (status) {
    status.textContent = message;
    status.dataset.kind = kind;
  }
}

function setNearbyBusy(busy) {
  nearbySearchInProgress = busy;
  ["nearbySearchButton", "nearbyUseLocationButton", "nearbyRetryButton"].forEach(id => {
    const button = document.getElementById(id);
    if (button) button.disabled = busy;
  });
}

function isSeniorSupportPlace(place) {
  const tags = place.tags || {};
  const text = [
    place.name,
    tags["name:en"],
    tags["name:hi"],
    tags["name:mr"],
    tags["name:gu"],
    tags["name:ta"],
    tags["name:te"],
    tags.description,
    tags["description:en"],
    tags["contact:description"],
    tags.operator
  ].filter(Boolean).join(" ").toLowerCase();
  const seniorMention = /senior citizens?|senior (?:cent(?:er|re)|club|care|support|services?|day care|association)|elder(?:ly)?|older adults?|older people|old age (?:home|cent(?:er|re)|care)|retir(?:ee|ees|ement)|jyeshtha nagrik|varishtha nagrik|वरिष्ठ नागरिक|ज्येष्ठ नागरिक|बुजुर्ग(?:ों)? (?:केंद्र|आश्रम)|बुज़ुर्ग(?:ों)? (?:केंद्र|आश्रम)|वृद्धाश्रम|ज्येष्ठ|વૃદ્ધાશ્રમ|વરિષ્ઠ નાગરિક|વૃદ્ધ નાગરિક|முதியோர்|மூத்த குடிமக்கள்|వృద్ధాశ్రమ|వృద్ధుల కేంద్ర|వయోవృద్ధ/.test(text);
  const audienceTags = [tags["social_facility:for"], tags["community_centre:for"], tags.club]
    .filter(Boolean).join(";").toLowerCase().split(/[;,]/).map(value => value.trim());
  const seniorAudience = audienceTags.some(value => ["senior", "seniors", "elderly"].includes(value));
  const residentialFacility = /^(nursing_home|assisted_living|retirement_home|group_home)$/.test((tags.social_facility || "").toLowerCase());
  return (seniorMention || seniorAudience) && !residentialFacility;
}

async function searchNearbyCentres(mode) {
  if (nearbySearchInProgress) return;
  const t = nearbyTranslations[state.language] || nearbyTranslations.en;
  const input = document.getElementById("nearbyLocationInput");
  const radius = Number(document.getElementById("nearbyRadius")?.value) || 5000;
  let point;
  let source = "area";
  if (mode === "retry" && nearbyLastSearch?.point) {
    point = nearbyLastSearch.point;
    source = nearbyLastSearch.source;
  } else if (mode === "retry" && nearbyLastSearch?.mode) {
    mode = nearbyLastSearch.mode;
  }
  setNearbyBusy(true);
  if (mode === "current") {
    if (!navigator.geolocation) {
      setNearbyStatus(t.geoUnsupported, "error");
      nearbyLastSearch = { mode: "current" };
      document.getElementById("nearbyRetryButton")?.classList.remove("hidden");
      setNearbyBusy(false);
      return;
    }
    nearbyLastSearch = { mode: "current" };
    setNearbyStatus(t.locating, "loading");
    try {
      const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 }));
      point = { lat: position.coords.latitude, lon: position.coords.longitude };
      source = "current";
    } catch (error) {
      const message = error.code === 1 ? t.geoDenied : error.code === 3 ? t.geoTimeout : t.geoUnavailable;
      setNearbyStatus(message, "error");
      document.getElementById("nearbyRetryButton")?.classList.remove("hidden");
      setNearbyBusy(false);
      return;
    }
  } else {
    const query = mode === "retry" ? nearbyLastSearch?.query : input?.value.trim();
    if (!query) {
      setNearbyStatus(t.emptySearch, "error");
      setNearbyBusy(false);
      input?.focus();
      return;
    }
    nearbyLastSearch = { mode: "area", query };
    setNearbyStatus(t.geocoding, "loading");
    try {
      point = await geocodeNearbyArea(query);
      if (!point) {
        setNearbyStatus(t.noArea, "error");
        setNearbyBusy(false);
        return;
      }
    } catch {
      setNearbyStatus(t.photonError, "error");
      document.getElementById("nearbyRetryButton")?.classList.remove("hidden");
      setNearbyBusy(false);
      return;
    }
  }

  nearbyLastSearch = { point, source, radius };
  await fetchNearbyPlaces(point, radius, source);
}

async function geocodeNearbyArea(query) {
  const key = `seniorSaathiPhoton:${query.toLowerCase()}`;
  try {
    const saved = JSON.parse(sessionStorage.getItem(key) || "null");
    if (saved && Date.now() - saved.at < 86400000) return saved.point;
  } catch { /* Ignore unavailable or malformed browser cache. */ }
  const url = new URL("https://photon.komoot.io/api/");
  url.searchParams.set("q", query);
  url.searchParams.set("limit", "1");
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error("Geocoding service error");
  const data = await response.json();
  const coordinates = data.features?.[0]?.geometry?.coordinates;
  if (!coordinates || !Number.isFinite(coordinates[0]) || !Number.isFinite(coordinates[1])) return null;
  const point = { lon: coordinates[0], lat: coordinates[1] };
  try { sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), point })); } catch { /* Storage may be disabled. */ }
  return point;
}

function nearbyCacheKey(point, radius) {
  return `seniorSaathiOSMv2:${point.lat.toFixed(3)}:${point.lon.toFixed(3)}:${radius}`;
}

async function fetchNearbyPlaces(point, radius, source) {
  const t = nearbyTranslations[state.language] || nearbyTranslations.en;
  const results = document.getElementById("nearbyResults");
  const retry = document.getElementById("nearbyRetryButton");
  if (!results) return;
  setNearbyBusy(true);
  retry?.classList.add("hidden");
  results.replaceChildren();
  setNearbyStatus(t.searching, "loading");
  const key = nearbyCacheKey(point, radius);
  let places = null;
  try {
    const saved = JSON.parse(sessionStorage.getItem(key) || "null");
    if (saved && Date.now() - saved.at < 600000) places = saved.places;
  } catch { /* Ignore browser cache issues. */ }
  try {
    if (!places) {
      if (Date.now() < nearbyOverpassBlockedUntil) throw new Error("busy");
      const waitMs = Math.max(0, 1500 - (Date.now() - nearbyLastOverpassRequestAt));
      if (waitMs) {
        setNearbyStatus(t.waiting, "loading");
        await new Promise(resolve => setTimeout(resolve, waitMs));
      }
      const seniorKeywords = "senior citizens?|senior (cent(er|re)|club|care|support|services?|day care|association)|elderly|older adults?|older people|old age (home|cent(er|re)|care)|retiree|retirement|jyeshtha nagrik|varishtha nagrik|वरिष्ठ नागरिक|ज्येष्ठ नागरिक|बुजुर्गों का केंद्र|बुज़ुर्गों का केंद्र|वृद्धाश्रम|વરિષ્ઠ નાગરિક|વૃદ્ધ નાગરિક|વૃદ્ધાશ્રમ|મુખ્ય વૃદ્ધ|முதியோர்|மூத்த குடிமக்கள்|వృద్ధాశ్రమ|వృద్ధుల కేంద్ర|వయోవృద్ధ";
      const query = `[out:json][timeout:25];(nwr(around:${radius},${point.lat},${point.lon})[amenity=social_facility]["social_facility:for"~"^(senior|elderly)$",i];nwr(around:${radius},${point.lat},${point.lon})[amenity=community_centre]["community_centre:for"~"senior|elderly",i];nwr(around:${radius},${point.lat},${point.lon})[club~"^(senior|seniors|elderly)$",i];nwr(around:${radius},${point.lat},${point.lon})[name~"${seniorKeywords}",i];nwr(around:${radius},${point.lat},${point.lon})[description~"${seniorKeywords}",i];);out center tags 100;`;
      nearbyLastOverpassRequestAt = Date.now();
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", Accept: "application/json" },
        body: new URLSearchParams({ data: query })
      });
      if (response.status === 429 || response.status === 406) {
        nearbyOverpassBlockedUntil = Date.now() + 30000;
        throw new Error("busy");
      }
      if (!response.ok) throw new Error("request");
      const data = await response.json();
      places = (data.elements || []).filter(item => item.tags?.name).map(item => {
        const location = item.lat != null ? { lat: item.lat, lon: item.lon } : item.center;
        return location ? { id: `${item.type}/${item.id}`, name: item.tags.name, tags: item.tags, lat: location.lat, lon: location.lon } : null;
      }).filter(Boolean);
      const seen = new Set();
      places = places.filter(place => !seen.has(place.id) && seen.add(place.id));
      try { sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), places })); } catch { /* Storage may be disabled. */ }
    }
    places = places.filter(isSeniorSupportPlace);
    renderNearbyPlaces(places, point, source);
    setNearbyStatus(places.length ? t.resultCount(places.length) : t.noResults, places.length ? "success" : "empty");
  } catch (error) {
    const busy = error.message === "busy";
    setNearbyStatus(busy ? t.apiBusy : t.apiError, "error");
    retry?.classList.remove("hidden");
  } finally {
    setNearbyBusy(false);
  }
}

function renderNearbyPlaces(places, origin, source) {
  const container = document.getElementById("nearbyResults");
  if (!container) return;
  const t = nearbyTranslations[state.language] || nearbyTranslations.en;
  const fragment = document.createDocumentFragment();
  places.map(place => ({ ...place, distance: distanceBetween(origin, place) }))
    .sort((a, b) => a.distance - b.distance)
    .forEach(place => {
      const card = document.createElement("article");
      card.className = "nearby-result-card";
      const heading = document.createElement("h3");
      heading.textContent = place.name;
      card.appendChild(heading);
      const addressParts = ["addr:full", "contact:address", "addr:housenumber", "addr:street", "addr:place", "addr:suburb", "addr:city", "addr:district", "addr:postcode"]
        .map(tag => place.tags[tag]).filter(Boolean);
      const address = document.createElement("p");
      address.textContent = `${t.address}: ${addressParts.length ? [...new Set(addressParts)].join(", ") : t.noAddress}`;
      card.appendChild(address);
      const distance = document.createElement("p");
      distance.textContent = `${source === "current" ? t.distanceCurrent : t.distance}: ${place.distance < 1 ? `${Math.round(place.distance * 1000)} m` : `${place.distance.toFixed(1)} km`}`;
      card.appendChild(distance);
      const phoneNumber = place.tags.phone || place.tags["contact:phone"];
      if (phoneNumber) {
        const phone = document.createElement("p");
        phone.textContent = `${t.phone}: ${phoneNumber}`;
        card.appendChild(phone);
      }
      const websiteUrl = place.tags.website || place.tags["contact:website"];
      if (websiteUrl && /^https?:\/\//i.test(websiteUrl)) {
        const site = document.createElement("a");
        site.href = websiteUrl;
        site.target = "_blank";
        site.rel = "noopener noreferrer";
        site.textContent = t.website;
        card.appendChild(site);
      }
      const map = document.createElement("a");
      map.href = `https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=17/${place.lat}/${place.lon}`;
      map.target = "_blank";
      map.rel = "noopener noreferrer";
      map.textContent = t.map;
      card.appendChild(map);
      fragment.appendChild(card);
    });
  container.replaceChildren(fragment);
}

function distanceBetween(a, b) {
  const radians = degrees => degrees * Math.PI / 180;
  const dLat = radians(b.lat - a.lat);
  const dLon = radians(b.lon - a.lon);
  const lat1 = radians(a.lat);
  const lat2 = radians(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}


function setText(id, text) {

  const element =
    document.getElementById(id);

  if (element) {
    element.textContent = text;
  }
}


/* =========================================================
   NAME
========================================================= */

function setupName() {

  const input =
    document.getElementById("userName");

  const button =
    document.getElementById("saveNameButton");

  if (state.userName && input) {
    input.value = state.userName;
  }

  if (button) {

    button.addEventListener("click", saveName);
  }

  if (input) {

    input.addEventListener("keydown", (event) => {

      if (event.key === "Enter") {
        saveName();
      }

    });

  }
}


async function saveName() {

  const input =
    document.getElementById("userName");

  if (!input) return;

  const name =
    input.value.trim();

  if (!name) {

    showToast(
      state.language === "hi"
        ? "कृपया अपना नाम लिखें।"
        : state.language === "mr"
          ? "कृपया तुमचे नाव लिहा."
          : "Please enter your name."
    );

    input.focus();

    return;
  }

  if (state.guestMode) {
    const client = window.seniorSaathiSupabase;
    if (!client) {
      showToast("Database is unavailable. Check the Supabase connection.", 10000);
      return;
    }

  }

  state.userName = name;

  localStorage.setItem(
    "seniorSaathiUserName",
    name
  );

  let profileSaveError = "";
  if (state.userId) {
    const button = document.getElementById("saveNameButton");
    if (button) button.disabled = true;
    try {
      await persistLearnerProfile({ name });

      if (state.guestMode) {
        const { error: guestModeError } = await window.seniorSaathiSupabase
          .from("guest_mode_events")
          .insert({ source: "guest_mode", learner_name: name });
        if (guestModeError) throw guestModeError;
      }
    } catch (error) {
      console.error("Could not save profile to Supabase:", error);
      profileSaveError = error?.message || String(error);
    } finally {
      if (button) button.disabled = false;
    }
  }

  applyLanguage();
  checkFirstTimeWelcome();

  showToast(profileSaveError
    ? `Name is saved on this device, but database save failed: ${profileSaveError}`
    : (
    state.language === "hi"
      ? `स्वागत है ${name}!`
      : state.language === "mr"
        ? `स्वागत आहे ${name}!`
        : `Welcome ${name}!`
    ), profileSaveError ? 10000 : 2500);
}


/* =========================================================
   MODULES
========================================================= */

function setupModules() {

  document
    .querySelectorAll("[data-module]")
    .forEach((element) => {

      if (
        element.classList.contains("module-card")
      ) {
        return;
      }

      element.addEventListener("click", () => {

        const moduleName =
          element.dataset.module;

        openLesson(moduleName);
      });

    });

  document
    .querySelectorAll(".module-card")
    .forEach((card) => {

      card.addEventListener("click", (event) => {

        if (
          event.target.closest(".module-button")
        ) {
          return;
        }

        openLesson(card.dataset.module);
      });

    });
}


/* =========================================================
   LESSON
========================================================= */

function openLesson(moduleName) {

  if (!lessons[moduleName]) return;

  state.currentModule = moduleName;
  state.currentPage = 0;

  renderLesson();

  const modal =
    document.getElementById("lessonModal");

  if (modal) {
    modal.classList.remove("hidden");
  }
}


const lessonScreenshotModules = new Set([
  "smartphone",
  "whatsapp",
  "payments",
  "internet",
  "safety",
  "services"
]);

function createLessonScreenshot(moduleKey, pageIndex, pageTitle, lang) {
  if (!lessonScreenshotModules.has(moduleKey) || pageIndex > 7) {
    return null;
  }

  const moduleLabels = {
    en: "AI demo screen · fictional details",
    hi: "AI डेमो स्क्रीन · काल्पनिक जानकारी",
    mr: "AI डेमो स्क्रीन · काल्पनिक माहिती"
  };
  const column = pageIndex % 2;
  const row = Math.floor(pageIndex / 2);
  const figure = document.createElement("figure");
  figure.className = `lesson-screenshot lesson-screenshot--${moduleKey}`;
  figure.setAttribute("aria-label", `${pageTitle}. ${moduleLabels[lang]}`);

  const screen = document.createElement("div");
  screen.className = "lesson-screenshot__screen";
  screen.setAttribute("role", "img");
  screen.setAttribute("aria-label", pageTitle);
  screen.style.backgroundImage = `url("./assets/lesson-screenshots/${moduleKey}.png")`;
  screen.style.backgroundPosition =
    `${column ? "100%" : "0%"} ${["0%", "33.333%", "66.667%", "100%"][row]}`;

  const caption = document.createElement("figcaption");
  caption.className = "lesson-screenshot__caption";
  caption.textContent = moduleLabels[lang] || moduleLabels.en;

  figure.append(screen, caption);
  return figure;
}

function renderLesson() {

  const module =
    lessons[state.currentModule];

  const page =
    module.pages[state.currentPage];

  const lang =
    state.language;
  const contentLang = getLessonContentLanguage(lang);

  setText(
    "lessonIcon",
    module.icon
  );

  setText(
    "lessonNumber",
    `${module.number} • ${state.currentPage + 1}/${module.pages.length}`
  );

  setText(
    "lessonTitle",
    page.title[contentLang]
  );

  const content =
    document.getElementById("lessonContent");

  if (content) {

    content.innerHTML =
      page.content[contentLang];

    const lessonScreenshot = createLessonScreenshot(
      state.currentModule,
      state.currentPage,
      page.title[contentLang],
      lang
    );
    if (lessonScreenshot) {
      content.prepend(lessonScreenshot);
    }

    content.style.animation = "none";

    requestAnimationFrame(() => {
      content.style.animation =
        "fadeSlideUp 0.35s ease both";
    });

  }
  updateLessonButtons();
}


function setupLessonControls() {

  const close =
    document.getElementById("closeLesson");

  const next =
    document.getElementById("lessonNext");

  const prev =
    document.getElementById("lessonPrev");

  if (close) {
    close.addEventListener(
      "click",
      closeLesson
    );
  }

  if (next) {

    next.addEventListener(
      "click",
      nextLesson
    );
  }

  if (prev) {

    prev.addEventListener(
      "click",
      previousLesson
    );
  }
}


function nextLesson() {

  const module =
    lessons[state.currentModule];

  if (
    state.currentPage <
    module.pages.length - 1
  ) {

    state.currentPage++;

    renderLesson();

  } else {

    completeCurrentLesson();
  }
}


function previousLesson() {

  if (state.currentPage > 0) {

    state.currentPage--;

    renderLesson();
  }
}


function completeCurrentLesson() {

  const key =
    state.currentModule;

  if (
    !state.completedLessons.includes(key)
  ) {

    state.completedLessons.push(key);

    localStorage.setItem(
      "seniorSaathiCompleted",
      JSON.stringify(
        state.completedLessons
      )
    );
  }

  saveModuleProgressToDatabase(key);

  updateDashboard();

  closeLesson();

  showToast(
    state.language === "hi"
      ? "🎉 Lesson पूरा हो गया!"
      : state.language === "mr"
        ? "🎉 Lesson पूर्ण झाले!"
        : "🎉 Lesson completed!"
  );
}

async function saveModuleProgressToDatabase(moduleId) {
  const client = window.seniorSaathiSupabase;
  if (!client || !state.userId || !moduleId) return;

  try {
    const { error } = await client
      .from("module_progress")
      .upsert({
        user_id: state.userId,
        module_id: moduleId,
        completed: true,
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id,module_id" });

    if (error) throw error;
  } catch (error) {
    console.error("Could not save module progress:", error);
    showToast(`Progress is saved on this device, but database save failed: ${error?.message || error}`, 10000);
  }
}

async function syncLocalProgressToDatabase() {
  if (!state.userId || !window.seniorSaathiSupabase) return;
  for (const moduleId of state.completedLessons) {
    if (lessons[moduleId]) await saveModuleProgressToDatabase(moduleId);
  }
}
function updateModuleCompletionUI() {
  document
    .querySelectorAll(".module-card[data-module]")
    .forEach((card) => {
      const moduleName = card.dataset.module;
      const isCompleted =
        state.completedLessons.includes(moduleName);

      card.classList.toggle("completed", isCompleted);

      let badge =
        card.querySelector(".module-completed-badge");

      if (isCompleted && !badge) {
        badge = document.createElement("span");
        badge.className = "module-completed-badge";
        badge.textContent = "✅ Completed";
        card.appendChild(badge);
      }

      if (!isCompleted && badge) {
        badge.remove();
      }
    });
}


function updateLessonButtons() {

  const module =
    lessons[state.currentModule];

  const next =
    document.getElementById("lessonNext");

  const prev =
    document.getElementById("lessonPrev");

  if (prev) {

    prev.disabled =
      state.currentPage === 0;
  }

  if (next) {

    const last =
      state.currentPage ===
      module.pages.length - 1;

    next.textContent =
      last
        ? (
            state.language === "hi"
              ? "पूरा करें ✓"
              : state.language === "mr"
                ? "पूर्ण करा ✓"
                : "Complete ✓"
          )
        : (
            state.language === "hi"
              ? "आगे →"
              : state.language === "mr"
                ? "पुढे →"
                : "Next →"
          );
  }
}


function closeLesson() {

  const modal =
    document.getElementById("lessonModal");

  if (modal) {
    modal.classList.add("hidden");
  }
}


/* =========================================================
   PROGRESS
========================================================= */

function updateDashboard() {

  const total =
    Object.keys(lessons).length;

  const completed =
    state.completedLessons.filter(
      (module) => lessons[module]
    ).length;

  const percentage =
    Math.round(
      (completed / total) * 100
    );

  const percent =
    document.getElementById("progressPercent");

  const bar =
    document.getElementById("progressBar");

  const text =
    document.getElementById("progressText");

  if (percent) {
    percent.textContent =
      `${percentage}%`;
  }

  if (bar) {
    bar.style.width =
      `${percentage}%`;
  }

  if (text) {

    if (percentage === 100) {

      text.textContent =
        state.language === "hi"
          ? "🎉 सभी Modules पूरे हो गए!"
          : state.language === "mr"
            ? "🎉 सर्व Modules पूर्ण झाले!"
            : "🎉 All modules completed!";

    } else {

      text.textContent =
        state.language === "hi"
          ? `${completed} / ${total} Modules पूरे`
          : state.language === "mr"
            ? `${completed} / ${total} Modules पूर्ण`
            : `${completed} / ${total} Modules completed`;
    }
  }
  updateModuleCompletionUI();
  updateCertificateStatus();
}


/* =========================================================
   QUIZ
========================================================= */

function setupQuiz() {

  const button =
    document.getElementById("quizButton");

  const close =
    document.getElementById("closeQuiz");

  if (button) {
    button.addEventListener(
      "click",
      startQuiz
    );
  }

  if (close) {
    close.addEventListener(
      "click",
      closeQuiz
    );
  }
}


function startQuiz() {

  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = [];
 const moduleKey = state.currentModule || "smartphone";

state.currentModule = moduleKey;

state.activeQuizQuestions = quizQuestions.filter(
  (question) => question.module === moduleKey
);

  const modal =
    document.getElementById("quizModal");

  if (modal) {
    modal.classList.remove("hidden");
  }

  renderQuizQuestion();
}


function renderQuizQuestion() {

  const question =
  state.activeQuizQuestions[state.quizIndex];

  const lang =
    state.language;
  const contentLang = getContentLanguage(lang);

  const content =
    document.getElementById("quizContent");

  if (!content) return;

  content.innerHTML = `

    <div class="quiz-progress-info">
      ${state.quizIndex + 1} / ${state.activeQuizQuestions.length}
    </div>

    <h3>
      ${question.question[contentLang]}
    </h3>

    <div class="quiz-options">

      ${question.options[contentLang]
        .map(
          (option, index) => `
            <button
              class="quiz-option"
              data-answer="${index}"
            >
              ${option}
            </button>
          `
        )
        .join("")}

    </div>
    

  `;
const quizText = content.innerText;
  content
    .querySelectorAll(".quiz-option")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          checkQuizAnswer(
            Number(button.dataset.answer)
          );

        }
      );

    });
}
function checkQuizAnswer(answer) {

  const question =
  state.activeQuizQuestions[state.quizIndex];
  const isCorrect = answer === question.answer;
  state.quizAnswers.push({ question, selectedAnswer: answer, isCorrect });

  if (isCorrect) {
    state.quizScore++;
  }

  state.quizIndex++;

  if (
  state.quizIndex <
  state.activeQuizQuestions.length
){

    setTimeout(
      renderQuizQuestion,
      350
    );

  } else {

    setTimeout(
      showQuizResult,
      350
    );
  }
}


function showQuizResult(persistScore = true) {

  const content =
    document.getElementById("quizContent");

  if (!content) return;

  const total =
  state.activeQuizQuestions.length;

  const score =
    state.quizScore;

  const quizResult = {
    module_id: state.currentModule || "smartphone",
    score,
    total_questions: total,
    completed_at: new Date().toISOString()
  };
  if (persistScore) {
    state.quizHistory.push(quizResult);
    localStorage.setItem("seniorSaathiQuizScores", JSON.stringify(state.quizHistory));
    saveQuizScoreToDatabase(quizResult);
  }

    

  const percentage =
    Math.round(
      (score / total) * 100
    );
    const passed = total > 0 && percentage >= 70;

if (passed && persistScore) {
  completeCurrentLesson();
  updateDashboard();
}

  const lang =
    state.language;
  const contentLang = getContentLanguage(lang);

  const practiceLabels = {
    en: { title: "🎉 Quiz Completed!", score: "Your Score", restart: "Try Again" },
    hi: { title: "🎉 Quiz पूरा हुआ!", score: "आपका Score", restart: "फिर से शुरू करें" },
    mr: { title: "🎉 Quiz पूर्ण झाला!", score: "तुमचा Score", restart: "पुन्हा सुरू करा" },
    gu: { title: "🎉 ક્વિઝ પૂર્ણ થઈ!", score: "તમારો સ્કોર", restart: "ફરી પ્રયાસ કરો" },
    ta: { title: "🎉 வினாடி வினா முடிந்தது!", score: "உங்கள் மதிப்பெண்", restart: "மீண்டும் முயற்சி செய்க" },
    te: { title: "🎉 క్విజ్ పూర్తయింది!", score: "మీ స్కోరు", restart: "మళ్లీ ప్రయత్నించండి" }
  };
  const labels = practiceLabels[lang] || practiceLabels.en;
  const title = labels.title;
  const scoreText = `${labels.score}: ${score} / ${total}`;

  const reviewLabels = {
    en: {
      heading: "Review your answers",
      wrongHeading: "Questions to review",
      yourAnswer: "Your answer",
      correctAnswer: "Correct answer",
      allCorrect: "Great work — you got every answer right!"
    },
    hi: {
      heading: "अपने जवाब देखें",
      wrongHeading: "इन सवालों का दोबारा अभ्यास करें",
      yourAnswer: "आपका जवाब",
      correctAnswer: "सही जवाब",
      allCorrect: "बहुत अच्छा — आपके सभी जवाब सही हैं!"
    },
      mr: {
      heading: "तुमची उत्तरे पाहा",
      wrongHeading: "या प्रश्नांचा पुन्हा सराव करा",
      yourAnswer: "तुमचे उत्तर",
      correctAnswer: "योग्य उत्तर",
        allCorrect: "छान — तुमची सर्व उत्तरे बरोबर आहेत!"
      },
      gu: {
        heading: "તમારા જવાબો જુઓ", wrongHeading: "ફરી અભ્યાસ કરવા માટેના પ્રશ્નો", yourAnswer: "તમારો જવાબ",
        correctAnswer: "સાચો જવાબ", allCorrect: "શાબાશ — તમારા બધા જવાબો સાચા છે!"
      },
      ta: {
        heading: "உங்கள் பதில்களைப் பாருங்கள்", wrongHeading: "மீண்டும் பயிற்சி செய்ய வேண்டிய கேள்விகள்", yourAnswer: "உங்கள் பதில்",
        correctAnswer: "சரியான பதில்", allCorrect: "நன்று — உங்கள் பதில்கள் அனைத்தும் சரி!"
      },
      te: {
        heading: "మీ సమాధానాలను చూడండి", wrongHeading: "మళ్లీ సాధన చేయాల్సిన ప్రశ్నలు", yourAnswer: "మీ సమాధానం",
        correctAnswer: "సరైన సమాధానం", allCorrect: "చాలా బాగుంది — మీ సమాధానాలన్నీ సరైనవే!"
    }
  };
  const reviewText = reviewLabels[lang] || reviewLabels.en;
  const wrongAnswers = state.quizAnswers.filter((item) => !item.isCorrect);
  const reviewMarkup = wrongAnswers.length
    ? `
      <h4>${reviewText.wrongHeading}</h4>
      ${wrongAnswers.map(({ question, selectedAnswer }) => `
        <article class="quiz-review-item">
          <h5>${question.question[contentLang]}</h5>
          <p class="quiz-wrong-answer"><strong>${reviewText.yourAnswer}:</strong> ${question.options[contentLang][selectedAnswer]}</p>
          <p class="quiz-correct-answer"><strong>${reviewText.correctAnswer}:</strong> ${question.options[contentLang][question.answer]}</p>
        </article>
      `).join("")}
    `
    : `<p class="quiz-all-correct">${reviewText.allCorrect}</p>`;

  content.innerHTML = `

    <div class="quiz-result">
      <div class="result-icon">
        🏆
      </div>

      <h3>${title}</h3>

      <strong>
        ${percentage}%
      </strong>

      <p>
        ${scoreText}
      </p>

      <section class="quiz-review" aria-label="${reviewText.heading}">
        <h4>${reviewText.heading}</h4>
        ${reviewMarkup}
      </section>

      <button
        id="restartQuiz"
        class="primary-button"
      >
        🔄 ${labels.restart}
      </button>
    </div>

  `;

  const restart =
    document.getElementById(
      "restartQuiz"
    );

  if (restart) {

    restart.addEventListener(
      "click",
      startQuiz
    );
  }
}

async function saveQuizScoreToDatabase(result) {
  const client = window.seniorSaathiSupabase;
  if (!client || !state.userId) return;

  try {
    const { error } = await client.from("quiz_scores").insert({
      user_id: state.userId,
      module_id: result.module_id,
      score: result.score,
      total_questions: result.total_questions
    });
    if (error) throw error;
  } catch (error) {
    console.error("Could not save quiz score:", error);
    showToast(`Quiz score is saved on this device, but database save failed: ${error?.message || error}`, 10000);
  }
}


function closeQuiz() {

  const modal =
    document.getElementById("quizModal");

  if (modal) {
    modal.classList.add("hidden");
  }
}


/* =========================================================
   SCAM SIMULATOR
========================================================= */

function setupScamSimulator() {

  const button =
    document.getElementById("scamButton");

  const close =
    document.getElementById("closeScam");

  if (button) {

    button.addEventListener(
      "click",
      startScamPractice
    );
  }

  if (close) {

    close.addEventListener(
      "click",
      closeScam
    );
  }
}


function startScamPractice() {

  state.scamIndex = 0;
  state.scamScore = 0;

  const modal =
    document.getElementById("scamModal");

  if (modal) {
    modal.classList.remove("hidden");
  }


  renderScamQuestion();
}


function renderScamQuestion() {

  const question =
    scamQuestions[state.scamIndex];

  const lang =
    state.language;
  const contentLang = getContentLanguage(lang);
  const labels = getScamLabels(lang);

  const content =
    document.getElementById("scamContent");

  const options =
    document.getElementById("scamOptions");

  if (!content || !options) return;

  content.textContent =
    question.message[contentLang];

  options.innerHTML = `

    <button
      class="primary-button"
      data-scam-answer="safe"
    >
      ✅ ${labels.safe}
    </button>

    <button
      class="secondary-button"
      data-scam-answer="scam"
    >
      ⚠️ ${labels.scam}
    </button>

  `;

  options
    .querySelectorAll("[data-scam-answer]")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          checkScamAnswer(
            button.dataset.scamAnswer
          );

        }
      );

    });
}

function getScamLabels(language = state.language) {
  const labels = {
    en: { safe: "Safe", scam: "Scam", correct: "✅ Correct!", incorrect: "❌ Be careful! That is not correct.", title: "Scam Practice Completed!", score: "Your Score", percent: "Correct Answers", high: "Excellent! You are doing well at spotting online scams.", medium: "Good effort! Practice again to stay safer online.", low: "Keep learning! Try again and read each scenario carefully.", reminder: "Remember: Never share your OTP or UPI PIN.", again: "Practice Again" },
    hi: { safe: "सुरक्षित", scam: "धोखाधड़ी", correct: "✅ सही जवाब!", incorrect: "❌ सावधान! यह सही जवाब नहीं है।", title: "धोखाधड़ी का अभ्यास पूरा हुआ!", score: "आपका स्कोर", percent: "सही जवाब", high: "बहुत बढ़िया! आप ऑनलाइन धोखाधड़ी पहचानने में अच्छा कर रहे हैं।", medium: "अच्छी कोशिश! सुरक्षित रहने के लिए दोबारा अभ्यास करें।", low: "कोई बात नहीं! फिर से अभ्यास करें और हर सवाल ध्यान से पढ़ें।", reminder: "याद रखें: OTP और UPI PIN कभी साझा न करें।", again: "फिर से अभ्यास करें" },
    mr: { safe: "सुरक्षित", scam: "फसवणूक", correct: "✅ योग्य उत्तर!", incorrect: "❌ सावध! हे योग्य उत्तर नाही.", title: "फसवणूक सराव पूर्ण झाला!", score: "तुमचे गुण", percent: "योग्य उत्तरे", high: "छान! तुम्ही ऑनलाइन फसवणूक चांगल्या प्रकारे ओळखत आहात.", medium: "चांगला प्रयत्न! सुरक्षित राहण्यासाठी पुन्हा सराव करा.", low: "काही हरकत नाही! पुन्हा सराव करा आणि प्रत्येक प्रश्न काळजीपूर्वक वाचा.", reminder: "लक्षात ठेवा: OTP आणि UPI PIN कधीही शेअर करू नका.", again: "पुन्हा सराव करा" },
    gu: { safe: "સુરક્ષિત", scam: "છેતરપિંડી", correct: "✅ સાચો જવાબ!", incorrect: "❌ સાવધાન! આ સાચો જવાબ નથી.", title: "છેતરપિંડીનો અભ્યાસ પૂર્ણ થયો!", score: "તમારો સ્કોર", percent: "સાચા જવાબો", high: "ખૂબ સરસ! તમે ઑનલાઇન છેતરપિંડી સારી રીતે ઓળખો છો.", medium: "સારો પ્રયાસ! સુરક્ષિત રહેવા ફરી અભ્યાસ કરો.", low: "ફરી અભ્યાસ કરો અને દરેક સ્થિતિ ધ્યાનથી વાંચો.", reminder: "યાદ રાખો: OTP અને UPI PIN ક્યારેય શેર ન કરો.", again: "ફરી અભ્યાસ કરો" },
    ta: { safe: "பாதுகாப்பானது", scam: "மோசடி", correct: "✅ சரியான பதில்!", incorrect: "❌ கவனம்! இது சரியான பதில் அல்ல.", title: "மோசடி பயிற்சி முடிந்தது!", score: "உங்கள் மதிப்பெண்", percent: "சரியான பதில்கள்", high: "அருமை! இணைய மோசடிகளை நன்றாக அடையாளம் காண்கிறீர்கள்.", medium: "நல்ல முயற்சி! பாதுகாப்பாக இருக்க மீண்டும் பயிற்சி செய்யுங்கள்.", low: "மீண்டும் பயிற்சி செய்து ஒவ்வொரு சூழலையும் கவனமாகப் படியுங்கள்.", reminder: "நினைவில் கொள்ளுங்கள்: OTP, UPI PIN-ஐ யாரிடமும் பகிர வேண்டாம்.", again: "மீண்டும் பயிற்சி செய்க" },
    te: { safe: "సురక్షితం", scam: "మోసం", correct: "✅ సరైన సమాధానం!", incorrect: "❌ జాగ్రత్త! ఇది సరైన సమాధానం కాదు.", title: "మోసం గుర్తింపు అభ్యాసం పూర్తయింది!", score: "మీ స్కోరు", percent: "సరైన సమాధానాలు", high: "చాలా బాగుంది! మీరు ఆన్‌లైన్ మోసాలను బాగా గుర్తిస్తున్నారు.", medium: "మంచి ప్రయత్నం! సురక్షితంగా ఉండటానికి మళ్లీ సాధన చేయండి.", low: "మళ్లీ సాధన చేసి ప్రతి సందర్భాన్ని జాగ్రత్తగా చదవండి.", reminder: "గుర్తుంచుకోండి: OTP, UPI PIN ఎవరితోనూ పంచుకోకండి.", again: "మళ్లీ సాధన చేయండి" }
  };
  return labels[language] || labels.en;
}


function checkScamAnswer(answer) {

  const correct =
    scamQuestions[state.scamIndex].answer;

  const labels = getScamLabels();
    if (answer === correct) {
  state.scamScore++;
}

  if (answer === correct) {

    showToast(labels.correct);

  } else {

    showToast(labels.incorrect);
  }

  state.scamIndex++;

  if (
    state.scamIndex <
    scamQuestions.length
  ) {

    setTimeout(
      renderScamQuestion,
      800
    );

  } else {

    setTimeout(
      showScamComplete,
      800
    );
  }
}



function showScamComplete() {
  const content = document.getElementById("scamContent");
  const options = document.getElementById("scamOptions");
  const lang = state.language;
  const labels = getScamLabels(lang);

  const total = scamQuestions.length;
  const score = state.scamScore;
  const percentage = Math.round((score / total) * 100);

  const result =
    `🎉 ${labels.title}\n\n` +
    `✅ ${labels.score}: ${score}/${total}\n` +
    `📊 ${labels.percent}: ${percentage}%\n\n` +
    (percentage >= 80 ? labels.high : percentage >= 50 ? labels.medium : labels.low) +
    `\n\n${labels.reminder}`;

  if (content) {
    content.textContent = result;
    content.style.whiteSpace = "pre-line";
  }

  if (options) {
    options.innerHTML = `
      <button class="primary-button" id="restartScamPractice">
        ${labels.again}
      </button>
    `;

    document.getElementById("restartScamPractice")
      .addEventListener("click", startScamPractice);
  }
}



function closeScam() {

  const modal =
    document.getElementById("scamModal");

  if (modal) {
    modal.classList.add("hidden");
  }
}


/* =========================================================
   VOICE HELP
========================================================= */

function setupVoice() {

  const button =
    document.getElementById("voiceButton");

  const stop =
    document.getElementById("stopVoice");

  if (button) {

    button.addEventListener(
      "click",
      startVoice
    );
  }

  if (stop) {

    stop.addEventListener(
      "click",
      stopVoice
    );
  }
}



function startVoice() {
  if (!("speechSynthesis" in window)) {
    showToast("Voice support is not available in this browser.");
    return;
  }

  const lang = state.language || "en";

  // Jo content user ko screen par dikh raha hai
 
const lessonModal = document.getElementById("lessonModal");
const app = document.getElementById("app");

const visibleLesson =
  lessonModal && !lessonModal.classList.contains("hidden");

const source = visibleLesson ? lessonModal : app;

if (!source) return;

const text = source.innerText
  .replace(/\s+/g, " ")
  .trim();


  if (!text) {
    showToast(
      lang === "hi"
        ? "पढ़ने के लिए कोई टेक्स्ट नहीं है।"
        : lang === "mr"
          ? "वाचण्यासाठी मजकूर नाही."
          : "There is no text to read."
    );
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang =
    lang === "hi" ? "hi-IN" :
    lang === "mr" ? "mr-IN" :
    "en-IN";

  speech.rate = 0.85;
  speech.pitch = 1;
  speech.volume = 1;

  const panel = document.getElementById("voicePanel");
  const status = document.getElementById("voiceStatus");

  if (panel) panel.classList.remove("hidden");

  if (status) {
    status.textContent =
      lang === "hi" ? "पढ़ा जा रहा है..." :
      lang === "mr" ? "वाचले जात आहे..." :
      "Reading...";
  }

  speech.onend = () => {
    if (status) {
      status.textContent =
        lang === "hi" ? "पढ़ना पूरा हुआ" :
        lang === "mr" ? "वाचन पूर्ण झाले" :
        "Reading completed";
    }
  };

  window.speechSynthesis.speak(speech);
}


function getVoiceText() {

  const lang =
    state.language;

  const text = {

    en:
      "Welcome to Senior Saathi. Learn smartphones, WhatsApp, digital payments, internet and cyber safety step by step.",

    hi:
      "Senior Saathi में आपका स्वागत है। स्मार्टफोन, व्हाट्सऐप, डिजिटल पेमेंट, इंटरनेट और साइबर सुरक्षा को आसान तरीके से सीखें।",

    mr:
      "Senior Saathi मध्ये तुमचे स्वागत आहे. स्मार्टफोन, व्हॉट्सॲप, डिजिटल पेमेंट, इंटरनेट आणि सायबर सुरक्षितता सोप्या पद्धतीने शिका."
  };

  return text[lang];
}


function stopVoice() {

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  const panel =
    document.getElementById("voicePanel");

  if (panel) {
    panel.classList.add("hidden");
  }
}


/* =========================================================
   THEME
========================================================= */

function setupTheme() {

  const button =
    document.getElementById("themeButton");

  const savedTheme =
    localStorage.getItem(
      "seniorSaathiTheme"
    );

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (button) {
      button.textContent = "☀️";
    }
  }

  if (button) {

    button.addEventListener(
      "click",
      toggleTheme
    );
  }
}


function toggleTheme() {

  document.body.classList.toggle(
    "dark-mode"
  );

  const dark =
    document.body.classList.contains(
      "dark-mode"
    );

  localStorage.setItem(
    "seniorSaathiTheme",
    dark ? "dark" : "light"
  );

  const button =
    document.getElementById("themeButton");

  if (button) {
    button.textContent =
      dark ? "☀️" : "🌙";
  }
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;

function showToast(message, duration = 2500) {

  const toast =
    document.getElementById("toast");

  const toastMessage =
    document.getElementById("toastMessage");

  if (!toast || !toastMessage) return;

  toastMessage.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, duration);
}
// ================================
// SERVICE WORKER REGISTRATION
// ================================

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log(
          "Senior Saathi Service Worker registered:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error(
          "Service Worker registration failed:",
          error
        );
      });
  });
}
// ==========================================
// PROFILE + FIRST TIME LOGIN
// ==========================================

const profileButton = document.getElementById("profileButton");
const profileModal = document.getElementById("profileModal");
const closeProfile = document.getElementById("closeProfile");
const profileName = document.getElementById("profileName");
const profileAge = document.getElementById("profileAge");
const saveProfile = document.getElementById("saveProfile");
const welcomeTitle = document.getElementById("welcomeTitle");
const profilePhotoInput = document.getElementById("profilePhotoInput");
const profileAvatarPreview = document.getElementById("profileAvatarPreview");
const profileButtonAvatar = document.getElementById("profileButtonAvatar");
const profileAvatarChoices = [...document.querySelectorAll("[data-avatar-choice]")];
let draftProfileAvatar = "";
let draftProfilePhoto = "";

function seniorAvatarSvg(kind) {
  if (kind === "elder-man") {
    return `<svg class="senior-avatar-art" viewBox="0 0 100 100" role="img" aria-label="Animated illustration of a senior man">
      <circle cx="50" cy="50" r="49" fill="#e0f2fe"/>
      <path d="M13 100c3-22 16-32 37-32s34 10 37 32" fill="#2563eb"/>
      <path d="M29 39c0-20 9-30 22-30 15 0 24 12 22 32l-5 18H34z" fill="#e5e7eb"/>
      <path d="M32 37c0-15 7-23 19-23 11 0 18 8 18 22v11c-4-5-8-8-13-10-7 5-15 6-24 4z" fill="#94a3b8"/>
      <ellipse cx="50" cy="46" rx="19" ry="23" fill="#f2c7a5"/>
      <path d="M43 57c4 4 10 4 14 0" fill="none" stroke="#9a4d4d" stroke-width="2.5" stroke-linecap="round"/>
      <g fill="none" stroke="#475569" stroke-width="2.2"><rect x="35" y="40" width="12" height="9" rx="4"/><rect x="53" y="40" width="12" height="9" rx="4"/><path d="M47 44h6M32 43l3 1m30 0 3-1"/></g>
      <circle cx="41" cy="44" r="1.2" fill="#334155"/><circle cx="59" cy="44" r="1.2" fill="#334155"/>
    </svg>`;
  }
  return `<svg class="senior-avatar-art" viewBox="0 0 100 100" role="img" aria-label="Animated illustration of a senior woman">
    <circle cx="50" cy="50" r="49" fill="#fce7f3"/>
    <path d="M12 100c3-22 17-33 38-33s35 11 38 33" fill="#7c3aed"/>
    <path d="M26 44c-5-23 4-36 24-36 22 0 31 16 24 40l-7-8H33z" fill="#cbd5e1"/>
    <ellipse cx="50" cy="46" rx="19" ry="23" fill="#f0c5a6"/>
    <path d="M31 39c2-16 9-23 20-23 11 0 18 7 20 22-7-3-11-7-14-12-6 8-14 12-26 13z" fill="#94a3b8"/>
    <path d="M31 44c-3-9-4-17-1-23M69 44c3-9 4-17 1-23" fill="none" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
    <g fill="none" stroke="#475569" stroke-width="2.2"><rect x="35" y="40" width="12" height="9" rx="4"/><rect x="53" y="40" width="12" height="9" rx="4"/><path d="M47 44h6M32 43l3 1m30 0 3-1"/></g>
    <circle cx="41" cy="44" r="1.2" fill="#334155"/><circle cx="59" cy="44" r="1.2" fill="#334155"/>
    <path d="M43 57c4 4 10 4 14 0" fill="none" stroke="#a34e64" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`;
}

function renderProfileAvatar(target, avatar = "", photo = "", hideWhenEmpty = false) {
  if (!target) return;
  target.replaceChildren();
  const safePhoto = /^data:image\/(jpeg|png|webp);base64,/i.test(photo) ? photo : "";
  if (safePhoto) {
    const image = document.createElement("img");
    image.src = safePhoto;
    image.alt = "Your profile photo";
    target.appendChild(image);
    target.classList.remove("hidden");
  } else if (["elder-woman", "elder-man"].includes(avatar)) {
    target.innerHTML = seniorAvatarSvg(avatar);
    target.classList.remove("hidden");
  } else if (hideWhenEmpty) {
    target.classList.add("hidden");
  } else {
    target.textContent = "👤";
    target.classList.remove("hidden");
  }
}

function updateProfileAvatarPreview() {
  renderProfileAvatar(profileAvatarPreview, draftProfileAvatar, draftProfilePhoto);
  renderProfileAvatar(profileButtonAvatar, draftProfileAvatar, draftProfilePhoto);
  profileAvatarChoices.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.avatarChoice === draftProfileAvatar && !draftProfilePhoto));
  });
}

function updateProfileProgress() {
  const total = Object.keys(lessons).length;
  const completed = state.completedLessons.filter(module => lessons[module]).length;
  const progress = document.getElementById("profileProgress");
  const text = document.getElementById("profileProgressText");
  if (progress) progress.value = completed;
  if (text) text.textContent = `${completed} of ${total} modules completed`;
}

async function makeProfilePhoto(file) {
  if (!file?.type.startsWith("image/")) throw new Error("Choose an image file.");
  if (file.size > 12 * 1024 * 1024) throw new Error("Choose a photo smaller than 12 MB.");
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 512 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d");
  if (!context) throw new Error("This browser could not prepare the photo.");
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  return canvas.toDataURL("image/jpeg", 0.78);
}

profileAvatarChoices.forEach(button => {
  const art = button.querySelector("[data-avatar-art]");
  if (art) art.innerHTML = seniorAvatarSvg(button.dataset.avatarChoice);
  button.addEventListener("click", () => {
    draftProfileAvatar = button.dataset.avatarChoice;
    draftProfilePhoto = "";
    if (profilePhotoInput) profilePhotoInput.value = "";
    updateProfileAvatarPreview();
  });
});

document.getElementById("clearProfileAvatar")?.addEventListener("click", () => {
  draftProfileAvatar = "";
  draftProfilePhoto = "";
  if (profilePhotoInput) profilePhotoInput.value = "";
  updateProfileAvatarPreview();
});

profilePhotoInput?.addEventListener("change", async () => {
  const file = profilePhotoInput.files?.[0];
  if (!file) return;
  try {
    draftProfilePhoto = await makeProfilePhoto(file);
    draftProfileAvatar = "";
    updateProfileAvatarPreview();
  } catch (error) {
    showToast(error?.message || "Could not use that photo.");
    profilePhotoInput.value = "";
  }
});

draftProfileAvatar = localStorage.getItem("seniorSaathiAvatarChoice") || "";
draftProfilePhoto = localStorage.getItem("seniorSaathiProfilePhoto") || "";
updateProfileAvatarPreview();

function updateUserWelcome() {
  const name = localStorage.getItem("seniorSaathiUserName");

  if (name && welcomeTitle) {
    welcomeTitle.textContent = `Hello, ${name} 👋`;
  }
}

function openProfile() {
  const name = localStorage.getItem("seniorSaathiUserName") || "";
  const age = localStorage.getItem("seniorSaathiUserAge") || "";

  if (profileName) {
    profileName.value = name;
  }
  if (profileAge) profileAge.value = age;
  draftProfileAvatar = localStorage.getItem("seniorSaathiAvatarChoice") || "";
  draftProfilePhoto = localStorage.getItem("seniorSaathiProfilePhoto") || "";
  updateProfileAvatarPreview();
  updateProfileProgress();

  profileModal?.classList.remove("hidden");
}

function closeProfileModal() {
  profileModal?.classList.add("hidden");
}

profileButton?.addEventListener("click", openProfile);

closeProfile?.addEventListener("click", closeProfileModal);

saveProfile?.addEventListener("click", async () => {
  const name = profileName.value.trim();
  const age = Number(profileAge?.value);

  if (!profileName.reportValidity()) return;
  if (!profileAge?.reportValidity()) return;
  if (!name) {
    showToast("Please enter your name.");
    profileName.focus();
    return;
  }
  if (!Number.isInteger(age) || age < 1 || age > 120) {
    showToast("Enter a valid age between 1 and 120.");
    return;
  }

  try {
    localStorage.setItem("seniorSaathiUserName", name);
    localStorage.setItem("seniorSaathiUserAge", String(age));
    if (draftProfilePhoto) {
      localStorage.setItem("seniorSaathiProfilePhoto", draftProfilePhoto);
      localStorage.removeItem("seniorSaathiAvatarChoice");
    } else if (draftProfileAvatar) {
      localStorage.setItem("seniorSaathiAvatarChoice", draftProfileAvatar);
      localStorage.removeItem("seniorSaathiProfilePhoto");
    } else {
      localStorage.removeItem("seniorSaathiAvatarChoice");
      localStorage.removeItem("seniorSaathiProfilePhoto");
    }
  } catch (error) {
    console.error("Could not save the profile on this device:", error);
    showToast("Could not save the profile. Try a smaller photo or free some device storage.", 5000);
    return;
  }

  state.userName = name;
  state.userAge = age;

  let profileErrorText = "";
  if (state.userId) {
    try {
      await persistLearnerProfile({ name, age });
    } catch (error) {
      console.error("Could not save profile:", error);
      profileErrorText = error?.message || String(error);
    }
  }

  updateUserWelcome();
  updateProfileAvatarPreview();
  closeProfileModal();

  showToast(profileErrorText
    ? `Profile saved on this device, but database save failed: ${profileErrorText}`
    : `Profile saved, ${name}!`, profileErrorText ? 10000 : 2500);
});

// Close when clicking outside
profileModal?.addEventListener("click", (event) => {
  if (event.target === profileModal) {
    closeProfileModal();
  }
});

// Show saved name
updateUserWelcome();

// ==========================================
// HIDE FIRST-TIME WELCOME AFTER LOGIN
// ==========================================

function checkFirstTimeWelcome() {
  const savedName = localStorage.getItem("seniorSaathiUserName");
  const welcomeSection = document.querySelector(".welcome-section");

  if (savedName && welcomeSection) {
    welcomeSection.style.display = "none";
  }
}

// Run when app loads
checkFirstTimeWelcome();

// ==========================================
// SENIOR SAATHI LEARNING CAROUSEL
// ==========================================

const carouselTrack = document.getElementById("carouselTrack");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDots = document.getElementById("carouselDots");

let carouselIndex = 0;
let carouselTimer;

function getVisibleSlides() {
  if (window.innerWidth <= 650) {
    return 1;
  }

  if (window.innerWidth <= 1100) {
    return 2;
  }

  return 4;
}

function updateCarousel() {
  if (!carouselTrack) return;

  const slides = carouselTrack.querySelectorAll(".learning-slide");

  if (!slides.length) return;

  const visible = getVisibleSlides();

  const maxIndex = Math.max(
    0,
    slides.length - visible
  );

  if (carouselIndex > maxIndex) {
    carouselIndex = 0;
  }

  const slideWidth = slides[0].getBoundingClientRect().width;
  const gap = 16;

  carouselTrack.style.transform =
    `translateX(-${carouselIndex * (slideWidth + gap)}px)`;

  updateCarouselDots(maxIndex);
}

function updateCarouselDots(maxIndex) {
  if (!carouselDots) return;

  carouselDots.innerHTML = "";

  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement("button");

    dot.className =
      i === carouselIndex
        ? "carousel-dot active"
        : "carousel-dot";

    dot.type = "button";

    dot.setAttribute(
      "aria-label",
      `Show learning cards ${i + 1}`
    );

    dot.addEventListener("click", () => {
      carouselIndex = i;
      updateCarousel();
      restartCarousel();
    });

    carouselDots.appendChild(dot);
  }
}

function nextCarousel() {
  const slides =
    carouselTrack?.querySelectorAll(".learning-slide");

  if (!slides?.length) return;

  const visible = getVisibleSlides();

  const maxIndex = Math.max(
    0,
    slides.length - visible
  );

  carouselIndex++;

  if (carouselIndex > maxIndex) {
    carouselIndex = 0;
  }

  updateCarousel();
}

function previousCarousel() {
  const slides =
    carouselTrack?.querySelectorAll(".learning-slide");

  if (!slides?.length) return;

  const visible = getVisibleSlides();

  const maxIndex = Math.max(
    0,
    slides.length - visible
  );

  carouselIndex--;

  if (carouselIndex < 0) {
    carouselIndex = maxIndex;
  }

  updateCarousel();
}

function restartCarousel() {
  clearInterval(carouselTimer);

  carouselTimer = setInterval(() => {
    nextCarousel();
  }, 4000);
}

carouselNext?.addEventListener(
  "click",
  () => {
    nextCarousel();
    restartCarousel();
  }
);

carouselPrev?.addEventListener(
  "click",
  () => {
    previousCarousel();
    restartCarousel();
  }
);

window.addEventListener(
  "resize",
  updateCarousel
);

if (carouselTrack) {
  updateCarousel();
  restartCarousel();
}
// ========================================
// SENIOR SAATHI CERTIFICATE
// ========================================

function updateCertificateStatus() {
  const totalModules = Object.keys(lessons).length;

  const completedModules = state.completedLessons.filter(
    (module) => lessons[module]
  ).length;

  const isUnlocked = completedModules === totalModules;

  const button = document.getElementById("certificateButton");
  const status = document.getElementById("certificateStatus");

  if (button) {
    button.disabled = !isUnlocked;
  }

  if (status) {
    if (isUnlocked) {
      status.textContent =
        state.language === "hi"
          ? "🎉 बधाई हो! आपने सभी 6 मॉड्यूल पूरे कर लिए हैं।"
          : state.language === "mr"
            ? "🎉 अभिनंदन! तुम्ही सर्व 6 मॉड्यूल पूर्ण केले आहेत."
            : "🎉 Congratulations! You completed all 6 modules.";
    } else {
      const remaining = totalModules - completedModules;

      status.textContent =
        state.language === "hi"
          ? `सर्टिफिकेट पाने के लिए ${remaining} मॉड्यूल और पूरे करें।`
          : state.language === "mr"
            ? `प्रमाणपत्रासाठी आणखी ${remaining} मॉड्यूल पूर्ण करा.`
            : `Complete ${remaining} more module(s) to unlock your certificate.`;
    }
  }
}


// SHOW CERTIFICATE

function makeCertificateReference() {
  const year = new Date().getFullYear();
  const token = globalThis.crypto?.randomUUID?.().replaceAll("-", "").slice(0, 12).toUpperCase()
    || `${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-6)}`.toUpperCase();
  return `SS-${year}-${token}`;
}

function certificateReferenceStorageKey(userId = state.userId) {
  return userId
    ? `seniorSaathiCertificateReference:${userId}`
    : "seniorSaathiCertificateReference";
}

function getCertificateReference() {
  const storageKey = certificateReferenceStorageKey();
  let reference = localStorage.getItem(storageKey);
  if (!reference && !state.userId) {
    reference = localStorage.getItem("seniorSaathiCertificateReference");
  }
  if (!reference) {
    reference = makeCertificateReference();
  }
  try {
    localStorage.setItem(storageKey, reference);
  } catch (error) {
    console.warn("Could not cache the certificate ID on this device:", error);
  }
  return reference;
}

async function persistLearnerProfile({ name = state.userName, age } = {}) {
  const client = window.seniorSaathiSupabase;
  if (!state.userId) {
    return { certificateId: getCertificateReference(), savedToDatabase: false };
  }
  if (!client) throw new Error("The database connection is unavailable. Please reconnect and try again.");

  const { data: existingProfile, error: readError } = await client
    .from("profiles")
    .select("full_name, age, certificate_id")
    .eq("id", state.userId)
    .maybeSingle();
  if (readError) throw readError;

  const cleanName = String(name || existingProfile?.full_name || "").trim();
  if (!cleanName) throw new Error("Enter your name before saving the profile.");

  const requestedAge = Number(age);
  const storedLocalAge = Number(localStorage.getItem("seniorSaathiUserAge"));
  const databaseAge = Number(existingProfile?.age);
  const profileAge = Number.isInteger(requestedAge) && requestedAge >= 1 && requestedAge <= 120
    ? requestedAge
    : Number.isInteger(databaseAge) && databaseAge >= 1 && databaseAge <= 120
      ? databaseAge
      : Number.isInteger(storedLocalAge) && storedLocalAge >= 1 && storedLocalAge <= 120
        ? storedLocalAge
        : null;

  const certificateId = existingProfile?.certificate_id || getCertificateReference();
  const { error: saveError } = await client
    .from("profiles")
    .upsert({
      id: state.userId,
      full_name: cleanName,
      age: profileAge,
      certificate_id: certificateId,
      preferred_language: state.language
    }, { onConflict: "id" });
  if (saveError) throw saveError;

  try {
    localStorage.setItem(certificateReferenceStorageKey(), certificateId);
  } catch (error) {
    console.warn("Could not cache the certificate ID on this device:", error);
  }

  return { certificateId, savedToDatabase: true };
}

async function syncLearnerProfileFromDatabase(userId) {
  const client = window.seniorSaathiSupabase;
  if (!userId || !client) return;

  const { data: profile, error } = await client
    .from("profiles")
    .select("full_name, age, certificate_id")
    .eq("id", userId)
    .maybeSingle();
  if (error) throw error;

  if (!profile) {
    const localName = localStorage.getItem("seniorSaathiUserName")?.trim();
    const localAge = Number(localStorage.getItem("seniorSaathiUserAge"));
    if (localName) await persistLearnerProfile({ name: localName, age: localAge });
    return;
  }

  if (profile.full_name) {
    state.userName = profile.full_name;
    localStorage.setItem("seniorSaathiUserName", profile.full_name);
  }

  const age = Number(profile.age);
  if (Number.isInteger(age) && age >= 1 && age <= 120) {
    state.userAge = age;
    localStorage.setItem("seniorSaathiUserAge", String(age));
  } else {
    state.userAge = null;
    localStorage.removeItem("seniorSaathiUserAge");
  }

  if (profile.certificate_id) {
    localStorage.setItem(certificateReferenceStorageKey(userId), profile.certificate_id);
  }
  updateUserWelcome();
}

async function showCertificate() {
  const totalModules = Object.keys(lessons).length;

  const completedModules = state.completedLessons.filter(
    (module) => lessons[module]
  ).length;

  if (completedModules !== totalModules) {
    updateCertificateStatus();
    return;
  }

  const savedName = localStorage.getItem("seniorSaathiUserName")?.trim();
  const savedAge = Number(localStorage.getItem("seniorSaathiUserAge"));
  if (!savedName || !Number.isInteger(savedAge) || savedAge < 1 || savedAge > 120) {
    openProfile();
    showToast("Add your name and age to your profile before getting the certificate.", 4000);
    return;
  }

  const nameElement = document.getElementById("certificateName");
  const ageElement = document.getElementById("certificateAge");
  const dateElement = document.getElementById("certificateDate");
  const referenceElement = document.getElementById("certificateId");
  const modal = document.getElementById("certificateModal");

  if (!nameElement || !ageElement || !dateElement || !referenceElement || !modal) {
    console.error("Certificate HTML elements are missing.");
    return;
  }

  nameElement.textContent =
    state.userName.trim() || "Digital Learner";
  ageElement.textContent = String(state.userAge || localStorage.getItem("seniorSaathiUserAge") || "—");
  try {
    const savedProfile = await persistLearnerProfile({ name: savedName, age: savedAge });
    referenceElement.textContent = savedProfile.certificateId;
  } catch (error) {
    console.error("Could not save certificate details:", error);
    showToast(`Certificate details could not be saved to the database: ${error?.message || error}`, 10000);
    return;
  }
  renderProfileAvatar(
    document.getElementById("certificateProfilePhoto"),
    localStorage.getItem("seniorSaathiAvatarChoice") || "",
    localStorage.getItem("seniorSaathiProfilePhoto") || "",
    true
  );

  dateElement.textContent = new Date().toLocaleDateString(
    state.language === "hi"
      ? "hi-IN"
      : state.language === "mr"
        ? "mr-IN"
        : "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  modal.classList.remove("hidden");
}


// CLOSE CERTIFICATE

function closeCertificate() {
  const modal = document.getElementById("certificateModal");

  if (modal) {
    modal.classList.add("hidden");
  }
}


// PRINT OR SAVE AS PDF

function printCertificate() {
  window.print();
}


// INITIAL CERTIFICATE STATUS

document.addEventListener("DOMContentLoaded", () => {
  updateCertificateStatus();
});


/* SENIOR SAATHI EMAIL LOGIN HANDLER */
document.addEventListener("DOMContentLoaded", () => {
  const client = window.seniorSaathiSupabase;
  const authScreen = document.getElementById("authScreen");
  const emailForm = document.getElementById("emailLoginForm");
  const otpForm = document.getElementById("verifyOtpForm");
  const emailInput = document.getElementById("loginEmail");
  const otpInput = document.getElementById("loginOtp");
  const message = document.getElementById("authMessage");
  const sendButton = document.getElementById("sendOtpButton");
  const guestModeButton = document.getElementById("guestModeButton");

  guestModeButton?.addEventListener("click", async () => {
    guestModeButton.disabled = true;
    if (message) message.textContent = "Starting guest session...";

    try {
      if (!client) throw new Error("Supabase did not load. Check the connection.");
      const { data, error } = await client.auth.signInAnonymously();
      if (error) throw error;
      if (!data.user) throw new Error("Supabase did not return a guest session.");
      state.userId = data.user.id;
    } catch (error) {
      console.error("Could not create guest session:", error);
      if (message) {
        message.textContent = `Could not start guest mode: ${error.message}. Enable Anonymous Sign-Ins in Supabase Auth settings, then try again.`;
      }
      guestModeButton.disabled = false;
      return;
    }

    state.guestMode = true;
    state.userName = "";
    state.userAge = null;
    state.completedLessons = [];
    localStorage.removeItem("seniorSaathiUserName");
    localStorage.removeItem("seniorSaathiUserAge");
    localStorage.setItem("seniorSaathiCompleted", "[]");

    try {
      await syncLearnerProfileFromDatabase(state.userId);
    } catch (error) {
      console.error("Could not load the learner profile from Supabase:", error);
    }

    const nameInput = document.getElementById("userName");
    if (nameInput) nameInput.value = "";

    authScreen?.classList.add("hidden");
    document.body.classList.add("senior-saathi-logged-in");
    document.getElementById("app")?.classList.remove("hidden");
    scheduleRemoteTranslation();
    updateDashboard();
    updateUserWelcome();
    showToast("Guest mode is ready. Enter your name on the dashboard.");
    nameInput?.focus();
    guestModeButton.disabled = false;
  });


if (!client || !emailForm || !otpForm || !authScreen) {
  console.error("Login setup missing:", {
    client: !!client,
    emailForm: !!emailForm,
    otpForm: !!otpForm,
    authScreen: !!authScreen
  });

  return;
}

  emailForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    sendButton.disabled = true;
    message.textContent = "Sending login code...";

    try {
      const { error } = await client.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: true }
      });

      if (error) throw error;

      message.textContent = "Check your email for the login code.";
      otpForm.classList.remove("hidden");
      otpInput.focus();
    } catch (error) {
      console.error("Email login error:", error);
      message.textContent = "Could not send code: " + error.message;
    } finally {
      sendButton.disabled = false;
    }
  });

  otpForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await client.auth.verifyOtp({
        email: emailInput.value.trim(),
        token: otpInput.value.trim(),
        type: "email"
      });

      if (error) throw error;
      if (!data.session) throw new Error("No login session was created.");

      state.userId = data.user?.id || data.session.user.id;
      try {
        await syncLearnerProfileFromDatabase(state.userId);
      } catch (profileError) {
        console.error("Could not load the learner profile from Supabase:", profileError);
      }
      syncLocalProgressToDatabase();
      message.textContent = "Login successful.";
      authScreen.classList.add("hidden");
      document.body.classList.add("senior-saathi-logged-in");
      document.getElementById("app")?.classList.remove("hidden");
      scheduleRemoteTranslation();
    } catch (error) {
      console.error("OTP verification error:", error);
      message.textContent = "Verification failed: " + error.message;
    }
  });

  client.auth.getSession().then(async ({ data, error }) => {
    if (error) {
      console.error("Could not restore login session:", error);
      return;
    }

    if (data.session) {
      state.userId = data.session.user.id;
      state.guestMode = Boolean(data.session.user.is_anonymous);
      try {
        await syncLearnerProfileFromDatabase(state.userId);
      } catch (profileError) {
        console.error("Could not load the learner profile from Supabase:", profileError);
      }
      authScreen.classList.add("hidden");
      document.body.classList.add("senior-saathi-logged-in");
      document.getElementById("app")?.classList.remove("hidden");
      scheduleRemoteTranslation();
      syncLocalProgressToDatabase();
    }
  });

  console.log("Senior Saathi email login handler ready.");
});
