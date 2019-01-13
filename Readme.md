Итак задание 1.

Перед выполненем ДЗ вам нужно подготовить окружение. 
Наверняка у вас есть локальные изменения в проекте. 

Перед выполнением ДЗ 1 я советую сбросить их.
И начать делать изменения в отдельной ветке.
Для этого в папке с проектом выполните команду:

```
git reset --hard HEAD

git checkout -b <ваше имя>/dz-1
// например
git checkout -b vasya/dz-1
```

В Gitbash вы увидете `vasya/dz-1` в командной строке.

После этого в этой папке в `01-intro-js` вытяните последние изменения:

```
git pull
```

Затем в этой же папке запустите команду:

```
npm install
```

Эта команду установить необходимые библиотеки, которые мы будем использовать.


Чтобы проверить что все работает:

```
npm test
```

Вы должны увидеть набор непройденых тестов:

```
JS Basics
    Numbers
      1) should be able define variables and add them
      2) should be able to divide and multiply number
      3) should be able to round numbers
      4) should be able to find sin^2(x) * cos^2(x)
    Objects
      5) should be find object value by key
      6) should be find object value by dynamic key
      7) should be parse object from json
      8) should be set objet key
    Arrays
      9) should be access array by index
      10) should to push and pop from array
      11) should be able to sort array
```

#### Ваша задача починить их!

Самый простой способ - редактировать файл `test/basics.test.js` снова запускать тесты `npm test`.

Тесты выглядять как набор функций `describe` и `it`. 

```
 describe('Numbers', function () {
        it('should be able define variables and add them', function () {
            // именно тут и выполняться тест

            // assert это билиотека которая помогает срванить ожидаемое значение с тем которое у вас есть на самом деле. 
            // ваша задача сделать так, чтобы переменные в левой части производили значение равное правой. 
            assert.equal(x + y, 2);
        });
```

Следуйте подсказкам и пользуйтесь гуглом! 
Когда вы закончите или у вас возникнут вопросы:

Комитьте изменения и создавайте pull request
```

// показать текущие изменения
git status 


// добавить все измененные файлы
git add . 


git commit -m "Progress DZ 1"

git push origin <название вашей ветки>
```


Успехов!