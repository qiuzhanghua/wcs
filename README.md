# Web Components with Svelte and Rollup

## Todo
- [ ] auto generate .d.ts for my-card and my-counter

## Installation
```bash
pnpm install
ncu -n
pnpm install
pnpm build
```

## Running the app
```bash
http-server
```
and visit http://localhost:8080/sample.html

### Publishing to NPM
```bash
npm login
npm publish --access public
```

### Usage
for package.json

```json
{
  "dependencies": {
    "@qiuzhanghua/my-card": "^0.0.4"
  }
}
```
for index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Watch it</title>
	<script type="module" src="node_modules/@qiuzhanghua/my-card/dist/index.es.js"></script>
</head>
<body>
<my-counter></my-counter>
<my-card name="Daniel"></my-card>
	<script>
		// 监听事件
		document.querySelector('my-card').addEventListener('done', () => {
			// Do something
		})
	</script>

</body>
</html>
```

or look at sample.html
