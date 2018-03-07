/* global src */
$(document).ready(function() {

    var dragQuestionsJSON = [
        {
            question: "1-وقَّعَ الشيخُ محمدُ بنُ ثاني معاهَدةً معَ الحكومةِ البريطانيةِ في عامِ ..",
            answers: [
                "ا-1835م.",
                "ب- 1627م.",
                "ج-1868م.",
                "د-1893م."
            ],
            correctAnswer: "2"
        },

        {
            question: "2-قامَ والي البصرةِ العثمانيُّ ... بمحاوَلةٍ لحصارِ الدوحةِ وفرْضِ السيطرةِ العثمانيَّةِ على قطرَ.",
            answers: [
                "ا- محمدُ نافذ باشا",
                "ب- محمدُ حافظ باشا",
                "ج-مدحتْ باشا",
                "د-محمدُ علي باشا"
            ],
            correctAnswer: "1"
        },
        {

            question: "3-تمَّ تصديرُ أوَّلِ شحنةِ بترولٍ منْ حقلِ دخانَ عبْرَ .... عامَ 1949م.",
            answers: [
                "ا-ميناءِ الدوحةِ ",
                "ب-ميناءِ رأسِ لفانَ",
                "ج-ميناءِ مسيعيدَ",
                "د-ميناءِ الرويسِ"
            ],
            correctAnswer: "2"
        },
        {

            question: "4- قامتْ وزارةُ الخارجيةِ القطريةِ بالتوسطِ في  حلِّ أزمةِ ...... في سوريا.",
            answers: [
                "ا-جُزرِ الإماراتِ",
                "ب-  العلاقاتِ المصريةِ",
                "ج- الأسرى اللبنانيينَ ",
                "د- الوقودِ "
            ],
            correctAnswer: "2"
        },

        {
            question: "5-تمَّ توقيعُ معاهدةِ 1935م بينَ الشيخِ عبدِ اللهِ بنِ جاسمٍ آل ثاني والمقيمِ البريطانيِّ .....",
            answers: [
                "ا-كولونييل لويس بيلي. ",
                "ب-كولونيل تي سي فاول.  ",
                "ج-جنرال كير. ",
                ". د-ويليام بلجريف. "
            ],
            correctAnswer: "1"
        }
    ]

    var html = "";
    for (var i = 0; i < dragQuestionsJSON.length; i++) {

        var questionObj = dragQuestionsJSON[i];
        var question = questionObj.question.replace(/\.{2,}/g, '<div style=\"display: -webkit-inline-box;\" class=\"droppable-area' + i + '\" id=\"q' + i + '\"><div class=\"placeholder' + i + '\"><p>................</p></div></div>')
        html += ("<ul> " + question + "</ul>")
        for (var j = 0; j < questionObj.answers.length; j++) {
            html += "<ol class='draggable-item" + i + "'>" + questionObj.answers[j] + "</ol>"

        }
    }
    document.getElementById("pull").innerHTML = html;

    for (var i = 0; i < dragQuestionsJSON.length; i++) {
        $(".draggable-item" + i).draggable({
            cursor: 'move',
            containment: '.container',
            stack: '.connected-sortable ul',
            revert: true,
        });

        $(".droppable-area" + i + "").droppable({
            hoverClass: 'hovered',
            accept: ":not(.ui-sortable-helper)",
            drop: handleDropEvent
        });
    }

    function handleDropEvent(event, ui) {
        var target = event.target.classList[0].split("droppable-area")[1];
        var draggable = ui.draggable[0].classList[0].split("draggable-item")[1];
        var draggableText = ui.draggable.text()
        if (target != draggable) {
            return;
        }
        $(".placeholder" + target).text(draggableText).appendTo(this);
        var questionAnswer = dragQuestionsJSON[target].answers[dragQuestionsJSON[target].correctAnswer];
        if (questionAnswer === draggableText) {
            $(".placeholder" + target).css('background', '#00ff00')
        } else {
            $(".placeholder" + target).css('background', '#ff0000')
        }
    }
    var choiceJSON = [
        {
            question: "1-ترتبطُ دولةُ قطرَ في حدودِها البريَّةِ معَ ....",
            answers: [
                " ا-مملكةِ البحرينِ",
                "ب- سلطنةِ عمانَ ",
                "ج-المملكةِ العربيةِ السعوديةِ",
                "د-دولةِ الإماراتِ"
            ],
            correctAnswer: "2"
        },

        {
            question: "2- انتقالُ الفردِ إلى مكانٍ بهدفِ ممارسةِ أوْ متابعةِ رياضةٍ ما يُسمّى ..........",
            answers: [
                " ا- السياحةَ العلاجيَّةَ",
                "ب- السياحةَ الثقافيَّةَ",
                "ج-السياحةَ التاريخيَّةَ",
                "د-السياحةَ الرياضيَّةَ"
            ],
            correctAnswer: "3"
        },

        {
            question: "3- من أهمِّ إنجازاتِ الديموقراطيةِ في دولةِ قطرَ تأسيسُ ........ عامَ 1972م.",
            answers: [
                "ا-وزارةِ التربيةِ والتعليمِ",
                "ب- مجلسِ الشورى",
                "ج-المجلسِ البلديِّ",
                "د-جامعةِ قطرَ"
            ],
            correctAnswer: "1"
        },
        {
            question: "4-الشكلُ السداسيُّ هوَ الشكلُ المثاليُّ للمدنِ حسبَ .........",
            answers: [
                "ا- نظريةِ القطاعات ",
                "ب-نظريةُ النوياتِ المتعددةِ",
                "ج-نظريةِ المواقعِ المركزيةِ   ",
                "د-نظريةِ مان."
            ],
            correctAnswer: "2"
        },

        {
            question: "5-تنقسمُ الزراعةُ في دولةِ قطرَ إلى زراعةِ الحقولِ و........ التي تساهمُ بنسبةِ 1% منْ إجماليِّ المساحةِ المزروعةِ في دولةِ قطرَ.",
            answers: [
                " ا-الزراعةِ المداريةِ ",
                "ب- الزراعةِ الكثيفةِ",
                "ج- الزراعةِ المحميةِ",
                "د- الزراعةِ الواسعةِ"
            ],
            correctAnswer: "2"
        }
    ]

    var html = "";
    for (var i = 0; i < choiceJSON.length; i++) {
        var questionObj = choiceJSON[i];
        html += ("<ul>" + questionObj.question + "</ul>")
        for (var j = 0; j < questionObj.answers.length; j++) {
            html += "<ol>" + "<input type='radio' name='radioBtn" + i + "'id='radioButton" + i + "" + j + "'>" + "<label for='radioButton" + i + "" + j + "' id='labelRadioButton" + i + "" + j + "'>" + questionObj.answers[j] + "</label>" + "</ol>"
        }
    }
    document.getElementById("choose").innerHTML = html;

    for (let i = 0; i < choiceJSON.length; i++) {
        for (let j = 0; j < questionObj.answers.length; j++) {
            document.getElementById('radioButton' + i + "" + j).addEventListener("click", function() {
                checkCorrectAnswer(i, j)
            }, false);
        }
    }

    function checkCorrectAnswer(i, j) {
        var question = choiceJSON[i];
        var correctAnswer = question.answers[question.correctAnswer];
        var userAnswer = question.answers[j];
        if (correctAnswer === userAnswer) {
            $("#labelRadioButton" + i + "" + j).css('background', '#00ff00')
        } else {
            $("#labelRadioButton" + i + "" + j).css('background', '#ff0000')
        }

        for (var k = 0; k < question.answers.length; k++) {
            if (k == j) {
                continue;
            }
            $("#labelRadioButton" + i + "" + k).css('background', '#f0fff9')
        }

    }
});