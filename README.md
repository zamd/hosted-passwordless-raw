This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm run build`

- Copy index.html from `build` folder in hosted login page. 
- Update script tags to load bundles from dev machine


```html
    <script src="https://zulfiqar4.localhost.run/static/js/2.adb7995b.chunk.js"></script>
    <script src="https://zulfiqar4.localhost.run/static/js/main.b9a71e71.chunk.js"></script>
```


```bash
    serve -s build
    ssh -R 80:localhost:5000 ssh.localhost.run
```

