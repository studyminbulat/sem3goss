Обёртывание приложения в контейнеры, автоматизация генерации сертификатов
1. Установили docker и docker-compose на сервере с "белым" IP-адресом
2. Создали файл docker-compose.yml (файл `docker-compose.yml` в этой папке)
3. В этом файле настроили 4 контейнера: 
    * `mysql` - СУБД MySQL, 
    * `phpmyadmin` - Клиент для MySQL,
    * `nginx-proxy` - фронтенд-сервер (распределяет запросы между другими серверами)
    * `letsencrypt-nginx-proxy-companion` - генерация ключей
4. Запустили
5. Через несколько секунд сайт открывается по https (файл `screen.jpg` в этой папке)