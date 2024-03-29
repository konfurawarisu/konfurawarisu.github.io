let carrData = [
    {
        name: 'Феху',
        element: 'Вогонь',
        god: 'Фрейя,',
        astrological: 'Телець; Венера, Юпітер, Місяць',
        image: 'rune/fehu.jpg',
        p: '-',
        about: "Руна багатства та добробуту. Вона здатна примножувати матеріальні та духовні речі – гроші, знання, матеріальні предмети. Символ наповнює людину енергією задля досягнення задуманого.",

    },
    {
        name: 'Уруз',
        element: 'Земля',
        god: 'Тор',
        astrological: 'Телець, Козеріг',
        image: 'rune/uruz.jpg',
        p: '-',
        about: 'Руна сили та влади. Цей символ виражає вольове чоловіче початок, що сприяє творенню. За допомогою уруз незримі речі можуть виявлятися у матеріальній формі..',
    },
    {
        name: 'Турізас',
        element: 'Вогонь',
        god: 'Тор',
        astrological: 'Марс, Сатурн, Плутон, Овен, Скорпіон.',
        image: 'rune/thurizas.jpg',
        p: '-',
        about: 'Енергія бога Тора, сила у своєму первісному прояві. Руна може як творити, так і руйнувати. Допомагає людині зруйнувати все старе, що заважає поступу вперед. Це зміна особистості на краще, звільнення від кайданів застарілих комплексів, образ і психологічних затисків. Також руна допомагає створити простір для "будівництва" чогось нового.',
    },
    {
        name: 'Ансуз',
        element: 'Повітря',
        god: 'Одін',
        astrological: 'Водолій',
        image: 'rune/ansuz.jpg',
        p: '-',
        about: 'Провідник між світом форм та небесами. За допомогою ансузу боги верхнього світу дають послання людям. Вона допомагає здобути натхнення, наповнитися духовною силою.',
    },
     {
        name: 'Райдо',
        element: 'Вогонь, повітря',
        god: 'Тор, Форсеті',
        astrological: 'Меркурій, Марс, Стрілець, Близнюки',
        image: 'rune/raidho.jpg',
        p: '-',
        about: 'Руна спрямованої енергії для досягнення конкретної мети. Сила цієї енергії може мати творчу та руйнівну дію, залежно від намірів ериля. Це символ руху, мандрівок, уособлення життєвого шляху людини. Причому значення рунічного символу поширюється і фізичну сутність, і духовну оболонку людини.',
    },
     {
        name: 'Кеназ',
        element: 'Вогонь',
        god: 'Геймдалль, Локі',
        astrological: 'Меркурій, Уран, Стрілець, Риби',
        image: 'rune/kenaz.jpg',
        p: '-',
        about: 'Зародження чогось нового, творчий потенціал. За допомогою кеназу можна кардинально змінити долю людини. У буквальному сенсі значення руни Кеназ розуміється як очищення душі від усього нечистого, від гріхів, низинних пристрастей. У давнину Кеназ використовували для посвяти хлопчиків у воїни.',
    },
     {
        name: 'Гебо',
        element: 'Повітря',
        god: 'Одін, Тор',
        astrological: 'Терези, Венера',
        image: 'rune/gebo.jpg',
        p: '-',
        about: "Енергія примирення та об'єднання. Це руна гармонії. Руна Гебо виступає об'єднанням протилежностей, вказує на партнерство та дари – сюди належать і божественні подарунки. Дари можуть мати різну природу – бути духовними чи матеріальними, але в будь-якому випадку вони дарують людині щастя і радість.",
    },
    {
        name: 'Вуньо',
        element: 'Земля',
        god: 'Одін, Улль',
        astrological: 'Юпітер, Венера, Стрілець, Лев',
        image: 'rune/wunjo.jpg',
        p: '-',
        about: 'Руна уособлює собою різні сприятливі події – реалізацію бажаного, досягнення успіху, радість, удачу та щастя.',
    },
     {
        name: 'Хагалаз',
        element: 'Вода, повітря, вогонь.',
        god: 'Хель',
        astrological: 'Сатурн, Плутон, Уран, Скорпіон.',
        image: 'rune/hagalaz.jpg',
        p: '-',
        about: "Загибель; енергія природної стихії; неконтрольовані зовнішні сили; полум'я зміни; прихильність долі; непередбачені події. Хагалаз – знак загрози та некерованості стихій, також і знак природних стихій, як джерело виникнення світу. Ця руна визначає дійсні натуральні природні сили всесвіту. Руна руйнування старого для втілення нового. Це потужна сила визволення через страждання.",
    },
    {
        name: 'Наутіз',
        element: 'Вогонь',
        god: 'Норна Скульд, Нотт',
        astrological: 'Сатурн, Козеріг',
        image: 'rune/nauthiz.jpg',
        p: '-',
        about: 'Сила обмеження. Використовується для примусу виконання волі іншою людиною.',
    },
     {
        name: 'Іса',
        element: 'Вода',
        god: 'Ринд, Норна Верданді, Скаді, Імір.',
        astrological: 'Сатурн, Козеріг, Водолій',
        image: 'rune/isa.jpg',
        p: '-',
        about: 'Символ льоду, холоду. За допомогою цього знака можна зупинити будь-який рух. Іса надає щільності формі.',
    },
    {
        name: 'Єра',
        element: 'Земля',
        god: 'Бальдр, Хед, Фрейр, Фрейя',
        astrological: 'Діва, Прозерпіна.',
        image: 'rune/jera.jpg',
        p: '-',
        about: 'руна тимчасових рамок. Це символ зміни пір року, проміжний підсумок між подіями.',
    },
     {
        name: 'Ейваз',
        element: 'Земля, вода, вогонь, повітря',
        god: 'Одін, Улль, Фрейр',
        astrological: 'Венера',
        image: 'rune/eihwaz.jpg',
        p: '-',
        about: 'Переоцінка цінностей, новий погляд на речі. Це енергія для ухвалення рішення, початку дії.',
    },
    {
        name: 'Перт',
        element: 'Земля',
        god: 'Фріг, Берта',
        astrological: 'Скорпіон, Плутон, Риби',
        image: 'rune/pertho.jpg',
        p: '-',
        about: 'Руна жіночої енергії. Символ допомагає зародженню чогось нового, розкриттю потенціалу.',
    },
     {
        name: 'Альгіз',
        element: 'Вода, повітря, земля',
        god: 'Геймдалль',
        astrological: 'Нептун, Риби',
        image: 'rune/algiz.jpg',
        p: '-',
        about: 'Символ захисту. Ця руна не тільки захищає, а й дає мудрість робити правильні вчинки.',
    },
    {
        name: 'Соул',
        element: 'Вогонь',
        god: 'Бальдр, Фрейр, Тор, Сунна.',
        astrological: 'Лев, Овен, Сонце.',
        image: 'rune/soul.jpg',
        p: '-',
        about: "Сонячна руна, символ полум'я що очищає. Це вогонь руйнування старого народження нового. Так само соулу відкриває таланти та здібності в людині",
    }, 
    {
        name: 'Тейваз',
        element: 'Вогонь',
        god: 'Тюр',
        astrological: 'Марс, Овен.',
        image: 'rune/teivaz.jpg',
        p: '-',
        about: 'Це знак перемоги у битвах. Це руна благородного воїна, який перемагає зло. Дає натхнення та впевненість у собі. Руна Тейваз істинно чоловіча - це уособлення сили, сили, що застосовується в рамках закону.',
    },
    {
        name: 'Беркана',
        element: 'Земля',
        god: 'Фрігг (Берхта)',
        astrological: 'Венера, Телець',
        image: 'rune/berkana.jpg',
        p: '-',
        about: "Символ жіночого початку. Руна захищає домівку, жінок і дітей. Цей знак використовується для допомоги ближнім. Це дуже жіночна, м'яка руна. Часто символізує матір, джерело народження всього живого. Уособлення нового, особистісного та кар'єрного зростання. Допомагає розібратися у особистих стосунках. Символ зачаття, відродження, зростання.",
    },
     {
        name: 'Еваз',
        element: 'Повітря',
        god: 'Фрейр, Фрейя',
        astrological: 'Стрілець, Юпітер.',
        image: 'rune/ewaz.jpg',
        p: '-',
        about: 'Зрушить справу з мертвої точки. Руна використовується для лікування тяжкохворих, для настання довгоочікуваних змін у житті.',
    },
    {
        name: 'Манназ',
        element: 'Повітря, Вода',
        god: 'Одін, Геймдалль, Бор.',
        astrological: 'Водолій, Юпітер.',
        image: 'rune/mannaz.jpg',
        p: '-',
        about: 'Символ людини. Це руна самопізнання, набуття справжньої мети та усвідомлення свого призначення.',
    },
    {
        name: 'Лагуз',
        element: 'Вода',
        god: 'Нертус, Ньорд, Фрейр.',
        astrological: 'Венера в екзальтації, Місяць, Риби.',
        image: 'rune/laguz.jpg',
        p: '-',
        about: 'Символ води, потоку. Руна уособлює собою рух, що вирує гірську річку, яка підтримує людину в її власному руслі.',
    },
    {
        name: 'Інгуз',
        element: 'Земля',
        god: 'Фрейр',
        astrological:'Венера, Телець, Перехід за знака Риб до Овна.',
        image: 'rune/inguz.jpg',
        p: '-',
        about: 'Руна плодючості та достатку. Символ допомагає накопичувати енергію для здійснення задуманого.',
    },
    {
        name: 'Отал',
        element: 'Вода, Земля.',
        god: 'Одін',
        astrological: 'Рак, Місяць, Юпітер.',
        image: 'rune/othal.jpg',
        p: '-',
        about: 'символ захисту предків. Застосовується для прояснення ситуації, знімає мороки та зомбування.',
    },
    {
        name: 'Дагаз',
        element: 'Вогонь',
        god: 'Локі, Геймдалль, Бальдрю',
        astrological: 'Овен, Північний вузор-Раху, Плутон, Скорпіон.',
        image: 'rune/dagaz.jpg',
        p: '-',
        about: 'Символ сонця в зеніті. Руна усуває все непотрібне, що заважає шляху просування до мети.',
    },
]


let carData = [
    {
        name: 'Феху',
        element: 'Вогонь',
        god: 'Фрейя,',
        astrological: 'Телець; Венера, Юпітер, Місяць',
        image: 'rune/fehu.jpg',
        about: "",
    }
    ]
let carrApp = {
    data() {
        return {
            cars: carrData,
            currentCar: carrData[0],
            currentIndex: 0,
        }
    },
    methods: {
        showCar(index) {
            this.currentCar = carrData[index];
            this.currentIndex = index;
        }
    },
}
Vue.createApp(carrApp).mount('#vue-cont')