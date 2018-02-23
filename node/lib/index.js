const app = new (require('koa'))();
const bodyParser = require('koa-bodyparser');
const router = new (require('koa-router'))();

app.use(bodyParser());

router.get('/', ctx => {
    ctx.body = {
        'message': 'Hello World!'
    };
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);