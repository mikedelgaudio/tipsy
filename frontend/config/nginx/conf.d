server {
    listen   80;
    listen   [::]:80 default ipv6only=on;

    root /usr/share/nginx/html;
    index index.html;

    server_tokens  off;
    server_name _;

    gzip on;
    gzip_disable "msie6";

    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_min_length 0;
    gzip_types text/plain application/javascript text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype;

    location / {
        try_files $uri /index.html;
    }
}