let carrData = [
    {
        name: 'Бачення Вельви: Рагнарок.',
        about: "",

    },
    {
        name: 'Локасенна',
        about: '',
    },
    {
        name: 'Смерть Бальдра',
        about: '',
    },
    {
        name: 'Волосся Сіф',
        about: '',
    },
     {
        name: 'Діти Локі',
        about: '',
    },
     {
        name: 'Яблука Ідунн',
        about: '',
    },
     {
        name: 'Мімірова голова та Одінове око',
        about: '',
    },
    {
        name: 'Іггдрасіль і 9 світів',
        about: '',
    },
     {
        name: 'Асгардська стіна',
        about: '',
    },
    {
        name: 'Як Химір і Тор ходили на риболовлю',
        about: '',
    }, {
        name: 'Незвичайне весілля Фрейї',
        about: '',
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