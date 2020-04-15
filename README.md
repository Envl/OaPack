# OaPack

Oh! a package! which includes frequently used React UI Components  
[DEMO](https://gnimoay.com/post/OaPack)  
[npm package](https://www.npmjs.com/package/OaPack)

Enjoy it.

## Components

Card  
Button

```
<Button type='toggle'>BTN</Button>
```

DropDown  
FilterGroup (Multi-filter or Single filter):

```js
<Filtergroup
  single
  initialFilters={[
    {name: 'Yes...', disabled: false},
    {name: 'we', disabled: false},
    'are..', // enabled by default
    {name: 'Filters!', pushed: false},
    'Click MEEE!!!!!!',
  ]}
  onFilterUpdate={evt => console.log(evt)}
/>
```

Carousel (it can contain anything)  
CubeMenu  
Sidebar

## Dev Dependencies

```json
"devDependencies": {
    "@babel/cli": "^7.7.0",
    "@babel/preset-env": "^7.7.1",
    "@babel/preset-react": "^7.7.0",
    "node-sass": "^4.13.0",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-scripts": "3.2.0"
  },
```
