A. Толя-Карп и новый набор структур, часть 2
Все языки	Scala 2.13.4
Ограничение времени	3 секунды	5 секунд
Ограничение памяти	255Mb	256Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Толя-Карп запросил для себя n посылок с «Аллигатор-экспресс».

Посылка представляет из себя ящик. Внутри ящика лежит целое число ai. Номер на ящике di указывает на цвет числа, лежащего внутри.

Толю-Карпа интересует, чему будут равны значения чисел, если сложить между собой все те, что имеют одинаковый цвет. Напишите, пожалуйста, программу, которая выводит результат.

Формат ввода
В первой строке одно число n (0 ≤ n ≤ 2*105).

В следующих n строках заданы по два числа: цвет числа в ящике di и значение числа ai (-1018 ≤ di, ai ≤ 1018).

Гарантируется, что сумма чисел одного цвета не превышает 1018.

Формат вывода
Выведите в порядке возрастания номера цвета пары чисел, каждая в новой строке: номер цвета и сумму всех чисел данного цвета.