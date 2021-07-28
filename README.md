# 動態產生一維條碼

因為 CentOS 7 的 libstdc 版本過舊，導致 canvas 套件出現問題，所以包在 Docker 內處理動態回傳二維條碼

執行方式

- 用 Docke-compose 執行

1. docker-compose up
2. 打 http://localhost:3000/code/ABC123 會產生 ABC123 的條碼

- 無 Docker-compose

1. sh build.sh 產生 Docker Image
2. sh run.sh 建立 Container
3. 打 http://localhost:3000/code/ABC123 會產生 ABC123 的條碼
