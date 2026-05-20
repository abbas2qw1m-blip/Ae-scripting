// ============================================
// MASTER UI - أداة شاملة بكل المميزات
// ============================================

{
    // ========== 1. إنشاء النافذة الرئيسية ==========
    var win = new Window("dialog", "🚀 MASTER UI - الأداة الشاملة", undefined, {
        resizeable: true,      // قابلية تغيير الحجم
        closeButton: true      // زر إغلاق
    });
    
    // إعدادات النافذة
    win.orientation = "column";
    win.alignment = ["fill", "fill"];
    win.spacing = 12;
    win.margins = 16;
    win.size = [550, 700];
    win.minimumSize = [450, 500];
    
    // ========== 2. شريط العنوان المخصص ==========
    var titleBar = win.add("panel", undefined, "");
    titleBar.orientation = "row";
    titleBar.alignment = ["fill", "top"];
    titleBar.margins = 10;
    titleBar.graphics.backgroundColor = [0.2, 0.4, 0.7];
    
    // أيقونة وأسم
    var titleIcon = titleBar.add("statictext", undefined, "🎨");
    titleIcon.graphics.font = ScriptUI.newFont("Arial", "bold", 20);
    
    var titleText = titleBar.add("statictext", undefined, "MASTER TOOL v2.0");
    titleText.graphics.font = ScriptUI.newFont("Arial", "bold", 16);
    titleText.graphics.foregroundColor = [1, 1, 1];
    titleText.alignment = ["left", "center"];
    
    // زر تصغير/تكبير مخصص
    var zoomBtn = titleBar.add("button", undefined, "🗖");
    zoomBtn.preferredSize = [30, 25];
    zoomBtn.onClick = function() {
        if (win.size.width < 800) {
            win.size = [800, 900];
            win.text = "🚀 MASTER UI - وضع التوسيع";
        } else {
            win.size = [550, 700];
            win.text = "🚀 MASTER UI - الوضع العادي";
        }
    };
    
    // ========== 3. تبويبات (Tabs) متعددة ==========
    var tabs = win.add("tabbedpanel");
    tabs.alignment = ["fill", "fill"];
    tabs.preferredSize = [500, 550];
    
    // ----- التبويب 1: الإعدادات الأساسية -----
    var tabBasic = tabs.add("tab", undefined, "📋 أساسيات");
    tabBasic.orientation = "column";
    tabBasic.spacing = 15;
    tabBasic.margins = 15;
    
    // 3.1 مدخلات النصوص
    var inputGroup = tabBasic.add("panel", undefined, "✏️ مدخلات النصوص");
    inputGroup.orientation = "column";
    inputGroup.alignment = ["fill", "top"];
    inputGroup.spacing = 10;
    inputGroup.margins = 12;
    
    // حقل نص سطر واحد
    var singleLineGroup = inputGroup.add("group");
    singleLineGroup.orientation = "row";
    singleLineGroup.alignment = ["fill", "top"];
    singleLineGroup.spacing = 10;
    
    var txtLabel = singleLineGroup.add("statictext", undefined, "نص سطر واحد:");
    txtLabel.preferredSize.width = 100;
    
    var txtInput = singleLineGroup.add("edittext", undefined, "أدخل نصك هنا");
    txtInput.preferredSize.width = 250;
    txtInput.characters = 30;
    txtInput.helpTip = "هذا حقل لإدخال النص العادي";
    
    // حقل نص متعدد الأسطر
    var multiLineGroup = inputGroup.add("group");
    multiLineGroup.orientation = "row";
    multiLineGroup.alignment = ["fill", "top"];
    multiLineGroup.spacing = 10;
    
    var multiLabel = multiLineGroup.add("statictext", undefined, "نص متعدد:");
    multiLabel.preferredSize.width = 100;
    
    var multiInput = multiLineGroup.add("edittext", undefined, "سطر 1\nسطر 2\nسطر 3");
    multiInput.preferredSize = [250, 60];
    multiInput.multiline = true;
    
    // حقل أرقام مع زيادة/نقصان
    var numberGroup = inputGroup.add("group");
    numberGroup.orientation = "row";
    numberGroup.alignment = ["fill", "top"];
    numberGroup.spacing = 10;
    
    var numLabel = numberGroup.add("statictext", undefined, "قيمة رقمية:");
    numLabel.preferredSize.width = 100;
    
    var numInput = numberGroup.add("edittext", undefined, "50");
    numInput.preferredSize.width = 100;
    numInput.characters = 6;
    
    var numUpBtn = numberGroup.add("button", undefined, "▲");
    numUpBtn.preferredSize = [25, 25];
    var numDownBtn = numberGroup.add("button", undefined, "▼");
    numDownBtn.preferredSize = [25, 25];
    
    numUpBtn.onClick = function() {
        var val = parseFloat(numInput.text) || 0;
        val++;
        numInput.text = val;
    };
    numDownBtn.onClick = function() {
        var val = parseFloat(numInput.text) || 0;
        val--;
        numInput.text = val;
    };
    
    // ========== 4. عناصر التحكم المتقدمة ==========
    var controlsGroup = tabBasic.add("panel", undefined, "🎮 عناصر التحكم");
    controlsGroup.orientation = "column";
    controlsGroup.alignment = ["fill", "top"];
    controlsGroup.spacing = 12;
    controlsGroup.margins = 12;
    
    // 4.1 شريط التمرير (Slider)
    var sliderGroup = controlsGroup.add("group");
    sliderGroup.orientation = "row";
    sliderGroup.alignment = ["fill", "top"];
    sliderGroup.spacing = 10;
    
    var sliderLabel = sliderGroup.add("statictext", undefined, "شريط التمرير:");
    sliderLabel.preferredSize.width = 100;
    
    var mainSlider = sliderGroup.add("slider", undefined, 50, 0, 100);
    mainSlider.preferredSize.width = 200;
    
    var sliderValue = sliderGroup.add("statictext", undefined, "50%");
    sliderValue.preferredSize.width = 50;
    
    mainSlider.onChanging = function() {
        sliderValue.text = Math.round(mainSlider.value) + "%";
    };
    
    // 4.2 شريط تمرير عمودي
    var vSliderGroup = controlsGroup.add("group");
    vSliderGroup.orientation = "row";
    vSliderGroup.alignment = ["fill", "top"];
    vSliderGroup.spacing = 10;
    
    var vSliderLabel = vSliderGroup.add("statictext", undefined, "تمرير عمودي:");
    vSliderLabel.preferredSize.width = 100;
    
    var vSlider = vSliderGroup.add("slider", undefined, 30, 0, 100);
    vSlider.preferredSize = [30, 80];
    vSlider.orientation = "vertical";
    
    var vSliderValue = vSliderGroup.add("statictext", undefined, "30");
    vSliderValue.preferredSize.width = 50;
    
    vSlider.onChanging = function() {
        vSliderValue.text = Math.round(vSlider.value);
    };
    
    // 4.3 مؤشر التقدم (Progress Bar)
    var progressGroup = controlsGroup.add("group");
    progressGroup.orientation = "row";
    progressGroup.alignment = ["fill", "top"];
    progressGroup.spacing = 10;
    
    var progLabel = progressGroup.add("statictext", undefined, "حالة التقدم:");
    progLabel.preferredSize.width = 100;
    
    var progressBar = progressGroup.add("progressbar", undefined, 0, 100);
    progressBar.preferredSize.width = 200;
    progressBar.value = 0;
    
    var progressText = progressGroup.add("statictext", undefined, "0%");
    progressText.preferredSize.width = 50;
    
    // ========== 5. قوائم منسدلة وخيارات ==========
    var selectGroup = tabBasic.add("panel", undefined, "📌 قوائم وخيارات");
    selectGroup.orientation = "column";
    selectGroup.alignment = ["fill", "top"];
    selectGroup.spacing = 12;
    selectGroup.margins = 12;
    
    // 5.1 قائمة منسدلة عادية
    var dropdownGroup = selectGroup.add("group");
    dropdownGroup.orientation = "row";
    dropdownGroup.alignment = ["fill", "top"];
    dropdownGroup.spacing = 10;
    
    var ddLabel = dropdownGroup.add("statictext", undefined, "قائمة منسدلة:");
    ddLabel.preferredSize.width = 100;
    
    var mainDropdown = dropdownGroup.add("dropdownlist", undefined, [
        "🔥 الخيار الأول",
        "✨ الخيار الثاني", 
        "🎨 الخيار الثالث",
        "🚀 الخيار الرابع"
    ]);
    mainDropdown.preferredSize.width = 180;
    mainDropdown.selection = 0;
    
    // 5.2 قائمة متعددة الاختيار
    var listGroup = selectGroup.add("group");
    listGroup.orientation = "row";
    listGroup.alignment = ["fill", "top"];
    listGroup.spacing = 10;
    
    var listLabel = listGroup.add("statictext", undefined, "قائمة متعددة:");
    listLabel.preferredSize.width = 100;
    
    var multiList = listGroup.add("listbox", undefined, [
        "عنصر 1",
        "عنصر 2",
        "عنصر 3",
        "عنصر 4",
        "عنصر 5"
    ], { multipleSelection: true });
    multiList.preferredSize = [180, 80];
    
    // ========== 6. التبويب 2: الخيارات المتقدمة ==========
    var tabAdvanced = tabs.add("tab", undefined, "⚙️ متقدم");
    tabAdvanced.orientation = "column";
    tabAdvanced.spacing = 15;
    tabAdvanced.margins = 15;
    
    // 6.1 أزرار الراديو (Radio Buttons)
    var radioPanel = tabAdvanced.add("panel", undefined, "🔘 أزرار الاختيار (Radio)");
    radioPanel.orientation = "column";
    radioPanel.alignment = ["fill", "top"];
    radioPanel.spacing = 8;
    radioPanel.margins = 12;
    
    var radioGroup = radioPanel.add("group");
    radioGroup.orientation = "row";
    radioGroup.spacing = 20;
    
    var radio1 = radioGroup.add("radiobutton", undefined, "خيار سريع");
    var radio2 = radioGroup.add("radiobutton", undefined, "خيار متوسط");
    var radio3 = radioGroup.add("radiobutton", undefined, "خيار دقيق");
    radio1.value = true;
    
    // 6.2 خانات الاختيار (Checkboxes)
    var checkPanel = tabAdvanced.add("panel", undefined, "✅ خانات الاختيار");
    checkPanel.orientation = "column";
    checkPanel.alignment = ["fill", "top"];
    checkPanel.spacing = 8;
    checkPanel.margins = 12;
    
    var check1 = checkPanel.add("checkbox", undefined, "تفعيل التأثير البصري");
    var check2 = checkPanel.add("checkbox", undefined, "إضافة ضوضاء عشوائية");
    var check3 = checkPanel.add("checkbox", undefined, "تمكين المعالجة المتوازية");
    var check4 = checkPanel.add("checkbox", undefined, "حفظ سجل العمليات");
    
    // 6.3 اختيار الألوان (Color Picker)
    var colorPanel = tabAdvanced.add("panel", undefined, "🎨 منتقي الألوان");
    colorPanel.orientation = "row";
    colorPanel.alignment = ["fill", "top"];
    colorPanel.spacing = 15;
    colorPanel.margins = 12;
    
    var colorPreview = colorPanel.add("panel");
    colorPreview.preferredSize = [50, 35];
    colorPreview.graphics.backgroundColor = [0.8, 0.2, 0.3];
    
    var colorBtn = colorPanel.add("button", undefined, "اختر لوناً");
    colorBtn.preferredSize.width = 120;
    
    var colorHex = colorPanel.add("statictext", undefined, "#CC2233");
    colorHex.graphics.font = ScriptUI.newFont("Courier New", "", 11);
    
    var currentColor = [0.8, 0.2, 0.3];
    
    colorBtn.onClick = function() {
        var colorDialog = new Window("palette", "منتقي الألوان");
        var colorChooser = colorDialog.add("colorpicker");
        
        colorChooser.onChange = function() {
            currentColor = [
                colorChooser.color.red / 255,
                colorChooser.color.green / 255,
                colorChooser.color.blue / 255
            ];
            colorPreview.graphics.backgroundColor = currentColor;
            colorHex.text = "#" + 
                Math.round(currentColor[0]*255).toString(16).padStart(2,'0') +
                Math.round(currentColor[1]*255).toString(16).padStart(2,'0') +
                Math.round(currentColor[2]*255).toString(16).padStart(2,'0');
            colorDialog.close();
        };
        
        colorDialog.show();
    };
    
    // ========== 7. التبويب 3: تاريخ وعمليات ==========
    var tabHistory = tabs.add("tab", undefined, "📜 التاريخ");
    tabHistory.orientation = "column";
    tabHistory.spacing = 10;
    tabHistory.margins = 15;
    
    // 7.1 سجل العمليات
    var logPanel = tabHistory.add("panel", undefined, "سجل العمليات");
    logPanel.orientation = "column";
    logPanel.alignment = ["fill", "fill"];
    logPanel.spacing = 8;
    logPanel.margins = 10;
    
    var logList = logPanel.add("listbox", undefined, [], { multipleSelection: false });
    logList.preferredSize = [400, 150];
    
    // 7.2 إضافة سجل
    var addLogGroup = logPanel.add("group");
    addLogGroup.orientation = "row";
    addLogGroup.alignment = ["fill", "top"];
    addLogGroup.spacing = 10;
    
    var logInput = addLogGroup.add("edittext", undefined, "رسالة جديدة");
    logInput.preferredSize.width = 250;
    
    var addLogBtn = addLogGroup.add("button", undefined, "➕ إضافة سجل");
    
    var clearLogBtn = addLogGroup.add("button", undefined, "🗑️ مسح الكل");
    
    // دوال السجل
    function addLog(message) {
        var timestamp = new Date().toLocaleTimeString();
        logList.add("item", "[" + timestamp + "] " + message);
        logList.items[logList.items.length - 1].selected = true;
        if (logList.items.length > 50) {
            logList.remove(0);
        }
    }
    
    addLogBtn.onClick = function() {
        if (logInput.text) {
            addLog(logInput.text);
            logInput.text = "";
        }
    };
    
    clearLogBtn.onClick = function() {
        while (logList.items.length > 0) {
            logList.remove(0);
        }
        addLog("تم مسح السجل");
    };
    
    // ========== 8. التبويب 4: معلومات النظام ==========
    var tabInfo = tabs.add("tab", undefined, "ℹ️ معلومات");
    tabInfo.orientation = "column";
    tabInfo.spacing = 12;
    tabInfo.margins = 15;
    
    var infoPanel = tabInfo.add("panel", undefined, "معلومات After Effects");
    infoPanel.orientation = "column";
    infoPanel.spacing = 10;
    infoPanel.margins = 12;
    
    var infoText = infoPanel.add("statictext", undefined, "", { multiline: true });
    infoText.preferredSize = [400, 200];
    infoText.alignment = ["fill", "top"];
    
    // جمع معلومات النظام
    function updateSystemInfo() {
        var info = "📊 معلومات AE:\n";
        info += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        info += "🔹 إصدار AE: " + app.version + "\n";
        info += "🔹 بناء البرنامج: " + app.buildNumber + "\n";
        info += "🔹 اللغة: " + app.language + "\n";
        info += "\n📁 معلومات المشروع:\n";
        info += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        
        if (app.project) {
            info += "🔹 اسم المشروع: " + (app.project.file ? app.project.file.name : "غير محفوظ") + "\n";
            info += "🔹 عدد الكومبوزيشنات: " + app.project.items.length + "\n";
            info += "🔹 عدد الطبقات الكلي: " + countTotalLayers() + "\n";
        } else {
            info += "⚠️ لا يوجد مشروع مفتوح\n";
        }
        
        info += "\n💻 معلومات النظام:\n";
        info += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        info += "🔹 النظام: " + $.os + "\n";
        info += "🔹 الذاكرة: " + (system?.totalPhysicalMemory ? (system.totalPhysicalMemory / 1024 / 1024 / 1024).toFixed(1) + " GB" : "غير متوفر") + "\n";
        
        infoText.text = info;
    }
    
    function countTotalLayers() {
        var total = 0;
        if (app.project) {
            for (var i = 1; i <= app.project.items.length; i++) {
                if (app.project.items[i] instanceof CompItem) {
                    total += app.project.items[i].layers.length;
                }
            }
        }
        return total;
    }
    
    updateSystemInfo();
    
    var refreshInfoBtn = infoPanel.add("button", undefined, "🔄 تحديث المعلومات");
    refreshInfoBtn.onClick = updateSystemInfo;
    
    // ========== 9. الأزرار الرئيسية ==========
    var mainButtons = win.add("group");
    mainButtons.orientation = "row";
    mainButtons.alignment = ["fill", "top"];
    mainButtons.spacing = 10;
    
    // 9.1 زر التنفيذ الرئيسي
    var executeBtn = mainButtons.add("button", undefined, "🚀 تنفيذ الأمر");
    executeBtn.preferredSize = [150, 45];
    executeBtn.graphics.font = ScriptUI.newFont("Arial", "bold", 14);
    executeBtn.graphics.backgroundColor = [0.2, 0.6, 0.3];
    executeBtn.graphics.foregroundColor = [1, 1, 1];
    
    // 9.2 زر الإعدادات المسبقة
    var presetsBtn = mainButtons.add("button", undefined, "💾 حفظ الإعدادات");
    presetsBtn.preferredSize = [120, 45];
    
    // 9.3 زر التحميل
    var loadBtn = mainButtons.add("button", undefined, "📂 تحميل");
    loadBtn.preferredSize = [100, 45];
    
    // 9.4 زر الإلغاء
    var cancelBtn = mainButtons.add("button", undefined, "❌ إلغاء");
    cancelBtn.preferredSize = [100, 45];
    
    // ========== 10. شريط الحالة ==========
    var statusBar = win.add("panel", undefined, "");
    statusBar.orientation = "row";
    statusBar.alignment = ["fill", "top"];
    statusBar.margins = 8;
    
    var statusIcon = statusBar.add("statictext", undefined, "✅");
    var statusMessage = statusBar.add("statictext", undefined, "جاهز. اختر الإعدادات ثم اضغط تنفيذ.");
    statusMessage.alignment = ["left", "center"];
    statusMessage.graphics.font = ScriptUI.newFont("Arial", "italic", 10);
    
    var progressStatus = statusBar.add("statictext", undefined, "");
    progressStatus.alignment = ["right", "center"];
    
    // ========== 11. دوال المحاكاة ==========
    function updateProgress(percent, message) {
        progressBar.value = percent;
        progressText.text = percent + "%";
        statusMessage.text = message;
        if (percent < 100) {
            progressStatus.text = "⏳ " + percent + "%";
        } else {
            progressStatus.text = "✅ مكتمل";
        }
        // تحديث واجهة المستخدم
        ScriptUI.environment.update();
    }
    
    function simulateProcess() {
        try {
            executeBtn.enabled = false;
            updateProgress(0, "بدء العملية...");
            
            // جمع جميع القيم من الواجهة
            var settings = {
                text: txtInput.text,
                multiline: multiInput.text,
                number: parseFloat(numInput.text) || 0,
                slider: mainSlider.value,
                vSlider: vSlider.value,
                selectedOption: mainDropdown.selection.text,
                selectedList: [],
                radio: radio1.value ? "سريع" : (radio2.value ? "متوسط" : "دقيق"),
                effects: {
                    visual: check1.value,
                    noise: check2.value,
                    parallel: check3.value,
                    log: check4.value
                },
                color: currentColor
            };
            
            // جمع العناصر المحددة من القائمة المتعددة
            for (var i = 0; i < multiList.items.length; i++) {
                if (multiList.items[i].selected) {
                    settings.selectedList.push(multiList.items[i].text);
                }
            }
            
            addLog("بدء تنفيذ العملية");
            addLog("الإعدادات: " + JSON.stringify(settings).substring(0, 100) + "...");
            
            // محاكاة عملية طويلة
            for (var i = 0; i <= 100; i += 10) {
                updateProgress(i, "جاري التنفيذ... " + i + "%");
                $.sleep(50); // محاكاة وقت المعالجة
            }
            
            updateProgress(100, "اكتمل التنفيذ بنجاح!");
            addLog("✅ اكتملت العملية بنجاح");
            
            // عرض ملخص
            alert("✅ تم التنفيذ بنجاح!\n\n" +
                  "📝 النص: " + settings.text + "\n" +
                  "🔢 القيمة: " + settings.number + "\n" +
                  "🎚️ شريط التمرير: " + settings.slider + "%\n" +
                  "🎨 اللون: " + colorHex.text + "\n" +
                  "⚡ الوضع: " + settings.radio);
            
        } catch (error) {
            updateProgress(0, "خطأ: " + error.toString());
            addLog("❌ خطأ: " + error.toString());
            alert("حدث خطأ: " + error.toString());
        } finally {
            executeBtn.enabled = true;
            setTimeout(function() {
                if (progressBar.value == 100) {
                    setTimeout(function() {
                        updateProgress(0, "جاهز لتنفيذ جديد");
                        progressStatus.text = "";
                    }, 2000);
                }
            }, 100);
        }
    }
    
    // ========== 12. حفظ وتحميل الإعدادات ==========
    var savedSettings = {};
    
    function saveSettings() {
        savedSettings = {
            text: txtInput.text,
            number: numInput.text,
            slider: mainSlider.value,
            vSlider: vSlider.value,
            dropdown: mainDropdown.selection.index,
            radio1: radio1.value,
            radio2: radio2.value,
            radio3: radio3.value,
            check1: check1.value,
            check2: check2.value,
            check3: check3.value,
            check4: check4.value,
            color: currentColor
        };
        addLog("💾 تم حفظ الإعدادات الحالية");
        statusMessage.text = "تم حفظ الإعدادات بنجاح";
        setTimeout(function() { statusMessage.text = "جاهز. اختر الإعدادات ثم اضغط تنفيذ."; }, 2000);
    }
    
    function loadSettings() {
        if (Object.keys(savedSettings).length === 0) {
            alert("لا توجد إعدادات محفوظة مسبقاً");
            return;
        }
        
        txtInput.text = savedSettings.text || "";
        numInput.text = savedSettings.number || "50";
        mainSlider.value = savedSettings.slider || 50;
        sliderValue.text = Math.round(mainSlider.value) + "%";
        vSlider.value = savedSettings.vSlider || 30;
        vSliderValue.text = Math.round(vSlider.value);
        mainDropdown.selection = savedSettings.dropdown || 0;
        radio1.value = savedSettings.radio1 || true;
        radio2.value = savedSettings.radio2 || false;
        radio3.value = savedSettings.radio3 || false;
        check1.value = savedSettings.check1 || false;
        check2.value = savedSettings.check2 || false;
        check3.value = savedSettings.check3 || false;
        check4.value = savedSettings.check4 || false;
        
        if (savedSettings.color) {
            currentColor = savedSettings.color;
            colorPreview.graphics.backgroundColor = currentColor;
            colorHex.text = "#" + 
                Math.round(currentColor[0]*255).toString(16).padStart(2,'0') +
                Math.round(currentColor[1]*255).toString(16).padStart(2,'0') +
                Math.round(currentColor[2]*255).toString(16).padStart(2,'0');
        }
        
        addLog("📂 تم تحميل الإعدادات المحفوظة");
        statusMessage.text = "تم تحميل الإعدادات بنجاح";
        setTimeout(function() { statusMessage.text = "جاهز. اختر الإعدادات ثم اضغط تنفيذ."; }, 2000);
    }
    
    presetsBtn.onClick = saveSettings;
    loadBtn.onClick = loadSettings;
    executeBtn.onClick = simulateProcess;
    cancelBtn.onClick = function() { win.close(); };
    
    // ========== 13. إضافة تلميحات أدوات (Tooltips) ==========
    txtInput.helpTip = "أدخل النص الذي تريد معالجته";
    mainSlider.helpTip = "اسحب لتعديل القيمة من 0 إلى 100";
    colorBtn.helpTip = "انقر لفتح منتقي الألوان";
    executeBtn.helpTip = "تنفيذ العملية بالإعدادات الحالية";
    
    // ========== 14. إضافة قائمة سياق (Context Menu) ==========
    var contextMenu = new Window("palette", undefined, undefined, { independent: true });
    contextMenu.orientation = "column";
    contextMenu.spacing = 5;
    contextMenu.margins = 5;
    contextMenu.visible = false;
    
    var menuItem1 = contextMenu.add("button", undefined, "📋 نسخ الحالة");
    var menuItem2 = contextMenu.add("button", undefined, "🔄 إعادة تعيين");
    var menuItem3 = contextMenu.add("button", undefined, "ℹ️ تعليمات");
    
    menuItem1.onClick = function() {
        var state = "النص: " + txtInput.text + "\nالقيمة: " + numInput.text;
        alert("تم نسخ:\n" + state);
        contextMenu.visible = false;
    };
    
    menuItem2.onClick = function() {
        txtInput.text = "";
        numInput.text = "50";
        mainSlider.value = 50;
        contextMenu.visible = false;
    };
    
    menuItem3.onClick = function() {
        alert("مساعدة الأداة:\n\n" +
              "هذه أداة شاملة تظهر جميع مميزات ScriptUI\n" +
              "يمكنك استخدامها كقالب لأدواتك الخاصة");
        contextMenu.visible = false;
    };
    
    // النقر بزر الفأرة الأيمن على النافذة
    win.onMouseDown = function(event) {
        if (event.button === 2) { // زر الفأرة الأيمن
            contextMenu.show();
            contextMenu.location = [event.screenX, event.screenY];
        }
    };
    
    // ========== 15. إضافة إختصارات لوحة المفاتيح ==========
    win.addEventListener("keydown", function(event) {
        if (event.keyName === "F1") {
            alert("🚀 MASTER UI v2.0\n\n" +
                  "هذه الأداة تحتوي على كل مميزات ScriptUI:\n" +
                  "✓ مدخلات نصية\n" +
                  "✓ أزرار وخيارات\n" +
                  "✓ قوائم منسدلة\n" +
                  "✓ شرائط تمرير\n" +
                  "✓ مؤشرات تقدم\n" +
                  "✓ منتقي ألوان\n" +
                  "✓ سجل عمليات\n" +
                  "✓ حفظ وتحميل\n" +
                  "✓ قائمة سياق\n" +
                  "✓ اختصارات لوحة مفاتيح");
        } else if (event.ctrlKey && event.keyName === "S") {
            saveSettings();
        } else if (event.ctrlKey && event.keyName === "L") {
            loadSettings();
        } else if (event.keyName === "F5") {
            simulateProcess();
        }
    });
    
    // ========== 16. إضافة رسالة ترحيب ==========
    addLog("🚀 تم تشغيل MASTER UI");
    addLog("💡 تلميح: اضغط F1 للمساعدة");
    addLog("💡 تلميح: Ctrl+S لحفظ الإعدادات, Ctrl+L للتحميل");
    
    // ========== 17. إضافة حركات وأنيميشن ==========
    function animatePreview() {
        var colors = [
            [0.8, 0.2, 0.3],
            [0.2, 0.7, 0.4],
            [0.3, 0.4, 0.9],
            [0.9, 0.6, 0.2],
            [0.7, 0.2, 0.7]
        ];
        var i = 0;
        var interval = setInterval(function() {
            if (!win.visible) {
                clearInterval(interval);
                return;
            }
            colorPreview.graphics.backgroundColor = colors[i % colors.length];
            i++;
        }, 1000);
    }
    
    // تشغيل الأنيميشن (اختياري)
    // animatePreview();
    
    // ========== 18. عرض النافذة ==========
    win.center();
    win.show();
}
