//Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.

//Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:

//Користувач ввів 2 і 2:

//2+2=4
//2-2=0
//2*2=4
//2/2=1

numberFirst = +prompt("Введіть перше число", 2);
numberSecond = +prompt("Введіть друге число", 2); 

amount = numberFirst + numberSecond;
subtraction = numberFirst - numberSecond;
multiplication = numberFirst * numberSecond;
division = numberFirst / numberSecond;

alert(`Користувач ввів ${numberFirst} і ${numberSecond}: ${numberFirst}+${numberSecond}=${amount}`);
alert(`Користувач ввів ${numberFirst} і ${numberSecond}: ${numberFirst}-${numberSecond}=${subtraction}`);
alert(`Користувач ввів ${numberFirst} і ${numberSecond}: ${numberFirst}*${numberSecond}=${multiplication}`);
alert(`Користувач ввів ${numberFirst} і ${numberSecond}: ${numberFirst}/${numberSecond}=${division}`);
